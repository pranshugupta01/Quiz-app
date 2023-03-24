import "./App.css";
import StartPage from "./Components/StartPage.jsx";
import QuizPage from "./Components/QuizPage.jsx";
import ResultPage from "./Components/ResultPage.jsx";
import { useState } from "react";
import { PageContext } from "./Components/ContextSetUp.jsx";

function Menti() {
  const [pageState, setPageState] = useState("Start");

  const [score, setScore] = useState(0);

  return (
    <div className="Menti">
      <h1>MentiMeter</h1>
      <PageContext.Provider
        value={{
          setPageState,
          score,
          setScore,
        }}
      >
        {pageState === "Start" && <StartPage />}
        {pageState === "Quiz" && <QuizPage />}
        {pageState === "Result" && <ResultPage />}
      </PageContext.Provider>
    </div>
  );
}

export default Menti;