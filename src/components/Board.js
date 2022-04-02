import React, { useState } from "react";
import { boardDefault } from "../Words";
import Letter from "./Letter";

function Board() {
  const [board, setBoard] = useState(boardDefault);
  return (
    <div className="board">
      {""}
      <div className="row">
        <Letter letterPos={} attemptVal={}/>
        <Letter letterPos={} attemptVal={}/>
        <Letter letterPos={} attemptVal={}/>
        <Letter letterPos={} attemptVal={}/>
        <Letter letterPos={} attemptVal={}/>

      </div>
      <div className="row"></div>
      <div className="row"></div>
      <div className="row"></div>
      <div className="row"></div>
    </div>
  );
}

export default Board;
