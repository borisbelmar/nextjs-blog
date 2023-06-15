import Link from 'next/link'

interface ArticleItemProps {
  title: string
  description: string
  slug: string
}

export default function ArticleItem ({ title, description, slug }: ArticleItemProps) {
  return (
    <li className="">
      <h3 className="text-xl font-bold mb-2">
        {title}
      </h3>
      <p className="text-lg mb-2">
        {description}
      </p>
      <Link
        role="button"
        className="bg-primary-600 hover:bg-primary-500 text-black font-bold py-1 px-2 text-sm rounded mt-4"
        href={`/articles/${slug}`}
      >
        Ver más
      </Link>
      <hr className="my-4 opacity-20" />
    </li>
  )
}
