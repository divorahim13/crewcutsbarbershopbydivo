'use client'

import { useRef, useEffect } from 'react'
import { gsap, useGSAP } from '@/lib/gsap'
import { TESTIMONIALS } from '@/constants'
import { StarIcon } from '@/components/ui/icons'

export default function Testimonials() {
  const sectionRef = useRef<HTMLElement>(null)
  const trackRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)

  useGSAP(() => {
    // Title fade in
    gsap.from(titleRef.current, {
      opacity: 0,
      y: 30,
      duration: 0.8,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 80%',
      },
    })

    // Infinite marquee via GSAP ticker
    const track = trackRef.current
    if (!track) return

    const totalWidth = track.scrollWidth / 2

    gsap.to(track, {
      x: `-=${totalWidth}`,
      duration: 40,
      ease: 'none',
      repeat: -1,
      modifiers: {
        x: gsap.utils.unitize((x) => parseFloat(x) % totalWidth),
      },
    })
  }, { scope: sectionRef })

  // Duplicate items for seamless loop
  const doubled = [...TESTIMONIALS, ...TESTIMONIALS]

  return (
    <section
      ref={sectionRef}
      className="py-24 bg-primary text-white relative overflow-hidden"
    >
      {/* Grain */}
      <div className="grain-overlay" />

      <div className="relative z-10">
        {/* Header */}
        <div className="px-8 md:px-24 mb-16 max-w-7xl mx-auto">
          <h2
            ref={titleRef}
            className="font-headline text-4xl md:text-6xl italic tracking-tight text-center uppercase"
          >
            Apa Kata Mereka
          </h2>
        </div>

        {/* Marquee track */}
        <div className="overflow-hidden">
          <div
            ref={trackRef}
            className="flex gap-6 w-max"
            style={{ willChange: 'transform' }}
          >
            {doubled.map((t, i) => (
              <div
                key={i}
                className="bg-white/5 border border-white/10 p-8 md:p-10 flex flex-col justify-between shrink-0 w-[300px] md:w-[380px]"
              >
                {/* Stars */}
                <div className="flex gap-1 mb-6">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <StarIcon key={j} size={14} filled className="text-white" />
                  ))}
                </div>

                <p className="font-body text-base md:text-lg italic leading-relaxed flex-1 mb-8">
                  &ldquo;{t.text}&rdquo;
                </p>

                <span className="font-label text-xs font-bold uppercase tracking-widest border-l-2 border-white/30 pl-4 opacity-70">
                  {t.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Edge fades */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-primary to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-primary to-transparent z-10 pointer-events-none" />
      </div>
    </section>
  )
}
