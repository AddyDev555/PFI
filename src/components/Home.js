import React, { useState } from 'react';
import "./css/Home.css";
import Main from './Main';
import DADmap from './DADmap';

export default function Home() {
    const [color, setColor] = useState("");
    const [DAD, setDAD] = useState("");

    function handleColorClick(paintColor) {
        setColor(paintColor);
    }

    console.log("Selected Color:", color);

    function submitAns() {
        const containers = {
            draw: document.querySelector(".himalayas_drawCon"),
            drawResult: document.querySelector(".himalayas_drawCon_Result"),
            dragAndDrop: document.querySelector(".himalayasDragAndDropCon"),
            dadResult: document.querySelector(".himalayasDADResult")
        };
    
        if (!Object.values(containers).every(container => container)) {
            console.error("One or more containers not found");
            return;
        }
    
        if (containers.drawResult.style.display === "" || 
            containers.drawResult.style.display === "none") {
            containers.draw.style.display = "none";
            containers.drawResult.style.display = "block";
    
        } else if (containers.drawResult.style.display === "block") {
            containers.drawResult.style.display = "none";
            containers.dragAndDrop.style.display = "block";
            setDAD("DAD");
    
        } else if (containers.dragAndDrop.style.display === "block") {
            containers.dragAndDrop.style.display = "none";
            containers.dadResult.style.display = "block";
        }
    }

    return (
        <main>
            <div className="simulationCon">
                <div className="instructionCon">
                    <h1>Instructions</h1>
                    <hr />
                    <div className="himalayas_drawCon">
                        <h2>Himalayan Ranges</h2>
                        <span className='activityHeader'>Activity 1: Coloring</span>
                        <p>Paint the Himalayan Mountain Ranges. Select any paint and drag the mouse on the appropriate regions.</p>

                        <div className="paintsCon">
                            <h2>Colors</h2>
                            <div
                                className="paints"
                                onClick={() => handleColorClick("green")}
                            >
                                <div className="greenColor"></div>
                                <span>Green</span>
                            </div>
                            <div
                                className="paints"
                                onClick={() => handleColorClick("brown")}
                            >
                                <div className="brownColor"></div>
                                <span>Brown</span>
                            </div>
                        </div>

                        <p className="subTit">If the coloring is done, submit your answer.</p>
                        <button onClick={submitAns} className='submitBtn'>Submit</button>
                    </div>

                    <div className="himalayas_drawCon_Result">
                        <h2>Himalayan Ranges</h2>
                        <span className='activityHeader'>Activity 1: Coloring</span>
                        <p>Corrections and result of the drawn region</p>
                        <button onClick={submitAns} className='submitBtn'>Next</button>
                    </div>

                    <div className="himalayasDragAndDropCon">
                        <h2>Himalayan Ranges</h2>
                        <span className='activityHeader'>Activity 2: Drag and Drop</span>
                        <ul>
                            <li><i class="fi fi-bs-mountain mount"></i>Range1</li>
                            <li><i class="fi fi-bs-mountain mount"></i>Range2</li>
                            <li><i class="fi fi-bs-mountain mount"></i>Range3</li>
                            <li><i class="fi fi-bs-mountain mount"></i>Range4</li>
                            <li><i class="fi fi-bs-mountain mount"></i>Range5</li>
                            <li><i class="fi fi-bs-mountain mount"></i>Range6</li>
                        </ul>
                        <button onClick={submitAns} className='submitBtn'>Submit</button>
                    </div>

                    <div className="himalayasDADResult">
                        <h2>Himalayan Ranges</h2>
                        <span className='activityHeader'>Activity 2: Drag and Drop</span>
                        <p>Corrections and result of the drawn region</p>
                        <h2>Score: </h2>
                    </div>
                </div>

                <div className="mainCon">
                    {DAD === "DAD" && <DADmap />}
                    <Main />
                </div>
            </div>
        </main>
    );
}
