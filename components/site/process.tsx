'use client'

import { MessageCircle, Palette, Sparkles, CalendarHeart } from 'lucide-react'
import { Reveal } from './reveal'
import { SectionHeading } from './section-heading'

const steps = [
  {
    icon: MessageCircle,
    title: 'Free Consultation',
    description: 'Send a photo and discuss your desired shade and shape.',
  },
  {
    icon: Palette,
    title: 'Color & Shape Match',
    description: 'In-studio patch test and custom color mapping to your skin tone.',
  },
  {
    icon: Sparkles,
    title: 'The Procedure',
    description: 'Gentle, precise application with numbing cream for comfort (60–90 mins).',
  },
  {
    icon: CalendarHeart,
    title: 'Healing & Touch-Up',
    description: 'Color settles over 4–6 weeks, followed by a complimentary touch-up.',
  },
]

export function Process() {
  return (
    <section id="process" className="scroll-mt-24 bg-background">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
        <SectionHeading eyebrow="The Process" title="What to Expect, Step by Step" />

        <div className="relative mt-16">
          {/* Connecting line — horizontal on desktop, vertical on mobile */}
          <div
            className="absolute left-6 top-6 bottom-6 w-px bg-primary/25 lg:left-0 lg:right-0 lg:top-6 lg:h-px lg:w-auto"
            aria-hidden="true"
          />

          <ol className="grid gap-10 lg:grid-cols-4 lg:gap-8">
            {steps.map((step, i) => {
              const Icon = step.icon
              return (
                <Reveal
                  as="li"
                  key={step.title}
                  delay={i * 0.1}
                  className="relative flex gap-5 lg:flex-col lg:gap-0"
                >
                  {/* Number badge */}
                  <div className="relative z-10 flex size-12 shrink-0 items-center justify-center rounded-full border border-primary/30 bg-background font-serif text-lg font-medium text-primary shadow-sm">
                    {i + 1}
                  </div>

                  <div className="lg:mt-6">
                    <Icon className="size-5 text-primary lg:mb-3" strokeWidth={1.5} aria-hidden="true" />
                    <h3 className="mt-2 font-serif text-xl font-medium text-foreground lg:mt-0">
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
