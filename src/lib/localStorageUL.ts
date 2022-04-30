const gameStateULKey = 'gameStateUL'
const highContrastKey = 'highContrast'

type StoredGameStateUL = {
  guesses: string[]
  solutionUL: string

}

export const saveGameStateToLocalStorageUL = (gameStateUL: StoredGameStateUL) => {
  localStorage.setItem(gameStateULKey, JSON.stringify(gameStateUL))
}

export const loadGameStateFromLocalStorageUL = () => {
  const state = localStorage.getItem(gameStateULKey)
  return state ? (JSON.parse(state) as StoredGameStateUL) : null
}

const gameStatKey = 'gameStats'

export type GameStats = {
  winDistribution: number[]
  gamesFailed: number
  currentStreak: number
  bestStreak: number
  totalGames: number
  successRate: number
}

export const saveStatsToLocalStorage = (gameStats: GameStats) => {
  localStorage.setItem(gameStatKey, JSON.stringify(gameStats))
}

export const loadStatsFromLocalStorageUL = () => {
  const stats = localStorage.getItem(gameStatKey)
  return stats ? (JSON.parse(stats) as GameStats) : null
}

export const setStoredIsHighContrastMode = (isHighContrast: boolean) => {
  if (isHighContrast) {
    localStorage.setItem(highContrastKey, '1')
  } else {
    localStorage.removeItem(highContrastKey)
  }
}

export const getStoredIsHighContrastMode = () => {
  const highContrast = localStorage.getItem(highContrastKey)
  return highContrast === '1'
}
