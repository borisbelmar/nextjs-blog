import path from 'path'

export default function getDataFolderPath (type: string) {
  return path.join(process.cwd(), 'src', 'data', type)
}
