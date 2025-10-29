"use client";

import React, { useEffect, useState, useCallback } from "react";
import Image, { StaticImageData } from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { XMarkIcon, ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

export type LightboxImage = {
  src: string | StaticImageData;
  width?: number;
  height?: number;
  alt?: string;
  caption?: string;
  // Additional metadata for cinematic presentation
  production?: string;
  year?: string;
  role?: string;
  network?: string;
  actors?: string;
};

type LightboxProps = {
  images: LightboxImage[];
  currentIndex: number;
  isOpen: boolean;
  onClose: () => void;
};

export const Lightbox: React.FC<LightboxProps> = ({
  images,
  currentIndex: initialIndex,
  isOpen,
  onClose,
}) => {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  const minSwipeDistance = 50;

  // Update current index when prop changes
  useEffect(() => {
    setCurrentIndex(initialIndex);
  }, [initialIndex]);

  // Navigation handlers
  const goToNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  }, [images.length]);

  const goToPrevious = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  }, [images.length]);

  // Keyboard navigation
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      switch (e.key) {
        case "Escape":
          onClose();
          break;
        case "ArrowLeft":
          goToPrevious();
          break;
        case "ArrowRight":
          goToNext();
          break;
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose, goToNext, goToPrevious]);

  // Prevent body scroll when lightbox is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Touch handlers for swipe
  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      goToNext();
    } else if (isRightSwipe) {
      goToPrevious();
    }
  };

  if (!isOpen || !images[currentIndex]) return null;

  const currentImage = images[currentIndex];

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          {/* Backdrop */}
          <motion.div
            className="absolute inset-0 bg-black/95 backdrop-blur-sm"
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          {/* Content Container */}
          <div
            className="relative w-full h-full flex flex-col items-center justify-center p-4 sm:p-8"
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
          >
            {/* Close Button */}
            <motion.button
              onClick={onClose}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors backdrop-blur-sm"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Close lightbox"
            >
              <XMarkIcon className="w-6 h-6" />
            </motion.button>

            {/* Image Counter */}
            <motion.div
              className="absolute top-4 left-4 z-10 px-4 py-2 rounded-full bg-black/50 text-white text-sm font-medium backdrop-blur-sm"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              {currentIndex + 1} / {images.length}
            </motion.div>

            {/* Main Image Container */}
            <motion.div
              className="relative flex-1 w-full max-w-7xl flex items-center justify-center"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  className="relative w-full h-full flex items-center justify-center"
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.3 }}
                >
                  <Image
                    src={currentImage.src}
                    alt={currentImage.alt || `Image ${currentIndex + 1}`}
                    width={currentImage.width || 1200}
                    height={currentImage.height || 800}
                    className="max-w-full max-h-[70vh] w-auto h-auto object-contain rounded-lg shadow-2xl"
                    priority
                  />
                </motion.div>
              </AnimatePresence>
            </motion.div>

            {/* Image Details */}
            {(currentImage.caption || currentImage.production || currentImage.role) && (
              <motion.div
                className="relative w-full max-w-4xl mt-6 p-4 sm:p-6 rounded-lg bg-black/60 backdrop-blur-md border border-zinc-800"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <div className="flex flex-col sm:flex-row gap-4 text-white">
                  {/* Caption or Production Name */}
                  {(currentImage.caption || currentImage.production) && (
                    <div className="flex-1">
                      <h3 className="text-lg sm:text-xl font-semibold text-yellow-400 mb-2">
                        {currentImage.production || currentImage.caption}
                      </h3>
                      {currentImage.role && (
                        <p className="text-sm sm:text-base text-zinc-300">
                          <span className="text-zinc-400">Role:</span> {currentImage.role}
                        </p>
                      )}
                      {currentImage.actors && (
                        <p className="text-sm text-zinc-400 mt-1">
                          {currentImage.actors}
                        </p>
                      )}
                    </div>
                  )}

                  {/* Additional Info */}
                  <div className="flex gap-4 text-sm">
                    {currentImage.network && (
                      <div className="text-zinc-300">
                        <span className="text-zinc-500">Network:</span>{" "}
                        {currentImage.network}
                      </div>
                    )}
                    {currentImage.year && (
                      <div className="text-zinc-300">
                        <span className="text-zinc-500">Year:</span> {currentImage.year}
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            )}

            {/* Navigation Buttons */}
            {images.length > 1 && (
              <>
                {/* Previous Button */}
                <motion.button
                  onClick={goToPrevious}
                  className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/50 text-white hover:bg-black/70 transition-all backdrop-blur-sm hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label="Previous image"
                >
                  <ChevronLeftIcon className="w-6 h-6" />
                </motion.button>

                {/* Next Button */}
                <motion.button
                  onClick={goToNext}
                  className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/50 text-white hover:bg-black/70 transition-all backdrop-blur-sm hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label="Next image"
                >
                  <ChevronRightIcon className="w-6 h-6" />
                </motion.button>
              </>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
