import ProjectList from '@/components/ProjectList'
import BlogTitle from '@/components/BlogTitle'
import findAllProjects from '@/controllers/project/findAllProjects'

export const metadata = {
  title: 'All my Projects',
  description: 'Thoughts, notes, and ideas'
}

export default async function ProjectsPage () {
  const projects = await findAllProjects()

  return (
    <main>
      <BlogTitle
        hasBackButton
        title="All my Projects"
        description="Thoughts, notes, and ideas"
      />
      <ProjectList
        projects={projects}
      />
    </main>
  )
}
