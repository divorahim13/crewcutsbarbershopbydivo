'use client'

import { useRef } from 'react'
import Image from 'next/image'
import { gsap, ScrollTrigger, SplitText, useGSAP } from '@/lib/gsap'
import { WA_LINK } from '@/constants'

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null)
  const bgRef = useRef<HTMLDivElement>(null)
  const headlineRef = useRef<HTMLHeadingElement>(null)
  const subRef = useRef<HTMLParagraphElement>(null)
  const metaRef = useRef<HTMLDivElement>(null)
  const ctaRef = useRef<HTMLAnchorElement>(null)

  useGSAP(() => {
    const delay = 1.9 // after page loader exits

    // Split "MAN UP." by characters
    const splitHeadline = new SplitText(headlineRef.current, {
      type: 'chars',
    })

    // Split subtitle by words
    const splitSub = new SplitText(subRef.current, {
      type: 'words',
    })

    const tl = gsap.timeline({ delay })

    // Headline chars stagger in from bottom
    tl.from(splitHeadline.chars, {
      y: 80,
      opacity: 0,
      skewX: -6,
      duration: 0.7,
      stagger: 0.04,
      ease: 'power3.out',
    })

    // Subtitle words stagger
    tl.from(splitSub.words, {
      y: 30,
      opacity: 0,
      duration: 0.5,
      stagger: 0.05,
      ease: 'power2.out',
    }, '-=0.3')

    // Meta info fade
    tl.from(metaRef.current, {
      opacity: 0,
      y: 20,
      duration: 0.5,
      ease: 'power2.out',
    }, '-=0.2')

    // CTA button
    tl.from(ctaRef.current, {
      opacity: 0,
      y: 20,
      duration: 0.5,
      ease: 'power2.out',
    }, '-=0.1')

    // Parallax on background image
    gsap.to(bgRef.current, {
      yPercent: 25,
      ease: 'none',
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top top',
        end: 'bottom top',
        scrub: true,
      },
    })

    return () => {
      splitHeadline.revert()
      splitSub.revert()
    }
  }, { scope: sectionRef })

  return (
    <section
      id="hero"
      ref={sectionRef}
      className="relative h-screen w-full overflow-hidden bg-black flex items-center justify-center"
    >
      {/* Background Image */}
      <div
        ref={bgRef}
        className="absolute inset-0 scale-110"
      >
        <Image
          src="https://images.unsplash.com/photo-1621605815971-fbc98d665033?w=1920&q=80"
          alt="Crew Cuts Barbershop interior"
          fill
          className="object-cover grayscale opacity-50"
          priority
          sizes="100vw"
        />
      </div>

      {/* Grain overlay */}
      <div className="grain-overlay" />

      {/* Vignette */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 z-[2]" />

      {/* Content */}
      <div className="relative z-10 text-center text-white px-6 max-w-5xl mx-auto">
        <h1
          ref={headlineRef}
          className="font-headline font-black text-[clamp(5rem,15vw,12rem)] tracking-tighter leading-none mb-4 text-white"
        >
          MAN UP.
        </h1>

        <p
          ref={subRef}
          className="font-label text-[clamp(0.9rem,2.5vw,1.5rem)] font-bold tracking-[0.25em] uppercase mb-8 text-white/90"
        >
          It's More Than a Haircut.
        </p>

        <div
          ref={metaRef}
          className="flex items-center justify-center gap-6 mb-10"
        >
          <span className="font-body text-xs md:text-sm tracking-widest uppercase text-white/60 hidden md:block">
            CIBUBUR
          </span>
          <span className="hidden md:block w-px h-4 bg-white/20" />
          <span className="font-body text-xs md:text-sm tracking-widest uppercase text-white/60">
            JAKARTA TIMUR
          </span>
          <span className="hidden md:block w-px h-4 bg-white/20" />
          <span className="font-body text-xs md:text-sm tracking-widest uppercase text-white/60">
            BUKA S/D 22.00
          </span>
        </div>

        <a
          ref={ctaRef}
          href={WA_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-white text-black px-10 md:px-14 py-4 md:py-5 font-label text-xs font-bold tracking-[0.25em] uppercase hover:bg-black hover:text-white border-2 border-white transition-all duration-500"
        >
          BOOK NOW VIA WHATSAPP
        </a>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 opacity-40">
        <div className="w-px h-12 bg-white animate-pulse" />
        <span className="font-label text-white text-[9px] tracking-[0.3em] uppercase">
          SCROLL
        </span>
      </div>
    </section>
  )
}
