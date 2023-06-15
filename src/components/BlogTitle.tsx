import BackButton from './BackButton'

interface BlogTitleProps {
  title: string
  description: string
  hasBackButton?: boolean
}

export default function BlogTitle ({
  title,
  description,
  hasBackButton = false
}: BlogTitleProps) {
  return (
    <div className="mx-auto pt-12 max-w-screen-lg">
      {hasBackButton && (
        <BackButton />
      )}
      <h1 className="text-3xl font-bold mb-2">
        {title}
      </h1>
      <p className="text-lg">
        {description}
      </p>
      <hr className="my-6 opacity-80" />
    </div>
  )
}
