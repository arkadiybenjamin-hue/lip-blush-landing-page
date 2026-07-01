'use client'

import { Reveal } from './reveal'

export function GoodLipBlush() {
  return (
    <section id="good-lip-blush" className="scroll-mt-24 bg-secondary">
      <div className="mx-auto max-w-3xl px-6 py-20 lg:px-10 lg:py-28">
        <Reveal className="text-center">
          <h2 className="font-serif text-3xl font-medium leading-[1.15] text-balance text-foreground sm:text-4xl lg:text-[2.75rem]">
            What Good Lip Blush Should Look Like
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-8 space-y-4 text-center text-base leading-relaxed text-pretty text-muted-foreground">
            <p>
              Lip blush should look natural and soft, not overdone.
            </p>
            <p>
              The goal is blended, believable color — not something that reads as heavy makeup or an obvious outline.
            </p>
            <p>
              That&apos;s why the color choice, technique, and healing process all matter, not just the appointment itself.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
