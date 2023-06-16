import ReactMarkdown from 'react-markdown'
import BlogTitle from '@/components/BlogTitle'
import findProjectBySlug from '@/controllers/project/findProjectBySlug'
import { notFound } from 'next/navigation'
import Image from 'next/image'

interface ProjectDetailPageProps {
  params: {
    slug: string
  }
}

export async function generateMetadata ({ params }: ProjectDetailPageProps) {
  const project = await findProjectBySlug(params.slug)

  if (project === null) {
    notFound()
  }

  return {
    title: project.title,
    description: project.description
  }
}

export default async function ProjectDetailPage ({ params }: ProjectDetailPageProps) {
  const project = await findProjectBySlug(params.slug)

  if (project === null) {
    notFound()
  }

  return (
    <main>
      <BlogTitle
        title={project.title}
        description={project.description}
        hasBackButton
      />
      <Image
        className='mx-auto max-w-screen-lg mb-8'
        src={`/images/${project.slug}.jpg`}
        width={800}
        height={600}
        alt={project.title}
        quality={75}
      />
      <ReactMarkdown className="prose prose-invert mx-auto max-w-screen-lg mb-8">
        {project.content}
      </ReactMarkdown>
    </main>
  )
}
