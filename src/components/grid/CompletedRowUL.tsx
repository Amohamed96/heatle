import { getGuessStatusesUL } from '../../lib/statusesUL'
import { CellUL } from './CellUL'
import { unicodeSplit } from '../../lib/words'

type Props = {
  guess: string
  isRevealing?: boolean
}

export const CompletedRowUL = ({ guess, isRevealing }: Props) => {
  const statusesUL = getGuessStatusesUL(guess)
  const splitGuess = unicodeSplit(guess)
  return (
    <div className="flex justify-center mb-1">
      {splitGuess.map((letter, i) => (
        <CellUL
          key={i}
          value={letter}
          status={statusesUL[i]}
          position={i}
          isRevealing={isRevealing}
          isCompleted
        />
      ))}
    </div>
  )
}
