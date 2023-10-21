import React, { useEffect } from 'react';
import { Stations } from "services/mapbox/data/stations";
import mapboxgl from "mapbox-gl";

const Map = () => {
    //const [lng, setLng] = useState(-75.56888);
    //const [lat, setLat] = useState(6.24281);
    //const [zoom, setZoom] = useState(12);
    const lng = -75.56888
    const lat = 6.24281
    const zoom = 12
    

    useEffect(() => {
        mapboxgl.accessToken = "pk.eyJ1IjoiZGllZ29tdW5lcmE3IiwiYSI6ImNsbWw3bWxrbzA4cGkycnBxYXNpMHpuZ3gifQ.0xmZY7JTLBK2q5QhDGmCVA";
        const map = new mapboxgl.Map({
            container: 'map',
            style: 'mapbox://styles/diegomunera7/clml7xe4b04g301qx0jrfc2i8',
            center: [lng, lat],
            zoom: zoom,
        });

        map.on('load', () => {
            map.addSource("stations", {
                type: "geojson",
                data: Stations,
            });

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

            const popup = new mapboxgl.Popup({
                closeButton: false,
                closeOnClick: false,
            });

            map.on('mouseenter', 'stations', (e) => {
                map.getCanvas().style.cursor = 'pointer';

                const coordinates = e.features[0].geometry.coordinates.slice();
                const description = e.features[0].properties.connectors;

                while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
                    coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
                }

                popup.setLngLat(coordinates).setHTML("Conectores disponibles: " + description).addTo(map);

            });

            map.on('mouseleave', 'stations', () => {
                map.getCanvas().style.cursor = '';
                popup.remove();
            });
        });
    }, []);

    return(
        <div id="map" style={{ zIndex: '1', right: '0',  width: '96.24%', height: '100%', position: 'absolute', overflowY: 'hidden' }} />
    );
};

export default Map;