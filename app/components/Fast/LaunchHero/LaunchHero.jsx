"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
const LaunchHero = () => {
  const featuresData = [
    {
      id: 1,
      items: [
        "التعافي من الكوارث المستند إلى السحابة.",
        "إدارة ومراقبة مركزية.",
        "التعافي من الكوارث المستند إلى السحابة.",
        "إدارة ومراقبة مركزية.",
      ],
    },
    {
      id: 2,
      items: [
        "حماية البريد الإلكتروني والأرشفة.",
        "إدارة ومراقبة مركزية.",
        "حماية البريد الإلكتروني والأرشفة.",
        "إدارة ومراقبة مركزية.",
      ],
    },
    {
      id: 3,
      items: [
        "اكتشاف التهديدات المتقدمة والاستجابة لها.",
        "إدارة ومراقبة مركزية.",
        "اكتشاف التهديدات المتقدمة والاستجابة لها.",
        "إدارة ومراقبة مركزية.",
      ],
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="py-8">
        <p className="text-center text-4xl font-bold text-[#2B1F51] ">
          أطلق تطبيقاتك في ثواني!
        </p>
      </div>
      <div className="pt-8 ">
        <p className="text-center text-2xl font-bold text-[#2B1F51] pb-8">
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
            className="bg-white h-32 p-0 flex items-center justify-center rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300"
          >
            <Image
              src="/images/programer/recat.png"
              width={50}
              height={50}
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
            className="bg-white h-32 p-0 flex items-center justify-center rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300"
          >
            <Image
              src="/images/programer/docker.png"
              width={50}
              height={50}
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
            className=" bg-white h-32 p-0 flex items-center justify-center rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300"
          >
            <Image
              src="/images/programer/java.png"
              width={50}
              height={50}
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
            className="bg-white h-32 p-0 flex items-center justify-center rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300"
          >
            <Image
              src="/images/programer/python.png"
              width={50}
              height={50}
              alt="Fast Launch"
              className="object-cover "
            />
          </motion.div>
        </div>
        <div className="w-full py-12 md:py-20 bg-white" dir="rtl">
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
    </div>
  );
};

export default LaunchHero;
