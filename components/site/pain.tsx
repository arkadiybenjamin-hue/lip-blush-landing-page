'use client'

import { Reveal } from './reveal'

const painPoints = [
  { text: 'Your lips look pale without makeup.', emphasis: 'pale' },
  { text: 'Your natural lip border looks faded or uneven.', emphasis: 'faded or uneven' },
  { text: 'Lipstick feels like effort every day.', emphasis: 'effort every day' },
  { text: 'You want more color, but not a fake or overdone result.', emphasis: 'fake or overdone' },
  { text: "You're worried lip blush might look too bright, harsh, or obvious.", emphasis: 'too bright, harsh, or obvious' },
]

export function Pain() {
  return (
    <section className="bg-secondary">
      <div className="mx-auto max-w-3xl px-6 py-20 lg:px-10 lg:py-28">
        <Reveal className="text-center">
          {/* Bold headline with emphasis */}
          <h2 className="mt-4 font-serif text-4xl font-semibold leading-[1.1] text-balance text-foreground sm:text-5xl lg:text-6xl">
            You probably don&apos;t want{' '}
            <span className="text-primary">&ldquo;tattooed lips.&rdquo;</span>
          </h2>
          {/* Lighter subheadline */}
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            You just want your lips to show up.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <ul className="mt-12 space-y-3">
            {painPoints.map((point, i) => {
              const parts = point.text.split(point.emphasis)
              return (
                <li
                  key={i}
                  className="flex items-start gap-3 rounded-xl bg-background/80 border border-border/50 px-5 py-4 shadow-sm"
                >
                  <span className="mt-1.5 size-2 shrink-0 rounded-full bg-primary" aria-hidden="true" />
                  <span className="text-base leading-relaxed text-foreground">
                    {parts[0]}
                    <span className="font-semibold text-primary">{point.emphasis}</span>
                    {parts[1]}
                  </span>
                </li>
              )
            })}
          </ul>
        </Reveal>
      </div>
    </section>
  )
}
