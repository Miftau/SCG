// "use client";

// import { Button } from "@/components/ui/button";
// import { motion } from "framer-motion";
// import { NavigationMenuDemo } from "../Header/MainNavbar";
// import Image from "next/image";

// const HeroSection = ({
//   title,
//   description,
//   primaryButtonText,
//   secondaryButtonText,
//   imageTop,       // top background
//   imageBottom,    // bottom background
//   imageAltTop,
//   imageAltBottom,
//   centerImageSrc,
//   leftImageSrc,
//   rightImageSrc,
//   centerImageAlt,
//   leftImageAlt,
//   rightImageAlt,
// }) => {
//   return (
//     <div className="relative w-full h-screen md:min-h-[600px] lg:min-h-[900px] sm:min-h-[400px] flex flex-col items-center ">
//       {/* Background gradient base */}
//       <div className="absolute inset-0" />

//       {/* Bottom background image */}
//       {imageBottom && (
//         <div
//           className="absolute inset-0 z-5 bg-cover bg-center"
//           aria-label={imageAltBottom || "Background bottom"}
//           style={{ backgroundImage: `url(${imageBottom})` }}
//         />
//       )}


//       {/* Navbar */}
//       <div className="relative z-50 w-full">
//         <NavigationMenuDemo />
//       </div>

//       {/* Main content */}
//       <motion.div
//         initial={{ opacity: 0, y: 100 }}
//         whileInView={{
//           opacity: 1,
//           y: 0,
//           transition: { duration: 0.4, ease: "easeOut" },
//         }}
//         viewport={{ once: true }}
//         className="relative z-30 text-center text-white px-4 max-w-3xl mx-auto py-8 md:py-12 lg:py-16"
//       >
//         <h1 className="text-xl font-bold mb-3 md:text-2xl lg:text-3xl leading-snug">
//           {title}
//         </h1>
//         <p className="text-base mb-4 leading-relaxed md:text-lg lg:text-xl pt-4 text-gray-300">
//           {description}
//         </p>
//         <div className="flex justify-center gap-4">
//           {primaryButtonText && (
//             <Button className="bg-white text-[#0A1C3F] hover:bg-gray-100 px-6 py-3 text-base md:px-8 md:py-4 md:text-lg rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
//               {primaryButtonText}
//             </Button>
//           )}
//           {secondaryButtonText && (
//             <Button
//               variant="outline"
//               className="border-white text-white hover:bg-white hover:text-[#0A1C3F] px-6 py-3 text-base bg-transparent md:px-8 md:py-4 md:text-lg rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
//             >
//               {secondaryButtonText}
//             </Button>
//           )}
//         </div>
//       </motion.div>

//       {/* Foreground images overlay */}
//       {(centerImageSrc || leftImageSrc || rightImageSrc) && (
//         <div className="pointer-events-none absolute inset-0 z-40">
//           {centerImageSrc && (
//             <div className="absolute left-1/2 -translate-x-1/2 bottom-[12%] md:bottom-[10%]">
//               <div className="relative">
//                 <Image
//                   src="/images/Vector-ani.png"
//                   alt="base"
//                   width={260}
//                   height={80}
//                   className="absolute left-1/2 -translate-x-1/2 -bottom-6 pointer-events-none"
//                   priority
//                 />
//                 <Image
//                   src={centerImageSrc}
//                   alt={centerImageAlt || "Center graphic"}
//                   width={220}
//                   height={220}
//                   priority
//                 />
//               </div>
//             </div>
//           )}
//           {leftImageSrc && (
//             <div className="absolute left-[20%] md:left-[24%] bottom-[36%] md:bottom-[34%]">
//               <div className="relative">
//                 <Image
//                   src="/images/Vector-ani.png"
//                   alt="base"
//                   width={190}
//                   height={60}
//                   className="absolute left-1/2 -translate-x-1/2 -bottom-4 pointer-events-none"
//                   priority
//                 />
//                 <Image
//                   src={leftImageSrc}
//                   alt={leftImageAlt || "Left graphic"}
//                   width={160}
//                   height={160}
//                   priority
//                 />
//               </div>
//             </div>
//           )}
//           {rightImageSrc && (
//             <div className="absolute right-[20%] md:right-[24%] bottom-[36%] md:bottom-[34%]">
//               <div className="relative">
//                 <Image
//                   src="/images/Vector-ani.png"
//                   alt="base"
//                   width={190}
//                   height={60}
//                   className="absolute left-1/2 -translate-x-1/2 -bottom-4 pointer-events-none"
//                   priority
//                 />
//                 <Image
//                   src={rightImageSrc}
//                   alt={rightImageAlt || "Right graphic"}
//                   width={160}
//                   height={160}
//                   priority
//                 />
//               </div>
//             </div>
//           )}

//         </div>
//       )}
//     </div>
//   );
// };


// export default HeroSection;



"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { NavigationMenuDemo } from "../Header/MainNavbar";
import Image from "next/image";

// Animated angled line with "7" base
const AnimatedLine = ({ side }) => {
  const points =
    side === "left"
      ? "320,500 380,500 600,600" // left → short horizontal → down to center
      : "880,500 820,500 600,600"; // right → short horizontal → down to center

  return (
    <svg
      className="absolute inset-0 w-full h-full pointer-events-none"
      viewBox="0 0 1200 800"
      preserveAspectRatio="xMidYMid meet"
    >
      <motion.polyline
        points={points}
        fill="none"
        stroke="url(#gradient)"
        strokeWidth="3"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 2, ease: "easeInOut" }}
      />
      <defs>
        <linearGradient id="gradient" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#3b82f6" />
          <stop offset="100%" stopColor="#60a5fa" />
        </linearGradient>
      </defs>
    </svg>
  );
};

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
    <div className="relative w-full h-screen md:min-h-[600px] lg:min-h-[900px] sm:min-h-[400px] flex flex-col items-center">
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
          {/* Animated "7" lines */}
          <AnimatedLine side="left" />
          <AnimatedLine side="right" />

          {/* Center Block with base */}
          {centerImageSrc && (
            <div className="absolute bottom-[12%] md:bottom-[10%] left-1/2 -translate-x-1/2 text-center">
              <div className="relative flex flex-col items-center">
                <Image
                  src="/images/Vector-ani.png"
                  alt="base"
                  width={350}
                  height={80}
                  className="relative top-10 mx-auto"
                  priority
                />
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
