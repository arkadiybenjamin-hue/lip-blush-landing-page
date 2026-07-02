'use client'

import { site } from '@/lib/site'
import { WhatsAppIcon } from './icons'
import { Reveal } from './reveal'

export function Solution() {
  return (
    <section className="bg-background">
      <div className="mx-auto max-w-3xl px-6 py-20 lg:px-10 lg:py-28">
        <Reveal className="text-center">
          <h2 className="font-serif text-3xl font-medium leading-[1.15] text-balance text-foreground sm:text-4xl lg:text-[2.75rem]">
            That&apos;s exactly why we use a soft, custom lip blush approach.
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="mt-6 text-center text-base leading-relaxed text-muted-foreground">
            The goal is not permanent lipstick. It&apos;s soft color, better definition, and a healed result that still looks like you.
          </p>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="mt-8 flex flex-col items-center gap-2 text-center text-sm font-medium text-foreground">
            <p>Not permanent lipstick.</p>
            <p>Not a harsh outline.</p>
            <p>Not a one-color-fits-all tattoo.</p>
            <p className="mt-2 text-base text-primary">
              Just your lips — softer, fresher, more defined.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.2} className="mt-10 flex justify-center">
          <a
            href={site.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2.5 rounded-full bg-primary px-8 py-4 text-base font-medium text-primary-foreground shadow-md transition-all hover:bg-primary/90 hover:shadow-lg"
          >
            <WhatsAppIcon className="size-5" />
            Send a Photo for a Free Consultation
          </a>
        </Reveal>
      </div>
    </section>
  )
}
