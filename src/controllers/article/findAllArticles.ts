import { readdir } from 'fs/promises'
import path from 'path'
import readArticleFile from './utils/readArticleFile'

export default async function findAllArticles () {
  const articlesPath = path.join(process.cwd(), 'src', 'data', 'articles')
  const allArticlesPaths = await readdir(articlesPath)
  const allArticlesSlugs = allArticlesPaths.map(filename => filename.replace('.md', ''))

  const articleReadPromises = allArticlesSlugs.map(async slug => {
    const parsedArticle = await readArticleFile(slug)

    return {
      title: parsedArticle.data.title,
      description: parsedArticle.data.description,
      slug,
      content: parsedArticle.content
    }
  })

  return await Promise.all(articleReadPromises)
}
