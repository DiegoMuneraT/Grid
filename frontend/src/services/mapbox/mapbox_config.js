import mapboxgl from 'mapbox-gl'; 

mapboxgl.accessToken = 'pk.eyJ1IjoiZGllZ29tdW5lcmE3IiwiYSI6ImNsbWw3bWxrbzA4cGkycnBxYXNpMHpuZ3gifQ.0xmZY7JTLBK2q5QhDGmCVA';
const map = new mapboxgl.Map({
    container: 'map', // container ID
    style: 'mapbox://styles/mapbox/streets-v12', // style URL
    center: [-74.5, 40], // starting position [lng, lat]
    zoom: 9, // starting zoom
});
