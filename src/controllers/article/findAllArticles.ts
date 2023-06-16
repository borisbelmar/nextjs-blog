import { readdir } from 'fs/promises'
import type { Article } from '@/@types/Article'
import readArticleFile from './utils/readArticleFile'
import getDataFolderPath from '../utils/getDataFolderPath'

export default async function findAllArticles () {
  const articlesPath = getDataFolderPath('articles')
  const allArticlesPaths = await readdir(articlesPath)
  const allArticlesSlugs = allArticlesPaths.map(filename => filename.replace('.md', ''))

  const articleReadPromises = allArticlesSlugs.map(async slug => {
    return await readArticleFile(slug)
  })

  const articles = await Promise.all(articleReadPromises)

  return articles.filter(article => article !== null) as Article[]
}
