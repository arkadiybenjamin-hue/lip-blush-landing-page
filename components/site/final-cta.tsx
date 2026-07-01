'use client'

import { ChevronDown } from 'lucide-react'
import { site } from '@/lib/site'
import { WhatsAppIcon } from './icons'
import { Reveal } from './reveal'

export function FinalCta() {
  return (
    <section className="bg-primary/8">
      <div className="mx-auto max-w-3xl px-6 py-20 text-center lg:py-24">
        <Reveal className="flex flex-col items-center">
          <h2 className="max-w-2xl font-serif text-3xl font-medium leading-[1.15] text-balance text-foreground sm:text-4xl lg:text-[2.75rem]">
            Ready to See What&apos;s Possible for Your Lips?
          </h2>
          <div className="mt-6 space-y-3 text-base leading-relaxed text-muted-foreground">
            <p>
              Send a photo, tell us what you&apos;re hoping for, and get guidance before booking anything.
            </p>
            <p>
              No pressure. No one-size-fits-all approach.
            </p>
            <p>
              Just natural-looking lip blush suited to you.
            </p>
          </div>

          <a
            href={site.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center justify-center gap-2.5 rounded-full bg-primary px-8 py-4 text-base font-medium text-primary-foreground shadow-sm transition-all hover:bg-primary/90 hover:shadow-md"
          >
            <WhatsAppIcon className="size-5" />
            Send a Photo for a Free Consultation
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
