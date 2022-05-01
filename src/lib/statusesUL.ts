import React, {useEffect, useState} from 'react';
import { solutionUL, unicodeSplitUL } from './wordsUnlimited'
import { saveGameStateToLocalStorageUL } from './localStorageUL';
export type CharStatusUL = 'absent' | 'here' | 'correct' | 'close1' | 'close2' | 'close3' | 'close4' | 'far1' | 'far2' 

function convertLetterToNumber(str:string) {
  let out = 0,
  len:number,
  pos:number
    len = str.length;
  for (pos = 0; pos < len; pos++) {
    out += (str.charCodeAt(pos) - 64) * Math.pow(26, len - pos - 1);
  }
  return out;
}
export const getStatusesUL = (
  guessesUL: string[]
): { [key: string]: CharStatusUL } => {
  const charObjUL: { [key: string]: CharStatusUL } = {}
  const splitSolutionUL = unicodeSplitUL(solutionUL)

  guessesUL.forEach((wordUL) => {
    unicodeSplitUL(wordUL).forEach((letterUL, i) => {

      if (letterUL === splitSolutionUL[i]) {
        //make status correct
        return (charObjUL[letterUL] = 'correct')
      }

      if (charObjUL[letterUL] !== 'correct' || charObjUL[letterUL] !== 'far1') {
        //make status close1
        return (charObjUL[letterUL] = 'close1')
      }

      if (charObjUL[letterUL] !== 'correct' || charObjUL[letterUL] !== 'close1') {
        //make status close1
        return (charObjUL[letterUL] = 'far1')
      }
    })
  })

  return charObjUL
}

export const getGuessStatusesUL = (guess: string): CharStatusUL[] => {
  const splitSolutionUL = unicodeSplitUL(solutionUL)
  const splitGuessUL = unicodeSplitUL(guess)
  const solutionCharsTakenUL = splitSolutionUL.map((_) => false)

  const statusesUL: CharStatusUL[] = Array.from(Array(guess.length))

  // handle all correct cases first
  splitGuessUL.forEach((letterUL, i) => {
    if (letterUL === splitSolutionUL[i]) {
      statusesUL[i] = 'correct'
      solutionCharsTakenUL[i] = true
      return
    }
  })

  // Close: 1 letter

    splitGuessUL.forEach((letterUL, i) => {
    if (
    Math.abs(
      convertLetterToNumber(letterUL) -
        convertLetterToNumber(splitSolutionUL[i])
    ) == 1 && Math.abs(
      convertLetterToNumber(letterUL) -
        convertLetterToNumber(splitSolutionUL[i])
    ) != 0) {
      statusesUL[i] = 'close1'
      return
    } 
  })

    // Close: 2 letters

    splitGuessUL.forEach((letterUL, i) => {
    if (
    Math.abs(
      convertLetterToNumber(letterUL) -
        convertLetterToNumber(splitSolutionUL[i])
    ) == 2 && Math.abs(
      convertLetterToNumber(letterUL) -
        convertLetterToNumber(splitSolutionUL[i])
    ) != 0) {
      statusesUL[i] = 'close2'
      return
    } 
  })

    // Close: 3 letters

    splitGuessUL.forEach((letterUL, i) => {
    if (
    Math.abs(
      convertLetterToNumber(letterUL) -
        convertLetterToNumber(splitSolutionUL[i])
    ) == 3 && Math.abs(
      convertLetterToNumber(letterUL) -
        convertLetterToNumber(splitSolutionUL[i])
    ) != 0) {
      statusesUL[i] = 'close3'
      return
    } 
  })

   // Far: 4 - 5 letters

    splitGuessUL.forEach((letterUL, i) => {
    if (
    Math.abs(
      convertLetterToNumber(letterUL) -
        convertLetterToNumber(splitSolutionUL[i])
    ) <=5 &&    Math.abs(
      convertLetterToNumber(letterUL) -
        convertLetterToNumber(splitSolutionUL[i])
    ) >=4 && Math.abs(
      convertLetterToNumber(letterUL) -
        convertLetterToNumber(splitSolutionUL[i])
    ) != 0) {
      statusesUL[i] = 'close4'
      return
    } 
  })

   // Far: 10 letters

    splitGuessUL.forEach((letterUL, i) => {
    if (
    Math.abs(
      convertLetterToNumber(letterUL) -
        convertLetterToNumber(splitSolutionUL[i])
    ) >= 10 && Math.abs(
      convertLetterToNumber(letterUL) -
        convertLetterToNumber(splitSolutionUL[i])
    ) != 0) {
      statusesUL[i] = 'far1'
      return
    } 
  })
     // Far: 6 - 9 letters
    splitGuessUL.forEach((letterUL, i) => {
    if (
    Math.abs(
      convertLetterToNumber(letterUL) -
        convertLetterToNumber(splitSolutionUL[i])
    ) <=9 &&    Math.abs(
      convertLetterToNumber(letterUL) -
        convertLetterToNumber(splitSolutionUL[i])
    ) > 5 && Math.abs(
      convertLetterToNumber(letterUL) -
        convertLetterToNumber(splitSolutionUL[i])
    ) != 0) {
      statusesUL[i] = 'far2'
      return
    } 
  })
  
  return statusesUL
}

