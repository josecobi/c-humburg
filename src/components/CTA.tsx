// components/CTA.tsx
import Link from 'next/link'

export default function CTA({
  eyebrow = 'Ready to collaborate?',
  heading = "Let's make something beautiful together",
  ctaLabel = 'Get in touch',
  ctaHref = '/contact',
}: {
  eyebrow?: string
  heading?: string
  ctaLabel?: string
  ctaHref?: string
}) {
  return (
    <section className="relative bg-gradient-to-b from-zinc-50 via-[#D4AF37]/5 to-zinc-50 dark:from-zinc-900 dark:via-[#D4AF37]/5 dark:to-zinc-900 py-16 overflow-hidden">
      {/* Decorative gold lines */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#D4AF37]/50 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#D4AF37]/50 to-transparent" />

      <div className="container mx-auto px-6 lg:px-8 relative">
        <div className="rounded-2xl border-2 border-[#D4AF37]/20 dark:border-[#D4AF37]/30 p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-6 bg-white/50 dark:bg-zinc-800/50 backdrop-blur-sm shadow-xl">
          <div className="flex-1 text-center md:text-left">
            <p className="text-sm font-semibold text-[#D4AF37] uppercase tracking-wider mb-2">
              {eyebrow}
            </p>
            <h3 className="font-playfair text-2xl md:text-3xl lg:text-4xl font-bold text-zinc-900 dark:text-zinc-50 leading-tight">
              {heading}
            </h3>
          </div>

          <div className="flex-shrink-0">
            <Link
              href={ctaHref}
              className="group inline-flex items-center rounded-full bg-gradient-to-r from-[#D4AF37] to-[#F4D03F] px-8 py-4 text-base font-semibold text-black shadow-lg hover:shadow-[0_0_30px_rgba(212,175,55,0.5)] transition-all duration-300 hover:scale-105"
            >
              {ctaLabel}
              <svg
                className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
