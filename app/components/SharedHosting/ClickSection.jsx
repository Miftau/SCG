"use client";

import { CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

const ClickSection = () => {
  return (
    <section className="container mt-32">
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-8">
          {/* left Column: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{
              opacity: 1,
              x: 0,
              transition: { duration: 0.4, ease: "easeOut" },
              
            }}
            className="flex flex-col items-end text-right space-y-6"
          >
            <h2 className="text-3xl text-[#4A2C8C]">
              ابدأ بسرعة مع تطبيقات بنقرة واحدة
            </h2>
            <p className="mt-8 font-normal text-sm">
              يدعم التكامل مع أدوات Kubernetes Engine المشهورة، مما يتيح لك
              إنشاء مجموعات تعمل على تشغيل برامج مفتوحة مسبقًا بنقرة واحدة.
            </p>
            <div className="grid grid-cols-2 gap-4 w-full max-w-md">
              <div className="flex items-center justify-end gap-2">
                <span className="text-lg">Cert Manager</span>
                <CheckCircle2 className="w-5 h-5 text-[#6A5ACD]" />
              </div>
              <div className="flex items-center justify-end gap-2">
                <span className="text-lg">Helm Charts</span>
                <CheckCircle2 className="w-5 h-5 text-[#6A5ACD]" />
              </div>
              <div className="flex items-center justify-end gap-2">
                <span className="text-lg">Operators</span>
                <CheckCircle2 className="w-5 h-5 text-[#6A5ACD]" />
              </div>
              <div className="flex items-center justify-end gap-2">
                <span className="text-lg">Linkerd</span>
                <CheckCircle2 className="w-5 h-5 text-[#6A5ACD]" />
              </div>
            </div>
          </motion.div>
          {/* right Column: Image */}
          <motion.div  initial={{ opacity: 0, x: -100 }}
            whileInView={{
              opacity: 1,
              x: 0,
              transition: { duration: 0.4, ease: "easeOut" },
              
            }}  className="flex justify-center lg:justify-start">
            <img
              src="/images/download7.png"
              width={600}
              height={400}
              alt="Isometric illustration of a platform with a mouse cursor and yellow sparks, representing quick actions."
              className="max-w-full h-auto object-cover"
            />
          </motion.div>
        </div>
    </section>
  );
};

export default ClickSection;
