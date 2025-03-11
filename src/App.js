import React from "react";
import { BrowserRouter as Router, Routes, Route, NavLink, Navigate } from "react-router-dom";
import "../src/components/css/App.css";
import Theory from "./components/Theory";
import Procedure from "./components/Procedure";
import Simulation from "./components/Simulation";
import Self_Evaluation from "./components/Self_Evaluation";

function App() {
  return (
    <Router>
      <div className="App">
        <div className="contentView">
          <h2 className="main-title">Physical Features of India</h2>

          <div id="myNavbar">
            <ul className="nav-tabs">
              <li>
                <NavLink to="/theory" className={({ isActive }) => (isActive ? "active" : "")}>
                  <p><img src="/btns/theory.png" alt="Theory" /> Theory</p>
                </NavLink>
              </li>
              <li>
                <NavLink to="/procedure" className={({ isActive }) => (isActive ? "active" : "")}>
                  <p><img src="/btns/procedure.png" alt="Procedure" /> Procedure</p>
                </NavLink>
              </li>
              <li>
                <NavLink to="/animation" className={({ isActive }) => (isActive ? "active" : "")}>
                  <p><img src="/btns/animation.png" alt="Animation" /> Animation</p>
                </NavLink>
              </li>
              <li>
                <NavLink to="/simulation" className={({ isActive }) => (isActive ? "active" : "")}>
                  <p><img src="/btns/simulator.png" alt="Simulator" /> Simulator</p>
                </NavLink>
              </li>
              <li>
                <NavLink to="/self-evaluation" className={({ isActive }) => (isActive ? "active" : "")}>
                  <p><img src="/btns/self_evaluation.png" alt="Self Evaluation" /> Self Evaluation</p>
                </NavLink>
              </li>
              <li>
                <NavLink to="/reference" className={({ isActive }) => (isActive ? "active" : "")}>
                  <p><img src="/btns/reference.png" alt="Reference" /> Reference</p>
                </NavLink>
              </li>
              <li>
                <NavLink to="/feedback" className={({ isActive }) => (isActive ? "active" : "")}>
                  <p><img src="/btns/feedback.png" alt="Feedback" /> Feedback</p>
                </NavLink>
              </li>
            </ul>
          </div>

          <Routes>
  
            <Route path="/" element={<Navigate to="/theory" replace />} />
            
            <Route path="/theory" element={<Theory />} />
            <Route path="/procedure" element={<Procedure />} />
            <Route
              path="/animation"
              element={
                <div className="video-container">
                  <iframe
                    width="80%"
                    height="100%"
                    src="https://www.youtube.com/embed/Y1HOrfks1c4?si=H33yoaC4ez5uORVr"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  ></iframe>
                </div>
              }
            />
            <Route path="/simulation" element={<Simulation />} />
            <Route path="/self-evaluation" element={<Self_Evaluation />} />
            <Route
              path="/reference"
              element={
                <p>
                  <a href="https://ncert.nic.in/textbook.php?iess1=2-6" target="_blank" className="styled-link">
                    • NCERT Class 9 Geography - Physical Features of India
                  </a>
                </p>
              }
            />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
