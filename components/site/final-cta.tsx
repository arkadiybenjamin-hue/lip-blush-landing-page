'use client'

import { ChevronDown } from 'lucide-react'
import { site } from '@/lib/site'
import { WhatsAppIcon } from './icons'
import { Reveal } from './reveal'

export function FinalCta() {
  return (
    <section className="bg-primary/12">
      <div className="mx-auto max-w-3xl px-6 py-20 text-center lg:py-24">
        <Reveal className="flex flex-col items-center">
          <span className="text-xs font-medium uppercase tracking-[0.32em] text-primary">
            Let&apos;s Talk
          </span>
          <h2 className="mt-4 max-w-2xl font-serif text-3xl font-medium leading-[1.15] text-balance text-foreground sm:text-4xl lg:text-[2.75rem]">
            Ready to Love Your Lips?
          </h2>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-pretty text-muted-foreground">
            Send a photo, tell us what you&apos;re hoping for, and we&apos;ll get back to you with
            honest advice — no pressure, no upsells.
          </p>

          <a
            href={site.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center justify-center gap-2.5 rounded-full bg-primary px-8 py-4 text-base font-medium text-primary-foreground shadow-sm transition-all hover:bg-primary/90 hover:shadow-md"
          >
            <WhatsAppIcon className="size-5" />
            Chat With Us on WhatsApp
          </a>

          <a
            href="#contact"
            className="mt-6 inline-flex flex-col items-center gap-1 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            or fill out the form below
            <ChevronDown className="size-4 animate-bounce" aria-hidden="true" />
          </a>
        </Reveal>
      </div>
    </section>
  )
}
