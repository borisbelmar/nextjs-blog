import ArticleList from '@/components/ArticleList'
import BlogTitle from '@/components/BlogTitle'
import ProjectList from '@/components/ProjectList'
import findAllArticles from '@/controllers/article/findAllArticles'
import findAllProjects from '@/controllers/project/findAllProjects'

export default async function Home () {
  const articles = await findAllArticles()
  const projects = await findAllProjects()
  return (
    <main>
      <BlogTitle
        title="My Tech Blog"
        description="Blog about tech and stuff"
      />
      <ArticleList
        articles={articles}
      />
      <ProjectList
        projects={projects}
      />
    </main>
  )
}
