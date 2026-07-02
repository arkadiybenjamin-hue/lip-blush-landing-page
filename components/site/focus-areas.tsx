'use client'

import { Palette, Blend, Layers, Sparkles } from 'lucide-react'
import { Reveal } from './reveal'

const methods = [
  {
    icon: Palette,
    title: 'Color matched to your lips',
    description: 'Your shade is chosen based on your natural lip tone, skin tone, and the result you want — not a random pink used on everyone.',
  },
  {
    icon: Blend,
    title: 'Soft, blended edges',
    description: 'We avoid harsh outlines so the result looks diffused, balanced, and natural.',
  },
  {
    icon: Layers,
    title: 'A careful, gradual approach',
    description: 'We build color thoughtfully rather than going too bold on the first pass.',
  },
  {
    icon: Sparkles,
    title: 'Healed results matter most',
    description: 'Fresh lip blush can look brighter at first. The healed result a few weeks later is what really matters.',
  },
]

export function FocusAreas() {
  return (
    <section id="method" className="scroll-mt-24 bg-secondary">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
        <Reveal className="text-center">
          <h2 className="font-serif text-3xl font-medium leading-[1.15] text-balance text-foreground sm:text-4xl lg:text-[2.75rem]">
            How We Keep Lip Blush Looking Natural
          </h2>
          <p className="mt-4 text-base text-muted-foreground">
            Good lip blush should not look like a harsh tattoo.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {methods.map((method, i) => {
            const Icon = method.icon
            return (
              <Reveal
                key={method.title}
                delay={(i % 4) * 0.1}
                className="flex flex-col rounded-2xl border border-border bg-background p-6 shadow-sm"
              >
                <span className="flex size-10 items-center justify-center rounded-full bg-primary/12 text-primary">
                  <Icon className="size-5" strokeWidth={1.5} aria-hidden="true" />
                </span>
                <h3 className="mt-4 font-serif text-lg font-medium text-foreground">
                  {method.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {method.description}
                </p>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
