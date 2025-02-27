import React, { useState, useEffect } from 'react';
import "./css/Simulation.css";
import DASmap from './DASmap';
import DADmap from './DADmap';
import HTImap from './HTImap';

export default function Simulation() {
    const [ActiveMap, setActiveMap] = useState(1);
    const [matchResult, setMatchResult] = useState("Waiting...");
    const [prevRatio, setPrevRatio] = useState(null); 

    function toggleInsContainer() {
        const instructionCon = document.querySelector(".instructionCon");
        const leftArrow = document.querySelector(".leftArrow");
        const rightArrow = document.querySelector(".rightArrow");

        if (!instructionCon || !leftArrow || !rightArrow) return;
    
        instructionCon.classList.toggle("collapsed");
    
        const isCollapsed = instructionCon.classList.contains("collapsed");
    
        leftArrow.style.display = isCollapsed ? "none" : "block";
        rightArrow.style.display = isCollapsed ? "block" : "none";
    }    

    useEffect(() => {
        const handleMessage = (event) => {

            if (event.data.payload) return;
            
            let ratio = event.data?.value || 0;
            let medal = document.getElementById("medal");
            let medalName = document.getElementById("medalName");
            let medal_con = document.querySelector(".medal_con");
    
            if (!medal || !medalName || !medal_con) return;
    
            const instructionCon = document.querySelector(".instructionCon");
    
            setPrevRatio((prev) => {
                if (prev === ratio) return prev; 
    
                if (instructionCon && instructionCon.classList.contains("collapsed")) {
                    toggleInsContainer();
                }
    
                if (ratio >= 50) {
                    setMatchResult(`Score: ${ratio}%, Good Job!`);
                    medal.classList.add("fi-ss-first-medal", "medal1");
                    medal_con.style.opacity = 1;
                    medalName.textContent = "You Won a Gold Medal";
                } else {
                    setMatchResult(`Score: ${ratio}%, Keep trying!`);
                    medal.classList.add("fi-ss-second-medal", "medal2");
                    medal_con.style.opacity = 1;
                    medalName.textContent = "You Won a Silver Medal";
                }
    
                return ratio; 
            });

        };
    
        window.addEventListener("message", handleMessage);
    
        return () => {
            window.removeEventListener("message", handleMessage);
        };
    }, [prevRatio]);
    
    useEffect(() => {
        setMatchResult("Waiting...");
    }, [ActiveMap]);

    return (
            <div className="simulationCon">
                <i onClick={toggleInsContainer} className="fi fi-rr-angle-small-right rightArrow"></i>
                <div className="instructionCon">

                    <div className="switchButtons">
                        <button onClick={() => setActiveMap(1)} className={ActiveMap === 1 ? "active" : ""}>Activity 1</button>
                        <button onClick={() => setActiveMap(2)} className={ActiveMap === 2 ? "active" : ""}>Activity 2</button>
                        <button onClick={() => setActiveMap(3)} className={ActiveMap === 3 ? "active" : ""}>Guide</button>
                    </div>

                    <div className="insHeader">
                        <h1>Instructions</h1>
                        <i onClick={toggleInsContainer} className="fi fi-rr-angle-small-left leftArrow"></i>
                    </div>
                    <hr />
                    
                    {ActiveMap === 1 && (
            
                            <div className="himalayas_drawCon">

                                <span className='activityHeader'>Activity 1: Coloring</span>
                                <p className="instructions">Paint the Mountains and Ranges of India. To start painting, select the pencil icon and drag the mouse on the appropriate regions.</p>
                                <p className="subTit">If the coloring is done, submit your answer by clicking the Compare icon.</p>

                                <h2>Result will be displayed below</h2>
                                <p className="subTit">{matchResult}</p>
                                <div className="medal_con">
                                    <i id="medal" className="fi"></i>
                                </div>
                                <h2 id="medalName"></h2>
                            </div>
                    )}

                    {ActiveMap === 2 && (
                    
                            <div className="himalayas_drawCon">

                                <span className='activityHeader'>Activity 2: Drag and Drop</span>
                                <p className="instructions">
                                    Drag the names of the Ranges and Mountains to their correct locations on the map.
                                    Carefully place each range in the correct position to test your knowledge of their geography.
                                </p>

                                <h2>Result will be displayed below</h2>
                                <p className="subTit">{matchResult}</p>
                                <div className="medal_con">
                                    <i id="medal" className="fi"></i>
                                </div>
                                <h2 id="medalName"></h2>
                            </div>
                    )}

                    {ActiveMap === 3 && (
                    
                        <div className="himalayasDragAndDropCon">

                            <span className='activityHeader'>Guide: Hover to Information</span>
                            <p className="instructions">
                                    Hover or Click Mountains and Ranges to get their Geographical Information.
                            </p>
                        </div>
                    )}

                </div>

                <div className="mainCon">
                    {ActiveMap === 1 && <DASmap />}
                    {ActiveMap === 2 && <DADmap />}
                    {ActiveMap === 3 && <HTImap />}
                </div>

            </div>
    );
}
