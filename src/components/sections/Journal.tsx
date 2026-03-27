'use client'

import { useRef } from 'react'
import Image from 'next/image'
import { gsap, useGSAP } from '@/lib/gsap'
import { JOURNAL_ARTICLES } from '@/constants'

export default function Journal() {
  const sectionRef = useRef<HTMLElement>(null)
  const gridRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    const articles = gridRef.current?.querySelectorAll('[data-article]')
    if (!articles) return

    gsap.from(articles, {
      y: 60,
      opacity: 0,
      duration: 0.8,
      stagger: 0.15,
      ease: 'power3.out',
      scrollTrigger: { trigger: gridRef.current, start: 'top 80%' },
    })

    articles.forEach((article) => {
      const img = article.querySelector('img')
      if (!img) return
      // pointerenter — works on mouse and touch
      article.addEventListener('pointerenter', () => {
        gsap.to(img, { scale: 1.06, duration: 0.7, ease: 'power2.out' })
      })
      article.addEventListener('pointerleave', () => {
        gsap.to(img, { scale: 1, duration: 0.7, ease: 'power2.out' })
      })
    })
  }, { scope: sectionRef })

  return (
    <section id="journal" ref={sectionRef} className="py-24 px-8 md:px-24 bg-surface-bright border-b border-black/10">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="font-headline text-5xl md:text-7xl font-black tracking-tighter uppercase">
            TIPS &amp; PERAWATAN
          </h2>
          <div className="h-[2px] w-12 bg-black mt-6" />
        </div>

        <div ref={gridRef} className="grid md:grid-cols-3 gap-10 md:gap-12">
          {JOURNAL_ARTICLES.map((article) => (
            <article key={article.title} data-article className="group">
              <div className="aspect-[4/3] bg-black overflow-hidden mb-6 relative">
                <Image
                  src={article.img}
                  alt={article.title}
                  fill
                  className="object-cover grayscale"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="space-y-4">
                <span className="font-label text-[10px] tracking-[0.3em] uppercase opacity-40">
                  {article.category}
                </span>
                <h3 className="font-headline text-xl font-bold leading-tight group-hover:italic transition-all duration-300">
                  {article.title}
                </h3>
                <ul className="space-y-2 pt-1">
                  {article.tips.map((tip: string, i: number) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="font-label text-[10px] font-bold opacity-30 mt-0.5 shrink-0">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <span className="font-body text-sm text-on-surface-variant leading-relaxed">
                        {tip}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}