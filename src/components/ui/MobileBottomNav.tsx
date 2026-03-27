'use client'

import { useState } from 'react'
import { HomeIcon, CombIcon, GridIcon, BookIcon } from '@/components/ui/icons'

const MOBILE_NAV = [
  { label: 'HOME', href: '#hero', Icon: HomeIcon },
  { label: 'SERVICES', href: '#services', Icon: CombIcon },
  { label: 'GALLERY', href: '#gallery', Icon: GridIcon },
  { label: 'JOURNAL', href: '#journal', Icon: BookIcon },
]

export default function MobileBottomNav() {
  const [active, setActive] = useState(0)

  return (
    <nav className="fixed bottom-0 left-0 w-full z-50 md:hidden bg-black border-t border-white/10">
      <div className="flex h-16">
        {MOBILE_NAV.map(({ label, href, Icon }, i) => (
          <a
            key={label}
            href={href}
            onClick={() => setActive(i)}
            className={`
              flex flex-col items-center justify-center flex-1 gap-1
              transition-colors duration-200
              ${active === i
                ? 'bg-white text-black'
                : 'text-white/40 active:bg-white/10 active:text-white'
              }
            `}
          >
            <Icon size={20} />
            <span className="font-label text-[9px] font-bold tracking-widest uppercase">
              {label}
            </span>
          </a>
        ))}
      </div>
    </nav>
  )
}
