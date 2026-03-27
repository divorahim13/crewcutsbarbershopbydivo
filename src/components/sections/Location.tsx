'use client'

import { useRef } from 'react'
import { gsap, SplitText, useGSAP } from '@/lib/gsap'
import {
  MapPinIcon,
  ClockIcon,
  PhoneIcon,
  WhatsAppIcon,
  InstagramIcon,
  FacebookIcon,
} from '@/components/ui/icons'
import { WA_LINK, INSTAGRAM_LINK, FACEBOOK_LINK, MAPS_LINK } from '@/constants'

export default function Location() {
  const sectionRef = useRef<HTMLElement>(null)
  const infoRef = useRef<HTMLDivElement>(null)
  const mapRef = useRef<HTMLDivElement>(null)
  const ctaTitleRef = useRef<HTMLHeadingElement>(null)

  useGSAP(() => {
    // Info slide in from left
    gsap.from(infoRef.current, {
      x: -50,
      opacity: 0,
      duration: 0.9,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 75%',
      },
    })

    // Map slide in from right
    gsap.from(mapRef.current, {
      x: 50,
      opacity: 0,
      duration: 0.9,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 75%',
      },
    })

    // CTA title split text
    const splitTitle = new SplitText(ctaTitleRef.current, { type: 'chars' })
    gsap.from(splitTitle.chars, {
      y: 50,
      opacity: 0,
      duration: 0.5,
      stagger: 0.02,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: ctaTitleRef.current,
        start: 'top 85%',
      },
    })

    return () => splitTitle.revert()
  }, { scope: sectionRef })

  return (
    <section
      id="location"
      ref={sectionRef}
      className="bg-surface overflow-hidden"
    >
      {/* Split layout */}
      <div className="grid md:grid-cols-2 border-y border-black/10">
        {/* Info column */}
        <div
          ref={infoRef}
          className="p-8 md:p-24 space-y-12"
        >
          <div>
            <h2 className="font-label text-xs font-bold tracking-[0.4em] uppercase mb-6 opacity-50">
              KUNJUNGI KAMI
            </h2>
            <p className="font-headline text-2xl md:text-3xl leading-snug">
              Jl. Raya Lapangan Tembak No.7,<br />
              RT.1/RW.9, Cibubur, Ciracas,<br />
              Jakarta Timur 13720
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8">
            {/* Hours */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <ClockIcon size={14} className="opacity-40" />
                <h3 className="font-label text-[10px] font-bold tracking-widest uppercase opacity-50">
                  JAM BUKA
                </h3>
              </div>
              <div className="space-y-1 font-body text-sm">
                <p>Senin – Kamis: 10.00 – 21.00</p>
                <p>Jumat – Minggu: 10.00 – 22.00</p>
              </div>
            </div>

            {/* Contact */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <PhoneIcon size={14} className="opacity-40" />
                <h3 className="font-label text-[10px] font-bold tracking-widest uppercase opacity-50">
                  HUBUNGI
                </h3>
              </div>
              <div className="flex gap-4 mt-2">
                <a
                  href={WA_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:opacity-50 transition-opacity"
                  aria-label="WhatsApp"
                >
                  <WhatsAppIcon size={20} />
                </a>
                <a
                  href={INSTAGRAM_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:opacity-50 transition-opacity"
                  aria-label="Instagram"
                >
                  <InstagramIcon size={20} />
                </a>
                <a
                  href={FACEBOOK_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:opacity-50 transition-opacity"
                  aria-label="Facebook"
                >
                  <FacebookIcon size={20} />
                </a>
              </div>
              <p className="font-body text-sm mt-3">+62 812-8751-7711</p>
            </div>
          </div>

          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-full bg-primary text-white px-8 py-5 font-label text-xs font-bold tracking-[0.25em] uppercase hover:bg-white hover:text-black border-2 border-primary transition-all duration-300"
          >
            PESAN SESI ANDA
          </a>
        </div>

        {/* Map column */}
        <div
          ref={mapRef}
          className="relative min-h-[320px] md:min-h-0 grayscale contrast-125 border-l border-black/10"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1982.6603014461891!2d106.87710473881727!3d-6.352524482667472!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69eceef7c05727%3A0xaf3d885cc291cbe3!2sCrew%20Cuts%20Barbershop!5e0!3m2!1sid!2sid!4v1774597732210!5m2!1sid!2sid"
            width="100%"
            height="100%"
            style={{ border: 0, minHeight: '400px', filter: 'grayscale(1) contrast(1.1)' }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Crew Cuts Barbershop Location"
          />
          <a
            href={MAPS_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute bottom-6 left-6 flex items-center gap-2 bg-black text-white px-5 py-3 font-label text-[10px] font-bold tracking-widest uppercase hover:bg-white hover:text-black border border-black transition-all duration-300"
          >
            <MapPinIcon size={14} />
            BUKA DI MAPS
          </a>
        </div>
      </div>
    </section>
  )
}
