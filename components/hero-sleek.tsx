'use client'

import { useEffect, useState } from 'react'

export default function HeroSleek() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 py-20 relative overflow-hidden">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-secondary/5 -z-10" />
      
      {/* Floating accent line */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-24 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      
      <div className="max-w-2xl mx-auto text-center space-y-8">
        {/* Main heading */}
        <div 
          className={`transition-all duration-1000 transform ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h1 className="text-5xl md:text-7xl font-syne font-bold text-foreground leading-tight tracking-tight">
            Forever with you
          </h1>
        </div>

        {/* Subtle divider */}
        <div 
          className={`h-px w-12 bg-gradient-to-r from-primary to-accent mx-auto transition-all duration-1000 delay-200 ${
            isVisible ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'
          }`}
        />

        {/* Subheading */}
        <p 
          className={`text-lg md:text-xl text-foreground/70 font-inter font-light tracking-wide transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          A celebration of every moment we share together
        </p>

        {/* CTA Button */}
        <div 
          className={`pt-4 transition-all duration-1000 delay-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <button 
            onClick={() => document.getElementById('gallery')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-3 bg-primary text-primary-foreground text-sm font-inter font-medium tracking-wide transition-all hover:shadow-lg hover:scale-105 active:scale-95"
          >
            Explore Our Story
          </button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className="animate-bounce text-primary/40">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  )
}
