import PageLoader from '@/components/ui/PageLoader'
import MobileBottomNav from '@/components/ui/MobileBottomNav'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import Hero from '@/components/sections/Hero'
import About from '@/components/sections/About'
import WhyUs from '@/components/sections/WhyUs'
import Services from '@/components/sections/Services'
import Gallery from '@/components/sections/Gallery'
import Barbers from '@/components/sections/Barbers'
import Testimonials from '@/components/sections/Testimonials'
import Journal from '@/components/sections/Journal'
import Location from '@/components/sections/Location'

export default function Home() {
  return (
    <>
      {/* Cinematic loader */}
      <PageLoader />

      {/* Fixed chrome */}
      <Navbar />
      <MobileBottomNav />

      {/* Scroll content */}
      <main className="pb-16 md:pb-0">
        <Hero />
        <About />
        <WhyUs />
        <Services />
        <Gallery />
        <Barbers />
        <Testimonials />
        <Journal />
        <Location />
      </main>

      <Footer />
    </>
  )
}
