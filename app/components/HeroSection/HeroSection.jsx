"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { NavigationMenuDemo } from "../Header/MainNavbar";
import Image from "next/image";

// Animated straight line (one-time)
const AnimatedLine = ({ x1, y1, x2, y2 }) => (
  <svg
    className="absolute inset-0 w-full h-full pointer-events-none"
    viewBox="0 0 1200 800"
    preserveAspectRatio="xMidYMid meet"
  >
    <motion.line
      x1={x1}
      y1={y1}
      x2={x2}
      y2={y2}
      stroke="url(#gradient)"
      strokeWidth="2"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{ duration: 2, ease: "easeInOut" }} // ✅ one-time animation
    />
    <defs>
      <linearGradient id="gradient" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0%" stopColor="#3b82f6" />
        <stop offset="100%" stopColor="#60a5fa" />
      </linearGradient>
    </defs>
  </svg>
);

const HeroSection = ({
  title,
  description,
  primaryButtonText,
  secondaryButtonText,
  imageBottom,
  imageAltBottom,
  centerImageSrc,
  leftImageSrc,
  rightImageSrc,
  centerImageAlt,
  leftImageAlt,
  rightImageAlt,
}) => {
  return (
    <div className="relative w-full h-screen min-h-[400px] md:min-h-[600px] lg:min-h-[900px] flex flex-col items-center overflow-hidden">
      {/* Background gradient base */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#FFFFFF] to-[#FFFFFF] z-0" />

      {/* Bottom background image */}
      {imageBottom && (
        <div className="absolute inset-0 z-5">
          <Image
            src={imageBottom}
            alt={imageAltBottom || "Background bottom"}
            fill
            priority
            sizes="100vw"
            className="object-cover object-center w-full h-full"
            quality={85}
          />
        </div>
      )}

      {/* Top background image with growing animation */}
      {imageTop && (
        <motion.div
          className="absolute inset-0 z-10"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
        >
          <Image
            src={imageTop}
            alt={imageAltTop || "Background top"}
            fill
            priority
            sizes="100vw"
            className="object-cover object-center w-full h-full"
            quality={85}
          />
        </motion.div>
      )}

      {/* Navbar */}
      <div className="relative z-50 w-full">
        <NavigationMenuDemo />
      </div>

      {/* Text Content */}
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: { duration: 0.4, ease: "easeOut" },
        }}
        viewport={{ once: true }}
        className="relative z-30 text-center text-white px-4 max-w-3xl mx-auto py-8 md:py-12 lg:py-16"
      >
        <h1 className="text-xl font-bold mb-3 md:text-2xl lg:text-3xl leading-snug">
          {title}
        </h1>
        <p className="text-base mb-4 leading-relaxed md:text-lg lg:text-xl pt-4 text-gray-300">
          {description}
        </p>
        <div className="flex justify-center gap-4">
          {primaryButtonText && (
            <Button className="bg-white text-[#0A1C3F] hover:bg-gray-100 px-6 py-3 text-base md:px-8 md:py-4 md:text-lg rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              {primaryButtonText}
            </Button>
          )}
          {secondaryButtonText && (
            <Button
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-[#0A1C3F] px-6 py-3 text-base bg-transparent md:px-8 md:py-4 md:text-lg rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              {secondaryButtonText}
            </Button>
          )}
        </div>
      </motion.div>

      {/* Foreground Images + Lines */}
      {(centerImageSrc || leftImageSrc || rightImageSrc) && (
        <div className="absolute inset-0 z-40 flex items-center justify-center">
          {/* Animated straight lines */}
          <AnimatedLine x1="320" y1="500" x2="600" y2="600" /> {/* left → center */}
          <AnimatedLine x1="880" y1="500" x2="600" y2="600" /> {/* right → center */}

          {/* Center Block with base */}
          {centerImageSrc && (
            <div className="absolute bottom-[12%] md:bottom-[10%] left-1/2 -translate-x-1/2 text-center">
              <div className="relative flex flex-col items-center">
                {/* Base vector */}
                <Image
                  src="/images/Vector-ani.png"
                  alt="base"
                  width={350}
                  height={80}
                  className="relative top-10 mx-auto"
                  priority
                />
                {/* Image sitting on base */}
                <Image
                  src={centerImageSrc}
                  alt={centerImageAlt || "Center graphic"}
                  width={200}
                  height={200}
                  className="absolute -bottom-[10%] left-1/2 -translate-x-1/2"
                  priority
                />
              </div>
            </div>
          )}

          {/* Left Block with base */}
          {leftImageSrc && (
            <div className="absolute bottom-[34%] left-[20%] md:left-[24%] text-center">
              <div className="relative flex flex-col items-center">
                <Image
                  src="/images/Vector-ani.png"
                  alt="base"
                  width={210}
                  height={60}
                  className="mx-auto"
                  priority
                />
                <Image
                  src={leftImageSrc}
                  alt={leftImageAlt || "Left graphic"}
                  width={150}
                  height={150}
                  className="absolute -top-[100%] left-1/2 -translate-x-1/2"
                  priority
                />
              </div>
            </div>
          )}

          {/* Right Block with base */}
          {rightImageSrc && (
            <div className="absolute bottom-[34%] right-[20%] md:right-[24%] text-center">
              <div className="relative flex flex-col items-center">
                <Image
                  src="/images/Vector-ani.png"
                  alt="base"
                  width={210}
                  height={60}
                  className="mx-auto"
                  priority
                />
                <Image
                  src={rightImageSrc}
                  alt={rightImageAlt || "Right graphic"}
                  width={150}
                  height={150}
                  className="absolute -top-[100%] left-1/2 -translate-x-1/2"
                  priority
                />
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default HeroSection;