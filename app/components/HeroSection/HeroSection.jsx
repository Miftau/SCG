"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { NavigationMenuDemo } from "../Header/MainNavbar";
import Image from "next/image";

const HeroSection = ({
  title,
  description,
  primaryButtonText,
  secondaryButtonText,
  imageTop,       // top background
  imageBottom,    // bottom background
  imageAltTop,
  imageAltBottom,
}) => {
  return (
    <div className="relative w-full h-screen md:min-h-[600px] lg:min-h-[900px] sm:min-h-[400px] flex flex-col items-center overflow-hidden">
      {/* Background gradient base */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#FFFFFF] to-[#FFFFFF] z-0" />

      {/* Bottom background image */}
      {imageBottom && (
        <div className="absolute inset-0 z-0">
          <Image
            src={imageBottom}
            alt={imageAltBottom || "Background bottom"}
            fill
            priority
            className="object-cover opacity-100"
          />
        </div>
      )}

      {/* Top background image */}
      {imageTop && (
      <div className="absolute top-40 sm:top-150 md:top-80 right-4 sm:right-20 md:right-40 lg:right-60 z-10 pointer-events-none w-full max-w-[600px] md:max-w-[800px] lg:max-w-[1100px]">
        <Image
          src={imageTop}
          alt={imageAltTop || "Background top"}
          width={1100}
          height={1400}
          priority
          className="w-full h-auto object-cover opacity-80 mix-blend-overlay"
        />
      </div>
    )}


      {/* Navbar */}
      <div className="relative z-50 w-full">
        <NavigationMenuDemo />
      </div>

      {/* Main content */}
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
    </div>
  );
};

export default HeroSection;
