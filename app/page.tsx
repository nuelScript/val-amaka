'use client'

import { useEffect, useState } from 'react'
import Promposal from '@/components/promposal'

export default function Page() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <main className="overflow-hidden bg-background">
      <Promposal />
    </main>
  )
}
