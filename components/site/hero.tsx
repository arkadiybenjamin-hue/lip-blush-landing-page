'use client'

import Image from 'next/image'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { site } from '@/lib/site'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.85, delay: 0.12 * i, ease: [0.22, 1, 0.36, 1] },
  }),
}

export function Hero() {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })
  const bgScale = useTransform(scrollYProgress, [0, 1], [1, 1.12])
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '15%'])
  const contentY = useTransform(scrollYProgress, [0, 1], [0, -60])
  const contentOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0])

  return (
    <section
      ref={ref}
      id="top"
      className="relative isolate flex min-h-screen w-full items-center overflow-hidden bg-[#4f403b] pt-28 pb-20 lg:pt-36 lg:pb-28"
    >
      <div className="pointer-events-none absolute inset-0">
        <motion.div style={{ scale: bgScale, y: bgY }} className="absolute inset-0">
          <Image
            src="/images/hero-bg-optimized.webp"
            alt=""
            fill
            priority
            fetchPriority="high"
            loading="eager"
            sizes="100vw"
            className="object-cover opacity-50"
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/65 via-black/35 to-transparent" />
        {/* Bottom fade into next section */}
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#faf6f1] to-transparent" />
      </div>

      <motion.div style={{ y: contentY, opacity: contentOpacity }} className="relative z-10 mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="flex flex-col">
            <motion.h1
              custom={1}
              initial="hidden"
              animate="show"
              variants={fadeUp}
              className="mt-4 font-serif text-4xl font-bold leading-[1.08] text-balance uppercase text-stone-50 drop-shadow-[0_4px_18px_rgba(0,0,0,0.45)] sm:text-5xl lg:text-7xl"
            >
              DO YOUR LIPS{' '}
              <span className="bg-linear-to-r from-[#c98b7a] via-[#d9a595] to-[#f4e6dd] bg-clip-text text-transparent gradient-text-shimmer">
                disappear
              </span>{' '}
              UNLESS YOU WEAR LIPSTICK?
            </motion.h1>

            <motion.div
              custom={2}
              initial="hidden"
              animate="show"
              variants={fadeUp}
              className="mt-6 space-y-4 text-base leading-relaxed text-stone-200 lg:text-[1.2rem]"
            >
              <p>
                You put on lipstick just to feel &quot;finished,&quot; even when your lip border looks faded and your lips just blend into your face in photos.
              </p>
            </motion.div>

            <motion.div
              custom={3}
              initial="hidden"
              animate="show"
              variants={fadeUp}
              className="mt-8 flex flex-col gap-3 sm:flex-row"
            >
              <a
                href="#contact"
                className="cta-secondary-interaction inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-foreground shadow-lg lg:px-7 lg:py-3.5 lg:text-base"
              >
                Get a consultation
              </a>
              <a
                href={site.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="cta-primary-interaction inline-flex items-center justify-center rounded-full bg-[#25D366] px-6 py-3 text-sm font-semibold text-white shadow-lg hover:bg-[#20bd5a] lg:px-7 lg:py-3.5 lg:text-base"
              >
                Send us a photo
              </a>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2"
        aria-hidden="true"
      >
        <div className="scroll-indicator flex flex-col items-center gap-2 text-stone-200/70">
          <span className="text-[0.65rem] font-medium uppercase tracking-[0.25em]">Scroll</span>
          <svg width="14" height="22" viewBox="0 0 14 22" fill="none" className="text-stone-200/60">
            <rect x="0.5" y="0.5" width="13" height="21" rx="6.5" stroke="currentColor" />
            <circle cx="7" cy="7" r="2" fill="currentColor" />
          </svg>
        </div>
      </motion.div>
    </section>
  )
}
