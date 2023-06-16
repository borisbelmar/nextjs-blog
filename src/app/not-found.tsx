import Link from 'next/link'

export default function NotFoundPage () {
  return (
    <main className="w-full min-h-screen flex flex-col justify-center items-center text-center">
      <h1 className="text-3xl mb-4">
        Ups, lo que buscas no está aquí
      </h1>
      <Link href="/" className="text-lg text-primary-500 hover:text-primary-400 transition decoration-solid">
        Volver al inicio
      </Link>
    </main>
  )
}
