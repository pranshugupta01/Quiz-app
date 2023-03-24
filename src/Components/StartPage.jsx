import "../App.css";
import { useContext } from "react";
import { PageContext } from "./ContextSetUp.jsx";

function StartPage() {
  const { setPageState } = useContext(PageContext);
  return (
    <div className="Start">
      <h1>Welcome!</h1>
      <h3>Click here to Start the Quiz</h3>
      <button
        onClick={() => {
          setPageState("Quiz");
        }}
      >
        Start
      </button>
    </div>
  );
}

export default StartPage;
