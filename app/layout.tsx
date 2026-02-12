import React from "react"
import type { Metadata } from 'next'
import { Syne, Inter } from 'next/font/google'

import './globals.css'

const _syne = Syne({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-syne',
})

const _inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'Forever With You - A Valentine\'s Celebration',
  description: 'A romantic celebration of love and beautiful moments together',
  viewport: {
    width: 'device-width',
    initialScale: 1,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="font-inter antialiased bg-background text-foreground">{children}</body>
    </html>
  )
}
