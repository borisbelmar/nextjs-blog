import { readFile } from 'fs/promises'
import path from 'path'
import matter from 'gray-matter'

export default async function readArticleFile (slug: string) {
  const articleStringContent = await readFile(
    path.join(process.cwd(), 'src', 'data', 'articles', `${slug}.md`),
    'utf8'
  )
  const parsedArticle = matter(articleStringContent)

  return parsedArticle
}
