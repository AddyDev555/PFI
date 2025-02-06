import React, { useState } from 'react';
import "./css/Home.css";
import DAS from './DASmap';
import DADmap from './DADmap';

export default function Home() {
    const [color, setColor] = useState("");
    const [DAD, setDAD] = useState("");

    function handleColorClick(paintColor) {
        setColor(paintColor);
    }

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

    function toggleInsContainer(){
        let leftArrow = document.querySelector(".leftArrow");
        let rightArrow = document.querySelector(".rightArrow");
        let instructionCon = document.querySelector(".instructionCon");

        if(leftArrow.classList.contains("fi-rr-angle-small-left")){
            instructionCon.style.transform = "translateX(-500px)";
            instructionCon.style.transition = "all 0.3s ease-in-out"; 
            rightArrow.style.display = "block";
            leftArrow.classList.remove("fi-rr-angle-small-left");
            rightArrow.classList.add("fi-rr-angle-small-right");
        }
        else if(rightArrow.classList.contains("fi-rr-angle-small-right")){
            instructionCon.style.transform = "translateX(0px)";
            instructionCon.style.transition = "all 0.3s ease-in-out"; 
            rightArrow.style.display = "none";
            rightArrow.classList.remove("fi-rr-angle-small-right");
            leftArrow.classList.add("fi-rr-angle-small-left");
        }
    }

    return (
        <main>
            <div className="simulationCon">
                <i onClick={toggleInsContainer} class="fi fi-rr-angle-small-right rightArrow"></i>
                <div className="instructionCon">
                    <div className="insHeader">
                        <h1>Instructions</h1>
                        <i onClick={toggleInsContainer} class="fi fi-rr-angle-small-left leftArrow"></i>
                    </div>
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
                        <p className="instructions">
                            Drag the names of the Himalayan ranges to their correct locations on the map.
                            The Himalayas are divided into three major ranges: the Great Himalayas, the Lesser Himalayas, and the Shivalik Hills.
                            Carefully place each range in the correct position to test your knowledge of their geography.
                            Once you've arranged them, click the "Submit" button to check your answers!
                        </p>

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
                    <DAS />
                </div>
            </div>
        </main>
    );
}
