'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { Award, Heart, Star } from 'lucide-react'
import { site } from '@/lib/site'
import { WhatsAppIcon } from './icons'

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
      className="relative w-full overflow-hidden bg-background pt-28 pb-20 lg:pt-36 lg:pb-28"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">

          {/* LEFT — Copy */}
          <div className="flex flex-col">
            {/* Headline */}
            <motion.h1
              custom={1}
              initial="hidden"
              animate="show"
              variants={fadeUp}
              className="mt-4 font-serif text-4xl font-semibold leading-[1.08] text-balance text-foreground sm:text-5xl lg:text-6xl"
            >
              Do your lips{' '}
              <span className="text-primary">disappear</span>{' '}
              unless you wear lipstick?
            </motion.h1>

            {/* Body copy */}
            <motion.div
              custom={2}
              initial="hidden"
              animate="show"
              variants={fadeUp}
              className="mt-6 space-y-4 text-base leading-relaxed text-muted-foreground"
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
              <p className="font-medium text-foreground">
                That&apos;s why the first step is simple: send a photo and get guidance before booking anything.
              </p>
            </motion.div>

            {/* CTA */}
            <motion.div
              custom={3}
              initial="hidden"
              animate="show"
              variants={fadeUp}
              className="mt-8"
            >
              <a
                href={site.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 rounded-full bg-primary px-8 py-4 text-base font-semibold text-primary-foreground shadow-lg transition-all hover:bg-primary/90 hover:shadow-xl"
              >
                <WhatsAppIcon className="size-5" />
                Send a Photo for a Free Consultation
              </a>
            </motion.div>

            {/* Trust stats */}
            <motion.div
              custom={4}
              initial="hidden"
              animate="show"
              variants={fadeUp}
              className="mt-10 flex flex-wrap gap-6 border-t border-border pt-8"
            >
              {trustStats.map((stat) => {
                const Icon = stat.icon
                return (
                  <div key={stat.label} className="flex items-center gap-2">
                    <Icon className="size-4 text-primary" aria-hidden="true" />
                    <span className="text-sm font-semibold text-foreground">
                      {stat.value}{stat.suffix}{' '}
                      <span className="font-normal text-muted-foreground">{stat.label}</span>
                    </span>
                  </div>
                )
              })}
            </motion.div>
          </div>

          {/* RIGHT — Image */}
          <motion.div
            custom={1}
            initial="hidden"
            animate="show"
            variants={fadeUp}
            className="order-first lg:order-last"
          >
            {/* Mobile: shows below copy; desktop: right column */}
            <div className="relative mx-auto max-w-sm overflow-hidden rounded-[2rem] border border-border/50 bg-secondary shadow-xl lg:max-w-none">
              <Image
                src="/images/image.png"
                alt="Woman with natural, pale lips before lip blush treatment"
                width={640}
                height={720}
                priority
                className="w-full object-cover object-[center_70%]"
                style={{ aspectRatio: '4/5' }}
              />
              {/* Subtle soft inner vignette at bottom */}
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-background/20 to-transparent" />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
