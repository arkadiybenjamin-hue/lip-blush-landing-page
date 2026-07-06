'use client'

import { Reveal } from './reveal'

export function MidCta() {
  return (
    <section className="bg-background">
      <div className="mx-auto max-w-3xl px-6 py-16 text-center lg:px-10 lg:py-24">
        <Reveal className="flex flex-col items-center">
          {/* Headline with emphasis */}
          <h2 className="mt-4 max-w-xl font-serif text-3xl font-semibold leading-[1.1] text-balance text-foreground sm:text-4xl lg:text-5xl">
            Not sure what would{' '}
            <span className="text-primary">suit your lips?</span>
          </h2>
          {/* Lighter copy */}
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            Send a clear photo and get honest guidance on shade, shape, healing, and whether lip blush is right for you.
          </p>
        </Reveal>
      </div>
    </section>
  )
}
