'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { Award, Heart, Star } from 'lucide-react'
import { site } from '@/lib/site'
import { WhatsAppIcon } from './icons'

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, delay: 0.15 * i, ease: [0.22, 1, 0.36, 1] },
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
    <section id="top" className="relative min-h-screen w-full overflow-hidden">
      <Image
        src="/images/hero-lips.png"
        alt="Soft, natural lip blush permanent makeup"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-foreground/55 via-foreground/35 to-foreground/60" />

      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-6 pt-28 pb-24 lg:px-10">
        <div className="max-w-2xl">
          <motion.p
            custom={0}
            initial="hidden"
            animate="show"
            variants={fadeUp}
            className="text-xs font-medium uppercase tracking-[0.32em] text-background/85"
          >
            {site.city} Lip Blush Consultation
          </motion.p>

          <motion.h1
            custom={1}
            initial="hidden"
            animate="show"
            variants={fadeUp}
            className="mt-4 font-serif text-4xl font-medium leading-[1.12] text-balance text-background sm:text-5xl lg:text-[3.25rem]"
          >
            Soft, Natural Lip Blush for Lips That Fade Without Makeup
          </motion.h1>

          <motion.p
            custom={2}
            initial="hidden"
            animate="show"
            variants={fadeUp}
            className="mt-6 max-w-xl text-base leading-relaxed text-pretty text-background/90 sm:text-lg"
          >
            Custom lip blush for women who want soft color, better definition, and a natural healed result — without filler, harsh outlines, or a look that feels too made-up.
          </motion.p>

          <motion.p
            custom={3}
            initial="hidden"
            animate="show"
            variants={fadeUp}
            className="mt-4 max-w-lg text-sm leading-relaxed text-pretty text-background/80"
          >
            If your lips look pale, uneven, or fade into your face without lipstick, lip blush can help them look more visible, balanced, and fresh.
          </motion.p>

          <motion.div
            custom={4}
            initial="hidden"
            animate="show"
            variants={fadeUp}
            className="mt-6 flex flex-col gap-1.5 text-sm font-medium text-background/85"
          >
            <p>Not permanent lipstick.</p>
            <p>Not a harsh outline.</p>
            <p>Just your lips — softer, fresher, more defined.</p>
          </motion.div>

          <motion.div
            custom={5}
            initial="hidden"
            animate="show"
            variants={fadeUp}
            className="mt-10"
          >
            <a
              href={site.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 rounded-full bg-primary px-8 py-4 text-base font-medium text-primary-foreground shadow-md transition-all hover:bg-primary/90 hover:shadow-lg"
            >
              <WhatsAppIcon className="size-5" />
              Send a Photo for a Free Consultation
            </a>
            <p className="mt-4 text-xs text-background/75">
              Send a clear photo of your lips and get guidance before booking anything.
            </p>
          </motion.div>

          {/* Trust placeholders */}
          <motion.div
            custom={6}
            initial="hidden"
            animate="show"
            variants={fadeUp}
            className="mt-12 flex flex-wrap gap-6"
          >
            {trustStats.map((stat) => {
              const Icon = stat.icon
              return (
                <div key={stat.label} className="flex items-center gap-2 text-background/80">
                  <Icon className="size-4" aria-hidden="true" />
                  <span className="text-sm font-medium">
                    {stat.value}{stat.suffix} {stat.label}
                  </span>
                </div>
              )
            })}
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 1 }}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2"
      >
        <div className="flex h-11 w-6 items-start justify-center rounded-full border border-background/50 p-1.5">
          <motion.span
            className="h-2 w-1 rounded-full bg-background/80"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
          />
        </div>
      </motion.div>
    </section>
  )
}
