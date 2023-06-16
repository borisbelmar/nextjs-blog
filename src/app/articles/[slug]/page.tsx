import ReactMarkdown from 'react-markdown'
import BlogTitle from '@/components/BlogTitle'
import findArticleBySlug from '@/controllers/article/findArticleBySlug'
import { notFound } from 'next/navigation'

interface ArticleDetailPageProps {
  params: {
    slug: string
  }
}

export async function generateMetadata ({ params }: ArticleDetailPageProps) {
  const article = await findArticleBySlug(params.slug)

  if (article === null) {
    notFound()
  }

  return {
    title: article.title,
    description: article.description
  }
}

export default async function ArticleDetailPage ({ params }: ArticleDetailPageProps) {
  const article = await findArticleBySlug(params.slug)

  if (article === null) {
    notFound()
  }

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
