'use client'

import { useEffect, useRef } from 'react'
import { gsap, useGSAP } from '@/lib/gsap'

export default function PageLoader() {
  const loaderRef = useRef<HTMLDivElement>(null)
  const logoRef = useRef<HTMLDivElement>(null)
  const barRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    const tl = gsap.timeline({ delay: 0.1 })

    // Logo slides up on entry
    tl.from(logoRef.current, {
      y: 40,
      opacity: 0,
      duration: 0.6,
      ease: 'power3.out',
    })

    // Progress bar fills
    tl.to(barRef.current, {
      scaleX: 1,
      duration: 1,
      ease: 'power2.inOut',
    }, '-=0.2')

    // Hold briefly
    tl.to({}, { duration: 0.2 })

    // Logo fades while panel slides up to exit
    tl.to(logoRef.current, {
      opacity: 0,
      y: -20,
      duration: 0.4,
      ease: 'power2.in',
    })

    tl.to(loaderRef.current, {
      yPercent: -100,
      duration: 0.8,
      ease: 'power4.inOut',
    }, '-=0.1')

    // Remove from DOM after exit
    tl.set(loaderRef.current, { display: 'none' })
  }, { scope: loaderRef })

  return (
    <div
      ref={loaderRef}
      id="page-loader"
      aria-hidden="true"
    >
      <div className="flex flex-col items-center gap-8">
        <div ref={logoRef} className="text-center">
          <p
            className="text-white font-headline text-5xl font-black tracking-tighter leading-none"
          >
            CREW<br />CUTS
          </p>
          <p className="font-label text-white/40 text-xs tracking-[0.4em] uppercase mt-3">
            CIBUBUR · EST.
          </p>
        </div>

        {/* Progress bar */}
        <div className="w-32 h-[1px] bg-white/20 overflow-hidden">
          <div
            ref={barRef}
            className="h-full bg-white origin-left"
            style={{ transform: 'scaleX(0)' }}
          />
        </div>
      </div>
    </div>
  )
}
