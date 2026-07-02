'use client'

import { site } from '@/lib/site'
import { WhatsAppIcon } from './icons'
import { Reveal } from './reveal'

export function FinalCta() {
  return (
    <section className="bg-secondary">
      <div className="mx-auto max-w-3xl px-6 py-20 text-center lg:py-28">
        <Reveal className="flex flex-col items-center">
          {/* Eyebrow */}
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-primary">
            Take the Next Step
          </p>
          {/* Bold headline */}
          <h2 className="mt-4 max-w-2xl font-serif text-4xl font-semibold leading-[1.1] text-balance text-foreground sm:text-5xl lg:text-6xl">
            Ready to See What&apos;s{' '}
            <span className="text-primary">Possible</span>{' '}
            for Your Lips?
          </h2>
          {/* Lighter copy */}
          <div className="mt-6 space-y-3 text-lg leading-relaxed text-muted-foreground">
            <p>
              Send a photo, tell us what you&apos;re hoping for, and get guidance before booking anything.
            </p>
            <p>
              No pressure. No one-size-fits-all approach.
            </p>
            <p className="font-semibold text-foreground">
              Just natural-looking lip blush suited to you.
            </p>
          </div>

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

          <p className="mt-6 text-sm text-muted-foreground">
            Pricing depends on your lips, desired result, and whether neutralization is needed. Send a photo for guidance.
          </p>
        </Reveal>
      </div>
    </section>
  )
}
