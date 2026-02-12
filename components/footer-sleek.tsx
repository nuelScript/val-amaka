'use client'

import { useEffect, useState } from 'react'

export default function FooterSleek() {
  const [hearts, setHearts] = useState<{ id: number; left: number }[]>([])

  useEffect(() => {
    const interval = setInterval(() => {
      setHearts((prev) => [
        ...prev,
        { id: Date.now(), left: Math.random() * 100 },
      ])
    }, 600)

    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const timer = setTimeout(() => {
      setHearts((prev) => prev.slice(-5))
    }, 3000)

    return () => clearTimeout(timer)
  }, [hearts])

  return (
    <footer className="bg-gradient-to-b from-card to-card/95 border-t border-border py-16 px-6 relative overflow-hidden">
      {/* Floating hearts animation */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {hearts.map((heart) => (
          <div
            key={heart.id}
            className="absolute text-primary/20 text-3xl font-light"
            style={{
              left: `${heart.left}%`,
              top: '-20px',
              animation: 'float 4s ease-out forwards',
            }}
          >
            ♥
          </div>
        ))}
      </div>

      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary/3 to-transparent pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Main content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Left section */}
          <div className="space-y-4">
            <h3 className="text-lg font-syne font-bold text-foreground">
              Forever & Always
            </h3>
            <p className="text-foreground/60 font-inter font-light text-sm leading-relaxed">
              A celebration of love, connection, and all the beautiful moments we create together.
            </p>
          </div>

          {/* Center section */}
          <div className="space-y-4">
            <h3 className="text-lg font-syne font-bold text-foreground">
              Quick Links
            </h3>
            <ul className="space-y-2 text-sm font-inter font-light text-foreground/70">
              <li>
                <button 
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                  className="hover:text-primary transition-colors"
                >
                  Back to Top
                </button>
              </li>
              <li>
                <a href="#gallery" className="hover:text-primary transition-colors">
                  Our Moments
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Our Journey
                </a>
              </li>
            </ul>
          </div>

          {/* Right section */}
          <div className="space-y-4">
            <h3 className="text-lg font-syne font-bold text-foreground">
              Made with Love
            </h3>
            <p className="text-foreground/60 font-inter font-light text-sm">
              A special Valentine's gift created with care and passion, just for you.
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-border mb-8" />

        {/* Bottom */}
        <div className="text-center">
          <p className="text-foreground/50 font-inter font-light text-sm">
            With endless love & affection
          </p>
          <p className="text-foreground/40 font-inter font-light text-xs mt-4">
            © 2025 Forever with You
          </p>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          to {
            transform: translateY(100vh);
            opacity: 0;
          }
        }
      `}</style>
    </footer>
  )
}
