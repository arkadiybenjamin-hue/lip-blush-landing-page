'use client'

import Image from 'next/image'
import { useState } from 'react'
import { Reveal, RevealGroup, RevealItem } from './reveal'

export function Gallery() {
  const [sliderValue, setSliderValue] = useState(50)

  return (
    <section id="gallery" className="scroll-mt-24 bg-secondary">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
        <RevealGroup className="text-center">
          {/* Bold headline with emphasis */}
          <RevealItem as="div">
            <h2 className="mt-4 font-serif text-4xl font-semibold leading-[1.1] text-balance text-foreground sm:text-5xl lg:text-6xl">
              FRESH RESULTS ARE PRETTY.
              <br />
              HEALED RESULTS ARE WHAT MATTER.
            </h2>
          </RevealItem>
          {/* Lighter subheadline */}
          <RevealItem as="p" className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            Lip blush can look more vivid right after the appointment, but the true result is how the color settles over time.
          </RevealItem>
        </RevealGroup>

        <Reveal delay={0.1} className="mx-auto mt-12 w-full max-w-full px-4 sm:px-6">
          <div className="box-border mx-auto w-full max-w-[420px] rounded-[12px] bg-card p-2 shadow-sm sm:p-3">
            <div className="relative aspect-[4/3] w-full max-w-full overflow-hidden rounded-[12px] bg-muted">
              <Image
                src="/images/Lip_blush_before_and_after_copy_2.webp"
                alt="Before lip blush result"
                fill
                className="object-cover"
              />
              <div
                className="absolute inset-y-0 left-0 overflow-hidden"
                style={{ width: `${sliderValue}%` }}
              >
                <div className="relative h-full w-full">
                  <Image
                    src="/images/Lip_blush_before_and_after.webp"
                    alt="After lip blush result"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div
                className="absolute inset-y-0 z-10 w-0.5 bg-white/95 shadow-[0_0_0_1px_rgba(0,0,0,0.08)]"
                style={{ left: `clamp(20px, ${sliderValue}%, calc(100% - 20px))` }}
                aria-hidden="true"
              >
                <div className="absolute top-1/2 left-1/2 flex h-10 w-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/80 bg-white text-xs font-semibold text-foreground shadow-md">
                  &lt;&gt;
                </div>
              </div>
              <div className="pointer-events-none absolute inset-x-0 top-0 z-10 flex justify-between p-4 text-xs font-semibold uppercase tracking-[0.18em] text-white">
                <span>Before</span>
                <span>After</span>
              </div>
              <input
                type="range"
                min="0"
                max="100"
                value={sliderValue}
                onChange={(event) => setSliderValue(Number(event.target.value))}
                className="absolute inset-0 z-20 h-full w-full cursor-ew-resize appearance-none bg-transparent
             [&::-webkit-slider-thumb]:h-full [&::-webkit-slider-thumb]:w-1 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:bg-transparent [&::-webkit-slider-thumb]:opacity-0
             [&::-moz-range-thumb]:h-full [&::-moz-range-thumb]:w-1 [&::-moz-range-thumb]:appearance-none [&::-moz-range-thumb]:border-0 [&::-moz-range-thumb]:bg-transparent [&::-moz-range-thumb]:opacity-0"
                aria-label="Compare before and after lip blush results"
              />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
