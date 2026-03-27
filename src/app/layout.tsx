import type { Metadata } from 'next'
import { Noto_Serif, Space_Grotesk, Inter } from 'next/font/google'
import './globals.css'

const notoSerif = Noto_Serif({
  subsets: ['latin'],
  weight: ['400', '700', '900'],
  style: ['normal', 'italic'],
  variable: '--font-headline',
  display: 'swap',
})

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['300', '500', '700'],
  variable: '--font-label',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '600'],
  variable: '--font-body',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Crew Cuts Barbershop | Cibubur, Jakarta Timur',
  description:
    "Man Up. It's More Than a Haircut. Crew Cuts Barbershop — tempat potong rambut pria dengan harga terjangkau di Cibubur, Jakarta Timur. Buka setiap hari hingga pukul 22.00.",
  keywords: [
    'barbershop cibubur',
    'crew cuts',
    'potong rambut pria',
    'fade haircut',
    'barber jakarta timur',
    'crew cut',
    'taper fade',
  ],
  openGraph: {
    title: 'Crew Cuts Barbershop — Man Up.',
    description: "It's more than a haircut. Cibubur, Jakarta Timur.",
    type: 'website',
    locale: 'id_ID',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="id"
      className={`${notoSerif.variable} ${spaceGrotesk.variable} ${inter.variable}`}
    >
      <body>{children}</body>
    </html>
  )
}
