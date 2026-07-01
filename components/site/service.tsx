'use client'

import Image from 'next/image'
import { Check } from 'lucide-react'
import { Reveal } from './reveal'

const benefits = [
  'Enhances your natural lip tone',
  'Corrects asymmetry & fading',
  'No more daily lipstick',
  'Custom color-matched to you',
]

export function Service() {
  return (
    <section id="services" className="scroll-mt-24 bg-background">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Image */}
          <Reveal y={32} className="order-1">
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl">
              <Image
                src="/images/treatment.png"
                alt="Close-up of a soft, healed natural lip blush result"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
          </Reveal>

          {/* Text */}
          <div className="order-2">
            <Reveal>
              <span className="text-xs font-medium uppercase tracking-[0.32em] text-primary">
                The Treatment
              </span>
              <h2 className="mt-4 font-serif text-3xl font-medium leading-[1.15] text-balance text-foreground sm:text-4xl lg:text-[2.75rem]">
                What Is Lip Blush?
              </h2>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="mt-6 space-y-4 text-base leading-relaxed text-pretty text-muted-foreground">
                <p>
                  Lip blush is a semi-permanent tint that enhances your natural
                  lip color and shape. It adds soft definition and corrects
                  asymmetry or fading — without ever looking overdone.
                </p>
                <p>
                  Unlike an old-school lip tattoo, it isn&apos;t a bold, solid
                  block of color. It heals into a delicate, natural-looking tint
                  that simply makes your lips look like the best version of
                  themselves.
                </p>
                <p>
                  Results typically last one to three years, gradually softening
                  over time so you stay in control of your look.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <ul className="mt-8 grid gap-3 sm:grid-cols-2">
                {benefits.map((benefit) => (
                  <li key={benefit} className="flex items-center gap-3">
                    <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-primary/12 text-primary">
                      <Check className="size-3.5" strokeWidth={2.5} aria-hidden="true" />
                    </span>
                    <span className="text-sm text-foreground">{benefit}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
