import readArticleFile from './utils/readArticleFile'

export default async function findArticleBySlug (slug: string) {
  const parsedArticle = await readArticleFile(slug)

  return {
    title: parsedArticle.data.title,
    description: parsedArticle.data.description,
    slug,
    content: parsedArticle.content
  }
}
