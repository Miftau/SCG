"use client";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { motion } from "framer-motion";
const FreeToolsSection = () => {
  return (
    <section className="relative w-full py-24 md:py-32 lg:py-40 overflow-hidden bg-white">
      <div className="container relative z-10 flex flex-col items-center justify-center px-4 md:px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { duration: 0.4, ease: "easeOut" },
          }}
          className="space-y-4"
        >
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-[#092346]">
            أدوات مجانية نقدمها مع جميع الخطط
          </h2>
          <p className="mx-auto max-w-[800px] text-lg text-[#6B7280] md:text-xl">
            نقدم لك مجموعة من الأدوات المجانية التي تساعدك في إنشاء مواقع ويب
            بدون تعقيدات وأكثر سرعة مثل: قوالب ووردبريس والمكونات الإضافية وأداة
            النسخ الاحتياطي والتحكم في دومين WordPress.
          </p>
          <div className="flex justify-center pt-4">
            <Link
              href="#"
              className={
                buttonVariants({ variant: "outline" }) +
                " border-2 border-[#4A3B7F] text-[#092346] hover:bg-[#4A3B7F]/10 px-8 py-2 rounded-lg"
              }
            >
              اطلب الآن!
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FreeToolsSection;
