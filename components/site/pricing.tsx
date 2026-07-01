'use client'

import { Check } from 'lucide-react'
import { site } from '@/lib/site'
import { WhatsAppIcon } from './icons'
import { Reveal } from './reveal'
import { SectionHeading } from './section-heading'
import { cn } from '@/lib/utils'

const plans = [
  {
    name: 'Lip Blush — First Session',
    price: '$350 – $450',
    description:
      'Your full first appointment: consultation, custom color design, and the initial application.',
    features: ['Custom color match', 'Full procedure (60–90 mins)', 'Aftercare kit included'],
    popular: false,
  },
  {
    name: 'Complimentary Touch-Up',
    price: 'Included',
    description:
      'The perfecting session within 8 weeks of your first appointment — always part of your first session price.',
    features: ['Refines shape & tone', 'Books 4–8 weeks after', 'No extra cost'],
    popular: true,
  },
  {
    name: 'Color Refresh',
    price: '$200 – $280',
    description:
      'Keep your blush looking its best. A yearly refresh to revive color as it naturally softens.',
    features: ['Revives faded tint', 'Adjust shade if desired', 'Recommended yearly'],
    popular: false,
  },
]

export function Pricing() {
  return (
    <section id="pricing" className="scroll-mt-24 bg-secondary">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
        <SectionHeading
          eyebrow="Investment"
          title="Pricing"
          subtitle="Every price includes your consultation, procedure, and complimentary touch-up."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {plans.map((plan, i) => (
            <Reveal
              key={plan.name}
              delay={i * 0.1}
              className={cn(
                'relative flex h-full flex-col rounded-3xl border p-8 shadow-sm',
                plan.popular
                  ? 'border-primary bg-card ring-1 ring-primary'
                  : 'border-border bg-card',
              )}
            >
              {plan.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-primary px-4 py-1 text-xs font-medium uppercase tracking-wider text-primary-foreground">
                  Most Popular
                </span>
              )}

              <h3 className="font-serif text-xl font-medium text-foreground">{plan.name}</h3>
              <p className="mt-3 font-serif text-3xl font-medium text-primary">{plan.price}</p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {plan.description}
              </p>

              <ul className="mt-6 flex-1 space-y-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3 text-sm text-foreground">
                    <span className="flex size-5 shrink-0 items-center justify-center rounded-full bg-primary/12 text-primary">
                      <Check className="size-3" strokeWidth={2.5} aria-hidden="true" />
                    </span>
                    {feature}
                  </li>
                ))}
              </ul>

              <a
                href={site.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  'mt-8 inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-medium transition-all',
                  plan.popular
                    ? 'bg-primary text-primary-foreground hover:bg-primary/90'
                    : 'border border-foreground/20 text-foreground hover:bg-foreground hover:text-background',
                )}
              >
                <WhatsAppIcon className="size-4" />
                Book Consultation
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
