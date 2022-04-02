import React, { useContext, useEffect } from "react";
import { AppContext } from "../App";

const alphabet = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

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
  const veryClose =
    !correct &&
    letter != "" &&
    Math.abs(
      convertLetterToNumber(letter) -
        convertLetterToNumber(correctWord[letterPos])
    ) < 3;

  const closer =
    !correct &&
    letter != "" &&
    Math.abs(
      convertLetterToNumber(letter) -
        convertLetterToNumber(correctWord[letterPos])
    ) < 6 &&
    Math.abs(
      convertLetterToNumber(letter) -
        convertLetterToNumber(correctWord[letterPos])
    ) > 3;

  const far =
    !correct &&
    letter != "" &&
    Math.abs(
      convertLetterToNumber(letter) -
        convertLetterToNumber(correctWord[letterPos])
    ) < 9 &&
    Math.abs(
      convertLetterToNumber(letter) -
        convertLetterToNumber(correctWord[letterPos])
    ) > 6;

  const notClose =
    !correct &&
    letter != "" &&
    Math.abs(
      convertLetterToNumber(letter) -
        convertLetterToNumber(correctWord[letterPos])
    ) < 12 &&
    Math.abs(
      convertLetterToNumber(letter) -
        convertLetterToNumber(correctWord[letterPos])
    ) > 9;

  const veryFar =
    !correct &&
    letter != "" &&
    Math.abs(
      convertLetterToNumber(letter) -
        convertLetterToNumber(correctWord[letterPos])
    ) > 12;

  const letterState =
    currAttempt.attempt > attemptVal &&
    (correct
      ? "correct"
      : veryClose
      ? "veryclose"
      : closer
      ? "close"
      : notClose
      ? "notclose"
      : far
      ? "far"
      : "veryfar");

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
