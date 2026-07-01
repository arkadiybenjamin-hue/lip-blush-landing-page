'use client'

import Image from 'next/image'
import { Reveal } from './reveal'

const credentials = [
  { value: '8+', label: 'Years Experience' },
  { value: 'Certified', label: 'PMU Artist' },
  { value: '2,000+', label: 'Lip Blush Procedures' },
]

export function Artist() {
  return (
    <section id="artist" className="scroll-mt-24 bg-secondary">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Portrait */}
          <Reveal y={32} className="order-1 lg:order-1">
            <div className="relative mx-auto aspect-[4/5] w-full max-w-md overflow-hidden rounded-3xl">
              <Image
                src="/images/artist.png"
                alt="Portrait of the studio's lead permanent makeup artist"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
          </Reveal>

          {/* Bio */}
          <div className="order-2 lg:order-2">
            <Reveal>
              <span className="text-xs font-medium uppercase tracking-[0.32em] text-primary">
                Your Artist
              </span>
              <h2 className="mt-4 font-serif text-3xl font-medium leading-[1.15] text-balance text-foreground sm:text-4xl lg:text-[2.75rem]">
                Meet Elena Rossi
              </h2>
            </Reveal>

            <Reveal delay={0.1}>
              <p className="mt-6 text-base leading-relaxed text-pretty text-muted-foreground">
                With over eight years in permanent makeup and thousands of lip
                blush procedures completed, Elena is a certified PMU artist who
                specializes in soft, natural-looking results. She believes every
                pair of lips is unique — which is why no two shades she creates
                are ever the same. Her philosophy is simple: enhance what&apos;s
                already there, never mask it.
              </p>
            </Reveal>

            <Reveal delay={0.2}>
              <dl className="mt-8 grid grid-cols-3 gap-4">
                {credentials.map((c) => (
                  <div
                    key={c.label}
                    className="rounded-2xl border border-border bg-background px-4 py-5 text-center"
                  >
                    <dt className="sr-only">{c.label}</dt>
                    <dd>
                      <span className="block font-serif text-2xl font-medium text-foreground">
                        {c.value}
                      </span>
                      <span className="mt-1 block text-xs leading-tight text-muted-foreground">
                        {c.label}
                      </span>
                    </dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
