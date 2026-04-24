import Navbar from '@/components/sections/navbar'
import Hero from '@/components/sections/hero'
import Services from '@/components/sections/services'
import BodyShowcase from '@/components/sections/body-showcase'
import About from '@/components/sections/about'
import BookingCTA from '@/components/sections/booking-cta'
import Contact from '@/components/sections/contact'
import WhatsAppButton from '@/components/sections/whatsapp-button'

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="bg-white overflow-x-hidden">
        <Hero />
        <Services />
        <BodyShowcase />
        <About />
        <BookingCTA />
        <Contact />
      </main>
      <WhatsAppButton />
    </>
  )
}
