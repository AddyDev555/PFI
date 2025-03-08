import React, { useState } from 'react';
import "../src/components/css/App.css";
import Theory from "./components/Theory"
import Procedure from "./components/Procedure"
import Simulation from "./components/Simulation";
import Self_Evaluation from "./components/Self_Evaluation";

function App() {
  const [ActiveTab, setActiveTab] = useState(1);

  const handleTabClick = (tabIndex) => {
    setActiveTab(tabIndex);
  };

  return (
    <div className="App">

      <div className="contentView">
        
        <h2 className="main-title">Physical Features of India</h2>

        <div id="myNavbar">

          <ul className="nav-tabs">

            <li
              className={ActiveTab === 1 ? "active" : ""}
              onClick={() => handleTabClick(1)}
            >
              <p>
                <img src="/btns/theory.png" alt="Theory" /> Theory
              </p>
            </li>

            <li
              className={ActiveTab === 2 ? "active" : ""}
              onClick={() => handleTabClick(2)}
            >
              <p>
                <img src="/btns/procedure.png" alt="Procedure" /> Procedure
              </p>
            </li>

            <li
              className={ActiveTab === 3 ? "active" : ""}
              onClick={() => handleTabClick(3)}
            >
              <p>
                <img src="/btns/animation.png" alt="Animation" /> Animation
              </p>
            </li>

            <li
              className={ActiveTab === 4 ? "active" : ""}
              onClick={() => handleTabClick(4)}
            >
              <p>
                <img src="/btns/simulator.png" alt="Simulator" /> Simulator
              </p>
            </li>

            <li
              className={ActiveTab === 5 ? "active" : ""}
              onClick={() => handleTabClick(5)}
            >
              <p>
                <img src="/btns/self_evaluation.png" alt="Self Evaluation" />{" "}
                Self Evaluation
              </p>
            </li>

            <li
              className={ActiveTab === 6 ? "active" : ""}
              onClick={() => handleTabClick(6)}
            >
              <p>
                <img src="/btns/reference.png" alt="Reference" /> Reference
              </p>
            </li>

            <li
              className={ActiveTab === 7 ? "active" : ""}
              onClick={() => handleTabClick(7)}
            >
              <p>
                <img src="/btns/feedback.png" alt="Feedback" /> Feedback
              </p>
            </li>

          </ul>

        </div>

        {ActiveTab === 1 && <Theory />}

        {ActiveTab === 2 && <Procedure />}

        {ActiveTab === 3 && 
          <div className="video-container">
            <iframe width="80%" height="100%" src="https://www.youtube.com/embed/Y1HOrfks1c4?si=H33yoaC4ez5uORVr" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          </div>
        }

        {ActiveTab === 4 && <Simulation />}

        {ActiveTab === 5 && <Self_Evaluation />}

        {ActiveTab === 6 && 
          <p>
            <a href="https://ncert.nic.in/textbook.php?iess1=2-6" target="_blank" class="styled-link">
              • NCERT Class 9 Geography - Physical Features of India
            </a>
          </p>
        }

      </div>

    </div>
  );
}

export default App;
