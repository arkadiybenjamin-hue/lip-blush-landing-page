'use client'

import { Star } from 'lucide-react'
import { Reveal } from './reveal'
import { SectionHeading } from './section-heading'

const reviews = [
  {
    quote:
      'I was terrified it would look like a harsh tattoo, but the healed result is unbelievably natural. It just looks like my lips on my best day.',
    name: 'Sophie M.',
  },
  {
    quote:
      'Elena took the time to color-match to my skin tone perfectly. Six weeks later the shade settled into the softest rose — exactly what I asked for.',
    name: 'Amara K.',
  },
  {
    quote:
      'The numbing cream made the procedure completely comfortable. I honestly relaxed the whole time. No more reapplying lipstick all day!',
    name: 'Chloe R.',
  },
  {
    quote:
      'You can tell she genuinely knows her craft. She corrected my uneven lip line and the symmetry now is flawless. Worth every penny.',
    name: 'Priya S.',
  },
  {
    quote:
      'What sold me was seeing real healed photos, not just fresh ones. My result looks exactly like those — subtle, defined, and so me.',
    name: 'Isabelle T.',
  },
]

export function Testimonials() {
  return (
    <section id="reviews" className="scroll-mt-24 bg-background">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
        <SectionHeading eyebrow="Client Love" title="What Clients Are Saying" />

        <Reveal delay={0.1} className="mt-8 flex justify-center">
          <div className="inline-flex items-center gap-3 rounded-full border border-border bg-secondary px-5 py-2.5">
            <span className="flex items-center gap-0.5" aria-label="Rated 4.9 out of 5 stars">
              {Array.from({ length: 5 }).map((_, s) => (
                <Star key={s} className="size-4 fill-primary text-primary" aria-hidden="true" />
              ))}
            </span>
            <span className="text-sm font-medium text-foreground">
              4.9 average from 300+ reviews
            </span>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {reviews.map((review, i) => (
            <Reveal
              key={review.name}
              delay={(i % 3) * 0.1}
              className="flex h-full flex-col rounded-3xl border border-border bg-card p-7 shadow-sm"
            >
              <span className="flex items-center gap-0.5" aria-label="Rated 5 out of 5 stars">
                {Array.from({ length: 5 }).map((_, s) => (
                  <Star key={s} className="size-4 fill-primary text-primary" aria-hidden="true" />
                ))}
              </span>
              <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-pretty text-foreground">
                &ldquo;{review.quote}&rdquo;
              </blockquote>
              <p className="mt-5 text-sm font-medium text-muted-foreground">— {review.name}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
