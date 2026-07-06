'use client'

import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { cn } from '@/lib/utils'
import { site } from '@/lib/site'
import { WhatsAppIcon } from './icons'

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [showMobileCta, setShowMobileCta] = useState(false)

  useEffect(() => {
    const hero = document.getElementById('top')

    const onScroll = () => {
      setScrolled(window.scrollY > 24)

      if (!hero) {
        setShowMobileCta(false)
        return
      }

      setShowMobileCta(hero.getBoundingClientRect().bottom <= 0)
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <header
        className={cn(
          'fixed inset-x-0 top-0 z-50 transition-all duration-500',
          scrolled
            ? 'border-b border-border/70 bg-background/90 backdrop-blur-md'
            : 'border-b border-transparent bg-transparent',
        )}
      >
        <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-10">
          {/* Wordmark */}
          <a
            href="#top"
            className={cn(
              'font-serif text-xl font-semibold uppercase tracking-[0.28em] transition-colors sm:text-2xl',
              scrolled ? 'text-foreground' : 'text-background',
            )}
          >
            {site.name}
          </a>

          {/* Desktop nav */}
          <ul className="hidden items-center gap-10 md:flex">
            {site.navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={cn(
                    'text-sm font-medium tracking-wide transition-colors hover:text-primary',
                    scrolled ? 'text-foreground/80' : 'text-background/90',
                  )}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Desktop CTA */}
          <a
            href={site.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center gap-2 rounded-full bg-[#25D366] px-6 py-3 text-sm font-semibold text-white shadow-md transition-all hover:bg-[#20bd5a] hover:shadow-lg md:inline-flex"
          >
            <WhatsAppIcon className="size-4" />
            Send a Photo
          </a>

          {/* Mobile toggle */}
          <button
            type="button"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            className={cn(
              'inline-flex size-10 items-center justify-center rounded-full transition-colors md:hidden',
              scrolled || menuOpen ? 'text-foreground' : 'text-background',
            )}
          >
            {menuOpen ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>
        </nav>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="border-t border-border/70 bg-background/95 backdrop-blur-md md:hidden">
            <ul className="flex flex-col gap-1 px-6 py-4">
              {site.navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="block rounded-lg px-2 py-3 text-base font-medium text-foreground/85 transition-colors hover:bg-secondary hover:text-primary"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </header>

      {showMobileCta && !menuOpen && (
        <div className="pointer-events-none fixed inset-x-0 bottom-0 z-50 px-4 pb-4 md:hidden">
          <a
            href={site.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="pointer-events-auto inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#25D366] px-6 py-4 text-sm font-semibold text-white shadow-lg transition-all hover:bg-[#20bd5a] hover:shadow-xl"
          >
            <WhatsAppIcon className="size-4" />
            Send a Photo
          </a>
        </div>
      )}
    </>
  )
}
