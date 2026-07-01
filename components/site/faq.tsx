'use client'

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { Reveal } from './reveal'
import { SectionHeading } from './section-heading'

const faqs = [
  {
    q: 'Will the color look too bright or unnatural?',
    a: "Never — the goal is a soft, believable flush, not lipstick. During your consultation we custom-blend a shade to your natural lip tone and skin undertone, then apply it in delicate layers. It always looks noticeably more vivid the first few days; once healed, the color softens by roughly 30–50% into that natural 'your lips but better' tint.",
  },
  {
    q: 'Does it hurt?',
    a: "Most clients are surprised by how comfortable it is. We apply a topical numbing cream before we begin and reapply throughout, so the sensation is typically described as a light scratching or vibration rather than pain. Lips are sensitive, but the numbing keeps discomfort mild and very manageable.",
  },
  {
    q: 'How long does healing take, and what does it look like?',
    a: "Plan for about two weeks of visible healing. Day 1–2 the color looks bold and lips may feel a little swollen; around day 3–7 they gently peel and flake, and the color can look patchy or faded (totally normal — don't pick). By week four to six the true, settled color emerges once the skin has fully regenerated.",
  },
  {
    q: 'Will it suit my skin tone?',
    a: "Yes. Every appointment begins with an in-person consultation where we assess your undertones and, when needed, do a patch test to confirm both the shade and that your skin responds well. We only proceed once we're confident the color will heal beautifully on you.",
  },
  {
    q: 'How long does lip blush last?',
    a: "Generally one to three years, depending on your skin type, lifestyle, and sun exposure. Oilier skin and frequent sun tend to fade pigment faster. Most clients enjoy their results for a couple of years and return for a color refresh when they feel it softening.",
  },
  {
    q: "What if I don't love the result?",
    a: "Your first session always includes a complimentary touch-up 6–8 weeks later, which is where we perfect shape, saturation, and evenness once everything has healed. Adjustments to color and definition happen at that visit, so you're never stuck with a result that isn't quite right.",
  },
  {
    q: 'Is this safe? What are your qualifications?',
    a: "Absolutely. Your artist is a fully licensed and certified permanent makeup professional working in a sterile, single-use environment — fresh needles and pigments for every client, with strict bloodborne-pathogen and hygiene protocols. Only premium, skin-safe pigments are used.",
  },
]

export function Faq() {
  return (
    <section id="faq" className="scroll-mt-24 bg-background">
      <div className="mx-auto max-w-3xl px-6 py-20 lg:px-10 lg:py-28">
        <SectionHeading
          eyebrow="Common Questions"
          title="Everything You're Wondering About"
          subtitle="Honest answers to the things clients ask most before booking."
        />

        <Reveal className="mt-14">
          <Accordion className="w-full" defaultValue={[faqs[0].q]}>
            {faqs.map((faq) => (
              <AccordionItem
                key={faq.q}
                value={faq.q}
                className="border-b border-border"
              >
                <AccordionTrigger className="py-5 font-serif text-lg font-medium text-foreground no-underline hover:no-underline aria-expanded:text-primary **:data-[slot=accordion-trigger-icon]:text-primary">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="pr-6 pb-6 text-[0.95rem] leading-relaxed text-muted-foreground">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </section>
  )
}
