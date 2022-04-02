import React, { useContext, useEffect } from "react";
import { AppContext } from "../App";
import "./Button.css";

function Button() {
  const {
    board,
    setBoard,
    currAttempt,
    gameOver,
    onSelectLetter,
    correctWord,
    onDelete,
  } = useContext(AppContext);
  const newBoard = [...board];

  return (
    <div>
      <button class="noselect">
        <span class="text">RESET</span>
        <span class="icon">
          <img
            src="https://icon-library.com/images/reset-icon-png/reset-icon-png-2.jpg"
            width="24"
            height="24"
          />
        </span>
      </button>
    </div>
  );
}

export default Button;
