"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

type HeroProps = {
  eyebrow?: string;
  title: React.ReactNode;
  subtitle?: string;
  ctaLabel?: string;
  ctaHref?: string;
  image?: string;
  overlay?: boolean;
  showScrollIndicator?: boolean;
};

export default function Hero({
  eyebrow,
  title,
  subtitle,
  ctaLabel = "Contact",
  ctaHref = "/contact",
  image,
  overlay = true,
  showScrollIndicator = true,
}: HeroProps) {
  // Scroll down handler
  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight * 0.85,
      behavior: "smooth",
    });
  };

  return (
    <section className="relative w-full overflow-hidden">
      {/* Full-width image background */}
      {image && (
        <div className="absolute inset-0 -z-10">
          <Image
            src={image}
            alt=""
            fill
            priority
            className="object-cover object-center scale-105"
          />
          {overlay && (
            <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80" />
          )}
        </div>
      )}

      {/* Spotlight effect overlay */}
      <div className="absolute inset-0 spotlight-effect -z-5" />

      {/* Film grain texture (optional) */}
      <div className="absolute inset-0 -z-5 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxwYXRoIGQ9Ik0wIDBoMzAwdjMwMEgweiIgZmlsdGVyPSJ1cmwoI2EpIiBvcGFjaXR5PSIuMDUiLz48L3N2Zz4=')]" />

      <div className="relative flex items-center justify-center min-h-[70vh] md:min-h-[85vh] px-4">
        <div className="max-w-5xl mx-auto text-center">
          {/* Eyebrow with cinematic styling */}
          {eyebrow && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-6"
            >
              <p className="inline-block text-xs sm:text-sm font-semibold text-[#D4AF37] uppercase tracking-[0.3em] border border-[#D4AF37]/30 px-6 py-2 rounded-full backdrop-blur-sm bg-black/20">
                {eyebrow}
              </p>
            </motion.div>
          )}

          {/* Main title with cinematic fonts */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="font-bebas text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white tracking-wider leading-[0.95] text-cinematic-shadow mb-6"
          >
            {title}
          </motion.h1>

          {/* Gold accent line */}
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "120px" }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="h-1 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mx-auto mb-6"
          />

          {/* Subtitle with elegant font */}
          {subtitle && (
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="font-playfair text-lg sm:text-xl md:text-2xl text-zinc-200 dark:text-zinc-300 max-w-3xl mx-auto leading-relaxed font-light italic"
            >
              {subtitle}
            </motion.p>
          )}

          {/* CTA Buttons with cinematic styling */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="mt-10 flex flex-wrap justify-center gap-4"
          >
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
            <Link
              href="/bio"
              className="inline-flex items-center rounded-full px-8 py-4 text-base font-medium text-white border-2 border-white/30 hover:border-white/60 hover:bg-white/10 backdrop-blur-sm transition-all duration-300"
            >
              Learn more
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      {showScrollIndicator && (
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          onClick={scrollToContent}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/70 hover:text-white transition-colors cursor-pointer group"
          aria-label="Scroll to content"
        >
          <span className="text-xs uppercase tracking-wider font-medium">Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <ChevronDownIcon className="w-6 h-6" />
          </motion.div>
        </motion.button>
      )}
    </section>
  );
}
