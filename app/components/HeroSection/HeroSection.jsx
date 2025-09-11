"use client";

import { Button } from "@/components/ui/button";
import { NavigationMenuDemo } from "../Header/MainNavbar";

const HeroSection = ({
  title,
  description,
  secondaryButtonText,
  imageBottom,
  imageAltBottom
}) => {
  return (
    <div
      className="relative h-screen md:min-h-[600px] lg:min-h-[900px] sm:min-h-[400px] flex flex-col items-center"
    >
      {/* Background*/}

      {imageBottom && (
        <div
          className="absolute inset-0 bg-center bg-cover"
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
        <h1 className="text-xl capitalize font-semibold mb-3 md:text-2xl lg:text-4xl leading-snug">
          {title}
        </h1>
        <p className="text-base mb-4 leading-relaxed pt-1 text-gray-300">
          {description}
        </p>
        
          {secondaryButtonText && (
            <Button
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-[#0A1C3F] px-6 text-base bg-transparent md:px-8 md:py-4 font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              {secondaryButtonText}
            </Button>
          )}
      </div>

    
    </div>
  );
};

export default HeroSection;
