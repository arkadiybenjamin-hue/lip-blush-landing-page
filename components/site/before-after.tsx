'use client'

import Image from 'next/image'
import { Reveal } from './reveal'

const galleryPlaceholders = [
  { label: 'Before', subtitle: 'Natural lips', image: '/images/resultbefore1.jpg' },
  { label: 'Fresh Result', subtitle: 'Right after appointment', image: '/images/rightafter1.jpg' },
  { label: 'Healed Result', subtitle: '4-6 weeks later', image: '/images/monthafter1.jpg' },
]

export function Gallery() {
  return (
    <section id="gallery" className="scroll-mt-24 bg-secondary">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
        <Reveal className="text-center">
          {/* Bold headline with emphasis */}
          <h2 className="mt-4 font-serif text-4xl font-semibold leading-[1.1] text-balance text-foreground sm:text-5xl lg:text-6xl">
            Fresh results are pretty.{' '}
            <span className="text-primary">Healed results</span>{' '}
            are what matter.
          </h2>
          {/* Lighter subheadline */}
          <p className="mt-4 max-w-2xl mx-auto text-lg leading-relaxed text-muted-foreground">
            Lip blush can look more vivid right after the appointment, but the true result is how the color settles over time.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {galleryPlaceholders.map((item, i) => (
            <Reveal
              key={`${item.label}-${i}`}
              delay={(i % 4) * 0.1}
              className="flex flex-col"
            >
              <div className="relative aspect-square w-full overflow-hidden rounded-3xl bg-muted border-2 border-dashed border-border">
                {item.image ? (
                  <Image
                    src={item.image}
                    alt={item.label}
                    fill
                    className="object-cover"
                  />
                ) : (
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-muted-foreground">
                    <span className="text-xs uppercase tracking-wide">Photo Placeholder</span>
                  </div>
                )}
              </div>
              <div className="mt-3 text-center">
                <p className="text-base font-semibold text-foreground">{item.label}</p>
                <p className="text-sm text-muted-foreground">{item.subtitle}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
