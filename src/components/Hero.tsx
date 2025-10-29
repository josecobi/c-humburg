// components/Hero.tsx
import Image from 'next/image'
import Link from 'next/link'

type HeroProps = {
  eyebrow?: string
  title: React.ReactNode
  subtitle?: string
  ctaLabel?: string
  ctaHref?: string
  image?: string // optional full-width background image
  overlay?: boolean // optional dark overlay
}

export default function Hero({
  eyebrow,
  title,
  subtitle,
  ctaLabel = 'Contact',
  ctaHref = '/contact',
  image,
  overlay = true,
}: HeroProps) {
  return (
    <section className="relative w-full">
      {/* Full-width image background */}
      {image && (
        <div className="absolute inset-0 -z-10">
          <Image
            src={image}
            alt=""
            fill
            priority
            className="object-cover object-center"
          />
          {overlay && (
            <div className="absolute inset-0 bg-black/50 dark:bg-black/60" />
          )}
        </div>
      )}

      <div className="relative flex items-center justify-center min-h-[60vh] md:min-h-[75vh]">
        <div className="max-w-3xl mx-auto px-6 text-center">
          {eyebrow && (
            <p className="mb-3 text-sm font-medium text-teal-400 uppercase tracking-wide">
              {eyebrow}
            </p>
          )}

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-zinc-100 dark:text-zinc-50 drop-shadow-lg">
            {title}
          </h1>

          {subtitle && (
            <p className="mt-4 text-lg text-zinc-200 dark:text-zinc-300 max-w-2xl mx-auto">
              {subtitle}
            </p>
          )}

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href={ctaHref}
              className="inline-flex items-center rounded-full bg-teal-500 px-6 py-3 text-sm font-semibold text-white shadow hover:bg-teal-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-400"
            >
              {ctaLabel}
            </Link>
            <Link
              href="/bio"
              className="inline-flex items-center rounded-full px-6 py-3 text-sm font-medium text-white/80 hover:text-white hover:bg-white/10 backdrop-blur-sm transition"
            >
              Learn more
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
