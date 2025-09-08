'use client'
import clsx from 'clsx'
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image, { StaticImageData } from "next/image";

type PhotoProps = {
  images: StaticImageData[];
};

export default function Photos({ images }: PhotoProps) {
  const rotations = ["rotate-2", "-rotate-2", "rotate-2", "rotate-2", "-rotate-2"];
  const [activeIndex, setActiveIndex] = useState(0);

  // Auto-cycle for slideshow (mobile)
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % images.length);
    }, 3500);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="relative mt-16 sm:mt-20 w-full">
      {/* 📱 Mobile → Slideshow with blurred background */}
      <div className="relative flex justify-center items-center sm:hidden">
        {/* Background blur */}
        <div className="absolute inset-0 -z-10">
          <Image
            src={images[activeIndex]}
            alt=""
            fill
            className="object-cover blur-3xl scale-110 opacity-70"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent" />
        </div>

        {/* Foreground slideshow */}
        <div className="relative w-4/5 max-w-xs aspect-[2/3] overflow-hidden rounded-xl shadow-2xl sm:max-w-md">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              className="absolute inset-0"
            >
              <Image
                src={images[activeIndex]}
                alt=""
                fill
                className="object-cover"
                priority
              />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* 💻 Desktop → Collage */}
<div className="-my-4 hidden justify-center gap-5 overflow-hidden py-4 sm:flex sm:gap-8">
  {images.map((image, i) => (
    <motion.div
      key={i}
      className={clsx(
        "relative aspect-2/3 w-40 sm:w-64 md:w-72 flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800",
        rotations[i % rotations.length]
      )}
      initial={{ opacity: 0, y: 20 }}          // start slightly down and invisible
      whileInView={{ opacity: 1, y: 0 }}       // fade in and move to natural position
      transition={{
        duration: 0.8,
        delay: i * 0.15,                      // stagger the images slightly
        ease: "easeOut",
      }}
      viewport={{ once: true, amount: 0.3 }}   // animate only once when in view
    >
      <Image
        src={image}
        alt=""
        sizes="(min-width: 640px) 18rem, 11rem"
        className="absolute inset-0 h-full w-full object-cover"
      />
    </motion.div>
  ))}
</div>
    </div>
  );
}