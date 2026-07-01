'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
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

export function Hero() {
  return (
    <section id="top" className="relative min-h-screen w-full overflow-hidden">
      {/* Background image */}
      <Image
        src="/images/hero-lips.png"
        alt="Close-up of soft, natural healed lip blush permanent makeup"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />
      {/* Warm dark overlay for legibility */}
      <div className="absolute inset-0 bg-gradient-to-b from-foreground/60 via-foreground/40 to-foreground/70" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-6 pt-28 pb-24 lg:px-10">
        <div className="max-w-2xl">
          <motion.p
            custom={0}
            initial="hidden"
            animate="show"
            variants={fadeUp}
            className="text-xs font-medium uppercase tracking-[0.32em] text-background/85"
          >
            {site.city}&apos;s Trusted Lip Blush Studio
          </motion.p>

          <motion.h1
            custom={1}
            initial="hidden"
            animate="show"
            variants={fadeUp}
            className="mt-6 font-serif text-4xl font-medium leading-[1.1] text-balance text-background sm:text-5xl lg:text-6xl"
          >
            Lip Blush That Heals Soft, Natural, and Made for You
          </motion.h1>

          <motion.p
            custom={2}
            initial="hidden"
            animate="show"
            variants={fadeUp}
            className="mt-6 max-w-xl text-base leading-relaxed text-pretty text-background/85 sm:text-lg"
          >
            Not a one-color-fits-all tattoo. Every shade is custom-matched to
            your skin tone, lip shape, and desired look — so results feel like
            you, only softer and more defined.
          </motion.p>

          <motion.div
            custom={3}
            initial="hidden"
            animate="show"
            variants={fadeUp}
            className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center"
          >
            <a
              href={site.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-8 py-4 text-sm font-medium text-primary-foreground shadow-md transition-all hover:bg-primary/90 hover:shadow-lg"
            >
              <WhatsAppIcon className="size-4" />
              Send a Photo, Get a Free Consultation
            </a>
            <a
              href="#gallery"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-background/60 bg-transparent px-8 py-4 text-sm font-medium text-background transition-all hover:bg-background hover:text-foreground"
            >
              View Before &amp; After
              <ArrowRight className="size-4" />
            </a>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 1 }}
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
