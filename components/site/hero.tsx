'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { Award, Heart, Star } from 'lucide-react'
import { site } from '@/lib/site'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.85, delay: 0.12 * i, ease: [0.22, 1, 0.36, 1] },
  }),
}

const trustStats = [
  {
    icon: Award,
    value: site.stats.yearsOfExperience,
    label: 'years of experience',
    suffix: '+',
  },
  {
    icon: Heart,
    value: site.stats.numberOfClients,
    label: 'happy clients',
    suffix: '+',
  },
  {
    icon: Star,
    value: site.stats.reviewRating,
    label: 'Google rating',
    suffix: '',
  },
]

export function Hero() {
  return (
    <section
      id="top"
      className="relative isolate w-full overflow-hidden bg-background pt-28 pb-20 lg:pt-36 lg:pb-28"
    >
      <div className="pointer-events-none absolute inset-0">
        <Image
          src="/images/close-up-skin-pores-face-care-routine.jpg"
          alt=""
          fill
          priority
          className="object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/65 via-black/35 to-transparent" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="flex flex-col">
            <motion.h1
              custom={1}
              initial="hidden"
              animate="show"
              variants={fadeUp}
              className="mt-4 font-serif text-4xl font-bold leading-[1.08] text-balance uppercase text-stone-50 drop-shadow-[0_4px_18px_rgba(0,0,0,0.45)] sm:text-5xl lg:text-6xl"
            >
              DO YOUR LIPS{' '}
              <span className="text-rose-300">disappear</span>{' '}
              UNLESS YOU WEAR LIPSTICK?
            </motion.h1>

            <motion.div
              custom={2}
              initial="hidden"
              animate="show"
              variants={fadeUp}
              className="mt-6 space-y-4 text-base leading-relaxed text-stone-200"
            >
              <p>
                If your lips look pale, uneven, or washed out without makeup, you probably know the feeling.
              </p>
              <ul className="space-y-1.5 pl-4">
                {[
                  'You put on lipstick just to feel "finished."',
                  'Your natural lip border looks faded.',
                  'Your lips blend into your face in photos.',
                ].map((line) => (
                  <li key={line} className="flex items-start gap-2">
                    <span className="mt-2 size-1.5 shrink-0 rounded-full bg-primary" aria-hidden="true" />
                    <span>{line}</span>
                  </li>
                ))}
              </ul>
              <p>
                And even if you like the idea of lip blush, you may still worry:
              </p>
              <ul className="space-y-1.5 pl-4">
                {[
                  'Will it look too bright?',
                  'Will it look fake?',
                  'Will it heal badly?',
                  'Will it look like a harsh tattoo?',
                ].map((line) => (
                  <li key={line} className="flex items-start gap-2">
                    <span className="mt-2 size-1.5 shrink-0 rounded-full bg-primary" aria-hidden="true" />
                    <span>{line}</span>
                  </li>
                ))}
              </ul>
              <p className="font-medium text-stone-100">
                That&apos;s why the first step is simple: send a photo and get guidance before booking anything.
              </p>
            </motion.div>

            <motion.div
              custom={4}
              initial="hidden"
              animate="show"
              variants={fadeUp}
              className="mt-10 flex flex-wrap gap-6 border-t border-white/20 pt-8"
            >
              {trustStats.map((stat) => {
                const Icon = stat.icon
                return (
                  <div key={stat.label} className="flex items-center gap-2">
                    <Icon className="size-4 text-primary" aria-hidden="true" />
                    <span className="text-sm font-semibold text-stone-100">
                      {stat.value}{stat.suffix}{' '}
                      <span className="font-normal text-stone-300">{stat.label}</span>
                    </span>
                  </div>
                )
              })}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
