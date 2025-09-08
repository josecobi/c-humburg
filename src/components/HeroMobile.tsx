'use client'

import Image from "next/image";
import { useEffect, useState } from "react";

interface HeroMobileProps {
  images: Array<any>;
}

export default function HeroMobile({ images }: HeroMobileProps) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000); // change poster every 5s
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="absolute inset-0 w-full h-screen sm:hidden overflow-hidden z-0">
      <Image
        src={images[current]}
        alt="Hero Poster"
        priority
        className="w-full h-full object-cover transform scale-105 transition-transform duration-1000 ease-out"
      />
      {/* Gradient overlay to keep header text readable */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/30 to-transparent" />
    </div>
  );
}

// // components/HeroMobile.tsx
// "use client";

// import { motion, AnimatePresence } from "framer-motion";
// import Image from "next/image";
// import { useState, useEffect } from "react";

// type HeroMobileProps = {
//   images: { src: string; alt?: string }[];
// };

// export default function HeroMobile({ images }: HeroMobileProps) {
//   const [activeIndex, setActiveIndex] = useState(0);

//   // Cycle images like Netflix carousel
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setActiveIndex((prev) => (prev + 1) % images.length);
//     }, 4000); // 4 seconds per image
//     return () => clearInterval(interval);
//   }, [images.length]);

//   return (
//     <div className="relative w-full h-[70vh] sm:hidden overflow-hidden">
//       {images.map((image, index) => (
//         <AnimatePresence mode="wait" key={index}>
//           {index === activeIndex && (
//             <motion.div
//               key={index}
//               className="absolute inset-0"
//               initial={{ scale: 1 }}
//               animate={{ scale: 1.05 }}
//               exit={{ opacity: 0 }}
//               transition={{ duration: 4, ease: "easeInOut" }}
//             >
//               <Image
//                 src={image.src}
//                 alt={image.alt || ""}
//                 fill
//                 className="object-cover"
//               />
//               {/* Gradient overlay to protect text */}
//               <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/0 to-transparent" />
//             </motion.div>
//           )}
//         </AnimatePresence>
//       ))}
//     </div>
//   );
// }
