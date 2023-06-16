import { readdir } from 'fs/promises'
import type { Project } from '@/@types/Project'
import readProjectFile from './utils/readProjectFile'
import getDataFolderPath from '../utils/getDataFolderPath'

export default async function findAllProjects () {
  const projectsPath = getDataFolderPath('projects')
  const allProjectsPaths = await readdir(projectsPath)
  const allProjectsSlugs = allProjectsPaths.map(filename => filename.replace('.md', ''))

  const projectReadPromises = allProjectsSlugs.map(async slug => {
    return await readProjectFile(slug)
  })

  const projects = await Promise.all(projectReadPromises)

  return projects.filter(project => project !== null) as Project[]
}
