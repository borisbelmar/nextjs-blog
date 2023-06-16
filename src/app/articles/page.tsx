import ArticleList from '@/components/ArticleList'
import BlogTitle from '@/components/BlogTitle'
import findAllArticles from '@/controllers/article/findAllArticles'

export const metadata = {
  title: 'All my Articles',
  description: 'Thoughts, notes, and ideas'
}

export default async function ArticlesPage () {
  const articles = await findAllArticles()

  return (
    <main>
      <BlogTitle
        hasBackButton
        title="All my Articles"
        description="Thoughts, notes, and ideas"
      />
      <ArticleList
        articles={articles}
      />
    </main>
  )
}
