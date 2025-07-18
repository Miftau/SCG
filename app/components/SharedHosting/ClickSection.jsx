"use client";
import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

const ClickSection = () => {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
      <div className="container px-4 md:px-6">
        <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-16">
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
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-[#4A2C8C]">
              ابدأ بسرعة مع تطبيقات بنقرة واحدة
            </h2>
            <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
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
            <Image
              src="/images/download7.png"
              width={600}
              height={400}
              alt="Isometric illustration of a platform with a mouse cursor and yellow sparks, representing quick actions."
              className="max-w-full h-auto object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ClickSection;
