'use client'

import { Blend, Palette, Layers, Sparkles, MessageSquareText } from 'lucide-react'
import { Reveal } from './reveal'

const focusAreas = [
  {
    icon: Blend,
    title: 'Soft, blended edges',
    description: 'A natural-looking result rather than a defined outline.',
  },
  {
    icon: Palette,
    title: 'Color matched to you',
    description: 'Your shade is chosen based on your natural lip tone, skin tone, and the result you want.',
  },
  {
    icon: Layers,
    title: 'A careful, gradual approach',
    description: 'We build color thoughtfully rather than going too bold on the first pass.',
  },
  {
    icon: Sparkles,
    title: 'Healed results, not just fresh ones',
    description: 'Lips can look brighter right after the appointment. The healed result — a few weeks later — is what really matters.',
  },
  {
    icon: MessageSquareText,
    title: 'Clear guidance along the way',
    description: "You'll know what to expect during healing, so nothing feels surprising.",
  },
]

export function FocusAreas() {
  return (
    <section id="focus" className="scroll-mt-24 bg-background">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
        <Reveal className="text-center">
          <h2 className="font-serif text-3xl font-medium leading-[1.15] text-balance text-foreground sm:text-4xl lg:text-[2.75rem]">
            What We Focus On
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {focusAreas.map((area, i) => {
            const Icon = area.icon
            return (
              <Reveal
                key={area.title}
                delay={(i % 3) * 0.1}
                className="flex flex-col rounded-2xl border border-border bg-card p-6 shadow-sm"
              >
                <span className="flex size-10 items-center justify-center rounded-full bg-primary/12 text-primary">
                  <Icon className="size-5" strokeWidth={1.5} aria-hidden="true" />
                </span>
                <h3 className="mt-4 font-serif text-lg font-medium text-foreground">
                  {area.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {area.description}
                </p>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
