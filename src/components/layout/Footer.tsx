import { WA_LINK, INSTAGRAM_LINK, FACEBOOK_LINK, MAPS_LINK } from '@/constants'
import { InstagramIcon, WhatsAppIcon, FacebookIcon } from '@/components/ui/icons'

export default function Footer() {
  return (
    <footer className="bg-primary text-on-primary border-t border-white/10">
      <div className="px-8 md:px-24 py-16">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12">
          {/* Brand */}
          <div className="space-y-3">
            <p className="font-headline text-2xl font-black tracking-tighter">
              CREW CUTS
            </p>
            <p className="font-label text-[10px] tracking-[0.35em] opacity-40 uppercase">
              CIBUBUR · JAKARTA TIMUR
            </p>
          </div>

          {/* Links */}
          <div className="flex gap-12">
            <div className="space-y-4">
              <p className="font-label text-[10px] tracking-[0.3em] uppercase opacity-40">
                NAVIGATE
              </p>
              {['SERVICES', 'GALLERY', 'JOURNAL', 'LOKASI'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="block font-label text-xs tracking-widest uppercase text-white/60 hover:text-white transition-colors"
                >
                  {item}
                </a>
              ))}
            </div>

            <div className="space-y-4">
              <p className="font-label text-[10px] tracking-[0.3em] uppercase opacity-40">
                SOCIAL
              </p>
              <a
                href={INSTAGRAM_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="block font-label text-xs tracking-widest uppercase text-white/60 hover:text-white transition-colors"
              >
                INSTAGRAM
              </a>
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="block font-label text-xs tracking-widest uppercase text-white/60 hover:text-white transition-colors"
              >
                WHATSAPP
              </a>
              <a
                href={FACEBOOK_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="block font-label text-xs tracking-widest uppercase text-white/60 hover:text-white transition-colors"
              >
                FACEBOOK
              </a>
            </div>
          </div>

          {/* Social icons */}
          <div className="flex gap-4 items-center">
            <a
              href={INSTAGRAM_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/40 hover:text-white transition-colors"
              aria-label="Instagram"
            >
              <InstagramIcon size={20} />
            </a>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/40 hover:text-white transition-colors"
              aria-label="WhatsApp"
            >
              <WhatsAppIcon size={20} />
            </a>
            <a
              href={FACEBOOK_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/40 hover:text-white transition-colors"
              aria-label="Facebook"
            >
              <FacebookIcon size={20} />
            </a>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-label text-[10px] tracking-widest uppercase opacity-30">
            © 2025 CREW CUTS BARBERSHOP. ALL RIGHTS RESERVED.
          </p>
          <p className="font-label text-[10px] tracking-widest uppercase opacity-30">
            JL. RAYA LAPANGAN TEMBAK NO.7, CIBUBUR, JAKARTA TIMUR
          </p>
        </div>
      </div>
    </footer>
  )
}
