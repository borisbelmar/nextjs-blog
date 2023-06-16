import readProjectFile from './utils/readProjectFile'

export default async function findProjectBySlug (slug: string) {
  return await readProjectFile(slug)
}
