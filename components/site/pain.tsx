'use client'

import { Reveal } from './reveal'

const painPoints = [
  'Your lips look pale without makeup.',
  'Your natural lip border looks faded or uneven.',
  'Lipstick feels like effort every day.',
  'You want more color, but not a fake or overdone result.',
  "You're worried lip blush might look too bright, harsh, or obvious.",
]

export function Pain() {
  return (
    <section className="bg-secondary">
      <div className="mx-auto max-w-3xl px-6 py-20 lg:px-10 lg:py-28">
        <Reveal className="text-center">
          <h2 className="font-serif text-3xl font-medium leading-[1.15] text-balance text-foreground sm:text-4xl lg:text-[2.75rem]">
            You probably don&apos;t want &ldquo;tattooed lips.&rdquo;
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            You just want your lips to show up.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <ul className="mt-10 space-y-4">
            {painPoints.map((point, i) => (
              <li
                key={i}
                className="flex items-start gap-3 rounded-xl bg-background/60 px-5 py-4 shadow-sm"
              >
                <span className="mt-1 size-2 shrink-0 rounded-full bg-primary" aria-hidden="true" />
                <span className="text-base leading-relaxed text-foreground">{point}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  )
}
