"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { MonitorCheck, TrendingUp, Users } from "lucide-react";
import { motion } from "framer-motion";
const FeaturesSection = () => {
  return (
    <section className="w-full py-12 lg:py-24 ">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <img
            src="/images/secure-shield 1.png"
            width={100}
            height={100}
            alt="Shield Icon representing protection"
            className="mb-4"
          />
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            أكثر من مجرد حماية
          </h2>
          <p className="max-w-[700px] text-muted-foreground md:text-xl">
            يعد امتلاك شهادة SSL للمواقع ضرورة ملحة، ليس فقط من ناحية الأمان.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full">
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: { duration: 0.4, ease: "easeOut" },
            }}
            className="bg-white rounded-2xl border border-gray-200 shadow-md hover:shadow-lg transition-shadow p-8 "
          >
            <div className="">
              <Users className="w-12 h-12 text-blue-500" />
              <p className="font-bold text-lg">بناء ثقة العملاء </p>
              <p className="font-normal text-sm text-gray-600 pt-4">
                أظهر لعملائك أن عملك التجاري على الإنترنت مُؤمّن ومُصادَق عبر
                معرفتهم وتأكّدهم بأن بياناتهم الحسّاسة ومدفوعاتهم الإلكترونيّة
                محميّة بالكامل.
              </p>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: { duration: 0.4, ease: "easeOut" },
            }}
            className="bg-white rounded-2xl border border-gray-200 shadow-md hover:shadow-lg transition-shadow p-8 "
          >
            <div className="">
              <TrendingUp className="w-12 h-12 text-blue-500" />
              <p className="font-bold text-lg">
                رفع تصنيف موقعك في محركات البحث SEO{" "}
              </p>
              <p className="font-normal text-sm text-gray-600 pt-4">
                المواقع المؤمّنة لها الأفضليّة في الحصول على ترتيب أعلى في نتائج
                محرّكات البحث، حيث أن الأمان هو عامل أساسي في عمليّة التصنيف.
              </p>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: { duration: 0.4, ease: "easeOut" },
            }}
            className="bg-white rounded-2xl border border-gray-200 shadow-md hover:shadow-lg transition-shadow p-8 "
          >
            <div className="">
              <MonitorCheck className="w-12 h-12 text-blue-500" />
              <p className="font-bold text-lg">
                حافظ على ظهور موقعك عبر المتصفّحات المختلفة
              </p>
              <p className="font-normal text-sm text-gray-600 pt-4">
                إذا كان موقعك لا يحتوي على شهادة SSL، فستقوم معظم متصفحات الويب
                المشهورة عالميًا بوضع علامة عليه على أنه “غير آمن” مع إظهار
                علامة تحذير، وبعض المتصفحات ستصل إلى حد حظره تمامًا من المستخدم.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
