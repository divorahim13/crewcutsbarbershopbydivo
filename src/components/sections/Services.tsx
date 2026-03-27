'use client'

import { useRef } from 'react'
import { gsap, SplitText, useGSAP } from '@/lib/gsap'
import { SERVICES, WA_LINK } from '@/constants'

export default function Services() {
  const sectionRef = useRef<HTMLElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const listRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    // Title split reveal
    const splitTitle = new SplitText(titleRef.current, { type: 'chars' })
    gsap.from(splitTitle.chars, {
      y: 60,
      opacity: 0,
      duration: 0.6,
      stagger: 0.025,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: titleRef.current,
        start: 'top 85%',
      },
    })

    // Service rows stagger from bottom
    const rows = listRef.current?.querySelectorAll('[data-service]')
    if (rows) {
      gsap.from(rows, {
        y: 40,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: listRef.current,
          start: 'top 80%',
        },
      })
    }

    return () => splitTitle.revert()
  }, { scope: sectionRef })

  return (
    <section
      id="services"
      ref={sectionRef}
      className="relative py-24 px-8 md:px-24 bg-primary text-white overflow-hidden"
    >
      {/* Grain texture */}
      <div className="grain-overlay" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-16 flex flex-col md:flex-row md:justify-between md:items-end gap-4">
          <div className="overflow-hidden">
            <h2
              ref={titleRef}
              className="font-headline text-5xl md:text-7xl font-black tracking-tighter uppercase"
            >
              LAYANAN KAMI
            </h2>
          </div>
          <span className="font-label text-[10px] tracking-[0.35em] uppercase opacity-30 hidden md:block">
            PILIH PERAWATAN ANDA
          </span>
        </div>

        {/* Desktop: 2-col grid | Mobile: full-width list */}
        <div
          ref={listRef}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-y-0 gap-x-16"
        >
          {SERVICES.map((service) => (
            <div
              key={service.name}
              data-service
              className="group border-b border-white/10 py-7 flex justify-between items-end hover:border-white/50 transition-colors duration-300 cursor-default"
            >
              <div className="space-y-1">
                <h3 className="font-label text-lg font-bold tracking-tight group-hover:translate-x-1 transition-transform duration-300">
                  {service.name}
                </h3>
                <p className="font-body text-xs uppercase tracking-widest opacity-40">
                  {service.subtitle}
                </p>
              </div>
              <span className="font-headline text-2xl italic opacity-80 group-hover:opacity-100 transition-opacity">
                {service.price}
              </span>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <p className="font-body text-sm opacity-50 max-w-sm leading-relaxed">
            Harga dapat berubah. Hubungi kami untuk paket spesial dan konfirmasi harga terkini.
          </p>
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-black px-10 py-4 font-label text-xs font-bold tracking-[0.25em] uppercase hover:bg-black hover:text-white border-2 border-white transition-all duration-400 shrink-0"
          >
            TANYA VIA WHATSAPP
          </a>
        </div>
      </div>
    </section>
  )
}
