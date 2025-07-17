"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const BeastMain = () => {
  const Beast = [
    {
      skylineSrc: "/images/gear-icon.png",
      skylineAlt: "Cloud Services Skyline",
      title: "بريد إلكتروني مخصَّص وآمن للأعمال",
    },
    {
      skylineSrc: "/images/Clippath2.png",
      skylineAlt: "Cloud Services Skyline",
      title: "بريد إلكتروني موثوق مع ضمان وقت إتاحية 99.9٪.",
    },
    {
      skylineSrc: "/images/Group3773.png",
      skylineAlt: "Cloud Services Skyline",
      title: "سعة تخزين البريد",
    },

    {
      skylineSrc: "/images/Group(1).png",
      skylineAlt: "Cloud Services Skyline",
      title: "تصفية البريد العشوائي والحماية من الفيروسات",
    },
    {
      skylineSrc: "/images/Clippath.png",
      skylineAlt: "Cloud Services Skyline",
      title: "مشاركة التقويم والاتصالات والمهام",
    },

    {
      skylineSrc: "/images/visitors-icon1.png",
      skylineAlt: "Cloud Services Skyline",
      title: "مشاركة التقويم والاتصالات والمهام",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="">
        <p className="text-center text-4xl font-bold pb-4">مزايا رئيسية</p>
        <p className="text-center text-xl font-medium pb-8">
          قم بامتلاك مُخدّمك المخصص مع نظام التشغيل المفضل لديك والتطبيقات
          المثبتة مسبقًا.{" "}
        </p>
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
              className="bg-white rounded-2xl border border-gray-200 shadow-md hover:shadow-lg transition-shadow p-8 flex flex-col items-center justify-center text-center"
            >
              <Image
                src={item.skylineSrc}
                alt={item.skylineAlt}
                width={50}
                height={50}
                className="object-cover mb-4"
              />
              <p className="font-bold text-lg">{item.title}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BeastMain;
