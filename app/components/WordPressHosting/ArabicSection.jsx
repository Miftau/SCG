"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
const ArabicSection = () => {
  return (
    <section className="relative w-full py-12 md:py-24 lg:py-32 bg-white overflow-hidden">
      <div className="container px-4 md:px-6 relative z-10">
        {/* Large Faded Number */}
        <div className="absolute -top-28 left-1/2 -translate-x-1/2 flex items-center justify-center pointer-events-none text-[80px] md:text-[100px] lg:text-[140px] font-extrabold text-blue-100 z-0 select-none">
          1000000+
        </div>

        <div className="flex flex-col items-center text-center space-y-6 relative z-10">
          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 100 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: { duration: 0.4, ease: "easeOut" },
            }}
            className="text-3xl md:text-5xl lg:text-6xl font-bold text-dark-purple leading-tight"
          >
            أكثر من مليون قالب جاهز للتصميم
          </motion.h2>

          {/* Paragraph */}
          <motion.p
            initial={{ opacity: 0, y: 100 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: { duration: 0.4, ease: "easeOut" },
            }}
            className="max-w-3xl text-lg md:text-xl text-dark-purple/90"
          >
            احصل على لوحة تحكم ووردبريس مزودة بقوالب وثيمات قابلة للتخصيص
            بالكامل وإضافات سهلة التثبيت مما يمنحك الحرية الكاملة للتحكم في مظهر
            موقعك ووظائفه.
          </motion.p>

          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12 w-full max-w-6xl px-4">
            {Array.from({ length: 4 }).map((_, i) => (
              <motion.div
                initial={{ opacity: 0, y: 100 }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.4, ease: "easeOut" },
                }}
                key={i}
                className="card-hover aspect-video bg-[#D9D9D9] rounded-lg shadow-md min-h-[150px]"
              />
            ))}
          </div>

          {/* Button */}
          <div className="mt-12">
            <Link href="#" passHref>
              <Button className="px-8 py-3 text-lg rounded-md border-2 border-button-purple text-button-purple bg-white hover:bg-gray-200 hover:text-gray-800 transition-colors">
                عرض المزيد
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ArabicSection;
