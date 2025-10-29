// components/CTA.tsx
import Link from 'next/link'

export default function CTA({
  eyebrow = 'Ready to collaborate?',
  heading = 'Let’s make something beautiful together',
  ctaLabel = 'Get in touch',
  ctaHref = '/contact',
}: {
  eyebrow?: string
  heading?: string
  ctaLabel?: string
  ctaHref?: string
}) {
  return (
    <section className="bg-gradient-to-r from-teal-50 to-white dark:from-zinc-800 dark:to-zinc-900 py-12">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="rounded-2xl border border-zinc-100 dark:border-zinc-800 p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <p className="text-sm font-semibold text-teal-600 dark:text-teal-400">
              {eyebrow}
            </p>
            <h3 className="mt-1 text-xl font-semibold text-zinc-900 dark:text-zinc-50">
              {heading}
            </h3>
          </div>

          <div className="flex-shrink-0">
            <Link
              href={ctaHref}
              className="inline-flex items-center rounded-full bg-teal-500 px-4 py-2 text-sm font-semibold text-white hover:bg-teal-600"
            >
              {ctaLabel}
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
