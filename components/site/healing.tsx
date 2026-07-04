'use client'

import { Reveal } from './reveal'

export function Healing() {
  return (
    <section id="healing" className="scroll-mt-24 bg-secondary">
      <div className="mx-auto max-w-3xl px-6 py-20 lg:px-10 lg:py-28">
        <Reveal className="text-center">
          {/* Bold headline */}
          <h2 className="mt-4 font-serif text-4xl font-semibold leading-[1.1] text-balance text-foreground sm:text-5xl lg:text-6xl">
            What to Expect While Your Lips{' '}
            <span className="text-primary">Heal</span>
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-8 space-y-4 text-center text-lg leading-relaxed text-pretty text-muted-foreground">
            <p>
              Your lips may look brighter, darker, or slightly uneven during the first few days. That is a{' '}
              <span className="font-semibold text-foreground">normal part of healing</span>, not the final result.
            </p>
            <p>
              Color softens and settles over the following weeks. You&apos;ll receive clear aftercare guidance so you know what is normal and what to expect.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <p className="mt-8 text-center text-base font-semibold text-primary">
            The healed result is softer than the fresh result.
          </p>
        </Reveal>
      </div>
    </section>
  )
}
