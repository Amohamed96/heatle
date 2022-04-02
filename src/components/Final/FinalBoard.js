import React, { useContext, useState } from "react";
import { AppContext } from "../../App";
import LetterFinal from "./LetterFinal";

function FinalBoard() {
  return (
    <div className="boardFinal">
      {" "}
      <div className="row">
        <LetterFinal letterPos={0} attemptVal={0} />
        <LetterFinal letterPos={1} attemptVal={0} />
        <LetterFinal letterPos={2} attemptVal={0} />
        <LetterFinal letterPos={3} attemptVal={0} />
        <LetterFinal letterPos={4} attemptVal={0} />
      </div>
      {/* <div className="row">
        <LetterFinal letterPos={0} attemptVal={1} />
        <LetterFinal letterPos={1} attemptVal={1} />
        <LetterFinal letterPos={2} attemptVal={1} />
        <LetterFinal letterPos={3} attemptVal={1} />
        <LetterFinal letterPos={4} attemptVal={1} />
      </div>
      <div className="row">
        <LetterFinal letterPos={0} attemptVal={2} />
        <LetterFinal letterPos={1} attemptVal={2} />
        <LetterFinal letterPos={2} attemptVal={2} />
        <LetterFinal letterPos={3} attemptVal={2} />
        <LetterFinal letterPos={4} attemptVal={2} />
      </div> */}
    </div>
  );
}

export default FinalBoard;
