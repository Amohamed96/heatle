import { solution, unicodeSplit } from './words'

export type CharStatus = 'absent' | 'here' | 'correct' | 'close1' | 'close2' | 'close3' | 'close4' | 'far1' | 'far2' 

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
export const getStatuses = (
  guesses: string[]
): { [key: string]: CharStatus } => {
  const charObj: { [key: string]: CharStatus } = {}
  const splitSolution = unicodeSplit(solution)

  guesses.forEach((word) => {
    unicodeSplit(word).forEach((letter, i) => {

      if (letter === splitSolution[i]) {
        //make status correct
        return (charObj[letter] = 'correct')
      }

      if (charObj[letter] !== 'correct' || charObj[letter] !== 'far1') {
        //make status close1
        return (charObj[letter] = 'close1')
      }

      if (charObj[letter] !== 'correct' || charObj[letter] !== 'close1') {
        //make status close1
        return (charObj[letter] = 'far1')
      }
    })
  })

  return charObj
}

export const getGuessStatuses = (guess: string): CharStatus[] => {
  const splitSolution = unicodeSplit(solution)
  const splitGuess = unicodeSplit(guess)

  const solutionCharsTaken = splitSolution.map((_) => false)

  const statuses: CharStatus[] = Array.from(Array(guess.length))

  // handle all correct cases first
  splitGuess.forEach((letter, i) => {
    if (letter === splitSolution[i]) {
      statuses[i] = 'correct'
      solutionCharsTaken[i] = true
      return
    }
  })

  // Close: 1 letter

    splitGuess.forEach((letter, i) => {
    if (
    Math.abs(
      convertLetterToNumber(letter) -
        convertLetterToNumber(splitSolution[i])
    ) == 1 && Math.abs(
      convertLetterToNumber(letter) -
        convertLetterToNumber(splitSolution[i])
    ) != 0) {
      statuses[i] = 'close1'
      return
    } 
  })

    // Close: 2 letters

    splitGuess.forEach((letter, i) => {
    if (
    Math.abs(
      convertLetterToNumber(letter) -
        convertLetterToNumber(splitSolution[i])
    ) == 2 && Math.abs(
      convertLetterToNumber(letter) -
        convertLetterToNumber(splitSolution[i])
    ) != 0) {
      statuses[i] = 'close2'
      return
    } 
  })

    // Close: 3 letters

    splitGuess.forEach((letter, i) => {
    if (
    Math.abs(
      convertLetterToNumber(letter) -
        convertLetterToNumber(splitSolution[i])
    ) == 3 && Math.abs(
      convertLetterToNumber(letter) -
        convertLetterToNumber(splitSolution[i])
    ) != 0) {
      statuses[i] = 'close3'
      return
    } 
  })

   // Far: 4 - 5 letters

    splitGuess.forEach((letter, i) => {
    if (
    Math.abs(
      convertLetterToNumber(letter) -
        convertLetterToNumber(splitSolution[i])
    ) <=5 &&    Math.abs(
      convertLetterToNumber(letter) -
        convertLetterToNumber(splitSolution[i])
    ) >=4 && Math.abs(
      convertLetterToNumber(letter) -
        convertLetterToNumber(splitSolution[i])
    ) != 0) {
      statuses[i] = 'close4'
      return
    } 
  })

   // Far: 10 letters

    splitGuess.forEach((letter, i) => {
    if (
    Math.abs(
      convertLetterToNumber(letter) -
        convertLetterToNumber(splitSolution[i])
    ) >= 10 && Math.abs(
      convertLetterToNumber(letter) -
        convertLetterToNumber(splitSolution[i])
    ) != 0) {
      statuses[i] = 'far1'
      return
    } 
  })

     // Far: 6 - 9 letters

    splitGuess.forEach((letter, i) => {
    if (
    Math.abs(
      convertLetterToNumber(letter) -
        convertLetterToNumber(splitSolution[i])
    ) <=9 &&    Math.abs(
      convertLetterToNumber(letter) -
        convertLetterToNumber(splitSolution[i])
    ) > 5 && Math.abs(
      convertLetterToNumber(letter) -
        convertLetterToNumber(splitSolution[i])
    ) != 0) {
      statuses[i] = 'far2'
      return
    } 
  })

  return statuses
}
