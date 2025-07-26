"use client";

import { CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
const WordpressFeatures = () => {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-white" >
      <div className="container px-4 md:px-6">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{
              opacity: 1,
              x: 0,
              transition: { duration: 0.4, ease: "easeOut" },
            }}
            className="flex justify-center lg:justify-start"
          >
            <img
              src="/images/download7.png"
              width={400}
              height={300}
              alt="WordPress Platform"
              className="mx-auto aspect-[4/3] overflow-hidden object-contain"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{
              opacity: 1,
              x: 0,
              transition: { duration: 0.4, ease: "easeOut" },
            }}
            className="space-y-6 text-right"
          >
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-primary-heading">
              منصة ووردبريس محسنة وبسرعة فائقة
            </h2>
            <p className="max-w-[600px] text-primary-paragraph md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              نقدم لكم خطط استضافة ووردبريس ممتازة قابلة للتطوير وجاهزة لتلبية
              احتياجاتك المتزايدة مع نمو عملك. لن تضطر لدفع ثمن الخدمات والأجهزة
              الافتراضية التي لا تحتاجها. لأننا قمنا بتخصيص الخطط لتكون مناسبة
              لجميع الأعمال، من نقطة البداية المثالية لمعظم الشركات إلى الخطط
              المتقدمة التي تتعامل مع حركة زيارات العالية.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-primary-paragraph">
              <div className="flex items-center gap-2 justify-end">
                <span className="text-lg">تخزين SSD & NVMe</span>
                <CheckCircle2 className="w-5 h-5 text-accent-blue" />
              </div>
              <div className="flex items-center gap-2 justify-end">
                <span className="text-lg">نطاق تردد غير محدود</span>
                <CheckCircle2 className="w-5 h-5 text-accent-blue" />
              </div>
              <div className="flex items-center gap-2 justify-end">
                <span className="text-lg">تثبيت بنقرة واحدة</span>
                <CheckCircle2 className="w-5 h-5 text-accent-blue" />
              </div>
              <div className="flex items-center gap-2 justify-end">
                <span className="text-lg">دعم ووردبريس متخصص</span>
                <CheckCircle2 className="w-5 h-5 text-accent-blue" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WordpressFeatures;
