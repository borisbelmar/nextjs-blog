import ReactMarkdown from 'react-markdown'
import BlogTitle from '@/components/BlogTitle'
import findArticleBySlug from '@/controllers/article/findArticleBySlug'

interface ArticleDetailPageProps {
  params: {
    slug: string
  }
}

export default async function ArticleDetailPage ({ params }: ArticleDetailPageProps) {
  const article = await findArticleBySlug(params.slug)

  return (
    <main>
      <BlogTitle
        title={article.title}
        description={article.description}
        hasBackButton
      />
      <ReactMarkdown className="prose prose-invert mx-auto max-w-screen-lg mb-8">
        {article.content}
      </ReactMarkdown>
    </main>
  )
}
