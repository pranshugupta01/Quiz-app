import React from "react";
import "../App.css";
import { useContext } from "react";
import { PageContext } from "./ContextSetUp.jsx";
import { Questions } from "./Questions.jsx";

const ResultPage = () => {
  const { score, setScore, setPageState } = useContext(PageContext);

  const restartQuiz = () => {
    setScore(0);
    setPageState("Start");
  };
  return (
    <div className="Result">
      <h1>Your Score Is : :</h1>
      <h1>
        {score} / {Questions.length}
      </h1>
      <button onClick={restartQuiz}>Retry</button>
    </div>
  );
};

export default ResultPage;
