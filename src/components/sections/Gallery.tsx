'use client'

import { useRef } from 'react'
import Image from 'next/image'
import { gsap, useGSAP } from '@/lib/gsap'
import { GALLERY_IMAGES } from '@/constants'

export default function Gallery() {
  const sectionRef = useRef<HTMLElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const gridRef = useRef<HTMLDivElement>(null)
  const mobileGridRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    gsap.from(titleRef.current, {
      x: -60,
      opacity: 0,
      duration: 0.9,
      ease: 'power3.out',
      scrollTrigger: { trigger: titleRef.current, start: 'top 85%' },
    })

    const cols = gridRef.current?.querySelectorAll('[data-gallery-item]')
    if (cols) {
      gsap.from(cols, {
        y: 80,
        opacity: 0,
        duration: 1,
        stagger: 0.15,
        ease: 'power3.out',
        scrollTrigger: { trigger: gridRef.current, start: 'top 80%' },
      })

      // pointerenter/pointerleave — works on mouse AND touch/stylus
      cols.forEach((col) => {
        const img = col.querySelector('img')
        if (!img) return
        col.addEventListener('pointerenter', () => {
          gsap.to(img, { scale: 1.08, duration: 0.6, ease: 'power2.out' })
        })
        col.addEventListener('pointerleave', () => {
          gsap.to(img, { scale: 1, duration: 0.6, ease: 'power2.out' })
        })
      })

      // Parallax scrub — desktop only (md+)
      const isMobile = window.matchMedia('(max-width: 768px)').matches
      if (!isMobile) {
        cols.forEach((col, i) => {
          gsap.to(col, {
            y: i % 2 === 0 ? -30 : 30,
            ease: 'none',
            scrollTrigger: {
              trigger: gridRef.current,
              start: 'top bottom',
              end: 'bottom top',
              scrub: 1.5,
            },
          })
        })
      }
    }

    const mobileCols = mobileGridRef.current?.querySelectorAll('[data-gallery-item-mobile]')
    if (mobileCols) {
      gsap.from(mobileCols, {
        y: 50,
        opacity: 0,
        duration: 0.7,
        stagger: 0.1,
        ease: 'power3.out',
        scrollTrigger: { trigger: mobileGridRef.current, start: 'top 80%' },
      })
    }
  }, { scope: sectionRef })

  return (
    <section id="gallery" ref={sectionRef} className="py-24 bg-surface-bright overflow-hidden">
      <div className="px-8 md:px-24 mb-16 max-w-7xl mx-auto overflow-hidden">
        <h2
          ref={titleRef}
          className="font-headline text-5xl md:text-7xl font-black tracking-tighter uppercase"
        >
          GALLERY
        </h2>
        <div className="h-[2px] w-12 bg-black mt-6" />
      </div>

      {/* Desktop */}
      <div ref={gridRef} className="hidden md:grid grid-cols-4 gap-2 px-2">
        {GALLERY_IMAGES.map((img, i) => (
          <div
            key={i}
            data-gallery-item
            className={`aspect-[3/4] overflow-hidden bg-black relative ${i % 2 !== 0 ? 'translate-y-12' : ''}`}
          >
            <Image src={img.src} alt={img.alt} fill className="object-cover grayscale" sizes="25vw" />
          </div>
        ))}
      </div>

      {/* Mobile */}
      <div ref={mobileGridRef} className="md:hidden grid grid-cols-2 gap-1 px-1">
        {GALLERY_IMAGES.map((img, i) => (
          <div key={i} data-gallery-item-mobile className="aspect-square overflow-hidden bg-black relative">
            <Image src={img.src} alt={img.alt} fill className="object-cover grayscale" sizes="50vw" />
          </div>
        ))}
      </div>
    </section>
  )
}