import ArticleItem from './components/ArticleItem'

interface Article {
  title: string
  description: string
  slug: string
  content: string
}

interface ArticleListProps {
  articles: Article[]
}

export default function ArticleList ({ articles }: ArticleListProps) {
  return (
    <ul className="max-w-screen-lg mx-auto">
      {articles.map(article => (
        <ArticleItem
          key={article.slug}
          title={article.title}
          description={article.description}
          slug={article.slug}
        />
      ))}
    </ul>
  )
}
