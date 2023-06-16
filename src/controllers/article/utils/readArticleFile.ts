import matter from 'gray-matter'
import type { Article } from '@/@types/Article'
import readFileFromData from '@/controllers/utils/readFileFromData'

export default async function readArticleFile (slug: string): Promise<Article | null> {
  try {
    const articleStringContent = await readFileFromData('articles', `${slug}.md`)
    const parsedArticle = matter(articleStringContent)

    return {
      title: parsedArticle.data.title,
      description: parsedArticle.data.description,
      slug,
      content: parsedArticle.content
    }
  } catch {
    return null
  }
}
