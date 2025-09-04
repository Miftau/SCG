"use client";

import React from "react";
import { motion } from "framer-motion";

const EasyTransitionSection = () => {
  return (
    <section className="w-5xl mx-auto py-2 md:py-4 lg:py-6 bg-[#1A2B40] text-white rounded-lg mb-24">
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: { duration: 0.4, ease: "easeOut" },
        }}
        className="container grid items-center gap-4 px-2 md:grid-cols-2 md:px-3 lg:gap-6"
      >
        {/* Right side: Text content */}
        <div className="flex flex-col items-start space-y-2 text-right">
          <h2 className="text-xl font-bold tracking-tight sm:text-2xl md:text-3xl">
            ابدأ انتقالك السهل معنا
          </h2>
          <p className="max-w-[600px] text-gray-300 text-sm md:text-base">
            قم بترقية بريدك الإلكتروني إلى Suite 365 بسهولة وسرعة وأمان بمساعدة
            العنكبوت الليبي. وابدأ رحلتك لتحسين الإنتاجية وتعزيز حماية بريدك
            الإلكتروني بدعمنا الكامل، حتى لا يكون هناك أي اضطرابات أو توقفات أو
            فقدان للبيانات من أي نوع.
          </p>
          <p className="text-white font-bold mt-4 cursor-pointer hover:scale-x-110 transition-all duration-300">ابدأ الآن!</p>
        </div>
        {/* Left side: Illustration */}
        <div className="flex justify-center md:justify-start">
          <img
            src="/images/ls-suite-cta 1.png"
            width={600}
            height={400}
            alt="Isometric illustration of a blue folder with 'Suite' text and papers flying out"
            className="max-w-full h-auto"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default EasyTransitionSection;
