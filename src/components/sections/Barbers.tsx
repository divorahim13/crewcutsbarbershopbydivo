'use client'

import { useRef } from 'react'
import Image from 'next/image'
import { gsap, useGSAP } from '@/lib/gsap'
import { BARBERS } from '@/constants'

export default function Barbers() {
  const sectionRef = useRef<HTMLElement>(null)
  const gridRef = useRef<HTMLDivElement>(null)
  const galleryRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    const cards = gridRef.current?.querySelectorAll('[data-barber]')
    if (cards) {
      gsap.from(cards, {
        y: 50,
        opacity: 0,
        duration: 0.7,
        stagger: 0.12,
        ease: 'power3.out',
        scrollTrigger: { trigger: gridRef.current, start: 'top 80%' },
      })

      cards.forEach((card) => {
        const img = card.querySelector('img')
        if (!img) return
        // pointerenter works on both mouse and touch
        card.addEventListener('pointerenter', () => {
          gsap.to(img, { filter: 'grayscale(0%)', scale: 1.04, duration: 0.5, ease: 'power2.out' })
        })
        card.addEventListener('pointerleave', () => {
          gsap.to(img, { filter: 'grayscale(100%)', scale: 1, duration: 0.5, ease: 'power2.out' })
        })
      })
    }

    const photos = galleryRef.current?.querySelectorAll('[data-photo]')
    if (photos) {
      gsap.from(photos, {
        opacity: 0,
        scale: 0.96,
        duration: 0.7,
        stagger: 0.08,
        ease: 'power3.out',
        scrollTrigger: { trigger: galleryRef.current, start: 'top 80%' },
      })

      photos.forEach((photo) => {
        const img = photo.querySelector('img')
        if (!img) return
        photo.addEventListener('pointerenter', () => {
          gsap.to(img, { scale: 1.07, duration: 0.6, ease: 'power2.out' })
        })
        photo.addEventListener('pointerleave', () => {
          gsap.to(img, { scale: 1, duration: 0.6, ease: 'power2.out' })
        })
      })
    }
  }, { scope: sectionRef })

  return (
    <section ref={sectionRef} className="bg-white border-b border-black/10">
      <div className="py-24 px-8 md:px-24">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className="font-headline text-5xl md:text-7xl font-black tracking-tighter uppercase">
              BARBER KAMI
            </h2>
            <div className="h-[2px] w-12 bg-black mt-6" />
          </div>

          <div ref={gridRef} className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            {BARBERS.map((barber) => (
              <div
                key={barber.name}
                data-barber
                className="group border border-black/10 p-3 md:p-4 hover:border-black transition-colors duration-300 cursor-default"
              >
                <div className="aspect-square bg-surface-variant mb-4 overflow-hidden relative">
                  <Image
                    src={barber.img}
                    alt={barber.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 50vw, 25vw"
                    style={{ filter: 'grayscale(100%)' }}
                  />
                </div>
                <h3 className="font-label text-base md:text-lg font-bold uppercase tracking-tight">
                  {barber.name}
                </h3>
                <p className="font-body text-[10px] uppercase tracking-widest opacity-50 mt-1">
                  {barber.role}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="pb-24 px-8 md:px-24">
        <div className="max-w-7xl mx-auto">
          <div className="mb-10">
            <p className="font-label text-xs font-bold tracking-[0.35em] uppercase opacity-40">
              HASIL POTONGAN
            </p>
          </div>
          <div ref={galleryRef} className="grid grid-cols-3 md:grid-cols-6 gap-1">
            {[
              { src: 'https://images.unsplash.com/photo-1599351431202-1e0f0137899a?w=600&q=80', alt: 'Fade haircut' },
              { src: 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=600&q=80', alt: 'Crew cut' },
              { src: 'https://images.unsplash.com/photo-1621605815971-fbc98d665033?w=600&q=80', alt: 'Classic cut' },
              { src: 'https://images.unsplash.com/photo-1622286342621-4bd786c2447c?w=600&q=80', alt: 'Taper fade' },
              { src: 'https://images.unsplash.com/photo-1605497788044-5a32c7078486?w=600&q=80', alt: 'Styling' },
              { src: 'https://images.unsplash.com/photo-1540518614846-7eded433c457?w=600&q=80', alt: 'Beard trim' },
            ].map((photo, i) => (
              <div key={i} data-photo className="aspect-square overflow-hidden bg-black relative cursor-default">
                <Image src={photo.src} alt={photo.alt} fill className="object-cover grayscale" sizes="(max-width: 768px) 33vw, 16vw" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}