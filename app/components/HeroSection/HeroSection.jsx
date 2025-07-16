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
    <div className="relative w-full h-screen">
      {/* خلفية الصورة */}
      <div className="absolute inset-0">
        <Image src={imageSrc} alt={imageAlt} fill className="w-auto h-auto" />
      </div>

      {/* المحتوى فوق الصورة */}
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: { duration: 0.4, ease: "easeOut" },
        }}
        className="relative z-10 text-center text-white pt-16 px-4 max-w-3xl mx-auto"
      >
        <h1 className="text-4xl font-bold mb-4">{title}</h1>
        <p className="text-lg mb-8 leading-relaxed">{description}</p>
        <div className="flex justify-center gap-4">
          <Button className="bg-white text-[#0A1C3F] hover:bg-gray-100 px-6 py-3 text-base">
            {primaryButtonText}
          </Button>
          <Button
            variant="outline"
            className="border-white text-white hover:bg-white hover:text-[#0A1C3F] px-6 py-3 text-base bg-transparent"
          >
            {secondaryButtonText}
          </Button>
        </div>
      </motion.div>
    </div>
  );
};

export default HeroSection;
