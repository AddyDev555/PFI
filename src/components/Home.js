import React, { useState } from 'react';
import "./css/Home.css";
import DASmap from './DASmap';
import DADmap from './DADmap';
import HTImap from './HTImap';

export default function Home() {
    const [id, setId] = useState(2);
    const [Instruction_Activity, setInstruction_Activity] = useState(true);

    function toggleInsContainer() {
        const instructionCon = document.querySelector(".instructionCon");
        const leftArrow = document.querySelector(".leftArrow");
        const rightArrow = document.querySelector(".rightArrow");
    
        instructionCon.classList.toggle("collapsed");
    
        const isCollapsed = instructionCon.classList.contains("collapsed");
    
        leftArrow.style.display = isCollapsed ? "none" : "block";
        rightArrow.style.display = isCollapsed ? "block" : "none";
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

                    {id === 1 && (
                        <>
                            <div className="himalayas_drawCon">
                                <h2>Himalayan Ranges</h2>
                                <span className='activityHeader'>Activity 1: Coloring</span>
                                <p>Paint the Himalayan Mountain Ranges. To start painting, select the pencil icon and drag the mouse on the appropriate regions.</p>
                                <p className="subTit">If the coloring is done, submit your answer.</p>
                                <button className='submitBtn'>Submit</button>
                            </div>

                            <div className="himalayas_drawCon_Result">
                                <h2>Himalayan Ranges</h2>
                                <span className='activityHeader'>Activity 1: Coloring</span>
                                <p>Corrections and result of the drawn region</p>
                                <button className='submitBtn'>Next</button>
                            </div>
                        </>
                    )}

                    {id === 2 && (
                        <>
                            <div className="himalayasDragAndDropCon">
                                <span className='activityHeader'>Activity 2: Drag and Drop</span>

                                {Instruction_Activity && (
                                    <p className="instructions">
                                        Drag the names of the Himalayan ranges to their correct locations on the map.
                                        The Himalayas are divided into three major ranges: the Great Himalayas, the Lesser Himalayas, and the Shivalik Hills.
                                        Carefully place each range in the correct position to test your knowledge of their geography.
                                        Once you've arranged them, click the "Submit" button to check your answers!
                                    </p>
                                )}

                                <div className="buttonContainer">
                                    <button className='submitBtn'>Submit</button>
                                </div>
                            </div>
                        </>
                    )}
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
