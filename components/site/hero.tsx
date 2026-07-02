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
      {/* Lighter overlay to let the lip photography be visible */}
      <div className="absolute inset-0 bg-gradient-to-b from-foreground/40 via-foreground/25 to-foreground/50" />

      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-6 pt-28 pb-24 lg:px-10">
        <div className="max-w-2xl">
          {/* Eyebrow - rose accent */}
          <motion.p
            custom={0}
            initial="hidden"
            animate="show"
            variants={fadeUp}
            className="text-xs font-semibold uppercase tracking-[0.28em] text-primary"
          >
            {site.city} Lip Blush Consultation
          </motion.p>

          {/* Bold, confident headline - largest on page */}
          <motion.h1
            custom={1}
            initial="hidden"
            animate="show"
            variants={fadeUp}
            className="mt-4 font-serif text-4xl font-semibold leading-[1.08] text-balance text-background sm:text-5xl lg:text-6xl"
          >
            Do your lips{' '}
            <span className="text-primary">disappear</span>{' '}
            unless you wear lipstick?
          </motion.h1>

          {/* Subheadline - lighter, muted */}
          <motion.p
            custom={2}
            initial="hidden"
            animate="show"
            variants={fadeUp}
            className="mt-6 max-w-xl text-lg leading-relaxed text-pretty text-background/85"
          >
            Soft, natural lip blush for pale, uneven, or faded lips — designed to heal like your own lips, only fresher and more defined.
          </motion.p>

          {/* Supporting copy */}
          <motion.p
            custom={3}
            initial="hidden"
            animate="show"
            variants={fadeUp}
            className="mt-4 max-w-lg text-sm leading-relaxed text-pretty text-background/70"
          >
            If your lips look washed out without makeup, lip blush can help add soft color, improve definition, and make your natural lip shape look more visible.
          </motion.p>

          {/* CTA */}
          <motion.div
            custom={4}
            initial="hidden"
            animate="show"
            variants={fadeUp}
            className="mt-10"
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
            <p className="mt-4 text-sm text-background/75">
              Send a clear photo of your lips and get guidance before booking anything.
            </p>
          </motion.div>
        </div>

        {/* Trust stats strip - prominent and confident */}
        <motion.div
          custom={5}
          initial="hidden"
          animate="show"
          variants={fadeUp}
          className="mt-16 flex flex-wrap items-center justify-start gap-8 border-t border-background/20 pt-8 lg:max-w-2xl"
        >
          {trustStats.map((stat) => {
            const Icon = stat.icon
            return (
              <div key={stat.label} className="flex items-center gap-2.5 text-background">
                <Icon className="size-5 text-primary" aria-hidden="true" />
                <span className="text-base font-semibold">
                  {stat.value}{stat.suffix} <span className="font-normal text-background/80">{stat.label}</span>
                </span>
              </div>
            )
          })}
        </motion.div>
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
