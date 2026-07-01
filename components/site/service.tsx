'use client'

import Image from 'next/image'
import { Reveal } from './reveal'

export function Service() {
  return (
    <section id="services" className="scroll-mt-24 bg-background">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal y={32} className="order-1">
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl bg-secondary">
              <Image
                src="/images/treatment.png"
                alt="Soft, natural lip blush treatment"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
          </Reveal>

          <div className="order-2">
            <Reveal>
              <h2 className="font-serif text-3xl font-medium leading-[1.15] text-balance text-foreground sm:text-4xl lg:text-[2.75rem]">
                What Is Lip Blush?
              </h2>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="mt-6 space-y-4 text-base leading-relaxed text-pretty text-muted-foreground">
                <p>
                  Lip blush is a cosmetic tattoo treatment that adds soft color and definition to your natural lips.
                </p>
                <p>
                  It can help pale lips look more visible, improve uneven tone, and create a fresh, natural look.
                </p>
                <p>
                  Everyone&apos;s result is a little different — your color and technique are based on your natural lip tone, skin undertone, and the outcome you&apos;re going for, whether that&apos;s a soft tint or something a bit more visible.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
