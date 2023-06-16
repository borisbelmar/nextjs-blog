'use client' // Error components must be Client Components

import { useEffect } from 'react'

export default function Error ({
  error,
  reset
}: {
  error: Error
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div>
      <h2>Ups, hubo un error</h2>
      <button
        onClick={reset}
      >
        Intenta denuevo
      </button>
    </div>
  )
}
