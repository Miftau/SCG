"use client";
import React from "react";
import { motion } from "framer-motion";

import { CheckCircle2 } from "lucide-react";
const LaunchHero = () => {
  const featuresData = [
    {
      id: 1,
      items: [
        "النسخ الاحتياطي والاستعادة للبيئات المادية، الافتراضية والسحابية.",
         "اكتشاف التهديدات المتقدمة والاستجابة لها.",
         "إدارة ومراقبة مركزية.",
      ],
    },
    {
      id: 2,
      items: [
        "الحماية من البرمجيات الخبيثة ومكافحة برامج الفدية.",
        "حماية البريد الإلكتروني والأرشفة.",
        "إدارة ومراقبة مركزية.",
      ],
    },
    {
      id: 3,
      items: [
        "حماية وإدارة الأجهزة الطرفية.",
       "التعافي من الكوارث القائم على السحابة.",
        "إدارة ومراقبة مركزية.",
      ],
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="py-8">
        <p className="text-center text-4xl font-semibold ">
          أطلق تطبيقاتك في ثواني!
        </p>
      </div>
      <div className="pt-8 ">
        <p className="text-center text-2xl pb-8">
          قم بإنشاء أو تشغيل مختلف تطبيقاتك، مع الدعم الشامل للمنصة
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center gap-4">
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: { duration: 0.4, ease: "easeOut" },
            }}
            className="bg-white h-48 p-0 flex items-center justify-center rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300"
          >
            <img
              src="/images/programer/recat.png"
              width={90}
              height={90}
              alt="Fast Launch"
              className="object-cover "
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: { duration: 0.4, ease: "easeOut" },
            }}
            className="bg-white h-48 p-0 flex items-center justify-center rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300"
          >
            <img
              src="/images/programer/docker.png"
              width={90}
              height={90}
              alt="Fast Launch"
              className="object-cover "
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: { duration: 0.4, ease: "easeOut" },
            }}
            className=" bg-white h-48 p-0 flex items-center justify-center rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300"
          >
            <img
              src="/images/programer/java.png"
              width={90}
              height={90}
              alt="Fast Launch"
              className="object-cover "
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: { duration: 0.4, ease: "easeOut" },
            }}
            className="bg-white h-48 p-0 flex items-center justify-center rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300"
          >
            <img
              src="/images/programer/python.png"
              width={90}
              height={90}
              alt="Fast Launch"
              className="object-cover "
            />
          </motion.div>
        </div>
        <div className="w-full py-12 md:py-20" >
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 lg:gap-16">
              {featuresData.map((column) => (
                <motion.div  initial={{ opacity: 0, y: 100 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: { duration: 0.4, ease: "easeOut" },
            }} key={column.id} className="flex flex-col gap-4">
                  {column.items.map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-2"
                    >
                      <CheckCircle2 className="w-5 h-5 text-gray-800 flex-shrink-0" />
                      <span className="text-gray-800 text-base font-medium leading-relaxed">
                        {item}
                      </span>
                    </div>
                  ))}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LaunchHero;
