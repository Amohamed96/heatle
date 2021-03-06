import { solution } from '../lib/words'
import { solutionUL } from '../lib/wordsUnlimited'

export const MAX_WORD_LENGTH = solution.length
export const MAX_WORD_LENGTH_UL = solutionUL.length

export const MAX_CHALLENGES = 6
export const ALERT_TIME_MS = 2000
export const REVEAL_TIME_MS = 350
export const GAME_LOST_INFO_DELAY = (MAX_WORD_LENGTH + 1) * REVEAL_TIME_MS
export const WELCOME_INFO_MODAL_MS = 350
