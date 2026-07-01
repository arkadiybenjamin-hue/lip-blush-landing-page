'use client'

import { Award, CalendarClock, Heart, Star } from 'lucide-react'
import { Reveal } from './reveal'

const stats = [
  {
    icon: CalendarClock,
    value: '8+',
    label: 'Years Experience',
  },
  {
    icon: Heart,
    value: '2,000+',
    label: 'Happy Clients',
  },
  {
    icon: Star,
    value: '4.9',
    label: 'Google Rating',
    rating: true,
  },
  {
    icon: Award,
    value: 'Licensed',
    label: '& Certified Artist',
  },
]

export function TrustBar() {
  return (
    <section className="border-y border-border bg-secondary">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-10 lg:py-16">
        <div className="grid grid-cols-2 gap-x-6 gap-y-10 md:grid-cols-4">
          {stats.map((stat, i) => {
            const Icon = stat.icon
            return (
              <Reveal
                key={stat.label}
                delay={i * 0.1}
                className="flex flex-col items-center text-center"
              >
                <Icon
                  className="size-6 text-primary"
                  strokeWidth={1.5}
                  aria-hidden="true"
                />
                <p className="mt-4 font-serif text-3xl font-medium text-foreground lg:text-4xl">
                  {stat.value}
                </p>
                {stat.rating && (
                  <span
                    className="mt-1 flex items-center gap-0.5"
                    aria-label="Rated 5 out of 5 stars"
                  >
                    {Array.from({ length: 5 }).map((_, s) => (
                      <Star
                        key={s}
                        className="size-3.5 fill-primary text-primary"
                        aria-hidden="true"
                      />
                    ))}
                  </span>
                )}
                <p className="mt-2 text-sm tracking-wide text-muted-foreground">
                  {stat.label}
                </p>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
