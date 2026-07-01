import { Navbar } from '@/components/site/navbar'
import { Hero } from '@/components/site/hero'
import { TrustBar } from '@/components/site/trust-bar'
import { Service } from '@/components/site/service'
import { BeforeAfter } from '@/components/site/before-after'
import { Process } from '@/components/site/process'
import { Artist } from '@/components/site/artist'
import { Testimonials } from '@/components/site/testimonials'
import { Pricing } from '@/components/site/pricing'
import { Faq } from '@/components/site/faq'
import { FinalCta } from '@/components/site/final-cta'
import { Contact } from '@/components/site/contact'
import { Footer } from '@/components/site/footer'

export default function Page() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <TrustBar />
        <Service />
        <BeforeAfter />
        <Process />
        <Artist />
        <Testimonials />
        <Pricing />
        <Faq />
        <FinalCta />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
