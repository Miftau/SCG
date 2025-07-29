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

  const featuresData = [
    {
      id: 1,
      items: [
        "اكتشاف التهديدات المتقدمة والاستجابة لها..",
        "إدارة ومراقبة مركزية.",
      ],
    },
    {
      id: 2,
      items: [
        "حماية البريد الإلكتروني والأرشفة..",
        "إدارة ومراقبة مركزية..",
      ],
    },
    {
      id: 3,
      items: [
        "التعافي من الكوارث المستند إلى السحابة..",
        "إدارة ومراقبة مركزية..",
      ],
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

      <div className="w-full py-12 md:py-20 bg-white" >
        <p className="text-center text-xl font-medium pb-16 text-[#2B1F51]">مهتمّ لتعرف كيف يمكننا مساعدة عملك في تحقيق النجاح؟ تواصل معنا.</p>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 lg:gap-16">
            {featuresData.map((column) => (
              <motion.div
                initial={{ opacity: 0, y: 100 }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.4, ease: "easeOut" },
                }}
                key={column.id}
                className="flex flex-col gap-4"
              >
                {column.items.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 justify-end text-right"
                  >
                    <span className="text-gray-800 text-base font-medium leading-relaxed">
                      {item}
                    </span>
                    <CheckCircle2 className="w-5 h-5 text-gray-800 flex-shrink-0" />
                  </div>
                ))}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyUsSection;
