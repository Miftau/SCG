"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
const ArabicSection = ({ title, description, number }) => {
  return (
    <section className="relative w-full py-12 md:py-24 lg:py-32 bg-white overflow-hidden">
      <div className="container px-4 md:px-6 relative z-10">
        <p className="text-center font-bold text-xl absolute -top-24 left-1/2 -translate-x-1/2 -translate-y-1/2 ">
          {title}
        </p>
        <p className="text-center absolute -top-16 left-1/2 -translate-x-1/2 -translate-y-1/2 ">
          {description}
        </p>
        {/* Large Faded Number */}
        <div className="absolute -top-28 left-1/2 -translate-x-1/2 flex items-center justify-center pointer-events-none text-[80px] md:text-[100px] lg:text-[140px] font-extrabold text-blue-100 z-0 select-none">
          {number}
        </div>

        <div className="flex flex-col items-center text-center space-y-6 relative z-10">
          {/* Heading */}
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: { duration: 0.4, delay: 0.2, ease: "easeOut" },
            }}
            className="text-xl md:text-3xl lg:text-4xl font-bold text-dark-purple mt-8"

          >
            نفتخر بتسجيلنا لأكثر من {number} اسم نطاق!
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default ArabicSection;
