'use client'

import { Reveal } from './reveal'

export function Healing() {
  return (
    <section id="healing" className="scroll-mt-24 bg-secondary">
      <div className="mx-auto max-w-3xl px-6 py-20 lg:px-10 lg:py-28">
        <Reveal className="text-center">
          <h2 className="font-serif text-3xl font-medium leading-[1.15] text-balance text-foreground sm:text-4xl lg:text-[2.75rem]">
            About the Healing Process
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-8 space-y-4 text-center text-base leading-relaxed text-pretty text-muted-foreground">
            <p>
              Your lips may look brighter, darker, or a little uneven during the first few days. That&apos;s a normal part of healing, not the final result.
            </p>
            <p>
              Color softens and settles over the following weeks. You&apos;ll get clear aftercare guidance so you know what to expect.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
