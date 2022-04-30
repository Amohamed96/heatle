import { CharStatusUL } from '../../lib/statusesUL'
import classnames from 'classnames'
import { REVEAL_TIME_MS } from '../../constants/settings'
import { getStoredIsHighContrastMode } from '../../lib/localStorage'

type Props = {
  value?: string
  status?: CharStatusUL
  isRevealing?: boolean
  isCompleted?: boolean
  position?: number
}

export const CellUL = ({
  value,
  status,
  isRevealing,
  isCompleted,
  position = 0,
}: Props) => {
  const isFilled = value && !isCompleted
  const shouldReveal = isRevealing && isCompleted
  const animationDelay = `${position * REVEAL_TIME_MS}ms`
  const isHighContrast = getStoredIsHighContrastMode()

  const classes = classnames(
    'w-14 h-14 border-solid border-2 flex items-center justify-center mx-0.5 text-4xl font-bold rounded dark:text-white',
    {
      'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-600':
        !status,
      'border-black dark:border-slate-100': value && !status,
      'absent shadowed bg-slate-400 dark:bg-slate-700 text-white border-slate-400 dark:border-slate-700':
        status === 'absent',
      'correct shadowed bg-green-500 text-white border-white-500':
        status === 'correct' && isHighContrast,
      'correct shadowed bg-green-500 text-white border-green-500':
        status === 'correct' && !isHighContrast,
      'here shadowed bg-yellow-500 text-white border-white-500':
      status === 'here' && isHighContrast,
      'here shadowed bg-yellow-500 text-white border-yellow-500':
        status === 'here' && !isHighContrast,
      'close1 shadowed bg-red-900 text-white border-white-500':
        status === 'close1' && isHighContrast,
      'close1 shadowed bg-red-900 text-white border-red-900':
        status === 'close1' && !isHighContrast,
      'close2 shadowed bg-red-600 text-white border-white-500':
        status === 'close2' && isHighContrast,
      'close2 shadowed bg-red-600 text-white border-red-600':
        status === 'close2' && !isHighContrast,
      'close3 shadowed bg-orange-500 text-white border-orange-500':
        status === 'close3' && !isHighContrast,
      'close3 shadowed bg-orange-500 text-white border-white-500':
      status === 'close3' && isHighContrast,
      'close4 shadowed bg-yellow-500 text-white border-white-500':
        status === 'close4' && isHighContrast,
      'close4 shadowed bg-yellow-500 text-white border-yellow-500':
        status === 'close4' && !isHighContrast,
      'far1 shadowed bg-blue-500 text-white border-white-500':
        status === 'far1' && isHighContrast,
      'far1 shadowed bg-blue-500 text-white border-blue-500':
        status === 'far1' && !isHighContrast,
      'far2 shadowed bg-cyan-300 text-white border-white-500':
        status === 'far2' && isHighContrast,
      'far2 shadowed bg-cyan-300 text-white border-cyan-500':
        status === 'far2' && !isHighContrast,
      'cell-fill-animation': isFilled,
      'cell-reveal': shouldReveal,
    }
  )

  return (
    <div className={classes}>
      <div className="letter-container" >
        {value}
      </div>
    </div>
  )
}
