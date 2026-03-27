'use client'

import { useRef } from 'react'
import { gsap, ScrollTrigger, SplitText, useGSAP } from '@/lib/gsap'

const STATS = [
  { value: 1000, suffix: '+', label: 'Haircuts Delivered' },
  { value: 100, suffix: '%', label: 'Recommendation' },
  { value: 7, suffix: '/7', label: 'Open Every Day' },
]

export default function About() {
  const sectionRef = useRef<HTMLElement>(null)
  const quoteRef = useRef<HTMLHeadingElement>(null)

  useGSAP(() => {
    // Quote slide in from left
    const splitQuote = new SplitText(quoteRef.current, { type: 'lines' })

    gsap.from(splitQuote.lines, {
      x: -60,
      opacity: 0,
      duration: 0.9,
      stagger: 0.12,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: quoteRef.current,
        start: 'top 80%',
      },
    })

    // Stat counters
    STATS.forEach((stat, i) => {
      const el = document.querySelector(`[data-stat="${i}"]`)
      if (!el) return

      gsap.fromTo(
        el,
        { innerText: 0 },
        {
          innerText: stat.value,
          duration: 2,
          ease: 'power2.out',
          snap: { innerText: 1 },
          scrollTrigger: {
            trigger: el,
            start: 'top 85%',
          },
          onUpdate() {
            el.textContent = Math.round(Number((el as HTMLElement).innerText)) + stat.suffix
          },
        }
      )

      // Label fade
      const label = el.nextElementSibling
      gsap.from(label, {
        opacity: 0,
        y: 10,
        duration: 0.5,
        delay: 0.3 + i * 0.1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 85%',
        },
      })
    })

    return () => splitQuote.revert()
  }, { scope: sectionRef })

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-24 px-8 md:px-24 bg-surface border-b border-black/5"
    >
      <div className="grid md:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
        {/* Quote */}
        <div>
          <h2
            ref={quoteRef}
            className="font-headline text-4xl md:text-6xl italic leading-tight text-primary"
          >
            "It's our pleasure
            <br />
            to serve you."
          </h2>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-6 border-l border-black/10 pl-8 md:pl-16">
          {STATS.map((stat, i) => (
            <div key={stat.label} className="space-y-2">
              <span
                data-stat={i}
                className="block font-label text-3xl md:text-4xl font-bold"
              >
                {stat.value}{stat.suffix}
              </span>
              <span className="block font-body text-[10px] uppercase tracking-widest text-on-surface-variant">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Tagline bar */}
      <div className="mt-20 max-w-7xl mx-auto">
        <div className="border-t border-black/10 pt-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <p className="font-label text-[10px] tracking-[0.35em] uppercase text-on-surface-variant">
            CREW CUTS BARBERSHOP · CIBUBUR · JAKARTA TIMUR
          </p>
          <p className="font-headline italic text-sm text-on-surface-variant">
            Man Up. It's more than a haircut.
          </p>
        </div>
      </div>
    </section>
  )
}
