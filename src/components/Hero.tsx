'use client'
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image, { StaticImageData } from "next/image";
import emmy from '@/images/logos/emmy-statuette-gold.svg'
import allPostersHero from '@/images/photos/all-posters-hero.jpg'

type HeroProps = {
  images: StaticImageData[];
  heroTitle?: string;
  heroSubtitle?: string;
  name?: string;
};

export default function Hero({
  images,
  heroTitle = "MAKE UP & HAIR DESIGNER",
  heroSubtitle = "Nominated for 2 Primetime Emmy Awards",
  name = "Claudia Humburg",
}: HeroProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  // Auto-cycle for slideshow (mobile)
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % images.length);
    }, 7000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section className="relative w-full overflow-hidden">
      {/* Desktop: Hero text above single wide image */}
      <div className="hidden md:flex flex-col items-center justify-center pt-16 pb-8 w-full">
        <h1 className="text-5xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 text-center">
          {heroTitle}
        </h1>
        <div className="flex items-center gap-2 mt-6">
          <Image src={emmy} alt="Award" className="h-14 w-14 drop-shadow-lg" />
          <h2 className="text-xl text-zinc-700 font-bold dark:text-zinc-200">
            {heroSubtitle}
          </h2>
        </div>
        {/* Single wide hero image */}
        <div className="mt-10 w-full flex justify-center">
          <div className="relative w-full max-w-[2664px] aspect-[2664/760]">
            <Image
              src={allPostersHero}
              alt="All Posters Hero"
              fill
              className="object-cover"
              priority
              sizes="100vw"
            />
          </div>
        </div>
      </div>

      {/* Mobile: Slideshow at top, hero text below */}
      <div className="block md:hidden">
        {/* Slideshow */}
        <div className="relative w-full h-[65vh] bg-black overflow-hidden z-0">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.04 }}
              transition={{ duration: 2.2, ease: "easeInOut" }}
              className="absolute inset-0 bg-black"
            >
              <Image
                src={images[activeIndex]}
                alt={`Poster ${activeIndex + 1}`}
                fill
                className="object-contain object-top scale-[1.03]"
                priority
              />
              {/* Bottom gradient for hero text readability */}
              {/* <div className="absolute inset-0 pointer-events-none">
                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/95 via-black/80 to-transparent" />
              </div> */}
            </motion.div>
          </AnimatePresence>
        </div>
        {/* Hero text below slideshow */}
        <div className="relative z-10 flex flex-col items-center justify-end pt-4 pb-4 px-3 text-center bg-transparent">
          <h1 className="text-4xl font-bold text-zinc-800 dark:text-zinc-100 drop-shadow-lg">
            {name}
          </h1>
          <p className="mt-4 text-lg font-medium text-zinc-800 dark:text-zinc-100 drop-shadow">
            {heroTitle}
          </p>
          <div className="flex items-center justify-center gap-2 mt-6">
            <Image src={emmy} alt="Award" className="h-12 w-12 drop-shadow-lg" />
            <span className="text-base text-zinc-800 dark:text-zinc-100 font-semibold drop-shadow">
              {heroSubtitle}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}