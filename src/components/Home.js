import React from 'react'
import "./css/Home.css"
import Map from './Map'

export default function Home() {
    return (
        <main>
            <div className="simulationCon">
                <div className="mapsCon">
                    <Map />
                </div>

                <div className="instructionCon">

                </div>
            </div>
        </main>
    )
}
