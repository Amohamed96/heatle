import React, { useContext } from "react";
import { AppContext } from "../App";

function GameOver() {
  const {
    board,
    setBoard,
    currAttempt,
    gameOver,
    onSelectLetter,
    correctWord,
    onDelete,
  } = useContext(AppContext);
  return (
    <div className="gameOver">
      <h3>
        {gameOver.guessedWord
          ? "YOU CORRECTLY GUESSED THE HEATLE"
          : "YOU FAILED TO GUESS THE HEATLE"}
      </h3>
      <h1>CORRECT WORD: {correctWord}</h1>
      {gameOver.guessedWord && (
        <h3>YOU GUESSED IN {currAttempt.attempt} ATTEMPTS!</h3>
      )}
    </div>
  );
}

export default GameOver;
