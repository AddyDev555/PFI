import React, { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import "./css/Main.css"

export default function Main() {
    const mapRef = useRef(null);

    useEffect(() => {

        const mapOptions = {
            center: [23.214981, 78.148069], 
            zoom: 4,
            minZoom: 4,
            maxZoom: 8,
            attributionControl: false,
            zoomControl: false,
        };

        const map = L.map(mapRef.current, mapOptions);

        L.tileLayer(
            'http://services.arcgisonline.com/arcgis/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}'
        ).addTo(map);
        
        const overlayCanvas = document.getElementById('overlayCanvas');
        const ctx = overlayCanvas.getContext('2d');


        map.on('resize', function () {
            const size = map.getSize();
            overlayCanvas.width = size.x;
            overlayCanvas.height = size.y;
        });

        map.fire('resize');

        return () => {
            map.remove();
        };
    }, []);

    return (
        <>
        <canvas id="overlayCanvas"></canvas>
        <div id="map"
            ref={mapRef}
            style={{
                height: '85vh',
                width: '100%',
            }}
        ></div>
        </>
    );
}
