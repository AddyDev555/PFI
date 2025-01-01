import React, { useState } from 'react'
import "./css/Home.css"
import Main from './Main'

export default function Home() {
    const [color, setColor] = useState("");

    return (
        <main>
            <div className="simulationCon">

                <div className="instructionCon">
                    <h1>Instructions</h1>

                    <div className="himalayas_drawCon">
                        <h2>Topic 1: Himalayan Ranges</h2>
                        <p>Paint the Himalayan Mountain Ranges, Select paint and hover the mouse on the appropriate regions.</p>

                        <div className="paintsCon">
                            <h2>Colors</h2>
                            <div className="paints" value={color} onClick={(event)=>setColor(event.target.value)}>
                                <div className="greenColor"></div>
                                <span>Green</span>
                            </div>
                            <div className="paints">
                                <div className="brownColor"></div>
                                <span>Brown</span>
                            </div>
                        </div>
                    </div>
                    Instructions go here!
                </div>
                
                <div className="mainCon">
                    <Main />
                </div>

            </div>
        </main>
    );
}
