"use client";

import { motion } from "framer-motion";

const SecuritySection = () => {
  return (
    <section className="w-full py-12 md:py-24  bg-white">
      <div className="container grid md:grid-cols-2 items-center gap-8 px-4 md:px-6">
        {/* Image Section */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { duration: 0.4, ease: "easeOut" },
          }}
          className="flex justify-center md:justify-center"
        >
          <img
            src="/images/ssl-panel 1.svg" // Reference to the embedded image file [^1]
            alt="Website security illustration with HTTPS protocol and a shield icon" // Descriptive alt text for accessibility [^2]
            width={400} // Intrinsic width for aspect ratio calculation [^2]
            height={300} // Intrinsic height for aspect ratio calculation [^2]
            className="max-w-full h-auto object-contain" // Responsive image styling
          />
        </motion.div>

        {/* Text Section */}
        <div className="text-right space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-[#332255] leading-tight">
            أمن المواقع وتشفير البيانات لم يعد أمرًا اختياريًا بعد اليوم
          </h2>
          <p className="text-lg md:text-xl text-gray-700">
            إن المواقع التي تحمل علامة &quot;غير آمن&quot; لم تعد مقبولة بعد
            الآن. شهادة SSL لم تعد مسألة اختيار، إنها مطلب أساسي في أساسيات أمن
            مواقع الويب في عالمنا المعاصر، حيث يعمل تشفير البيانات والاتصال
            الآمن على التخلص من مخاطر الهجمات الإلكترونية الناشئة والمتزايدة
            والذي يمكن أن تستغل أي ثغرة أمنية.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SecuritySection;
