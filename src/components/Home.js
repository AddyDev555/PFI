import React, { useState, useEffect } from 'react';
import "./css/Home.css";
import DASmap from './DASmap';
import DADmap from './DADmap';
import HTImap from './HTImap';

export default function Home() {
    const [id, setId] = useState(1);
    const [matchResult, setMatchResult] = useState(localStorage.getItem("matchResult") || "Waiting...");

    function toggleInsContainer() {
        const instructionCon = document.querySelector(".instructionCon");
        const leftArrow = document.querySelector(".leftArrow");
        const rightArrow = document.querySelector(".rightArrow");
    
        instructionCon.classList.toggle("collapsed");
    
        const isCollapsed = instructionCon.classList.contains("collapsed");
    
        leftArrow.style.display = isCollapsed ? "none" : "block";
        rightArrow.style.display = isCollapsed ? "block" : "none";
    }    

    useEffect(() => {
        const checkStorage = setInterval(() => {
            let ratio = localStorage.getItem("matchResult");
            let medal = document.getElementById("medal");
            let medalName = document.getElementById("medalName");
            let medal_con = document.querySelector(".medal_con");
            if(ratio >= 50){
                setMatchResult(`Score: ${ratio}%, Good Job! you are an above Average Student you can perform better!`);
                medal.classList.add("fi-ss-first-medal");
                medal.classList.add("medal1");
                medal_con.style.opacity = 1;
                medalName.textContent = "You Won a Gold Medal";
            }
            else if(ratio <= 50){
                setMatchResult(`Score: ${ratio}%, Not Bad!, Keep trying i know you will get it for sure.`);
                medal.classList.add("fi-ss-second-medal");
                medal.classList.add("medal2");
                medal_con.style.opacity = 1;
                medalName.textContent = "You Won a Silver Medal";
            }
        }, 1000);

        return () => clearInterval(checkStorage);
    }, []);

    return (
        <main>
            <div className="simulationCon">
                <i onClick={toggleInsContainer} className="fi fi-rr-angle-small-right rightArrow"></i>
                <div className="instructionCon">

                    <div className="switchButtons">
                        <button onClick={() => setId(1)} className={id === 1 ? "active" : ""}>Activity 1</button>
                        <button onClick={() => setId(2)} className={id === 2 ? "active" : ""}>Activity 2</button>
                        <button onClick={() => setId(3)} className={id === 3 ? "active" : ""}>Activity 3</button>
                    </div>

                    <div className="insHeader">
                        <h1>Instructions</h1>
                        <i onClick={toggleInsContainer} className="fi fi-rr-angle-small-left leftArrow"></i>
                    </div>
                    <hr />
                    
                    {id === 1 && (
            
                            <div className="himalayas_drawCon">

                                <h2>Himalayan Ranges</h2>
                                <span className='activityHeader'>Activity 1: Coloring</span>
                                <p>Paint the Himalayan Mountain Ranges, Plateau and Costal Regions of India. To start painting, select the pencil icon and drag the mouse on the appropriate regions.</p>
                                <p className="subTit">If the coloring is done, submit your answer by clicking the Compare icon.</p>
                                <h2>Result will be displayed below</h2>
                                <p className="subTit">{matchResult}</p>
                                <div className="medal_con">
                                    <i id="medal" class="fi"></i>
                                </div>
                                <h2 id="medalName"></h2>
                            </div>
                    )}

                    {id === 2 && (
                    
                            <div className="himalayasDragAndDropCon">

                                <span className='activityHeader'>Activity 2: Drag and Drop</span>
                                <p className="instructions">
                                    Drag the names of the Himalayan ranges to their correct locations on the map.
                                    The Himalayas are divided into three major ranges: the Great Himalayas, the Lesser Himalayas, and the Shivalik Hills.
                                    Carefully place each range in the correct position to test your knowledge of their geography.
                                    Once you've arranged them, click the "Submit" button to check your answers!
                                </p>
                            </div>
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
