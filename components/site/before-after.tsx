'use client'

import { useState } from 'react'
import Image from 'next/image'
import { AnimatePresence, motion } from 'framer-motion'
import { Reveal } from './reveal'
import { SectionHeading } from './section-heading'
import { cn } from '@/lib/utils'

interface Pair {
  before: string
  after: string
  caption: string
}

const pairs: Pair[] = [
  {
    before: '/images/ba-1-before.png',
    after: '/images/ba-1-after.png',
    caption: 'Healed result — 6 weeks post-procedure',
  },
  {
    before: '/images/ba-2-before.png',
    after: '/images/ba-2-after.png',
    caption: 'Healed result — 8 weeks post-procedure',
  },
  {
    before: '/images/ba-3-before.png',
    after: '/images/ba-3-after.png',
    caption: 'Healed result — 5 weeks post-procedure',
  },
]

function BeforeAfterCard({ pair, index }: { pair: Pair; index: number }) {
  const [showAfter, setShowAfter] = useState(true)

  return (
    <Reveal delay={(index % 3) * 0.1} className="flex flex-col">
      <div className="relative aspect-square w-full overflow-hidden rounded-3xl bg-secondary">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={showAfter ? 'after' : 'before'}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="absolute inset-0"
          >
            <Image
              src={showAfter ? pair.after : pair.before}
              alt={showAfter ? 'Healed lip blush result' : 'Natural lips before treatment'}
              fill
              sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
              className="object-cover"
            />
          </motion.div>
        </AnimatePresence>

        {/* Toggle */}
        <div className="absolute bottom-4 left-1/2 z-10 flex -translate-x-1/2 items-center gap-1 rounded-full bg-background/85 p-1 backdrop-blur-sm shadow-md">
          <button
            type="button"
            onClick={() => setShowAfter(false)}
            aria-pressed={!showAfter}
            className={cn(
              'rounded-full px-4 py-1.5 text-xs font-medium tracking-wide transition-colors',
              !showAfter
                ? 'bg-foreground text-background'
                : 'text-muted-foreground hover:text-foreground',
            )}
          >
            Before
          </button>
          <button
            type="button"
            onClick={() => setShowAfter(true)}
            aria-pressed={showAfter}
            className={cn(
              'rounded-full px-4 py-1.5 text-xs font-medium tracking-wide transition-colors',
              showAfter
                ? 'bg-primary text-primary-foreground'
                : 'text-muted-foreground hover:text-foreground',
            )}
          >
            Healed
          </button>
        </div>
      </div>
      <p className="mt-3 text-center text-sm text-muted-foreground">{pair.caption}</p>
    </Reveal>
  )
}

export function BeforeAfter() {
  return (
    <section id="gallery" className="scroll-mt-24 bg-secondary">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
        <SectionHeading
          eyebrow="Real Results"
          title="See the Difference"
          subtitle="Healed results, not just fresh photos — because that's what actually matters."
        />
        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {pairs.map((pair, i) => (
            <BeforeAfterCard key={pair.after} pair={pair} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
