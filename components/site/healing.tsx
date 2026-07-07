'use client'

import Image from 'next/image'
import { Reveal } from './reveal'

export function Healing() {
  return (
    <section id="healing" className="scroll-mt-24 bg-secondary">
      <div className="mx-auto max-w-6xl px-6 py-20 lg:px-10 lg:py-28">
        <Reveal className="text-center">
          {/* Bold headline */}
          <h2 className="mt-4 font-serif text-4xl font-semibold leading-[1.1] text-balance text-foreground sm:text-5xl lg:text-6xl">
            WHAT TO EXPECT WHILE YOUR LIPS HEAL
            <span className="inline-block align-baseline text-[1em]">:</span>
          </h2>
        </Reveal>

        <div className="mt-10 grid gap-8 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:items-center">
          <Reveal delay={0.1}>
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl">
              <Image
                src="/images/woman-summer-field-brunette-brown-sweater.jpg"
                alt="Woman outdoors in a brown sweater"
                fill
                className="object-cover"
              />
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="space-y-4 text-center text-lg leading-relaxed text-pretty text-muted-foreground lg:text-left">
              <p>
                Your lips may look brighter, darker, or slightly uneven during the first few days. That is a{' '}
                <span className="font-semibold text-foreground">normal part of healing</span>, not the final result.
              </p>
              <p>
                Color softens and settles over the following weeks. You&apos;ll receive clear aftercare guidance so you know what is normal and what to expect.
              </p>
              <p>
                The healed result is softer than the fresh result.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
