import React, { useState } from "react";
import style from "../css/QuestionCard.module.css";

const QuestionCard = ({ question, answer }) => {
  const [showAnswer, setShowAnswer] = useState(false);
  return (
    <div className={style.container}>
      <div className={style.Pluscard}>
        <h2>{question}</h2>
        {showAnswer ? (
          <button onClick={() => setShowAnswer(!showAnswer)}>-</button>
        ) : (
          <button onClick={() => setShowAnswer(!showAnswer)}>+</button>
        )}
      </div>
      {showAnswer && <h3>{answer}</h3>}
    </div>
  );
};

export default QuestionCard;
