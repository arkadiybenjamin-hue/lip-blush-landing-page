'use client'

import { Send as SendIcon, MessageCircle, Palette, Sparkles, Heart } from 'lucide-react'
import { Reveal } from './reveal'

const steps = [
  {
    icon: SendIcon,
    title: 'Send a photo',
    description: "Send a clear photo of your lips and tell us what you want to improve.",
  },
  {
    icon: MessageCircle,
    title: 'Get guidance',
    description: "We'll help you understand what shade and result may suit you.",
  },
  {
    icon: Palette,
    title: 'Plan the color',
    description: 'Your color is chosen based on your natural lips, skin tone, and desired result.',
  },
  {
    icon: Sparkles,
    title: 'Appointment',
    description: 'Numbing is used for comfort, and color is applied carefully in soft layers.',
  },
  {
    icon: Heart,
    title: 'Healing support',
    description: 'Your lips soften as they heal, and a touch-up can help refine the final color.',
  },
]

export function Process() {
  return (
    <section id="process" className="scroll-mt-24 bg-background">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
        <Reveal className="text-center">
          {/* Eyebrow */}
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-primary">
            Simple Steps
          </p>
          {/* Bold headline */}
          <h2 className="mt-4 font-serif text-4xl font-semibold leading-[1.1] text-balance text-foreground sm:text-5xl lg:text-6xl">
            What Happens{' '}
            <span className="text-primary">Next</span>
          </h2>
        </Reveal>

        <div className="relative mt-16">
          <div
            className="absolute left-6 top-6 bottom-6 w-px bg-primary/25 lg:left-0 lg:right-0 lg:top-6 lg:h-px lg:w-auto"
            aria-hidden="true"
          />

          <ol className="grid gap-8 lg:grid-cols-5 lg:gap-6">
            {steps.map((step, i) => {
              const Icon = step.icon
              return (
                <Reveal
                  as="li"
                  key={step.title}
                  delay={i * 0.1}
                  className="relative flex gap-5 lg:flex-col lg:gap-0"
                >
                  <div className="relative z-10 flex size-12 shrink-0 items-center justify-center rounded-full border-2 border-primary/40 bg-background font-serif text-lg font-semibold text-primary shadow-sm">
                    {i + 1}
                  </div>

                  <div className="lg:mt-6">
                    <Icon className="size-5 text-primary lg:mb-3" strokeWidth={1.5} aria-hidden="true" />
                    <h3 className="mt-2 font-serif text-xl font-semibold text-foreground lg:mt-0">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {step.description}
                    </p>
                  </div>
                </Reveal>
              )
            })}
          </ol>
        </div>
      </div>
    </section>
  )
}
