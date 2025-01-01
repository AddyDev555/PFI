import React, { useEffect, useRef, useState } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import "./css/Main.css"
import imageData from "../assets/imageData.json"; 

export default function Main() {
    const mapRef = useRef(null);
    const [storedData, setStoredData] = useState([]);

    const processImageData = async () => {
        const loadImage = (src) => {
          return new Promise((resolve, reject) => {
            const img = new Image();
            img.src = src;
            img.onload = () => resolve(img);
            img.onerror = (err) => reject(err);
          });
        };
    
        const imageToBase64 = (img) => {
          const tempCanvas = document.createElement("canvas");
          const tempCtx = tempCanvas.getContext("2d");
          tempCanvas.width = img.width;
          tempCanvas.height = img.height;
          tempCtx.drawImage(img, 0, 0);
          return tempCanvas.toDataURL();
        };
    
        const newStoredData = []; 
    
        for (const data of imageData) {
          try {
            const img = await loadImage(data.img);
            const base64 = imageToBase64(img);
    
            newStoredData.push({
              base64Image: base64,
              lat: data.lat,
              lng: data.lng,
            });
          } catch (error) {
            console.error("Error processing image:", error);
          }
        }
    
        setStoredData(newStoredData); 
    };

    useEffect(() => {
        processImageData();
        const mapOptions = {
            center: [23.214981, 78.148069], 
            zoom: 4,
            minZoom: 4,
            maxZoom: 8,
            attributionControl: false,
            zoomControl: false,
            dragging: true, 
            inertia: false 
        };

        const map = L.map(mapRef.current, mapOptions);

        L.tileLayer(
            'http://services.arcgisonline.com/arcgis/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}'
        ).addTo(map);

        const overlayCanvas = document.getElementById('overlayCanvas');
        const ctx = overlayCanvas.getContext('2d');

        const resizeCanvas = () => {
            const size = map.getSize();
            overlayCanvas.width = size.x;
            overlayCanvas.height = size.y;
            //drawImages(); 
        };

        // overlayCanvas.addEventListener('pointerdown', function(e) { drawImages('pointerdown', e); });
        // overlayCanvas.addEventListener('pointerup', function(e) { drawImages('pointerup', e); });
        // overlayCanvas.addEventListener('touchmove', function(e) { if (e.touches.length === 1) { drawImages('touchmove', e); } });
        // overlayCanvas.addEventListener('mousedown', function(e) { drawImages('movestart', e);});
        // overlayCanvas.addEventListener('mouseup', function(e) { drawImages('moveend', e); });

        // map.on('resize', resizeCanvas);
        // map.on('drag', function(e) { drawImages('drag', e); });

        resizeCanvas();

        return () => {

            // if (overlayCanvas) {
                
            //     overlayCanvas.removeEventListener('pointerdown', function(e) { drawImages('pointerdown', e); });
            //     overlayCanvas.removeEventListener('pointerup', function(e) { drawImages('pointerup', e); });
            //     overlayCanvas.removeEventListener('touchmove', function(e) { drawImages('touchmove', e); });
            //     overlayCanvas.removeEventListener('mousedown', function(e) { drawImages('movestart', e);});
            //     overlayCanvas.removeEventListener('mouseup', function(e) { drawImages('moveend', e); });        
            // }

            // map.off('resize', resizeCanvas);
            // map.remove();
        };
    }, []);

    return (
        <>
        <canvas id="overlayCanvas" style={{ pointerEvents: 'none' }}></canvas>
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
