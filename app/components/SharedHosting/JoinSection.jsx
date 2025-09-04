"use client";
import { Button } from "@/components/ui/button";

import Link from "next/link";
import { motion } from "framer-motion";
const JoinSection = () => {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        whileInView={{
          opacity: 1,
          x: 0,
          transition: { duration: 0.4, ease: "easeOut" },
        }}
        className="container px-4 md:px-6 relative"
      >
        {/* Plus signs */}
        <div className="absolute top-1/4 left-0 -translate-x-1/2 text-[#5090E8] text-6xl font-bold opacity-30 hidden md:block">
          <span className="block">+</span>
          <span className="block mt-[-20px] ml-[-10px]">+</span>
        </div>

        {/* Main Card */}
        <div className="relative bg-[#212B4A] rounded-lg p-8 md:p-12 lg:p-16 flex flex-col md:flex-row items-center justify-between overflow-visible">
          {/* Content */}
          <div className="flex flex-col items-end  max-w-2xl z-10 md:mr-auto text-center md:text-right md:items-end">
            <h2
              className="text-white text-3xl md:text-4xl font-bold mb-4"
            >
              انضم إلى قائمة موزعينا المعتمدين
            </h2>
            <p className="text-white text-lg md:text-xl mb-8">
              إذا كنت مهتمًا بأن تصبح موزعًا معتمدًا لشركة العنكبوت الليبي
              لتنمية أعمالنا معًا. يرجى ملء النموذج التالي وإرساله وسنتصل بك في
              أقرب وقت ممكن.
            </p>
            <div className="flex flex-col sm:flex-row-reverse gap-4 w-full items-center sm:items-end sm:justify-end">
              <Link href="#" passHref className="w-full sm:w-auto">
                <Button className="w-full sm:w-auto bg-white text-[#212B4A] hover:bg-gray-100 px-8 py-6 text-lg rounded-lg shadow-md">
                  نموذج التسجيل
                </Button>
              </Link>
              <Link href="#" passHref className="w-full sm:w-auto">
                <Button className="w-full sm:w-auto bg-white text-[#212B4A] hover:bg-gray-100 px-8 py-6 text-lg rounded-lg shadow-md">
                  الموزعون
                </Button>
              </Link>
            </div>
          </div>

          {/* Illustration - Hidden on mobile */}
          <div className="hidden md:block absolute bottom-0 right-0 w-[300px] h-[250px] md:w-[400px] md:h-[300px] lg:w-[500px] lg:h-[350px] translate-x-1/4 md:translate-x-1/5 lg:translate-x-1/4 z-0">
            <img
              src="/images/Group3417.png"
              alt="Illustration of a browser window with gears and an awning"
              layout="fill"
              // objectFit="contain"
              className="drop-shadow-lg"
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default JoinSection;
