"use client";

import React, { useEffect, useRef, useState } from "react";
import Masonry from "masonry-layout";
import Image, { StaticImageData } from "next/image";
import { motion } from "framer-motion";
import { Lightbox, LightboxImage } from "@/components/Lightbox";

type GalleryImage = {
  src: string | StaticImageData;
  width?: number;
  height?: number;
  alt?: string;
  span?: number;
  rotate?: number;
  delay?: number;
  direction?: string;
  xInitial?: number;
  rotateInitial?: number;
  yInitial?: number;
  rotateEnd?: number;
  scale?: number;
  scaleEnd?: number;
  opacityInitial?: number;
  transformOrigin?: string;
  caption?: string;
};

type PolaroidGalleryProps = {
  images: GalleryImage[];
  columnWidth?: number;
  gutter?: number;
};

const PolaroidGallery: React.FC<PolaroidGalleryProps> = ({
  images,
  columnWidth = 300,
  gutter = 16,
}) => {
  const gridRef = useRef<HTMLDivElement>(null);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    if (!gridRef.current) return;

    const msnry = new Masonry(gridRef.current, {
      itemSelector: ".grid-item",
      columnWidth,
      gutter,
      percentPosition: false,
      horizontalOrder: true,
    });

    const imgs = gridRef.current.querySelectorAll("img");
    imgs.forEach((img) => {
      img.addEventListener("load", () => {
        msnry?.layout?.();
      });
    });

    return () => {
      msnry?.destroy?.();
    };
  }, [images, columnWidth, gutter]);

  // Handler to open lightbox
  const openLightbox = (index: number) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

  return (
    <>
      <section className="px-4 py-12">
        <div ref={gridRef} className="relative">
          <div
            className="grid-sizer"
            style={{ width: columnWidth, visibility: "hidden" }}
          />
          {images.map((img, i) => {
            const span = img.span || 1;
            const delay = img.delay || i * 0.1;

            // default width based on span
            let itemWidth = columnWidth * span + gutter * (span - 1);

            // on mobile, force items to fit screen width
            if (typeof window !== "undefined" && window.innerWidth < 640) {
              itemWidth = window.innerWidth - gutter * 2; // padding from both sides
            }

            return (
              <motion.div
                key={i}
                className="grid-item mb-4 rounded-2xl shadow-xl overflow-hidden bg-gray-50 cursor-pointer group"
                style={{ width: itemWidth, maxWidth: "100%" }}
                initial={{
                  opacity: 0,
                  y: img.yInitial || 0,
                  x: img.xInitial || 0,
                  rotate: img.rotateInitial || 0,
                  scale: img.scale || 1,
                  transformOrigin: img.transformOrigin || "center center",
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  x: 0,
                  rotate: 0,
                  scale: img.scaleEnd || 1,
                }}
                whileHover={{
                  scale: (img.scaleEnd || 1) * 1.05,
                  transition: { duration: 0.3 },
                }}
                transition={{
                  type: "spring",
                  stiffness: 80,
                  damping: 18,
                  mass: 1.2,
                  duration: 0.5,
                  delay,
                  ease: "easeOut",
                }}
                viewport={{ once: true, amount: 0.3 }}
                onClick={() => openLightbox(i)}
              >
                <figure className="relative w-full p-4 rounded-xl">
                  {/* Zoom icon indicator */}
                  <div className="absolute top-6 right-6 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                    <div className="bg-black/60 backdrop-blur-sm rounded-full p-2">
                      <svg
                        className="w-5 h-5 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7"
                        />
                      </svg>
                    </div>
                  </div>

                  <Image
                    src={img.src}
                    alt={img.alt || `Image ${i + 1}`}
                    width={img.width}
                    height={img.height}
                    className="w-full h-auto object-contain"
                  />
                  <figcaption className="mt-4 text-center text-gray-700 font-gloria">
                    Behind the Scenes
                  </figcaption>
                </figure>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Lightbox Modal */}
      <Lightbox
        images={images as LightboxImage[]}
        currentIndex={currentImageIndex}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
      />
    </>
  );
};

export default PolaroidGallery;


// 'use client'

// import React, { useEffect, useRef } from "react";
// import Masonry from "masonry-layout";
// import Image, { StaticImageData } from "next/image";
// import { motion } from "framer-motion";

// type GalleryImage = {
//   src: string | StaticImageData;
//   width?: number;
//   height?: number;
//   alt?: string;
//   span?: number; // number of columns to span
//   rotate?: number; // degrees to rotate
//   delay?: number; // animation delay
//   direction?: string; // animation direction
//   xInitial?: number;
//   rotateInitial?: number;
//   yInitial?: number;
//   rotateEnd?: number;
//   scale?: number;
//   scaleEnd?: number;
//   opacityInitial?: number;
// };

// type MasonryGalleryProps = {
//   images: GalleryImage[];
//   columnWidth?: number; // in px
//   gutter?: number; // in px
// };

// const MasonryGallery: React.FC<MasonryGalleryProps> = ({
//   images,
//   columnWidth = 300,
//   gutter = 16,
// }) => {
//   const gridRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     if (!gridRef.current) return;

//     const msnry = new Masonry(gridRef.current, {
//       itemSelector: ".grid-item",
//       columnWidth: columnWidth,
//       gutter: gutter,
//       percentPosition: false,
//       horizontalOrder: true,
//     });

//     // Re-layout after each image loads
//     const imgs = gridRef.current.querySelectorAll("img");
//     imgs.forEach((img) => {
//       img.addEventListener("load", () => {
//         if (msnry && typeof msnry.layout === "function") {
//           msnry.layout();
//         }
//       });
//     });

//     return () => {
//       if (msnry && typeof msnry.destroy === "function") {
//         msnry.destroy();
//       }
//     };
//   }, [images, columnWidth, gutter]);

//   return (
//     <section className="px-4 py-12">
//       <div ref={gridRef} className="relative">
//         {/* invisible grid-sizer element to help Masonry calculate columns */}
//         <div
//           className="grid-sizer"
//           style={{ width: columnWidth, visibility: "hidden" }}
//         />
//         {images.map((img, i,) => {
//           const span = img.span || 1;
//           const itemWidth = columnWidth * span + gutter * (span - 1); // px
//           const delay = img.delay || i * 0.1;
//           const rotate = img.rotateInitial || 0;
//           const scale = img.scale || 1;
//           const rotateEnd = img.rotateEnd || 0;
//           const scaleEnd = img.scaleEnd || 1;
//           const xInitial = img.xInitial || 0;
//           const yInitial = img.yInitial || 0;


//           return (
//             <motion.div
//               key={i}
//               className="grid-item mb-4 rounded-2xl shadow-md overflow-hidden"
//               style={{ width: itemWidth }}
//               initial={{ opacity: 0, y: yInitial, x: xInitial, rotate: rotate, scale: scale }}
//               whileInView={{ opacity: 1, y: 0, x: 0, rotate: rotateEnd, scale: scaleEnd }}
//               // animate={{ x: 0, y: 0, rotate: [rotate, rotateEnd + 5, rotateEnd], scale: 1 }}
//               transition={{ type: "spring", stiffness: 250, damping: 20, mass: 1, duration: 0.5, delay: delay, ease: "easeOut" }}
//               viewport={{ once: true, amount: 0.3 }}
//             >
//               <Image
//                 src={img.src}
//                 alt={img.alt || `Image ${i + 1}`}
//                 width={img.width}
//                 height={img.height}
//                 className="w-full h-auto object-contain"
//               />
//             </motion.div>
//           );
//         })}
//       </div>
//     </section>
//   );
// };

// export default MasonryGallery;



// "use client";

// import React from "react";
// import CustomImage from "../CustomImage/CustomImage";
// import image1 from "@/images/photos/image-1.jpg";
// import image2 from "@/images/photos/image-2.jpg";
// import image3 from "@/images/photos/image-3.jpg";
// import image4 from "@/images/photos/image-4.jpg";
// import image5 from "@/images/photos/image-5.jpg";
// import { motion } from "framer-motion";

// const images = [
//   { src: image1, delay: 0.2, direction: "x" },
//   { src: image2, delay: 0.4, direction: "-y" },
//   { src: image3, delay: 0.6, direction: "y" },
//   { src: image4, delay: 0.8, direction: "-x" },
//   { src: image5, delay: 1.0, direction: "y" },
// ];

// const Gallery = () => {
//   return (
//     <section className="px-4 py-12">
//       {/* Masonry-style columns */}
//       <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
//         {images.map((img, i) => (
//           <motion.div
//             key={i}
//             className="break-inside-avoid overflow-hidden rounded-2xl shadow-md"
//             initial={{ opacity: 0, [img.direction]: 40 }}
//             whileInView={{ opacity: 1, [img.direction]: 0 }}
//             transition={{ duration: 0.7, delay: img.delay, ease: "easeOut" }}
//             viewport={{ once: true, amount: 0.2 }}
//           >
//             <CustomImage
//               imageSource={img.src}
//               imageStyle={{ width: "100%", height: "auto" }}
//             />
//           </motion.div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Gallery;

// "use client";
// import React from "react";
// import styles from "./Gallery.module.css";
// import CustomImage from "../CustomImage/CustomImage";
// import image1 from '@/images/photos/image-1.jpg'
// import image2 from '@/images/photos/image-2.jpg'
// import image3 from '@/images/photos/image-3.jpg'
// import image4 from '@/images/photos/image-4.jpg'
// import image5 from '@/images/photos/image-5.jpg'
// import {motion} from 'framer-motion'


// const Gallery = () => {
//     return (
//         <section className={styles.section}>
//             <div className={styles.gallery}>
//                 <motion.div
//                     className={styles.imageContainer}
//                     style={{ justifyContent: "flex-start" }}
//                     initial={{opacity: 0}}
//                     whileInView={{opacity: 1}}
//                     transition={{ duration: 0.5, delay: 0.5, ease: "easeOut"}}

//                 >
//                     <CustomImage
//                         imageSource={image1}
//                         imageStyle={{ width: "100%" }}
//                     />
//                 </motion.div>
//                 <motion.div
//                     className={styles.imageContainer}
//                     style={{ justifyContent: "flex-start" }}
//                     initial={{opacity: 0}}
//                     whileInView={{opacity: 1}}
//                     transition={{ duration: 0.5, delay: 0.75, ease: "easeOut"}}

//                 >
//                     <CustomImage
//                         imageSource={image2}
//                         imageStyle={{ width: "100%" }}
//                     />
//                 </motion.div>
//                 <motion.div
//                     className={styles.imageContainer}
//                     style={{ justifyContent: "flex-end" }} 
//                     initial={{opacity: 0}}
//                     whileInView={{opacity: 1}}
//                     transition={{ duration: 0.5, delay: 1, ease: "easeOut"}}

//                 >
//                     <CustomImage
//                         imageSource={image3}
//                         imageStyle={{ width: "100%" }}
//                     />
//                 </motion.div>
//                 <motion.div
//                     className={styles.imageContainer}
//                     style={{ justifyContent: "flex-start" }}
//                     initial={{opacity: 0}}
//                     whileInView={{opacity: 1}}
//                     transition={{ duration: 0.5, delay: 1.25, ease: "easeOut"}}

//                 >
//                     <CustomImage
//                         imageSource={image4}
//                         imageStyle={{ width: "100%" }}
//                     />
//                 </motion.div>
//                 <motion.div
//                     className={styles.imageContainer}
//                     style={{ justifyContent: "flex-start" }} 
//                     initial={{opacity: 0}}
//                     whileInView={{opacity: 1}}
//                     transition={{ duration: 0.5, delay: 1.25, ease: "easeOut"}}

//                 >
//                     <CustomImage
//                         imageSource={image5}
//                         imageStyle={{ width: "100%" }}
//                     />
//                 </motion.div>
                
//             </div>
//         </section>
//     );
// };

// export default Gallery;
