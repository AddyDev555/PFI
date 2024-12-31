import React from 'react'
import "./css/Home.css"
import Main from './Main'

export default function Home() {
    return (
        <main>
            <div className="simulationCon">

                <div className="instructionCon">
                    Instructions go here!
                </div>
                
                <div className="mainCon">
                    <Main />
                </div>

            </div>
        </main>
    );
}
