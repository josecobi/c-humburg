"use client";

import React, { useEffect, useRef } from "react";
import Masonry from "masonry-layout";
import Image, { StaticImageData } from "next/image";
import { motion } from "framer-motion";


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
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!gridRef.current) return;

    const msnry = new Masonry(gridRef.current, {
      itemSelector: ".grid-item",
      columnWidth,
      gutter,
      percentPosition: false,
      horizontalOrder: false,
      fitWidth: true,
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

  return (
    <section className="mx-auto py-12">
      <div 
        ref={gridRef} 
        className="relative flex justify-center"
        style={{
        width: `calc(${columnWidth}px * 3 + ${gutter}px * 2)`, // for 3 columns, adjust if needed
        margin: "0 auto",
        maxWidth: "100vw",
      }}>
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
              className="grid-item mb-4 rounded-2xl shadow-md overflow-hidden "
              style={{ width: itemWidth, maxWidth: "100%" }}
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
                // rotate: img.rotateEnd || 0,
                rotate: 0,
                scale: img.scaleEnd || 1,
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
            >
              <Image
                src={img.src}
                alt={img.alt || `Image ${i + 1}`}
                width={img.width}
                height={img.height}
                className="w-full h-auto object-contain"
              />
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default MasonryGallery;


