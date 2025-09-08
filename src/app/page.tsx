'use client'
import dynamic from "next/dynamic";
import Link from 'next/link'
import clsx from 'clsx'
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image, { StaticImageData } from "next/image";


import { Button } from '@/components/Button'
import CardLeft  from '@/components/CardLeft'
import CardRight  from '@/components/CardRight'
import { Container } from '@/components/Container'
import {
  InstagramIcon,
} from '@/components/SocialIcons'

import { imagesPortHighlight, imagesBehindScenes } from '@/data/galleryImages'

import image5 from '@/images/photos/hunters_Al_Pacino-no-border.jpg'
import image2 from '@/images/photos/hayek_avon.jpg'
import image1 from '@/images/photos/lady-in-the-lake-poster.jpg'
import image3 from '@/images/photos/home_09.jpg'
import image4 from '@/images/photos/home_21-no-border.jpg'
import bigLittleLiesWide from '@/images/services/big-little-lies.jpg'
import ladyCar from '@/images/services/lady-car.jpg'
import bodyPaint from '@/images/services/body-face-paint.jpg'
import Gallery from '@/components/Gallery/Gallery'
import emmy from '@/images/logos/emmy-statuette-gold.svg'
import { services } from '@/data/services'

const MasonryGallery = dynamic(
  () => import("@/components/Gallery/Gallery"),
  { ssr: false } // disables server-side rendering
);

function SocialLink({
  icon: Icon,
  ...props
}: React.ComponentPropsWithoutRef<typeof Link> & {
  icon: React.ComponentType<{ className?: string }>
}) {
  return (
    <Link className="group -m-1 p-1" {...props}>
      <Icon className="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300" />
    </Link>
  )
}

type PhotoProps = {
  images: StaticImageData[];
};

export function Photos({ images }: PhotoProps) {
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


// function Photos() {
//   let rotations = ['rotate-2', '-rotate-2', 'rotate-2', 'rotate-2', '-rotate-2']

//   return (
//     <div className="mt-16 sm:mt-20">
//       <div className="-my-4 flex justify-center gap-5 overflow-hidden py-4 sm:gap-8">
//         {[image1, image2, image3, image4, image5].map((image, imageIndex) => (
//           <div
//             key={image.src}
//             className={clsx(
//               'relative aspect-2/3 w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 sm:w-72 sm:rounded-2xl dark:bg-zinc-800',
//               rotations[imageIndex % rotations.length],
//             )}
//           >
//             <Image
//               src={image}
//               alt=""
//               sizes="(min-width: 640px) 18rem, 11rem"
//               className="absolute inset-0 h-full w-full object-cover"
//             />

//           </div>
//         ))}
//       </div>
//     </div>
//   )
// }

export default async function Home() {

  return (
    <>
    
      <Container className="mt-9">
        <div className="max-w-2xl">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
            MAKE UP & HAIR DESIGNER
          </h1>
          <div className="flex items-start gap-2 max-w-xl">
            <Image src={emmy} alt="Award" className="inline h-14 w-14 mr-2 drop-shadow-lg" />
            <h2 className="mt-6 text-xl text-zinc-700 font-bold dark:text-zinc-200">
              Nominated for 2 Primetime Emmy Awards
            </h2>
          </div>
          {/* <div className="mt-6 flex gap-6">
            <SocialLink
              href="#"
              aria-label="Follow on Instagram"
              icon={InstagramIcon}
            />
          </div> */}
        </div>
      </Container>
       <Photos images={[image1, image2, image3, image4, image5]}/>
     
      <Container className="mt-24 md:mt-28">
        <h2 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
            On Location Services
          </h2>
        <CardLeft image={services[0].image} alt={services[0].alt} title={services[0].title} description={services[0].description} link={services[0].link} />
        <CardRight image={services[1].image} alt={services[1].alt} title={services[1].title} description={services[1].description} link={services[1].link} />
        <CardLeft image={services[2].image} alt={services[2].alt} title={services[2].title} description={services[2].description} link={services[2].link} />

        
      </Container>

      <Container className="mt-24 md:mt-28">
        <h2 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
            Portfolio Highlights
          </h2>
        <MasonryGallery images={imagesPortHighlight}/>
      </Container>
      <Container className="mt-24 md:mt-28">
        <h2 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
            Behind the Scene
          </h2>
        <MasonryGallery images={imagesBehindScenes}/>
      </Container>
    </>
  )
}
