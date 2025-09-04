"use client";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const KubernetesWindosHosting = () => {
  const locations = [
     {
      skylineSrc: "/images/Group3277.png",
      skylineAlt: "Cloud Services Skyline",
      title: "استضافة ثابتة موثوقة",
      descrption: "ستضف مواقعك الثابتة بسرعات تحميل فائقة ووقت تشغيل لا مثيل له. استمتع بنشر سلس مع شبكة CDN موزعة عالميًا."
     },
    {
      skylineSrc: "/images/Group 3275.png",
      skylineAlt: "Cloud Services Skyline",
      title:"التخزين السحابي القابل للتوسع",
      descrption: "قم بتخزين بياناتك والوصول إليها بأمان باستخدام تخزين سحابي عالي الأداء. وسّع بسهولة مع نمو عملك بفضل التكرار المُحسَّن.",
    },
    {
      skylineSrc: "/images/winds-keyAdSec.svg",
      skylineAlt: "Cloud Services Skyline",
      title: "استضافة ثابتة بمستوى المؤسسات",
      descrption: "قدّم تطبيقاتك الثابتة بأعلى مستويات الأمان والأداء. استفد من التحديثات الفورية، والوصول العالمي، ومن دون أي عناء في الصيانة."
    },
   
  ];
  return (
    <div className="container mx-auto px-4 py-8">
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: { duration: 0.4, ease: "easeOut" },
        }}
        className="py-8 flex flex-col items-center justify-center text-center"
      >
        <p className="text-4xl font-semi-bold text-[#2B1F51]">
          مجموعات Kubernetes في غضون دقائق فقط
        </p>
        <p className="font-medium text-[#2B1F51] pt-6 max-w-2xl">
          توقف عن إضاعة الوقت والجهد في إدارة مجموعات Kubernetes. باستخدام
          Kubernetes Engine المُدار بالكامل، يمكنك بسهولة إطلاق وإدارة وضبط
          موارد تطبيقاتك في الحاويات في دقائق بدلاً من أيام.
        </p>
        <div className="pt-8">
          <Button
            variant="outline"
            className=" border-[#092346] text-black hover:bg-gray-200 hover:text-[#0A1C3F] px-6  text-base bg-transparent md:text-lg"
          >
           اطلب الآن!
          </Button>
        </div>
      </motion.div>

      <div className="py-8">
        <p className="text-center text-4xl font-semi-bold text-[#2B1F51] ">
        انطلق أسرع ونمِّ عملك
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full pt-8">
        {locations.map((location, index) => (
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: { duration: 0.4, ease: "easeOut" },
            }}
            key={index}
            className="bg-white rounded-2xl border border-gray-200 shadow-md hover:shadow-lg transition-shadow p-4 "
          >
            <div className="w-full h-full">
              <img
                src={location.skylineSrc}
                alt={location.skylineAlt}
                className=" object-cover h-12"
              />
              <p className="font-semi-bold mt-10 text-xl">{location.title}</p>
              <p className="font-normal text-sm text-gray-600 pt-4">
                {location.descrption}
              </p>
              <p className="font-extrabold text-xl pt-4">{location.button}</p>
            </div>
          </motion.div>
        ))}
      </div>

    </div>
  );
};

export default KubernetesWindosHosting;
