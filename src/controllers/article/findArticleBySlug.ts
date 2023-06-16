import readArticleFile from './utils/readArticleFile'

export default async function findArticleBySlug (slug: string) {
  return await readArticleFile(slug)
}
