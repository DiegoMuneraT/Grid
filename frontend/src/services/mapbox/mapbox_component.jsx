import React, { useEffect, useRef, useState } from 'react';
import { Stations } from "services/mapbox/data/stations";
import mapboxgl from "mapbox-gl";
import axios from 'axios';
import Instructions from './components/Instructions';

const Map = () => {


    // SIN LOS CALLBACKS, MAPA NO SE ACTUALIZA ETC

    // Coordenadas de Medellín
    const lng = -75.56888
    const lat = 6.24281
    const zoom = 13
    
    const [instructions, setInstructions] = useState(null);

    let startPoint = null;
    let endPoint = null;
    let route = null;

    function setStartPoint(point) {
        startPoint = point;
    }

    function setEndPoint(point) {
        endPoint = point;
    }

    function setRoute(newRoute) {
        route = newRoute;
    }

    // Mapa
    const mapRef = useRef(null);
    const access_token = "pk.eyJ1IjoiZGllZ29tdW5lcmE3IiwiYSI6ImNsbWw3bWxrbzA4cGkycnBxYXNpMHpuZ3gifQ.0xmZY7JTLBK2q5QhDGmCVA";

    // Manejo del click en el mapa
    const handleMapClick = (event) => {
        const coords = Object.keys(event.lngLat).map((key) => event.lngLat[key]);

        const newPoint = {
            coords,
        };

        // Si no hay un punto de inicio, lo seteamos y agregamos el marcador al mapa
        if (!startPoint) {
            setStartPoint(newPoint);
            addMarkerToMap('start', newPoint.coords);
        // Si no hay un punto de fin, lo seteamos y agregamos el marcador al mapa
        } else if (!endPoint){
            setEndPoint(newPoint);
            addMarkerToMap('end', newPoint.coords);
            getRoute();
        }
    };

    const addMarkerToMap = (markerId, coords) => {

        const point = getPointFeatureCollection(coords);
        
        if(mapRef.current.getLayer(markerId)) {
            mapRef.current.getSource(markerId).setData(point);
        } else {
            mapRef.current.addLayer({
                id: markerId,
                type: "circle",
                source: {
                    type: "geojson",
                    data: {
                        type: "FeatureCollection",
                        features: [
                            {
                                type: "Feature",
                                properties: {},
                                geometry: {
                                    type: "Point",
                                    coordinates: coords,
                                },
                            },
                        ],
                    },
                },
                paint: {
                    'circle-radius': 7,
                    'circle-color': markerId === 'start' ? '#0f0' : '#f30',
                },
            });
        }
    };

    const getPointFeatureCollection = (coords) => {
        return {
            type: "FeatureCollection",
            features: [
                {
                    type: "Feature",
                    properties: {},
                    geometry: {
                        type: "Point",
                        coordinates: coords,
                    },
                },
            ],
        }
    }

    // Hace el llamado a la API y obtiene la ruta
    const getRoute = async () => {
        try {

            if (startPoint && endPoint) {

                // Aqui se pueden agregar mas parametros para obtener mas informacion
                const response = await axios.get(
                    `https://api.mapbox.com/directions/v5/mapbox/driving/${startPoint.coords[0]},${startPoint.coords[1]};${endPoint.coords[0]},${endPoint.coords[1]}?steps=true&geometries=geojson&engine=electric&access_token=${access_token}`
                );
                // Obtenemos la ruta
                const json = response.data;
                const data = json.routes[0];
                const route = data.geometry.coordinates;

                // Obtenemos las instrucciones de la ruta
                const steps = data.legs[0].steps.map((step) => step.maneuver.instruction);
                const durationInMinutes = Math.floor(data.duration / 60);
                
                // Seteamos las instrucciones
                setInstructions({duration: durationInMinutes, steps})

                console.log({...instructions})

                // Seteamos y renderizamos la ruta
                setRoute(route);
                renderRoute();
                
            } else {
                console.error(
                    "No se puede obtener la ruta, startpoint o endpoint nulos"
                );
            }
        } catch (error) {
            console.error("Error fetching route: ", error);
        }
    };

    // Renderiza la ruta
    const renderRoute = () => {

        if (route === null) {
            console.error("No hay ruta")
        } else {
            const geojson = {
                type: "Feature",
                properties: {},
                geometry: {
                    type: "LineString",
                    coordinates: route,
                },
            };
            
            // si la ruta existe en el mapa, la reseteamos
            if (mapRef.current.getSource('route')) {
                mapRef.current.getSource('route').setData(geojson);
            
            } else {
                // de lo contrario, creamos una nueva ruta
                mapRef.current.addLayer({
                    id: "route",
                    type: "line",
                    source: {
                        type: "geojson",
                        data: geojson,
                    },
                    layout: {
                        "line-join": "round",
                        "line-cap": "round",
                    },
                    paint: {
                        "line-color": "#3887be",
                        "line-width": 5,
                        "line-opacity": 0.75,
                    },
                });
            }
        }
    }

    // Crea el mapa
    useEffect(() => {

        mapboxgl.accessToken = access_token;

        const map = new mapboxgl.Map({
            container: 'map',
            style: 'mapbox://styles/diegomunera7/clml7xe4b04g301qx0jrfc2i8',
            center: [lng, lat],
            zoom: zoom,
            pitch: 45,  // Configura el ángulo de inclinación a 45 grados (ajusta según tus preferencias)
            bearing: -17.6,
        });

        
        const handleMapLoad = () => {

            mapRef.current = map;

            // Posicion de los controles de navegación
            const navigationControl = new mapboxgl.NavigationControl({
                showCompass: true, // Oculta la brújula
                position: 'top-left', // Posiciones (top-right, top-left, bottom-right, bottom-left)
            });
            
            // Agrega los controles de navegación al mapa
            map.addControl(navigationControl);

            // Carga los marcadores de las estaciones
            map.addSource("stations", {
                type: "geojson",
                data: Stations,
            });

            // Agrega la capa de los marcadores
            map.addLayer({
                id: 'stations',
                type: 'symbol', // charging-stations
                source: 'stations',
                layout: {
                    'icon-image': 'charging-station',
                    'icon-size': 1,
                    'text-field': ['get', 'name'],
                    'text-font': ['DIN Pro Medium'],
                    'text-size': 12,
                    'text-offset': [0, 1],
                    'text-anchor': 'top',
                },
                paint: {
                    'text-color': '#bdc9db',
                },
            });

            // Agrega los popups a las estaciones
            const popup = new mapboxgl.Popup({
                closeButton: false,
                closeOnClick: false,
            });

            // Agrega el cursor de la mano al pasar por encima de las estaciones
            map.on('mouseenter', 'stations', (e) => {
                map.getCanvas().style.cursor = 'pointer';

                const coordinates = e.features[0].geometry.coordinates.slice();
                const description = e.features[0].properties.connectors;

                while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
                    coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
                }

                popup.setLngLat(coordinates).setHTML("Conectores disponibles: " + description).addTo(map);

            });

            // Remueve el cursor de la mano al salir de las estaciones
            map.on('mouseleave', 'stations', () => {
                map.getCanvas().style.cursor = '';
                popup.remove();
            });

            map.on('click', handleMapClick);
           
        };

        map.on('style.load', handleMapLoad);

        // Si hay un cambio en el mapa, se actualiza
        return () => {
            if(mapRef.current) {
                mapRef.current.remove();
            }
        };

    }, []);

    return (
      <>
        <div
          id="map"
          style={{
            zIndex: "1",
            right: "0",
            width: "95.71%",
            height: "100%",
            position: "absolute",
            overflowY: "hidden",
          }}
        />
        {instructions && (
            <div
                id="instructions"
                style={{
                    position: "absolute",
                    left: "80px", // Ajusta la posición derecha según sea necesario
                    top: "0px", // Ajusta la posición superior según sea necesario
                    maxWidth: "300px", // Ajusta el ancho máximo según sea necesario
                    height: "auto", // Ajusta la altura automáticamente según el contenido
                    backdropFilter: "opacity(1) blur(0px)",
                    opacity: "1",
                    padding: "10px",
                    background: "var(--bs-body-color)",
                    color: "white",
                    zIndex: "2",
                }}
            >
                <Instructions {...instructions}/>
            </div>
        )}
      </>
    );
};

export default Map;