import React from 'react'
import 'leaflet/dist/leaflet.css';
import { MapContainer, TileLayer, LayersControl } from 'react-leaflet';
const { BaseLayer } = LayersControl;


export default function Map() {
    return (
        <div>
            <MapContainer center={[31.725103574752296, 77.75242910485976]} zoom={5} style={{ height: '85vh', width: '100%' }} attributionControl={false}>
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
