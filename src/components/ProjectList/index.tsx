import type { Project } from '@/@types/Project'
import ProjectItem from './components/ProjectItem'

interface ProjectListProps {
  projects: Project[]
}

export default function ProjectList ({ projects }: ProjectListProps) {
  return (
    <ul className="grid grid-cols-3 gap-4 max-w-screen-lg mx-auto">
      {projects.map(project => (
        <ProjectItem
          key={project.slug}
          title={project.title}
          date={project.date}
          description={project.description}
          slug={project.slug}
          image={`/images/${project.slug}.jpg`}
        />
      ))}
    </ul>
  )
}
