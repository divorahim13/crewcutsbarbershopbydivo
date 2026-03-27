'use client'

import { useRef } from 'react'
import { gsap, useGSAP } from '@/lib/gsap'
import { WHY_US } from '@/constants'
import { ScissorsIcon, SterileIcon, ChairIcon } from '@/components/ui/icons'

const ICON_MAP = {
  scissors: ScissorsIcon,
  sterile: SterileIcon,
  chair: ChairIcon,
} as const

export default function WhyUs() {
  const sectionRef = useRef<HTMLElement>(null)
  const cardsRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    const cards = cardsRef.current?.querySelectorAll('[data-card]')
    if (!cards) return

    gsap.from(cards, {
      y: 50,
      opacity: 0,
      duration: 0.8,
      stagger: 0.15,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: cardsRef.current,
        start: 'top 80%',
      },
    })
  }, { scope: sectionRef })

  return (
    <section
      ref={sectionRef}
      className="py-24 px-8 md:px-24 bg-white border-b border-black/10"
    >
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="font-headline text-5xl md:text-7xl font-black tracking-tighter uppercase">
            MENGAPA KAMI
          </h2>
          <div className="h-[2px] w-16 bg-black mt-6" />
        </div>

        <div ref={cardsRef} className="grid md:grid-cols-3 gap-12 md:gap-16">
          {WHY_US.map((item) => {
            const Icon = ICON_MAP[item.icon]
            return (
              <div key={item.title} data-card className="space-y-6">
                <Icon size={28} className="text-black" />
                <div className="space-y-3">
                  <h3 className="font-label text-lg font-bold tracking-tight uppercase">
                    {item.title}
                  </h3>
                  <p className="font-body text-sm text-on-surface-variant leading-relaxed">
                    {item.text}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
