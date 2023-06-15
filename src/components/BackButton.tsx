'use client'

import { useRouter } from 'next/navigation'

export default function BackButton () {
  const router = useRouter()

  return (
    <button
      className="text-sm font-bold text-white hover:text-primary-500 transition mb-4"
      onClick={router.back}
    >
      ← Back
    </button>
  )
}
