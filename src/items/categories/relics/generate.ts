import escapeRegex from 'escape-regex-string'
import * as fs from 'fs'
import * as path from 'path'
import { readCacheFile } from '../../../_helpers/cache'
import { escapeQuotes } from '../../../_helpers/generate'
import data, { GameDataItemsCategoriesRelic } from './data'

interface ApiItem {
  name: string
  id: number
  category: Array<number>
  rarity: number
}

const FILE_PATH = path.join(__dirname, './data.ts')
const START_MARKER = `// -- GENERATE-START --`
const END_MARKER = `// -- GENERATE-END --`
const REPLACE_REGEX = new RegExp(`${escapeRegex(START_MARKER)}(.*)${escapeRegex(END_MARKER)}`, 's')
const EMPTY_DATA: GameDataItemsCategoriesRelic = { name: '', exoticId: 0, legendaryId: 0 }

async function run() {
  const file = fs.readFileSync(FILE_PATH, 'utf-8')

  const items = await readCacheFile<Array<ApiItem>>('items.json')
  const exoticRelics = items.filter((item) => {
    return item.category.length === 1 && item.category[0] === 18 && item.rarity === 5
  })

  const generatedItems =
    exoticRelics
      .map((item: ApiItem) => {
        const previousData = data.find((x) => x.exoticId === item.id) || EMPTY_DATA

        return [
          `  { `,
          `name: '${escapeQuotes(item.name)}', `,
          `exoticId: ${item.id}, `,
          `legendaryId: ${previousData.legendaryId}`,
          ` }`,
        ].join('')
      })
      .join(',\n') + ','

  const content = file.replace(REPLACE_REGEX, `${START_MARKER}\n${generatedItems}\n  ${END_MARKER}`)
  fs.writeFileSync(FILE_PATH, content, 'utf-8')
}

run()
