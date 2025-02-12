import React, { useState } from 'react';
import "./css/Home.css";
import DASmap from './DASmap';
import DADmap from './DADmap';
import HTImap from './HTImap';

export default function Home() {

    const id = 1;

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
                <i onClick={toggleInsContainer} className="fi fi-rr-angle-small-right rightArrow"></i>
                <div className="instructionCon">
                    <div className="insHeader">
                        <h1>Instructions</h1>
                        <i onClick={toggleInsContainer} className="fi fi-rr-angle-small-left leftArrow"></i>
                    </div>
                    <hr />
                    <div className="himalayas_drawCon">
                        <h2>Himalayan Ranges</h2>
                        <span className='activityHeader'>Activity 1: Coloring</span>
                        <p>Paint the Himalayan Mountain Ranges. To start painting select the pencil icon and drag the mouse on the appropriate regions.</p>

                        <p className="subTit">If the coloring is done, submit your answer.</p>
                        <button /*onClick={}*/  className='submitBtn'>Submit</button>
                    </div>

                    <div className="himalayas_drawCon_Result">
                        <h2>Himalayan Ranges</h2>
                        <span className='activityHeader'>Activity 1: Coloring</span>
                        <p>Corrections and result of the drawn region</p>
                        <button /*onClick={}*/  className='submitBtn'>Next</button>
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

                        <button /*onClick={}*/ className='submitBtn'>Submit</button>
                    </div>

                    <div className="himalayasDADResult">
                        <h2>Himalayan Ranges</h2>
                        <span className='activityHeader'>Activity 2: Drag and Drop</span>
                        <p>Corrections and result of the drawn region</p>
                        <h2>Score: </h2>
                    </div>
                </div>

                <div className="mainCon">
                    {id === 1 && <DASmap />}
                    {id === 2 && <DADmap />}
                    {id === 3 && <HTImap />}
                </div>
            </div>
        </main>
    );
}
