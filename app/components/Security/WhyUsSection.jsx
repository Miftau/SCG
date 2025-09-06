"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
const WhyUsSection = () => {
  const locations = [
    {
      skylineSrc: "/images/Group 3275.png",
      skylineAlt: "Cloud Services Skyline",
      title: "حظر البريد الإلكتروني غير المصرح به",
      descrption:
        "قم بتكوين المجموعات الخاصة بك وإدارتها ونشرها بسرعة في خطوات بسيطة وبدون وقت يُذكر..",
    },
    {
      skylineSrc: "/images/Group 3274.png",
      skylineAlt: "Cloud Services Skyline",
      title: "حظر البريد الإلكتروني غير المصرح به",
      descrption:
        "قم بتكوين المجموعات الخاصة بك وإدارتها ونشرها بسرعة في خطوات بسيطة وبدون وقت يُذكر.",
    },
    {
      skylineSrc: "/images/Group3277.png",
      skylineAlt: "Cloud Services Skyline",
      title: "حظر البريد الإلكتروني غير المصرح به",
      descrption:
        "قم بتكوين المجموعات الخاصة بك وإدارتها ونشرها بسرعة في خطوات بسيطة وبدون وقت يُذكر.",
    },
  ];


  return (
    <div className="container mx-auto px-4 py-8">
      <div className="py-8">
        <p className="text-center text-4xl font-bold text-[#2B1F51] ">
          لماذا تختار النمور؟
        </p>
        <p className="text-center text-xl font-medium text-[#2B1F51] pt-4">
          حلول وخدمات متطوّرة وشاملة، للأفراد والمؤسسات
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
            <div className="">
              <img
                src={location.skylineSrc}
                alt={location.skylineAlt}
                width={50}
                height={50}
                className=" object-cover"
              />
              <p className="font-bold text-lg">{location.title}</p>
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

export default WhyUsSection;
