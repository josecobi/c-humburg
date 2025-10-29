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
  caption?: string;
  // Additional metadata for lightbox
  production?: string;
  year?: string;
  role?: string;
  network?: string;
  actors?: string;
};

type MasonryGalleryProps = {
  images: GalleryImage[];
  columnWidth?: number;
  gutter?: number;
};

const MasonryGallery: React.FC<MasonryGalleryProps> = ({
  images,
  columnWidth = 300,
  gutter = 16,
}) => {
  const gridRef = useRef<HTMLDivElement | null>(null);
  const msnryRef = useRef<Masonry | null>(null);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

useEffect(() => {
  if (!gridRef.current) return;

  // Create the Masonry instance and store it
  const msnryInstance = new Masonry(gridRef.current, {
    itemSelector: ".grid-item",
    columnWidth,
    gutter,
    percentPosition: false,
    horizontalOrder: false,
    fitWidth: true,
  });

  msnryRef.current = msnryInstance;

  // Re-layout after image load
  const imgs = gridRef.current.querySelectorAll("img");
  imgs.forEach((img) => {
    img.addEventListener("load", () => {
      msnryRef.current?.layout?.(); // ✅ Optional chaining fixes the error
    });
  });

  // Handle window resize with debounce
  let resizeTimer: NodeJS.Timeout;
  const handleResize = () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
      // Use requestAnimationFrame to ensure DOM has settled
      requestAnimationFrame(() => {
        msnryRef.current?.reloadItems?.();
        msnryRef.current?.layout?.();
      });
    }, 100); // Small delay to allow window to finish resizing
  };
  window.addEventListener("resize", handleResize);

  // Cleanup
  return () => {
    clearTimeout(resizeTimer);
    window.removeEventListener("resize", handleResize);
    msnryRef.current?.destroy?.(); // ✅ Safe and TS-approved
    msnryRef.current = null;
  };
}, [images, columnWidth, gutter]);




  // Handler to open lightbox
  const openLightbox = (index: number) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

  return (
    <>
      <section className="mx-auto py-12">
        <div
          ref={gridRef}
          className="relative flex justify-center flex-wrap"
          style={{
            margin: "0 auto",
            maxWidth: "100vw",
          }}
        >
          <div className="grid-sizer" style={{ width: columnWidth }} />
          {images.map((img, i) => {
            const span = img.span || 1;
            const delay = img.delay || i * 0.1;

            return (
              <motion.div
                key={i}
                className="grid-item mb-4 rounded-2xl shadow-md overflow-hidden relative group cursor-pointer"
                style={{
                  width: columnWidth * span + gutter * (span - 1),
                  maxWidth: "100%",
                }}
                initial={{
                  opacity: 0,
                  y: img.yInitial || 0,
                  x: img.xInitial || 0,
                  rotate: img.rotateInitial || 0,
                  scale: img.scale || 1,
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
                {/* Hover overlay to indicate clickability */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 z-10 pointer-events-none" />

                {/* Zoom icon indicator */}
                <div className="absolute top-4 right-4 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
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
                  className="w-full h-auto object-cover"
                />

                {/* Caption overlay */}
                {img.caption && (
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 bg-black/60 text-white text-sm sm:text-base px-4 py-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20"
                    initial={{ y: 3, opacity: 1 }}
                    whileHover={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                  >
                    {img.caption}
                  </motion.div>
                )}
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

export default MasonryGallery;


// "use client";

// import React, { useEffect, useRef } from "react";
// import Masonry from "masonry-layout";
// import Image, { StaticImageData } from "next/image";
// import { motion } from "framer-motion";


// type GalleryImage = {
//   src: string | StaticImageData;
//   width?: number;
//   height?: number;
//   alt?: string;
//   span?: number; 
//   rotate?: number;
//   delay?: number;
//   direction?: string;
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
//   columnWidth?: number;
//   gutter?: number;
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
//       columnWidth,
//       gutter,
//       percentPosition: false,
//       horizontalOrder: false,
//       fitWidth: true,
//     });

//     const imgs = gridRef.current.querySelectorAll("img");
//     imgs.forEach((img) => {
//       img.addEventListener("load", () => {
//         msnry?.layout?.();
//       });
//     });

//     return () => {
//       msnry?.destroy?.();
//     };
//   }, [images, columnWidth, gutter]);

//   return (
//     <section className="mx-auto py-12">
//       <div 
//         ref={gridRef} 
//         className="relative flex justify-center"
//         style={{
//         width: `calc(${columnWidth}px * 4 + ${gutter}px * 2)`, // for 3 columns, adjust if needed
//         margin: "0 auto",
//         maxWidth: "100vw",
//       }}>
//         <div
//           className="grid-sizer"
//           style={{ width: columnWidth, visibility: "hidden" }}
//         />
//         {images.map((img, i) => {
//           const span = img.span || 1;
//           const delay = img.delay || i * 0.1;

//           // default width based on span
//           let itemWidth = columnWidth * span + gutter * (span - 1);

//           // on mobile, force items to fit screen width
//           if (typeof window !== "undefined" && window.innerWidth < 640) {
//             itemWidth = window.innerWidth - gutter * 2; // padding from both sides
//           }

//           return (
//             <motion.div
//               key={i}
//               className="grid-item mb-4 rounded-2xl shadow-md overflow-hidden "
//               style={{ width: itemWidth, maxWidth: "100%" }}
//               initial={{
//                 opacity: 0,
//                 y: img.yInitial || 0,
//                 x: img.xInitial || 0,
//                 rotate: img.rotateInitial || 0,
//                 scale: img.scale || 1,
//               }}
//               whileInView={{
//                 opacity: 1,
//                 y: 0,
//                 x: 0,
//                 // rotate: img.rotateEnd || 0,
//                 rotate: 0,
//                 scale: img.scaleEnd || 1,
//               }}
//               transition={{
//                 type: "spring",
//                 stiffness: 80,
//                 damping: 18,
//                 mass: 1.2,
//                 duration: 0.5,
//                 delay,
//                 ease: "easeOut",
//               }}
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


