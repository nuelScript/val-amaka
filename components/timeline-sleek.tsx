'use client'

import { useEffect, useState, useRef } from 'react'

const timelineEvents = [
  { id: 1, year: 'Day One', title: 'We Met', description: 'The moment everything changed forever' },
  { id: 2, year: 'First Year', title: 'Growing Closer', description: 'Learning everything about each other' },
  { id: 3, year: 'Today', title: 'Our Present', description: 'Living every moment to its fullest' },
  { id: 4, year: 'Forever', title: 'Our Future', description: 'Endless possibilities ahead' },
]

export default function TimelineSleek() {
  const [visibleEvents, setVisibleEvents] = useState<number[]>([])
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = parseInt(entry.target.id)
            setVisibleEvents((prev) => [...new Set([...prev, id])])
          }
        })
      },
      { threshold: 0.2 }
    )

    if (ref.current) {
      ref.current.querySelectorAll('[data-event]').forEach((el) => {
        observer.observe(el)
      })
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section className="py-24 px-6 bg-card/20">
      <div className="max-w-4xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-20 space-y-4">
          <h2 className="text-4xl md:text-5xl font-syne font-bold text-foreground">
            Our Journey
          </h2>
          <p className="text-foreground/60 font-inter font-light text-lg">
            A timeline of beautiful moments
          </p>
          <div className="h-px w-12 bg-primary mx-auto mt-6" />
        </div>

        {/* Timeline */}
        <div ref={ref} className="relative">
          {/* Vertical line */}
          <div className="absolute left-1/2 -translate-x-1/2 w-px h-full bg-gradient-to-b from-primary/0 via-primary/30 to-primary/0" />

          {/* Events */}
          <div className="space-y-12">
            {timelineEvents.map((event, index) => (
              <div
                key={event.id}
                id={String(event.id)}
                data-event
                className={`flex items-center gap-6 md:gap-12 transition-all duration-700 ${
                  visibleEvents.includes(event.id)
                    ? 'opacity-100'
                    : 'opacity-0'
                }`}
              >
                {/* Left content (alternating) */}
                {index % 2 === 0 ? (
                  <>
                    <div className="flex-1 text-right">
                      <div className="bg-background border border-border rounded-lg p-6 space-y-3 hover:shadow-lg hover:border-primary/40 transition-all duration-300">
                        <p className="text-xs font-inter font-light text-foreground/50 uppercase tracking-widest">
                          {event.year}
                        </p>
                        <h3 className="text-2xl font-syne font-bold text-foreground">
                          {event.title}
                        </h3>
                        <div className="h-px w-8 bg-gradient-to-r from-transparent to-primary/40 ml-auto mt-2" />
                        <p className="text-foreground/70 font-inter font-light text-sm leading-relaxed">
                          {event.description}
                        </p>
                      </div>
                    </div>
                    <div className="relative flex justify-center">
                      <div className="w-4 h-4 bg-primary rounded-full border-4 border-background relative z-10 shadow-lg shadow-primary/30" />
                    </div>
                    <div className="flex-1" />
                  </>
                ) : (
                  <>
                    <div className="flex-1" />
                    <div className="relative flex justify-center">
                      <div className="w-4 h-4 bg-primary rounded-full border-4 border-background relative z-10 shadow-lg shadow-primary/30" />
                    </div>
                    <div className="flex-1">
                      <div className="bg-background border border-border rounded-lg p-6 space-y-3 hover:shadow-lg hover:border-primary/40 transition-all duration-300">
                        <p className="text-xs font-inter font-light text-foreground/50 uppercase tracking-widest">
                          {event.year}
                        </p>
                        <h3 className="text-2xl font-syne font-bold text-foreground">
                          {event.title}
                        </h3>
                        <div className="h-px w-8 bg-gradient-to-l from-transparent to-primary/40 mt-2" />
                        <p className="text-foreground/70 font-inter font-light text-sm leading-relaxed">
                          {event.description}
                        </p>
                      </div>
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
