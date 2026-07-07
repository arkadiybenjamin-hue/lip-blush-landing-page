'use client'

import { site } from '@/lib/site'
import { WhatsAppIcon } from './icons'
import { Reveal } from './reveal'

export function FinalCta() {
  return (
    <section
      className="relative overflow-hidden bg-secondary bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/images/beauty-fashion-portrait-young-blond-woman-model-with-natural-makeup-perfect-skin-with-beautiful-rose-posing.jpg')" }}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.58)_0%,rgba(0,0,0,0.42)_30%,rgba(0,0,0,0.2)_58%,rgba(0,0,0,0)_100%)]" />

      <div className="relative z-10 mx-auto max-w-3xl px-6 py-20 text-center lg:py-28">
        <Reveal className="flex flex-col items-center">
          {/* Bold headline */}
          <h2 className="mt-4 max-w-2xl font-serif text-4xl font-bold leading-[1.1] text-balance uppercase text-stone-50 drop-shadow-[0_4px_18px_rgba(0,0,0,0.45)] sm:text-5xl lg:text-6xl">
            READY TO SEE WHAT&apos;S POSSIBLE FOR YOUR LIPS?
          </h2>
          {/* Lighter copy */}
          <div className="mt-6 space-y-3 text-lg leading-relaxed text-white drop-shadow-[0_4px_18px_rgba(0,0,0,0.45)]">
            <p>
              Send a photo, tell us what you&apos;re hoping for, and get guidance before booking anything.
            </p>
            <p>
              No pressure. No one-size-fits-all approach.
            </p>
            <p className="font-semibold text-stone-50">
              Just natural-looking lip blush suited to you.
            </p>
          </div>

          {/* Large prominent CTA */}
          <a
            href={site.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-10 inline-flex items-center justify-center gap-2.5 rounded-full bg-[#25D366] px-10 py-5 text-lg font-semibold text-white shadow-lg transition-all hover:bg-[#20bd5a] hover:shadow-xl"
          >
            <WhatsAppIcon className="size-6" />
            Send a Photo for a Free Consultation
          </a>
        </Reveal>
      </div>
    </section>
  )
}
