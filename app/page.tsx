import { Navbar } from '@/components/site/navbar'
import { Hero } from '@/components/site/hero'
import { Service } from '@/components/site/service'
import { GoodLipBlush } from '@/components/site/good-lip-blush'
import { FocusAreas } from '@/components/site/focus-areas'
import { Gallery } from '@/components/site/before-after'
import { Process } from '@/components/site/process'
import { Healing } from '@/components/site/healing'
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
        <Service />
        <GoodLipBlush />
        <FocusAreas />
        <Gallery />
        <Process />
        <Healing />
        <Faq />
        <FinalCta />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
