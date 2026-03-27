'use client'

import { useRef } from 'react'
import Image from 'next/image'
import { gsap, useGSAP } from '@/lib/gsap'
import { GALLERY_IMAGES } from '@/constants'

export default function Gallery() {
  const sectionRef = useRef<HTMLElement>(null)
  const gridRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    const items = gridRef.current?.querySelectorAll('[data-gallery-item]')
    if (!items) return

    gsap.from(items, {
      opacity: 0,
      scale: 0.95,
      duration: 0.8,
      stagger: 0.12,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: gridRef.current,
        start: 'top 80%',
      },
    })

    // Hover zoom handled via GSAP for each item
    items.forEach((item) => {
      const img = item.querySelector('img')
      if (!img) return

      item.addEventListener('mouseenter', () => {
        gsap.to(img, { scale: 1.08, duration: 0.6, ease: 'power2.out' })
      })
      item.addEventListener('mouseleave', () => {
        gsap.to(img, { scale: 1, duration: 0.6, ease: 'power2.out' })
      })
    })
  }, { scope: sectionRef })

  return (
    <section
      id="gallery"
      ref={sectionRef}
      className="py-24 bg-surface-bright"
    >
      {/* Header */}
      <div className="px-8 md:px-24 mb-16 max-w-7xl mx-auto">
        <h2 className="font-headline text-5xl md:text-7xl font-black tracking-tighter uppercase">
          GALLERY
        </h2>
        <div className="h-[2px] w-12 bg-black mt-6" />
      </div>

      {/* Asymmetric offset grid — desktop */}
      <div
        ref={gridRef}
        className="hidden md:grid grid-cols-4 gap-2 px-2"
      >
        {/* Col 1 — normal */}
        <div data-gallery-item className="aspect-[3/4] overflow-hidden bg-black">
          <Image
            src={GALLERY_IMAGES[0].src}
            alt={GALLERY_IMAGES[0].alt}
            fill
            className="object-cover grayscale"
            sizes="25vw"
            style={{ position: 'absolute' }}
          />
        </div>

        {/* Col 2 — offset down */}
        <div data-gallery-item className="aspect-[3/4] translate-y-12 overflow-hidden bg-black relative">
          <Image
            src={GALLERY_IMAGES[1].src}
            alt={GALLERY_IMAGES[1].alt}
            fill
            className="object-cover grayscale"
            sizes="25vw"
          />
        </div>

        {/* Col 3 — normal */}
        <div data-gallery-item className="aspect-[3/4] overflow-hidden bg-black relative">
          <Image
            src={GALLERY_IMAGES[2].src}
            alt={GALLERY_IMAGES[2].alt}
            fill
            className="object-cover grayscale"
            sizes="25vw"
          />
        </div>

        {/* Col 4 — offset down */}
        <div data-gallery-item className="aspect-[3/4] translate-y-12 overflow-hidden bg-black relative">
          <Image
            src={GALLERY_IMAGES[3].src}
            alt={GALLERY_IMAGES[3].alt}
            fill
            className="object-cover grayscale"
            sizes="25vw"
          />
        </div>
      </div>

      {/* Mobile: 2-col grid */}
      <div className="md:hidden grid grid-cols-2 gap-1 px-1">
        {GALLERY_IMAGES.map((img, i) => (
          <div
            key={i}
            data-gallery-item
            className="aspect-square overflow-hidden bg-black relative"
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              className="object-cover grayscale"
              sizes="50vw"
            />
          </div>
        ))}
      </div>
    </section>
  )
}
