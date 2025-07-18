"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const HeroSection = ({
  title,
  description,
  primaryButtonText,
  secondaryButtonText,
  imageSrc,
  imageAlt,
}) => {
  return (
    <div className="relative w-full h-screen md:min-h-[600px] lg:min-h-[900px] flex flex-col  items-center">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={imageSrc || "/placeholder.svg"}
          alt={imageAlt}
          fill
          className="w-full h-full object-cover"
        />
      </div>
      {/* Content above image */}
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: { duration: 0.4, ease: "easeOut" },
        }}
        className="relative z-10 text-center text-white px-4 max-w-3xl mx-auto py-12 md:py-20 lg:py-24"
      >
        <h1 className="text-4xl font-bold mb-4 md:text-5xl lg:text-6xl">
          {title}
        </h1>
        <p className="text-lg mb-8 leading-relaxed md:text-xl lg:text-2xl pt-6">
          {description}
        </p>
        <div className="flex justify-center gap-4">
          <Button className="bg-white text-[#0A1C3F] hover:bg-gray-100 px-6 py-3 text-base md:px-8 md:py-4 md:text-lg">
            {primaryButtonText}
          </Button>
          {secondaryButtonText && (
            <Button
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-[#0A1C3F] px-6 py-3 text-base bg-transparent md:px-8 md:py-4 md:text-lg"
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
