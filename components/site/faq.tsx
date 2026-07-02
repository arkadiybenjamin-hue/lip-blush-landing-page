'use client'

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { Reveal } from './reveal'

const faqs = [
  {
    q: 'Will it look fake?',
    a: 'The goal is a soft, natural-looking result. Your color is chosen around your natural lip tone and the look you want.',
  },
  {
    q: 'Will it look like lipstick?',
    a: 'It depends on your goal. Some people want a barely-there tint, while others want a more visible color. This is discussed during the consultation.',
  },
  {
    q: 'Will it look like lip liner?',
    a: 'No. The goal is soft, blended color rather than a hard outline.',
  },
  {
    q: 'Can lip blush make my lips look bigger?',
    a: "It does not add volume like filler, but it can make your natural lip shape look more visible and defined.",
  },
  {
    q: 'Will the color look too bright at first?',
    a: 'It can look brighter during the first few days, then softens as it heals.',
  },
  {
    q: 'Does it hurt?',
    a: 'Some discomfort is normal because lips are sensitive. Numbing is used to help keep the treatment more comfortable.',
  },
  {
    q: 'How long does it last?',
    a: 'It varies by person. Some people hold color longer than others, and some may need a refresh sooner.',
  },
  {
    q: 'What if I get cold sores?',
    a: "Tell your artist before booking. Lip tattooing can sometimes trigger an outbreak, so you may need to speak with your doctor about antiviral medication beforehand.",
  },
]

export function Faq() {
  return (
    <section id="faq" className="scroll-mt-24 bg-secondary">
      <div className="mx-auto max-w-3xl px-6 py-20 lg:px-10 lg:py-28">
        <Reveal className="text-center">
          <h2 className="font-serif text-3xl font-medium leading-[1.15] text-balance text-foreground sm:text-4xl lg:text-[2.75rem]">
            Questions Women Usually Ask Before Booking
          </h2>
        </Reveal>

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
