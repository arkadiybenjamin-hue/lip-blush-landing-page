'use client'

import { Reveal } from './reveal'

const methods = [
  {
    title: 'Color matched to your lips',
    description: 'Your shade is chosen based on your natural lip tone, skin tone, and the result you want not a random pink used on everyone.',
    emphasis: 'your natural lip tone',
  },
  {
    title: 'Soft, blended edges',
    description: 'We avoid harsh outlines so the result looks diffused, balanced, and natural.',
    emphasis: 'harsh outlines',
  },
  {
    title: 'A careful, gradual approach',
    description: 'We build color thoughtfully rather than going too bold on the first pass.',
    emphasis: 'build color thoughtfully',
  },
  {
    title: 'Healed results matter most',
    description: 'Fresh lip blush can look brighter at first. The healed result a few weeks later is what really matters.',
    emphasis: 'healed result',
  },
]

export function FocusAreas() {
  return (
    <section id="method" className="scroll-mt-24 bg-background">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
        <Reveal className="text-center">
          {/* Bold headline */}
          <h2 className="mt-4 font-serif text-4xl font-semibold leading-[1.1] text-balance text-foreground sm:text-5xl lg:text-6xl">
            HOW WE KEEP LIP BLUSH LOOKING NATURAL
          </h2>
          {/* Lighter subheadline */}
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            Good lip blush should not look like a harsh tattoo.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {methods.map((method, i) => {
            const parts = method.description.split(method.emphasis)
            return (
              <Reveal
                key={method.title}
                delay={(i % 4) * 0.1}
                className="flex flex-col rounded-2xl border border-border bg-card p-6 shadow-sm"
              >
                <h3 className="mt-5 font-serif text-xl font-semibold text-foreground">
                  {method.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {parts[0]}
                  <span className="font-semibold text-muted-foreground">{method.emphasis}</span>
                  {parts[1]}
                </p>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
