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

        if (himalayas_drawCon_Result.style.display === "" || himalayas_drawCon_Result.style.display === "none") {
            himalayas_drawCon_Result.style.display = "block";
            himalayas_drawCon.style.display = "none";
        } else if (himalayas_drawCon_Result.style.display === "block") {
            himalayas_drawCon_Result.style.display = "none";
        }
    }

    return (
        <main>
            <div className="simulationCon">
                <div className="instructionCon">
                    <h1>Instructions</h1>
                    <hr />
                    <div className="himalayas_drawCon">
                        <h2>Topic 1: Himalayan Ranges</h2>
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
                        <h2>Topic 1: Himalayan Ranges</h2>
                        <span className='activityHeader'>Activity 1: Coloring</span>
                        <p>Corrections and result of the drawn region</p>
                        <button onClick={submitAns} className='submitBtn'>Submit</button>
                    </div>
                </div>

                <div className="mainCon">
                    <Main />
                </div>
            </div>
        </main>
    );
}
