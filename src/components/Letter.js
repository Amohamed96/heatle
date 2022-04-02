import React, { useContext, useEffect } from "react";
import { AppContext } from "../App";

let pos = 0;

function convertLetterToNumber(str) {
  str = str.toUpperCase();
  let out = 0,
    len = str.length;
  for (pos = 0; pos < len; pos++) {
    out += (str.charCodeAt(pos) - 64) * Math.pow(26, len - pos - 1);
  }
  return out;
}

function Letter({ letterPos, attemptVal }) {
  const { board, setDisabledLetters, currAttempt, correctWord } =
    useContext(AppContext);
  const letter = board[attemptVal][letterPos];
  const correct = correctWord.toUpperCase()[letterPos] === letter;
  const almost =
    !correct && letter !== "" && correctWord.toUpperCase().includes(letter);

  const close1 =
    !correct &&
    letter != "" &&
    Math.abs(
      convertLetterToNumber(letter) -
        convertLetterToNumber(correctWord[letterPos])
    ) <= 1;

  const close2 =
    !correct &&
    letter != "" &&
    Math.abs(
      convertLetterToNumber(letter) -
        convertLetterToNumber(correctWord[letterPos])
    ) <= 2 &&
    Math.abs(
      convertLetterToNumber(letter) -
        convertLetterToNumber(correctWord[letterPos])
    ) > 1;

  const close3 =
    !correct &&
    letter != "" &&
    Math.abs(
      convertLetterToNumber(letter) -
        convertLetterToNumber(correctWord[letterPos])
    ) <= 3 &&
    Math.abs(
      convertLetterToNumber(letter) -
        convertLetterToNumber(correctWord[letterPos])
    ) > 2;

  const close4 =
    !correct &&
    letter != "" &&
    Math.abs(
      convertLetterToNumber(letter) -
        convertLetterToNumber(correctWord[letterPos])
    ) <= 5 &&
    Math.abs(
      convertLetterToNumber(letter) -
        convertLetterToNumber(correctWord[letterPos])
    ) > 3;

  const far4 =
    !correct &&
    letter != "" &&
    Math.abs(
      convertLetterToNumber(letter) -
        convertLetterToNumber(correctWord[letterPos])
    ) <= 7 &&
    Math.abs(
      convertLetterToNumber(letter) -
        convertLetterToNumber(correctWord[letterPos])
    ) > 5;

  const far3 =
    !correct &&
    letter != "" &&
    Math.abs(
      convertLetterToNumber(letter) -
        convertLetterToNumber(correctWord[letterPos])
    ) <= 9 &&
    Math.abs(
      convertLetterToNumber(letter) -
        convertLetterToNumber(correctWord[letterPos])
    ) > 7;

  const far2 =
    !correct &&
    letter != "" &&
    Math.abs(
      convertLetterToNumber(letter) -
        convertLetterToNumber(correctWord[letterPos])
    ) <= 10 &&
    Math.abs(
      convertLetterToNumber(letter) -
        convertLetterToNumber(correctWord[letterPos])
    ) > 9;

  const far1 =
    !correct &&
    letter != "" &&
    Math.abs(
      convertLetterToNumber(letter) -
        convertLetterToNumber(correctWord[letterPos])
    ) > 11;

  const letterState =
    currAttempt.attempt > attemptVal &&
    (correct
      ? "correct"
      : close1
      ? "close1"
      : close2
      ? "close2"
      : close3
      ? "close3"
      : close4
      ? "close4"
      : far4
      ? "far4"
      : far3
      ? "far3"
      : far2
      ? "far2"
      : "far1");

  /*useEffect(() => {
    if (letter !== "" && !correct && !almost) {
      console.log(letter);
      setDisabledLetters((prev) => [...prev, letter]);
    }
  }, [currAttempt.attempt]);
  */
  return (
    <div className="letter" id={letterState}>
      {letter}
    </div>
  );
}

export default Letter;
