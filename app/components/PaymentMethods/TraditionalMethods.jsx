"use client";

import React from "react";
import { motion } from "framer-motion";
const TraditionalMethods = () => {
  const Beast = [
    

    {
      skylineSrc: "/images/Group(1).png",
      skylineAlt: "Cloud Services Skyline",
      title: "الحماية من عمليّات الاختراق والبرامج الخبيثة",
      descrption:
        "قم بحماية موقعك من البرامج الضارة ومنع محاولات الاختراق وهجمات استغلال الثغرات Zero-Day وهجمات تخمين كلمة المرور Brute Force.",
    },
    {
      skylineSrc: "/images/Clippath.png",
      skylineAlt: "Cloud Services Skyline",
      title: "التخفيف من هجمات DDoS",
      descrption:
        "يمكن أن تتسبب هجمات حجب الخدمة الموزعة (DDoS) في التوقف التام لعملك. نحن نحظر هجمات DDoS للطبقات 3 و 4 و 7 ومع تأمين معدل نقل البيانات bandwidth أثناء الهجمات.",
    },

    {
      skylineSrc: "/images/visitors-icon1.png",
      skylineAlt: "Cloud Services Skyline",
      title: "تحسين أداء الموقع عبر CDN",
      descrption:
        "تعمل شبكة توصيل المحتوى (CDN) الخاصة بنا على تحسين سرعة تحميل الصفحة وتقليل أحمال الخادم بنسبة 80٪ في المتوسط ​​لتحسين أداء موقعك",
    },
  ];
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="">
        <p className="text-center text-4xl font-semi-bold">طرق الدفع التقليدية</p>
      </div>

      <div className="pt-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full">
          {Beast.map((item, index) => (
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: { duration: 0.4, ease: "easeOut" },
              }}
              key={index}
              className="bg-white rounded-2xl border border-gray-200 shadow-md hover:shadow-lg transition-shadow p-8 "
            >
              <div className="">
                <img
                  src={item.skylineSrc}
                  alt={item.skylineAlt}
                  width={50}
                  height={50}
                  className="object-cover"
                />
                <p className="font-bold text-lg">{item.title}</p>
                <p className="font-normal text-sm text-gray-600 pt-4">
                  {item.descrption}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TraditionalMethods;
