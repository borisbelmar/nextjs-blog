import matter from 'gray-matter'
import type { Project } from '@/@types/Project'
import readFileFromData from '@/controllers/utils/readFileFromData'

export default async function readProjectFile (slug: string): Promise<Project | null> {
  try {
    const projectStringContent = await readFileFromData('projects', `${slug}.md`)
    const parsedProject = matter(projectStringContent)

    return {
      title: parsedProject.data.title,
      description: parsedProject.data.description,
      slug,
      content: parsedProject.content,
      date: parsedProject.data.date
    }
  } catch {
    return null
  }
}
