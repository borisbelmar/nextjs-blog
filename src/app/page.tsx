import ArticleList from '@/components/ArticleList'
import BlogTitle from '@/components/BlogTitle'
import { readFile, readdir } from 'fs/promises'
import path from 'path'
import matter from 'gray-matter'

export default async function Home () {
  const articlesPath = path.join(process.cwd(), 'src', 'data', 'articles')
  const allArticlesPaths = await readdir(articlesPath)
  const allArticlesSlugs = allArticlesPaths.map(filename => filename.replace('.md', ''))

  const articleReadPromises = allArticlesSlugs.map(async slug => {
    const articleStringContent = await readFile(
      path.join(process.cwd(), 'src', 'data', 'articles', `${slug}.md`),
      'utf8'
    )
    const parsedArticle = matter(articleStringContent)

    return {
      title: parsedArticle.data.title,
      description: parsedArticle.data.description,
      slug,
      content: parsedArticle.content
    }
  })

  const articles = await Promise.all(articleReadPromises)

  return (
    <main>
      <BlogTitle
        title="My Tech Blog"
        description="Blog about tech and stuff"
      />
      <ArticleList
        articles={articles}
      />
    </main>
  )
}
