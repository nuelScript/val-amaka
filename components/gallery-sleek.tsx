'use client'

import { useEffect, useState, useRef } from 'react'

const memories = [
  { id: 1, title: 'First Moment', date: 'The Beginning', emoji: '✨' },
  { id: 2, title: 'Adventures', date: 'Exploring Together', emoji: '🌍' },
  { id: 3, title: 'Laughter', date: 'Endless Joy', emoji: '😊' },
  { id: 4, title: 'Growth', date: 'Building Dreams', emoji: '🌱' },
  { id: 5, title: 'Togetherness', date: 'Always Us', emoji: '💫' },
  { id: 6, title: 'Forever', date: 'No End in Sight', emoji: '∞' },
]

export default function GallerySleek() {
  const [visibleCards, setVisibleCards] = useState<number[]>([])
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = memories.findIndex((_, i) => i === parseInt(entry.target.id))
            if (index !== -1) {
              setVisibleCards((prev) => [...new Set([...prev, index])])
            }
          }
        })
      },
      { threshold: 0.1 }
    )

    if (ref.current) {
      ref.current.querySelectorAll('[data-card]').forEach((el) => {
        observer.observe(el)
      })
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="gallery" className="py-24 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-20 space-y-4">
          <h2 className="text-4xl md:text-5xl font-syne font-bold text-foreground">
            Our Moments
          </h2>
          <p className="text-foreground/60 font-inter font-light text-lg">
            Memories we treasure
          </p>
          <div className="h-px w-12 bg-primary mx-auto mt-6" />
        </div>

        {/* Gallery grid */}
        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {memories.map((memory, index) => (
            <div
              key={memory.id}
              id={String(index)}
              data-card
              className={`group transition-all duration-700 transform ${
                visibleCards.includes(index)
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-12'
              }`}
            >
              <div className="relative bg-card border border-border rounded-lg p-8 h-full flex flex-col items-center justify-center text-center overflow-hidden hover:shadow-xl hover:border-primary/60 transition-all duration-300 space-y-6">
                {/* Subtle background glow on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
                
                <div className="text-6xl group-hover:scale-110 transition-transform duration-300">{memory.emoji}</div>
                <div className="space-y-2">
                  <h3 className="text-xl font-syne font-bold text-foreground">
                    {memory.title}
                  </h3>
                  <p className="text-sm text-foreground/60 font-inter font-light tracking-wide">
                    {memory.date}
                  </p>
                </div>
                <div className="w-12 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent group-hover:via-primary/70 transition-all duration-300" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
