'use client'

import { Reveal } from './reveal'

export function Healing() {
  return (
    <section id="healing" className="scroll-mt-24 bg-background">
      <div className="mx-auto max-w-3xl px-6 py-20 lg:px-10 lg:py-28">
        <Reveal className="text-center">
          <h2 className="font-serif text-3xl font-medium leading-[1.15] text-balance text-foreground sm:text-4xl lg:text-[2.75rem]">
            What to Expect While Your Lips Heal
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-8 space-y-4 text-center text-base leading-relaxed text-pretty text-muted-foreground">
            <p>
              Your lips may look brighter, darker, or slightly uneven during the first few days. That is a normal part of healing, not the final result.
            </p>
            <p>
              Color softens and settles over the following weeks. You&apos;ll receive clear aftercare guidance so you know what is normal and what to expect.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <p className="mt-6 text-center text-sm font-medium text-primary">
            The healed result is softer than the fresh result.
          </p>
        </Reveal>
      </div>
    </section>
  )
}
