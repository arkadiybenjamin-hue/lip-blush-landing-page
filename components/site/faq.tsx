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
    q: 'Will it look like lipstick?',
    a: "It depends on what you're going for — some people prefer a very soft tint, others want something closer to a lipstick look.",
  },
  {
    q: 'Will it look like lip liner?',
    a: "The goal is soft, blended color rather than a hard outline.",
  },
  {
    q: 'Can lip blush make my lips look bigger?',
    a: "It doesn't add volume like filler, but it can make your natural lip shape look more visible and defined.",
  },
  {
    q: 'Will the color look too bright at first?',
    a: "It can, for the first few days. It softens as it heals.",
  },
  {
    q: 'Does it hurt?',
    a: "Some discomfort is normal since lips are sensitive. Numbing is used to help keep things comfortable.",
  },
  {
    q: 'How long does it last?',
    a: "It varies by person — some hold color for a long time, others need a refresh sooner.",
  },
  {
    q: 'What if I get cold sores?',
    a: "Let your artist know before booking, since lip tattooing can sometimes trigger an outbreak. You may need to check with your doctor about antiviral medication beforehand.",
  },
]

export function Faq() {
  return (
    <section id="faq" className="scroll-mt-24 bg-background">
      <div className="mx-auto max-w-3xl px-6 py-20 lg:px-10 lg:py-28">
        <SectionHeading title="Common Questions" />

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
