import Image from 'next/image'
import Link from 'next/link'

interface ProjectItemProps {
  title: string
  date: string
  description: string
  slug: string
  image: string
}

export default function ProjectItem ({ title, date, description, slug, image }: ProjectItemProps) {
  return (
    <Link href={`/projects/${slug}`}>
      <li className="rounded overflow-hidden bg-gray-800">
        <Image
          src={image}
          alt={title}
          className="w-full h-48 object-cover"
          width={460}
          height={240}
          quality={50}
          blurDataURL='/images/placeholder.jpg'
        />
        <div className="mt-4 p-2">
          <h2 className="text-2xl font-bold text-white">{title}</h2>
          <p className="text-lg text-gray-500">{date}</p>
          <p className="text-lg text-gray-500">{description}</p>
        </div>
      </li>
    </Link>
  )
}
