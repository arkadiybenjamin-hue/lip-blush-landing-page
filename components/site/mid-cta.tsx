'use client'

import { site } from '@/lib/site'
import { WhatsAppIcon } from './icons'
import { Reveal } from './reveal'

export function MidCta() {
  return (
    <section className="bg-background">
      <div className="mx-auto max-w-3xl px-6 py-16 text-center lg:px-10 lg:py-24">
        <Reveal className="flex flex-col items-center">
          {/* Headline with emphasis */}
          <h2 className="mt-4 max-w-xl font-serif text-3xl font-semibold leading-[1.1] text-balance text-foreground sm:text-4xl lg:text-5xl">
            Not sure what would{' '}
            <span className="text-primary">suit your lips?</span>
          </h2>
          {/* Lighter copy */}
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            Send a clear photo and get honest guidance on shade, shape, healing, and whether lip blush is right for you.
          </p>

          {/* Large prominent CTA */}
          <a
            href={site.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-10 inline-flex items-center justify-center gap-2.5 rounded-full bg-primary px-10 py-5 text-lg font-semibold text-primary-foreground shadow-lg transition-all hover:bg-primary/90 hover:shadow-xl"
          >
            <WhatsAppIcon className="size-6" />
            Send a Photo for a Free Consultation
          </a>

        </Reveal>
      </div>
    </section>
  )
}
