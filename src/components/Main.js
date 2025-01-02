import React, { useEffect, useRef, useState } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import "./css/Main.css"
import imageData from "../assets/imageData.json"; 

export default function Main() {
    const mapRef = useRef(null);
    const [storedData, setStoredData] = useState([]);
    const pointData = []; 
    let isDragging = false;
    let startX = 0;
    let startY = 0;

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
        let index = 0;
    
        for (const data of imageData) {
          try {
            const img = await loadImage(data.img);
            const base64 = imageToBase64(img);
    
            newStoredData.push({
              base64Image: base64,
              lat: data.lat,
              lng: data.lng
            });

            pointData.push({
              id: index,
              x: 0,
              y: 0
            });

            index++;
          } catch (error) {
            console.error("Error processing image:", error);
          }
        }
    
        setStoredData(newStoredData); 
    };

    useEffect(() => {
        processImageData();
    }, []);

    useEffect(() => {

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

        // Temp Zoom Logic 
        const resizeCanvas = () => {
            const size = map.getSize();
            overlayCanvas.width = size.x;
            overlayCanvas.height = size.y;
            drawImages(); 
        };

        const handleMove = (eventName, e) => {
          try {
              if (e && (e.originalEvent?.type || e.type)) {
  
                  const clientX = e.originalEvent?.clientX || e.clientX || e.changedTouches?.[0]?.clientX;
                  const clientY = e.originalEvent?.clientY || e.clientY || e.changedTouches?.[0]?.clientY;
  
                  if (clientX !== undefined && clientY !== undefined) {
  
                      if (eventName === 'movestart' || eventName === 'pointerdown') {
       
                          startX = clientX;
                          startY = clientY;
                          isDragging = true;
  
                      } else if ((eventName === 'drag' || eventName === 'touchmove') && isDragging) {
                          const dragDeltaX = clientX - startX;
                          const dragDeltaY = clientY - startY;
  
                          pointData.forEach((data) => {
                            data.x += dragDeltaX;
                            data.y += dragDeltaY;
                          });

                          startX = clientX;
                          startY = clientY;
                      } else if (eventName === 'pointerup' || eventName === 'touchend') {
                          isDragging = false;
                      }
                      
                      drawImages();
                  } 
              }
          } catch (error) {
              console.error('Logging error:', error);
          }
        }

        // Fixing Required Here: Give no image found error
        const drawImages = () => {

          ctx.clearRect(0, 0, overlayCanvas.width, overlayCanvas.height);
        
          pointData.forEach((data, index) => {
            const imageData = storedData[index];
            if (imageData && imageData.base64Image) {
              const img = new Image();
              img.src = imageData.base64Image;
              img.onload = () => {
                ctx.drawImage(img, data.x, data.y);
              };
              img.onerror = () => {
                console.error(`Failed to load image for pointData index ${index}`);
              };
            } else {
              console.error(`No image data found for index ${index}`);
            }
          });
        };
        
        overlayCanvas.addEventListener('pointerdown', function(e) { handleMove('pointerdown', e); });
        overlayCanvas.addEventListener('pointerup', function(e) { handleMove('pointerup', e); });
        overlayCanvas.addEventListener('touchmove', function(e) { if (e.touches.length === 1) { handleMove('touchmove', e); } });
        overlayCanvas.addEventListener('mousedown', function(e) { handleMove('movestart', e);});
        overlayCanvas.addEventListener('mouseup', function(e) { handleMove('moveend', e); });

        map.on('resize', resizeCanvas);
        map.on('drag', function(e) { handleMove('drag', e); });

        resizeCanvas();

        return () => {

            if (overlayCanvas) {
                
                overlayCanvas.removeEventListener('pointerdown', function(e) { handleMove('pointerdown', e); });
                overlayCanvas.removeEventListener('pointerup', function(e) { handleMove('pointerup', e); });
                overlayCanvas.removeEventListener('touchmove', function(e) { handleMove('touchmove', e); });
                overlayCanvas.removeEventListener('mousedown', function(e) { handleMove('movestart', e);});
                overlayCanvas.removeEventListener('mouseup', function(e) { handleMove('moveend', e); });        
            }

            map.off('resize', resizeCanvas);
            map.remove();
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
