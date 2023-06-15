import ArticleList from '@/components/ArticleList'
import BlogTitle from '@/components/BlogTitle'

const articles = [
  {
    title: 'My first blog post',
    description: 'This is my first blog post',
    slug: 'my-first-blog-post',
    content: 'This is my first blog post'
  },
  {
    title: 'My second blog post',
    description: 'This is my second blog post',
    slug: 'my-second-blog-post',
    content: 'This is my second blog post'
  },
  {
    title: 'My third blog post',
    description: 'This is my third blog post',
    slug: 'my-third-blog-post',
    content: 'This is my third blog post'
  }
]

export default function ArticlesPage () {
  return (
    <main>
      <BlogTitle
        title="All my Articles"
        description="Thoughts, notes, and ideas"
      />
      <ArticleList
        articles={articles}
      />
    </main>
  )
}
