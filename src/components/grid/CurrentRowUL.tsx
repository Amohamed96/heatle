import { MAX_WORD_LENGTH } from '../../constants/settings'
import { CellUL } from './CellUL'
import { unicodeSplitUL } from '../../lib/wordsUnlimited'

type Props = {
  guess: string
  className: string
}

export const CurrentRowUL = ({ guess, className }: Props) => {
  const splitGuess = unicodeSplitUL(guess)
  const emptyCells = Array.from(Array(MAX_WORD_LENGTH - splitGuess.length))
  const classes = `flex justify-center mb-1 ${className}`
  return (
    <div className={classes}>
      {splitGuess.map((letter, i) => (
        <CellUL key={i} value={letter} />
      ))}
      {emptyCells.map((_, i) => (
        <CellUL key={i} />
      ))}
    </div>
  )
}
