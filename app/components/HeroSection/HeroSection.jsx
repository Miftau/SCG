"use client";

import { Button } from "@/components/ui/button";
import { NavigationMenuDemo } from "../Header/MainNavbar";

const HeroSection = ({
  title,
  description,
  primaryButtonText,
  secondaryButtonText,
  imageBottom,
  imageAltBottom,
}) => {
  return (
    <div
      className="relative text-white w-full hero bg-[#092346] lg:h-[90vh] h-[80vh] mb-10"
    >
      {/* Background */}
      {imageBottom && (
        <div
          className="absolute inset-0 bg-cover bg-center"
          aria-label={imageAltBottom || "Background bottom"}
          style={{ backgroundImage: `url(${imageBottom})` }}
        />
      )}

      {/* Navbar */}
      <div className="relative z-50 w-full">
        <NavigationMenuDemo />
      </div>

      {/* Text Content */}
      <div className="relative z-30 text-center text-white px-4 max-w-3xl mx-auto py-8 md:py-12 lg:py-16">
        <h1 className="text-xl font-bold mb-3 md:text-2xl lg:text-3xl leading-snug">
          {title}
        </h1>
        <p className="text-base mb-4 leading-relaxed md:text-lg lg:text-xl pt-4 text-gray-300">
          {description}
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
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
      </div>

    
    </div>
  );
};

export default HeroSection;
