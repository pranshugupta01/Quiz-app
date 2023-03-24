import "../App.css";
import { Questions } from "./Questions.jsx";
import { useState } from "react";

import { useContext } from "react";
import { PageContext } from "./ContextSetUp.jsx";

function QuizPage() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [Chosen, setChosen] = useState("");

  const { score, setScore, setPageState } = useContext(PageContext);

  const chooseOption = (option) => {
    setChosen(option);
  };

  const nextQuestion = () => {
   (Questions[currentQuestion].answer == Chosen) &&  setScore(score + 1);
     
   setCurrentQuestion(currentQuestion + 1);
  };
  // let countQuestion = () => {};

  const finishQuiz = () => {
    (Questions[currentQuestion].answer == Chosen) && setScore(score + 1);
      
    setPageState("Result");
  };

  return (
    <div className="Quiz">
      <h1>{Questions[currentQuestion].ques}</h1>
      <div className="questions">
        <button
          onClick={() => {
            chooseOption("A");
          }}
        >
          {Questions[currentQuestion].A}
        </button>
        <button
          onClick={() => {
            chooseOption("B");
          }}
        >
          {Questions[currentQuestion].B}
        </button>
        <button
          onClick={() => {
            chooseOption("C");
          }}
        >
          {Questions[currentQuestion].C}
        </button>

        <button
          onClick={() => {
            chooseOption("D");
          }}
        >
          {Questions[currentQuestion].D}
        </button>
      </div>

      {currentQuestion == Questions.length - 1 ? (
        <button onClick={finishQuiz} id="Result">
          Result
        </button>
      ) : (
        <button onClick={nextQuestion} id="nextQuestion">
          Next
        </button>
      )}
    </div>
  );
}

export default QuizPage;
