import { MAX_CHALLENGES } from '../../constants/settings'
import { CompletedRowUL } from './CompletedRowUL'
import { CurrentRow } from './CurrentRow'
import { EmptyRow } from './EmptyRow'

type Props = {
  guessesUL: string[]
  currentGuessUL: string
  isRevealingUL?: boolean
  currentRowClassNameUL: string
}

export const GridUL = ({
  guessesUL,
  currentGuessUL,
  isRevealingUL,
  currentRowClassNameUL,
}: Props) => {
  const empties =
    guessesUL.length < MAX_CHALLENGES - 1
      ? Array.from(Array(MAX_CHALLENGES - 1 - guessesUL.length))
      : []

  return (
    <>
      {guessesUL.map((guess, i) => (
        <CompletedRowUL
          key={i}
          guess={guess}
          isRevealing={isRevealingUL && guessesUL.length - 1 === i}
        />
      ))}
      {guessesUL.length < MAX_CHALLENGES && (
        <CurrentRow guess={currentGuessUL} className={currentRowClassNameUL} />
      )}
      {empties.map((_, i) => (
        <EmptyRow key={i} />
      ))}
    </>
  )
}
