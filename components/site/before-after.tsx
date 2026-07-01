'use client'

import { Reveal } from './reveal'
import { SectionHeading } from './section-heading'

const galleryPlaceholders = [
  { label: 'Before', subtitle: 'Natural lips' },
  { label: 'Healed Result', subtitle: 'Soft, natural tint' },
  { label: 'Before', subtitle: 'Uneven tone' },
  { label: 'Healed Result', subtitle: 'Balanced color' },
]

export function Gallery() {
  return (
    <section id="gallery" className="scroll-mt-24 bg-secondary">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
        <SectionHeading
          title="See the Difference"
          subtitle="Healed results, not just fresh photos."
        />

        <Reveal delay={0.1}>
          <p className="mt-4 max-w-2xl text-center text-base leading-relaxed text-muted-foreground">
            Fresh lip blush can look more vivid at first, but the true result is how it settles over time.
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
                <div className="absolute inset-0 flex flex-col items-center justify-center text-muted-foreground">
                  <span className="text-xs uppercase tracking-wide">Photo Placeholder</span>
                </div>
              </div>
              <div className="mt-3 text-center">
                <p className="text-sm font-medium text-foreground">{item.label}</p>
                <p className="text-xs text-muted-foreground">{item.subtitle}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.3}>
          <p className="mt-10 text-center text-xs text-muted-foreground">
            Real client photos coming soon. These placeholders will be replaced with actual before and after results.
          </p>
        </Reveal>
      </div>
    </section>
  )
}
