import React, { useContext, useEffect } from "react";
import { AppContext } from "../../App";
import { finalBoard } from "../../Words";

function LetterFinal({ letterPos, attemptVal }) {
  const { boardFinal, setDisabledLetters, currAttempt, correctWord } =
    useContext(AppContext);
  const letterFinal = finalBoard[attemptVal][letterPos];
  const correct = correctWord.toUpperCase()[letterPos] === letterFinal;
  const almost =
    !correct &&
    letterFinal !== "" &&
    correctWord.toUpperCase().includes(letterFinal);
  const letterState =
    currAttempt.attempt > attemptVal &&
    (correct ? "correct" : almost ? "almost" : "error");

  useEffect(() => {
    if (letterFinal !== "" && !correct && !almost) {
      console.log(letterFinal);
      setDisabledLetters((prev) => [...prev, letterFinal]);
    }
  }, [currAttempt.attempt]);
  return (
    <div className="letter" id={letterState}>
      {letterFinal}
    </div>
  );
}

export default LetterFinal;
