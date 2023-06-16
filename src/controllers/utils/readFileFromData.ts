import { readFile } from 'fs/promises'
import path from 'path'
import getDataFolderPath from './getDataFolderPath'

export default async function readFileFromData (
  folder: 'articles' | 'projects',
  fileName: string
) {
  return await readFile(
    path.join(getDataFolderPath(folder), fileName),
    'utf8'
  )
}
