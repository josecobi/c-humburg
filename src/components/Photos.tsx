'use client'
import clsx from 'clsx'
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image, { StaticImageData } from "next/image";
import emmy from '@/images/logos/emmy-statuette-gold.svg'


type PhotoProps = {
  images: StaticImageData[];
  heroTitle?: string;
  heroSubtitle?: string;
  name?: string;
};

export default function Photos({ images }: PhotoProps) {
  const rotations = ["rotate-2", "-rotate-2", "rotate-2", "rotate-2", "-rotate-2"];
  const [activeIndex, setActiveIndex] = useState(0);

  // Auto-cycle for slideshow
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="relative mt-0 sm:mt-20 w-full min-h-screen sm:min-h-0">

      {/* 📱 Mobile → Fullscreen slideshow with overlay text */}
      <div className="absolute top-0 left-0 flex items-center justify-center h-screen w-full sm:hidden">

        {/* Slideshow */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndex}
            initial={{opacity: 1, scale: 1 }}
            animate={{ opacity: 1,  scale: 1 }}
            exit={{ opacity: 1, scale: 1.2,  }}
            transition={{ duration: 15, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <div className="relative flex items-center justify-center h-screen w-full overflow-hidden bg-black">
  <div className="relative w-full h-full">
    <Image
      src={images[activeIndex]}
      alt={`Poster ${activeIndex + 1}`}
      fill
      className="object-contain object-top scale-[1.05]" // subtle zoom-in
      priority
    />
  </div>

  {/* optional gradient backdrop to fill edges gracefully */}
  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
</div>

            {/* <Image
              src={images[activeIndex]}
              alt=""
              fill
              className="object-cover"
              priority
            /> */}
            {/* Dark gradient overlay for readability */}
            <div className="absolute inset-0 bg-black/50" />
          </motion.div>
        </AnimatePresence>

        {/* Overlay text */}
        <div className="relative z-10 px-6 text-center text-white">
          <h1 className="text-4xl font-bold sm:text-5xl">Claudia Humburg</h1>
          <p className="mt-4 text-lg font-medium">
            Make Up &amp; Hair Designer
          </p>
           <div className="flex items-start gap-2 max-w-xl">
          <Image src={emmy} alt="Award" className="inline h-14 w-14 mr-2 drop-shadow-lg" />
          <p className="mt-2 text-base">
            Nominated for 2 Primetime Emmy Awards
          </p>
          </div>
        </div>
      </div>

      {/* 💻 Desktop → Collage */}
      <div className="-my-4 hidden justify-center gap-5 flex-shrink  px-4 py-4 sm:flex sm:gap-8">
        {images.map((image, i) => (
          <motion.div
            key={i}
            className={clsx(
              "relative aspect-2/3 w-40 sm:w-64 md:w-72 flex rounded-xl bg-zinc-100 dark:bg-zinc-800",
              // rotations[i % rotations.length]
            )}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: i * 0.10,
              ease: "easeOut",
            }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <Image
              src={image}
              alt=""
              sizes="(min-width: 640px) 18rem, 11rem"
              className="absolute inset-0 h-full w-full object-cover rounded-xl"
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
}


// // 'use client'
// // import clsx from 'clsx'
// // import { useState, useEffect } from "react";
// // import { motion, AnimatePresence } from "framer-motion";
// // import Image, { StaticImageData } from "next/image";

// // type PhotoProps = {
// //   images: StaticImageData[];
// // };

// // export default function Photos({ images }: PhotoProps) {
// //   const rotations = ["rotate-2", "-rotate-2", "rotate-2", "rotate-2", "-rotate-2"];
// //   const [activeIndex, setActiveIndex] = useState(0);

// //   // Auto-cycle for slideshow (mobile)
// //   useEffect(() => {
// //     const interval = setInterval(() => {
// //       setActiveIndex((prev) => (prev + 1) % images.length);
// //     }, 3500);
// //     return () => clearInterval(interval);
// //   }, [images.length]);

// //   return (
// //     <div className="relative mt-16 sm:mt-20 w-full">
// //       {/* 📱 Mobile → Slideshow with blurred background */}
// //       <div className="relative flex justify-center items-center sm:hidden">
// //         {/* Background blur */}
// //         <div className="absolute inset-0 -z-10">
// //           <Image
// //             src={images[activeIndex]}
// //             alt=""
// //             fill
// //             className="object-cover blur-3xl scale-110 opacity-70"
// //             priority
// //           />
// //           <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent" />
// //         </div>

// //         {/* Foreground slideshow */}
// //         <div className="relative w-4/5 max-w-xs aspect-[2/3] overflow-hidden rounded-xl shadow-2xl sm:max-w-md">
// //           <AnimatePresence mode="wait">
// //             <motion.div
// //               key={activeIndex}
// //               initial={{ opacity: 0 }}
// //               animate={{ opacity: 1 }}
// //               exit={{ opacity: 0 }}
// //               transition={{ duration: 0.6, ease: "easeInOut" }}
// //               className="absolute inset-0"
// //             >
// //               <Image
// //                 src={images[activeIndex]}
// //                 alt=""
// //                 fill
// //                 className="object-cover"
// //                 priority
// //               />
// //             </motion.div>
// //           </AnimatePresence>
// //         </div>
// //       </div>

// //       {/* 💻 Desktop → Collage */}
// // <div className="-my-4 hidden justify-center gap-5 overflow-hidden py-4 sm:flex sm:gap-8">
// //   {images.map((image, i) => (
// //     <motion.div
// //       key={i}
// //       className={clsx(
// //         "relative aspect-2/3 w-40 sm:w-64 md:w-72 flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800",
// //         rotations[i % rotations.length]
// //       )}
// //       initial={{ opacity: 0, y: 20 }}          // start slightly down and invisible
// //       whileInView={{ opacity: 1, y: 0 }}       // fade in and move to natural position
// //       transition={{
// //         duration: 0.8,
// //         delay: i * 0.15,                      // stagger the images slightly
// //         ease: "easeOut",
// //       }}
// //       viewport={{ once: true, amount: 0.3 }}   // animate only once when in view
// //     >
// //       <Image
// //         src={image}
// //         alt=""
// //         sizes="(min-width: 640px) 18rem, 11rem"
// //         className="absolute inset-0 h-full w-full object-cover"
// //       />
// //     </motion.div>
// //   ))}
// // </div>
// //     </div>
// //   );
// // }

// 'use client'

// import { useState, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import Image, { StaticImageData } from "next/image";
// import emmy from '@/images/logos/emmy-statuette-gold.svg'

// type PhotoProps = {
//   images: StaticImageData[];
//   name?: string;
// };

// export default function Photos({ images, name = "Claudia Humburg" }: PhotoProps) {
//   const [activeIndex, setActiveIndex] = useState(0);

//   // Auto-cycle for slideshow
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setActiveIndex((prev) => (prev + 1) % images.length);
//     }, 7000); // slower transition
//     return () => clearInterval(interval);
//   }, [images.length]);

//   return (
//     <div className="relative h-screen w-full overflow-hidden sm:hidden">
//       {/* Background slideshow with minimal cropping */}
//       <AnimatePresence mode="wait">
//         <motion.div
//           key={activeIndex}
//           initial={{ opacity: 1, scale: 1 }}
//           animate={{ opacity: 1, scale: 1 }}
//           exit={{ opacity: 1, scale: 1.2 }}
//           transition={{ duration: 8  }} // slower fade/zoom
//           className="absolute inset-0"
//         >
//           <Image
//             src={images[activeIndex]}
//             alt=""
//             fill
//             className="object-contain object-center w-full h-full bg-black"
//             priority
//           />
//           {/* Gradient overlay for readability */}
//           <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
//         </motion.div>
//       </AnimatePresence>

//       {/* Overlayed hero text */}
//       <div className="relative z-10 flex flex-col items-center justify-center h-full px-6 text-center">
//         <h1 className="text-4xl font-bold text-white drop-shadow-lg">{name}</h1>
//         <p className="mt-4 text-lg font-medium text-white drop-shadow">
//           Make Up &amp; Hair Designer
//         </p>
//         <div className="flex items-center justify-center gap-2 mt-6">
//           <Image src={emmy} alt="Award" className="h-12 w-12 drop-shadow-lg" />
//           <span className="text-base text-white font-semibold drop-shadow">
//             Nominated for 2 Primetime Emmy Awards
//           </span>
//         </div>
//       </div>
//     </div>
//   )
// }