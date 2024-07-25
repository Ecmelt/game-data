import { duplicates } from 'flocky'
import data from './data'

it('does not have duplicated ids', () => {
  const ids = duplicates(data.map((fish) => fish.id))

  if (ids.length > 0) {
    throw new Error('Duplicated ids: ' + ids.join(', '))
  }
})

it('is not missing any timeOfDay data', () => {
  const missingTimeOfDayInfo = data
    .filter((fish) => fish.timeOfDay.length === 0)
    .map((fish) => fish.id)

  if (missingTimeOfDayInfo.length > 0) {
    throw new Error(`Missing timeOfDay data: ` + missingTimeOfDayInfo.join(', '))
  }
})

it('has valid achievement data', () => {
  const missingValidAchievementData = data
    .filter(
      (fish) =>
        fish.achievement.id < 0 ||
        fish.achievement.bit < 0 ||
        fish.avidAchievement.id < 0 ||
        fish.avidAchievement.bit < 0
    )
    .map((fish) => fish.id)

  if (missingValidAchievementData.length > 0) {
    throw new Error(
      `Has invalid achievement and/or avid achievement data: ` +
        missingValidAchievementData.join(', ')
    )
  }
})
