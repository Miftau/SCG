"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "framer-motion";
const DashboardFeatures = () => {
  return (
    <section className="lg:px-32 md:px-16 px-8 mt-32">
      <div className="container px-4 md:px-6">
        <div className="grid gap-12 lg:grid-cols-2 items-center">
          {/* left side: Text and Accordion */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{
              opacity: 1,
              x: 0,
              transition: { duration: 0.4, ease: "easeOut" },
            }}
            className="flex flex-col items-end text-right space-y-6"
          >
            <div className="space-y-2">
              <p className="text-sm font-medium text-muted-foreground">
                لوحة خدمات المشتركين
              </p>
              <h2 className="text-3xl font-semibold">
                لوحة تحكم شاملة
              </h2>
              <p className="mt-4">
                لوحة تحكم مدارة بالكامل، سريعة الاستجابة وسهلة الاستخدام لإدارة
                جميع خدماتك السحابية.
              </p>
            </div>
            <Accordion type="single" collapsible className="w-full max-w-md">
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-lg font-semibold">
                  إدارة سهلة
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  إدارة كاملة ونظرة شاملة على جميع خدماتك في مكان واحد.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger className="text-lg font-semibold">
                  تشغيل بنقرة واحدة
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  قم بتشغيل وإيقاف الخدمات بنقرة زر واحدة لسهولة التحكم.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger className="text-lg font-semibold">
                  تشغيل بنقرة واحدة
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  تفعيل الميزات الجديدة وإدارة الإعدادات بكل سهولة.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </motion.div>
          {/* Right side: Image */}
          <motion.div initial={{ opacity: 0, x: -100 }}
        whileInView={{
          opacity: 1,
          x: 0,
          transition: { duration: 0.4, ease: "easeOut" },
        }} className="flex justify-center lg:justify-start">
            <img
              src="/images/dashboard-image.png"
              width={800}
              height={600}
              alt="Dashboard screenshot showing a comprehensive control panel"
              className="rounded-xl object-cover shadow-lg"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default DashboardFeatures;
