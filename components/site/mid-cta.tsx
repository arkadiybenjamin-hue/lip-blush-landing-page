'use client'

import { site } from '@/lib/site'
import { WhatsAppIcon } from './icons'
import { Reveal } from './reveal'

export function MidCta() {
  return (
    <section className="bg-primary/8">
      <div className="mx-auto max-w-3xl px-6 py-16 text-center lg:px-10 lg:py-20">
        <Reveal className="flex flex-col items-center">
          <h2 className="max-w-xl font-serif text-2xl font-medium leading-[1.15] text-balance text-foreground sm:text-3xl">
            Not sure what would suit your lips?
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            Send a clear photo and get honest guidance on shade, shape, healing, and whether lip blush is right for you.
          </p>

          <a
            href={site.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center justify-center gap-2.5 rounded-full bg-primary px-8 py-4 text-base font-medium text-primary-foreground shadow-sm transition-all hover:bg-primary/90 hover:shadow-md"
          >
            <WhatsAppIcon className="size-5" />
            Send a Photo for a Free Consultation
          </a>

          <p className="mt-4 text-xs text-muted-foreground">
            No pressure. No booking required just to ask.
          </p>
        </Reveal>
      </div>
    </section>
  )
}
