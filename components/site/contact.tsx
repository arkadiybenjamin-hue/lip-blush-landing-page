'use client'

import { useState } from 'react'
import { Upload } from 'lucide-react'
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
import {
  Field,
  FieldGroup,
  FieldLabel,
} from '@/components/ui/field'
import { Reveal } from './reveal'
import { SectionHeading } from './section-heading'

const services = [
  { value: 'lip-blush', label: 'Lip Blush' },
  { value: 'touch-up', label: 'Touch-Up' },
  { value: 'not-sure', label: 'Not Sure — Need Advice' },
]

export function Contact() {
  const [service, setService] = useState<string>('')

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    toast.success("Thanks! We'll be in touch within 24 hours.", {
      description: 'Keep an eye on your WhatsApp or email.',
    })
    e.currentTarget.reset()
    setService('')
  }

  return (
    <section id="contact" className="scroll-mt-24 bg-background">
      <div className="mx-auto max-w-2xl px-6 py-20 lg:px-10 lg:py-28">
        <SectionHeading
          title="Send a Message"
          subtitle="Tell us a little about what you're looking for."
        />

        <Reveal delay={0.1} className="mt-10">
          <form onSubmit={handleSubmit} className="rounded-2xl border border-border bg-card p-6 shadow-sm lg:p-8">
            <FieldGroup>
              <Field>
                <FieldLabel htmlFor="name">Name</FieldLabel>
                <Input id="name" name="name" placeholder="Your name" required />
              </Field>

              <div className="grid gap-5 sm:grid-cols-2">
                <Field>
                  <FieldLabel htmlFor="phone">Phone / WhatsApp</FieldLabel>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="+44 7700 900000"
                  />
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
                <FieldLabel htmlFor="concern">Main Concern / Message</FieldLabel>
                <Textarea
                  id="concern"
                  name="concern"
                  rows={3}
                  placeholder="Tell us what you're hoping for or any questions you have..."
                />
              </Field>

              <Field>
                <FieldLabel htmlFor="photo">Photo (optional)</FieldLabel>
                <label
                  htmlFor="photo"
                  className="flex cursor-pointer items-center justify-center gap-2 rounded-lg border border-dashed border-border bg-muted/30 px-4 py-6 text-sm text-muted-foreground transition-colors hover:border-primary hover:bg-primary/5 hover:text-foreground"
                >
                  <Upload className="size-4" aria-hidden="true" />
                  <span>Upload a photo of your lips</span>
                </label>
                <input
                  id="photo"
                  name="photo"
                  type="file"
                  accept="image/*"
                  className="hidden"
                />
              </Field>

              <button
                type="submit"
                className="mt-2 inline-flex w-full items-center justify-center rounded-full bg-primary px-8 py-3.5 text-sm font-medium text-primary-foreground shadow-sm transition-all hover:bg-primary/90 hover:shadow-md"
              >
                Send Message
              </button>
            </FieldGroup>
          </form>
        </Reveal>
      </div>
    </section>
  )
}
