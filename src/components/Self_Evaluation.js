import React, { useState } from "react";
import "./css/Self_Evaluation.css";

const questions = [
  {
    question: "What is Height of Mt. Everest in Metres?",
    options: ["8126", "8848", "8155", "8845"],
    answer: "8848",
  },
  {
    question: "The folds of the Great Himalayas are ______ in nature?",
    options: ["asymmetrical", "symmetrical", "blocky", "snowy"],
    answer: "asymmetrical",
  },
  {
    question: "The outer-most range of the Himalayas is called the ______?",
    options: ["Shiwaliks", "Zaskar", "Ladakh", "Hindu Kush"],
    answer: "Shiwaliks",
  },
];

export default function Self_Evaluation() {
  const [userAnswers, setUserAnswers] = useState({});
  const [score, setScore] = useState(null);

  const handleOptionChange = (questionIndex, selectedOption) => {
    setUserAnswers({ ...userAnswers, [questionIndex]: selectedOption });
  };

  const handleSubmit = () => {
    let newScore = 0;
    questions.forEach((q, index) => {
      if (userAnswers[index] === q.answer) {
        newScore++;
      }
    });
    setScore(newScore);
  };

  return (
    <div className="divContent">
      
      <h2>Self Evaluation</h2>

      {questions.map((q, index) => (

        <div key={index} className="question-block">

          <p>{q.question}</p>

          {q.options.map((option, i) => (

            <label key={i} className="option-label">

              <input
                type="radio"
                name={`question-${index}`}
                value={option}
                checked={userAnswers[index] === option}
                onChange={() => handleOptionChange(index, option)}
              />

              {option}

            </label>
          ))}
        </div>
      ))}

      <button className="submit-button" onClick={handleSubmit}>Submit</button>

      {score !== null && <p className="score">Your score: {score} / {questions.length}</p>}

    </div>
  );
}