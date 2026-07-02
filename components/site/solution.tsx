'use client'

import { site } from '@/lib/site'
import { WhatsAppIcon } from './icons'
import { Reveal } from './reveal'

export function Solution() {
  return (
    <section className="bg-background">
      <div className="mx-auto max-w-3xl px-6 py-20 lg:px-10 lg:py-28">
        <Reveal className="text-center">
          {/* Eyebrow */}
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-primary">
            Here&apos;s the Clear Answer
          </p>
          {/* Bold pivot headline */}
          <h2 className="mt-4 font-serif text-4xl font-semibold leading-[1.1] text-balance text-foreground sm:text-5xl lg:text-6xl">
            That&apos;s exactly why we use a{' '}
            <span className="text-primary">soft, custom</span>{' '}
            lip blush approach.
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="mt-6 text-center text-lg leading-relaxed text-muted-foreground">
            The goal is not permanent lipstick. It&apos;s{' '}
            <span className="font-semibold text-foreground">soft color, better definition</span>, and a healed result that still looks like you.
          </p>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="mt-10 flex flex-col items-center gap-3 text-center">
            <p className="text-base font-medium text-foreground/80">Not permanent lipstick.</p>
            <p className="text-base font-medium text-foreground/80">Not a harsh outline.</p>
            <p className="text-base font-medium text-foreground/80">Not a one-color-fits-all tattoo.</p>
            <p className="mt-4 text-lg font-semibold text-primary">
              Just your lips — softer, fresher, more defined.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.2} className="mt-12 flex justify-center">
          <a
            href={site.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2.5 rounded-full bg-primary px-8 py-4 text-base font-semibold text-primary-foreground shadow-lg transition-all hover:bg-primary/90 hover:shadow-xl"
          >
            <WhatsAppIcon className="size-5" />
            Send a Photo for a Free Consultation
          </a>
        </Reveal>
      </div>
    </section>
  )
}
