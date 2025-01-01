import React from 'react'
import 'leaflet/dist/leaflet.css';
import { MapContainer, TileLayer, LayersControl } from 'react-leaflet';
const { BaseLayer } = LayersControl;


export default function Map() {
    const indiaCenter = [20.5937, 78.9629];
    const indiaBounds = [[6.0, 68.0], [40.0, 97.0]];
    
    return (
        <div>
            <MapContainer center={indiaCenter} zoom={4} minZoom={4} maxZoom={10} style={{ height: '85vh', width: '100%' }} attributionControl={false} maxBounds={indiaBounds}>
                <LayersControl position="topright">
                    <BaseLayer checked name="Topographic 2">
                        <TileLayer
                            url="http://services.arcgisonline.com/arcgis/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}"
                        />
                    </BaseLayer>
                </LayersControl>
            </MapContainer>
        </div>
    )
}
