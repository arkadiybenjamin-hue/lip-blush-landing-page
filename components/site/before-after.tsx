'use client'

import { Reveal } from './reveal'

const galleryPlaceholders = [
  { label: 'Before', subtitle: 'Natural lips' },
  { label: 'Fresh Result', subtitle: 'Right after appointment' },
  { label: 'Healed Result', subtitle: '4-6 weeks later' },
  { label: 'Natural Definition', subtitle: 'Soft, blended color' },
]

export function Gallery() {
  return (
    <section id="gallery" className="scroll-mt-24 bg-background">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
        <Reveal className="text-center">
          <h2 className="font-serif text-3xl font-medium leading-[1.15] text-balance text-foreground sm:text-4xl lg:text-[2.75rem]">
            Fresh results are pretty. Healed results are what matter.
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-base leading-relaxed text-muted-foreground">
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
            Replace these with real client healed results.
          </p>
        </Reveal>
      </div>
    </section>
  )
}
