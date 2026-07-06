'use client'

import { Reveal } from './reveal'

export function Solution() {
  return (
    <section
      className="relative overflow-hidden bg-background bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/images/portrait-beauty-young-girl-make-up.jpg')" }}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.6)_0%,rgba(0,0,0,0.4)_28%,rgba(0,0,0,0.18)_55%,rgba(0,0,0,0)_100%)]" />

      <div className="relative z-10 mx-auto max-w-3xl px-6 py-20 lg:px-10 lg:py-28">
        <Reveal className="text-center">
          {/* Bold pivot headline */}
          <h2 className="mt-4 font-serif text-4xl font-semibold leading-[1.1] text-balance uppercase text-stone-50 drop-shadow-[0_4px_18px_rgba(0,0,0,0.45)] sm:text-5xl lg:text-6xl">
            THAT&apos;S EXACTLY WHY WE USE A{' '}
            <span className="text-primary">soft, custom</span>{' '}
            LIP BLUSH APPROACH.
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="mt-6 text-center text-lg leading-relaxed text-white drop-shadow-[0_4px_18px_rgba(0,0,0,0.45)]">
            The goal is not permanent lipstick. It&apos;s soft color, better definition, and a healed result that still looks like you.
          </p>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="mt-10 flex flex-col items-center gap-3 text-center">
            <p className="text-base font-medium text-white drop-shadow-[0_4px_18px_rgba(0,0,0,0.45)]">Not permanent lipstick.</p>
            <p className="text-base font-medium text-white drop-shadow-[0_4px_18px_rgba(0,0,0,0.45)]">Not a harsh outline.</p>
            <p className="text-base font-medium text-white drop-shadow-[0_4px_18px_rgba(0,0,0,0.45)]">Not a one-color-fits-all tattoo.</p>
            <p className="mt-4 text-lg font-bold text-primary drop-shadow-[0_4px_18px_rgba(0,0,0,0.45)]">
              Just your lips actually visible.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
