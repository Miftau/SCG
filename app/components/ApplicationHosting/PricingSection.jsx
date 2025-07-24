"use client";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";
import { motion } from "framer-motion";
const PricingSection = () => {
  const pricingPlans = [
    {
      title: "P1-HOST",
      price: "91.30",
      billingPeriod: "د.ل/ربع سنوي",
      borderColorClass: "border-t-4 border-[#FCD34D]", // Yellow
    },
    {
      title: "P2-HOST",
      price: "91.30",
      billingPeriod: "د.ل/ربع سنوي",
      borderColorClass: "border-t-4 border-[#BFDBFE]", // Light Blue
    },
    {
      title: "P3-HOST",
      price: "91.30",
      billingPeriod: "د.ل/ربع سنوي",
      borderColorClass: "border-t-4 border-[#60A5FA]", // Medium Blue
    },
  ];

  const commonFeatures = [
    { text: "أكثر من محدد لعمل بنوازن" },
    { text: "العديد من أنواع سجلات DNS" },
    { text: "سهولة الإستخدام" },
    { text: "(Powered By PowerDNS)", isEnglish: true },
    { text: "سرعة التحديث لجميع أنواع السجلات" },
    { text: "مراقبة دائمة" },
    {
      text: "يمكنك الحصول على الخدمة حتى إن لم يكن اسم النطاق مسجل عن طريق العنكبوت الليلي.",
    },
  ];
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50" >
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            اختر الخطة المناسبة
          </h2>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 justify-items-center">
          {pricingPlans.map((plan, index) => (
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: { duration: 0.4, ease: "easeOut" },
              }}
              key={index}
              className=""
            >
              <Card
                className={`w-full max-w-sm rounded-lg shadow-md ${plan.borderColorClass}`}
              >
                <CardHeader className="flex flex-col items-center gap-2 py-6">
                  <CardTitle className="text-2xl font-bold text-center">
                    {plan.title}
                  </CardTitle>
                  <div className="text-5xl font-bold text-center">
                    {plan.price}
                  </div>
                  <p className="text-muted-foreground text-center">
                    {plan.billingPeriod}
                  </p>
                  <Button className="mt-4 w-full bg-[#2B1F51] hover:bg-[#2B1F51]/90 text-white font-bold py-2 px-4 rounded-md">
                    اطلب الآن
                  </Button>
                </CardHeader>
                <CardContent className="space-y-4 py-6">
                  <ul className="space-y-3 text-right">
                    {commonFeatures.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="flex items-center gap-3"
                     
                      >
                        <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                        <span
                          className={
                            feature.isEnglish
                              ? "text-left flex-grow"
                              : "text-right flex-grow"
                          }
                        >
                          {feature.text}
                        </span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter className="py-4"></CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
