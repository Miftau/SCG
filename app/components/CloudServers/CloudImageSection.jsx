"use client";

import { motion } from "framer-motion";

const CloudImageSection = () => {
  return (
    <section className="w-full py-16 md:py-24 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        {/* Main Card Container */}
        <div className="relative flex flex-col md:flex-row items-center justify-between gap-12 max-w-6xl mx-auto bg-[#2A3252] rounded-xl shadow-lg overflow-hidden">
          {/* Left Content */}
          <div className="flex-1 p-8 md:p-12 text-center md:text-left">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 leading-tight">
                دعم من إتعدد المناطق
              </h2>
              <p className="text-sm text-gray-300 leading-relaxed max-w-md mx-auto md:mx-0">
                فم تشغل التطبيقات وتنقلها بين مناطق أوروبا محددة من خلال واجهة مستخدم واحدة سهلة الاستخدام، واتصلها أقرب إلى عدّادك.
              </p>
            </motion.div>
          </div>

          {/* Right Image with Floating Effect */}
          <div className="flex-1 flex justify-center md:justify-end relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative"
            >
              {/* Floating Image */}
              <div className="w-64 h-64 md:w-80 md:h-80 relative">
                <img
                  src="/images/cloudimgsec.svg" 
                  alt="Globe and Platform"
                  className="w-full h-full object-contain"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CloudImageSection;