import "../../App.css";
import FinalKeyboard from "./FinalKeyboard";
import FinalBoard from "./FinalBoard";
import { finalBoard, boardDefault, generateWordSet } from "../../Words";
import React, { useState, createContext, useEffect } from "react";
import GameOver from "../../components/GameOver";
export const AppContext = createContext();

function App() {
  const [board, setBoard] = useState(boardDefault);
  const [boardFinal, setBoardFinal] = useState(finalBoard);
  const [currAttemptFinal, setCurrAttemptFinal] = useState({
    attempt: 0,
    letter: 0,
  });
  const [wordSet, setWordSet] = useState(new Set());
  const [correctWordFinal, setCorrectWordFinal] = useState("");
  const [disabledLetters, setDisabledLetters] = useState([]);
  const [gameOver, setGameOver] = useState({
    gameOver: false,
    guessedWord: false,
  });

  useEffect(() => {
    generateWordSet().then((words) => {
      setWordSet(words.wordSet);
      setCorrectWordFinal("WRONG");
    });
  }, []);

  const onEnter = () => {
    //if (currAttemptFinal.letter !== 5) return;

    let currWordFinal = "";
    for (let i = 0; i < 5; i++) {
      currWordFinal += board[currAttemptFinal.attempt][i];
    }
    if (wordSet.has(currWordFinal.toLowerCase())) {
      setCurrAttemptFinal({ attempt: currAttemptFinal.attempt + 1, letter: 0 });
    } else {
      alert("Word not found");
    }

    // if (currWord === correctWord) {
    //   setGameOver({ gameOver: true, guessedWord: true });
    //   return;
    // }
    console.log("final game");
  };

  const onDelete = () => {
    if (currAttemptFinal.letter === 0) return;
    const newBoard = [...boardFinal];
    newBoard[currAttemptFinal.attempt][currAttemptFinal.letter - 1] = "";
    setBoard(newBoard);
    setCurrAttemptFinal({
      ...currAttemptFinal,
      letter: currAttemptFinal.letter - 1,
    });
  };

  const onSelectLetter = (key) => {
    if (currAttemptFinal.letter > 4) return;
    const finalBoard = [...boardFinal];
    finalBoard[currAttemptFinal.attempt][currAttemptFinal.letter] = key;
    setBoard(finalBoard);
    setCurrAttemptFinal({
      attempt: currAttemptFinal.attempt,
      letter: currAttemptFinal.letter + 1,
    });
  };

  return (
    <div className="App">
      <nav>
        <h1>FINAL WORDLE</h1>
      </nav>
      <AppContext.Provider
        value={{
          board,
          setBoard,
          boardFinal,
          setBoardFinal,
          currAttemptFinal,
          setCurrAttemptFinal,
          correctWordFinal,
          onSelectLetter,
          onDelete,
          onEnter,
          setDisabledLetters,
          disabledLetters,
          gameOver,
        }}
      >
        <FinalBoard />
        <div className="game">
          <FinalKeyboard />
        </div>
      </AppContext.Provider>
    </div>
  );
}

export default App;
