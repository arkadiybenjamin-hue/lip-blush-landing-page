'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Clock } from 'lucide-react'
import { toast } from 'sonner'

import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import {
  Field,
  FieldGroup,
  FieldLabel,
} from '@/components/ui/field'
import { Reveal } from './reveal'
import { SectionHeading } from './section-heading'

const services = [
  { value: 'first-session', label: 'Lip Blush — First Session' },
  { value: 'touch-up', label: 'Touch-Up' },
  { value: 'advice', label: 'Not Sure Yet — Need Advice' },
]

const contactMethods = [
  { value: 'whatsapp', label: 'WhatsApp' },
  { value: 'email', label: 'Email' },
  { value: 'phone', label: 'Phone Call' },
]

export function Contact() {
  const [service, setService] = useState<string>('')
  const [contactMethod, setContactMethod] = useState('whatsapp')

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    toast.success("Thanks! We'll be in touch within 24 hours.", {
      description: 'Keep an eye on your preferred contact channel.',
    })
    e.currentTarget.reset()
    setService('')
    setContactMethod('whatsapp')
  }

  return (
    <section id="contact" className="scroll-mt-24 bg-background">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
        <SectionHeading
          eyebrow="Get In Touch"
          title="Book Your Free Consultation"
          subtitle="Tell us a little about what you're after and we'll take it from there."
        />

        <div className="mt-14 grid overflow-hidden rounded-3xl border border-border bg-card shadow-sm lg:grid-cols-2">
          {/* Image side */}
          <Reveal className="relative min-h-72 lg:min-h-full">
            <Image
              src="/images/studio.png"
              alt="Interior of the Maison Lèvres studio"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-foreground/20" />
            <div className="absolute bottom-6 left-6 right-6 flex items-center gap-3 rounded-2xl bg-background/90 px-5 py-4 backdrop-blur-sm">
              <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-primary/12 text-primary">
                <Clock className="size-5" aria-hidden="true" />
              </span>
              <div>
                <p className="text-sm font-medium text-foreground">
                  Usually respond within a few hours
                </p>
                <p className="text-xs text-muted-foreground">
                  Every enquiry is answered personally by your artist.
                </p>
              </div>
            </div>
          </Reveal>

          {/* Form side */}
          <Reveal delay={0.1} className="p-8 lg:p-10">
            <form onSubmit={handleSubmit}>
              <FieldGroup>
                <div className="grid gap-5 sm:grid-cols-2">
                  <Field>
                    <FieldLabel htmlFor="name">Full Name</FieldLabel>
                    <Input id="name" name="name" placeholder="Your name" required />
                  </Field>
                  <Field>
                    <FieldLabel htmlFor="email">Email</FieldLabel>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="you@email.com"
                      required
                    />
                  </Field>
                </div>

                <Field>
                  <FieldLabel htmlFor="phone">Phone Number</FieldLabel>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="+44 7700 900000"
                  />
                </Field>

                <Field>
                  <FieldLabel>Service Interested In</FieldLabel>
                  <Select value={service} onValueChange={(v) => setService(v as string)}>
                    <SelectTrigger className="w-full">
                      <SelectValue>
                        {service
                          ? services.find((s) => s.value === service)?.label
                          : 'Select a service'}
                      </SelectValue>
                    </SelectTrigger>
                    <SelectContent>
                      {services.map((s) => (
                        <SelectItem key={s.value} value={s.value}>
                          {s.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </Field>

                <Field>
                  <FieldLabel htmlFor="message">Message / Concerns</FieldLabel>
                  <Textarea
                    id="message"
                    name="message"
                    rows={4}
                    placeholder="Tell us about your lips, any concerns, or questions you have..."
                  />
                </Field>

                <Field>
                  <FieldLabel>Preferred Contact Method</FieldLabel>
                  <RadioGroup
                    value={contactMethod}
                    onValueChange={(v) => setContactMethod(v as string)}
                    className="grid-cols-3 gap-3"
                  >
                    {contactMethods.map((m) => (
                      <label
                        key={m.value}
                        htmlFor={`contact-${m.value}`}
                        className="flex cursor-pointer items-center gap-2 rounded-xl border border-border px-3 py-2.5 text-sm text-foreground transition-colors has-data-checked:border-primary has-data-checked:bg-primary/5"
                      >
                        <RadioGroupItem value={m.value} id={`contact-${m.value}`} />
                        {m.label}
                      </label>
                    ))}
                  </RadioGroup>
                </Field>

                <button
                  type="submit"
                  className="mt-2 inline-flex w-full items-center justify-center rounded-full bg-primary px-8 py-3.5 text-sm font-medium text-primary-foreground shadow-sm transition-all hover:bg-primary/90 hover:shadow-md"
                >
                  Send My Message
                </button>
              </FieldGroup>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
