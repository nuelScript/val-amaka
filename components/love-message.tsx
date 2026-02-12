'use client'

import { useEffect, useState, useRef } from 'react'

export default function LoveMessageSleek() {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section className="py-24 px-6 bg-background">
      <div className="max-w-2xl mx-auto">
        <div
          ref={ref}
          className={`transition-all duration-1000 transform ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
        >
          {/* Letter container */}
          <div className="bg-gradient-to-br from-card to-card/95 border border-border rounded-lg p-12 md:p-16 space-y-8 relative overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
            {/* Background accent */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/3 to-transparent pointer-events-none" />
            
            {/* Decorative elements */}
            <div className="absolute top-8 right-8 text-5xl opacity-10">💌</div>
            <div className="absolute bottom-12 left-8 w-20 h-20 border border-primary/5 rounded-full" />
            
            {/* Greeting */}
            <div className="space-y-2 relative z-10">
              <p className="text-foreground/70 font-inter font-light text-lg tracking-wide">My dearest,</p>
              <div className="h-px w-12 bg-primary/30" />
            </div>

            {/* Main message */}
            <div className="space-y-6 text-foreground/80 font-inter font-light leading-relaxed relative z-10 text-lg">
              <p>
                Every day with you feels like a beautiful dream I don't want to wake from. You've transformed my life in ways I never imagined possible, and I'm grateful for every single moment we share.
              </p>
              <p>
                From the smallest gestures to the biggest adventures, you make everything feel special. Your smile brightens my darkest days, and your presence brings peace to my soul.
              </p>
              <p>
                I promise to cherish you, to be there for you in every season of life, and to keep falling in love with you, over and over again. You are my greatest treasure, my love, my home.
              </p>
            </div>

            {/* Signature */}
            <div className="pt-8 space-y-4 border-t border-border/30 relative z-10">
              <p className="text-foreground/60 font-inter font-light">With all my love,</p>
              <div className="text-3xl font-syne text-primary font-bold">Forever Yours</div>
            </div>
          </div>

          {/* Decorative line below */}
          <div className="flex justify-center mt-12">
            <div className="flex gap-2">
              <div className="w-1 h-1 rounded-full bg-primary/40" />
              <div className="w-1 h-1 rounded-full bg-primary" />
              <div className="w-1 h-1 rounded-full bg-primary/40" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
