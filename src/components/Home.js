import React, { useState } from 'react';
import "./css/Home.css";
import Main from './Main';

export default function Home() {
    const [color, setColor] = useState("");

    function handleColorClick(paintColor) {
        setColor(paintColor);
    }

    console.log("Selected Color:", color);

    function submitAns() {
        let himalayas_drawCon = document.querySelector(".himalayas_drawCon");
        let himalayas_drawCon_Result = document.querySelector(".himalayas_drawCon_Result");
        let himalayasDragAndDropCon = document.querySelector(".himalayasDragAndDropCon");
        let himalayasDADResult = document.querySelector(".himalayasDADResult"); 

        if (himalayas_drawCon_Result.style.display === "" || himalayas_drawCon_Result.style.display === "none") {
            himalayas_drawCon_Result.style.display = "block";
            himalayas_drawCon.style.display = "none";
        } else if (himalayas_drawCon_Result.style.display === "block") {
            himalayas_drawCon_Result.style.display = "none";
            himalayasDragAndDropCon.style.display = "block";
        }
        else if(himalayasDragAndDropCon.style.display === "block"){
            himalayasDragAndDropCon.style.display = "none";
            himalayasDADResult.style.display = "block";
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
                    <Main />
                </div>
            </div>
        </main>
    );
}
