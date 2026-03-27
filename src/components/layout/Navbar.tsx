'use client'

import { useRef, useState } from 'react'
import Link from 'next/link'
import { gsap, useGSAP } from '@/lib/gsap'
import { NAV_LINKS, WA_LINK } from '@/constants'
import { MenuIcon, CloseIcon } from '@/components/ui/icons'

export default function Navbar() {
  const navRef = useRef<HTMLElement>(null)
  const drawerRef = useRef<HTMLDivElement>(null)
  const [drawerOpen, setDrawerOpen] = useState(false)

  // Entrance animation
  useGSAP(() => {
    gsap.from(navRef.current, {
      y: -80,
      opacity: 0,
      duration: 1,
      ease: 'power3.out',
      delay: 1.8, // after page loader
    })
  }, { scope: navRef })

  // Drawer open/close
  useGSAP(() => {
    if (!drawerRef.current) return
    if (drawerOpen) {
      gsap.to(drawerRef.current, {
        x: '0%',
        duration: 0.5,
        ease: 'power3.out',
      })
    } else {
      gsap.to(drawerRef.current, {
        x: '100%',
        duration: 0.4,
        ease: 'power3.in',
      })
    }
  }, { dependencies: [drawerOpen] })

  const closeDrawer = () => setDrawerOpen(false)

  return (
    <>
      <nav
        ref={navRef}
        className="fixed top-0 left-0 w-full z-40 bg-surface/95 backdrop-blur-sm border-b border-black/8"
        style={{ opacity: 0 }}
      >
        <div className="flex items-center justify-between px-6 md:px-12 py-4">
          {/* Logo */}
          <a
            href="#hero"
            className="font-headline text-2xl font-black tracking-tighter text-primary leading-none"
          >
            CREW CUTS
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                className="font-label text-xs tracking-[0.2em] uppercase text-black/50 hover:text-black transition-colors duration-200"
              >
                {label}
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-block bg-primary text-on-primary px-6 py-2.5 font-label text-xs font-bold tracking-[0.2em] uppercase hover:bg-white hover:text-black border border-transparent hover:border-black transition-all duration-300"
          >
            BOOK VIA WA
          </a>

          {/* Mobile hamburger */}
          <button
            onClick={() => setDrawerOpen(true)}
            className="md:hidden text-black p-1 active:opacity-50 transition-opacity"
            aria-label="Open menu"
          >
            <MenuIcon size={22} />
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      <div
        ref={drawerRef}
        className="fixed top-0 right-0 h-full w-80 bg-black z-50 flex flex-col pt-16 pb-8 px-8 md:hidden"
        style={{ transform: 'translateX(100%)' }}
      >
        <button
          onClick={closeDrawer}
          className="absolute top-5 right-6 text-white p-1"
          aria-label="Close menu"
        >
          <CloseIcon size={22} />
        </button>

        <div className="flex flex-col gap-8 mt-4">
          {NAV_LINKS.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              onClick={closeDrawer}
              className="font-label text-xl font-bold tracking-widest uppercase text-white/60 hover:text-white active:text-white transition-colors"
            >
              {label}
            </a>
          ))}
        </div>

        <div className="mt-auto">
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            onClick={closeDrawer}
            className="block w-full bg-white text-black text-center px-6 py-4 font-label text-xs font-bold tracking-[0.2em] uppercase hover:bg-black hover:text-white active:bg-black active:text-white border border-white transition-all duration-300"
          >
            BOOK VIA WHATSAPP
          </a>
        </div>
      </div>

      {/* Drawer backdrop */}
      {drawerOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={closeDrawer}
        />
      )}
    </>
  )
}
