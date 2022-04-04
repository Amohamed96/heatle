import { getGuessStatuses } from './statuses'
import { solutionIndex, unicodeSplit } from './words'
import { GAME_TITLE } from '../constants/strings'
import { MAX_CHALLENGES } from '../constants/settings'
import { UAParser } from 'ua-parser-js'

const webShareApiDeviceTypes: string[] = ['mobile', 'smarttv', 'wearable']
const parser = new UAParser()
const browser = parser.getBrowser()
const device = parser.getDevice()

export const shareStatus = (
  guesses: string[],
  lost: boolean,
  isHardMode: boolean,
  isDarkMode: boolean,
  isHighContrastMode: boolean,
  handleShareToClipboard: () => void
) => {
  const textToShare =
    `${GAME_TITLE} ${solutionIndex} ${
      lost ? 'X' : guesses.length
    }/${MAX_CHALLENGES}${isHardMode ? '*' : ''}\n\n` +
    generateEmojiGrid(guesses, getEmojiTiles(isDarkMode, isHighContrastMode))

  const shareData = { text: textToShare }

  let shareSuccess = false

  try {
    if (attemptShare(shareData)) {
      navigator.share(shareData)
      shareSuccess = true
    }
  } catch (error) {
    shareSuccess = false
  }

  if (!shareSuccess) {
    navigator.clipboard.writeText(textToShare)
    handleShareToClipboard()
  }
}

export const generateEmojiGrid = (guesses: string[], tiles: string[]) => {
  return guesses
    .map((guess) => {
      const status = getGuessStatuses(guess)
      const splitGuess = unicodeSplit(guess)

      return splitGuess
        .map((_, i) => {
          switch (status[i]) {
            case 'correct':
              return tiles[0]
            case 'close1':
              return tiles[1]
            case 'close2':
              return tiles[2]
            case 'close3':
              return tiles[3]
            case 'close4':
              return tiles[4]
            case 'far2':
              return tiles[5]
            case 'far1':
              return tiles[6]
            default:
              return tiles[7]
          }
        })
        .join('')
    })
    .join('\n')
}

const attemptShare = (shareData: object) => {
  return (
    // Deliberately exclude Firefox Mobile, because its Web Share API isn't working correctly
    browser.name?.toUpperCase().indexOf('FIREFOX') === -1 &&
    webShareApiDeviceTypes.indexOf(device.type ?? '') !== -1 &&
    navigator.canShare &&
    navigator.canShare(shareData) &&
    navigator.share
  )
}

const getEmojiTiles = (isDarkMode: boolean, isHighContrastMode: boolean) => {
  let tiles: string[] = []
  tiles.push(isHighContrastMode ? '✅' : '🟩')
  tiles.push(isHighContrastMode ? '1️⃣' : '🟥')
  tiles.push(isHighContrastMode ? '2️⃣' : '🟥')
  tiles.push(isHighContrastMode ? '3️⃣' : '🟧')
  tiles.push(isHighContrastMode ? '5️⃣' : '🟨')
  tiles.push(isHighContrastMode ? '7️⃣' : '🟦')
  tiles.push(isHighContrastMode ? '🔟' : '🟦')
  tiles.push(isDarkMode ? '⬛' : '⬜')
  return tiles
}
