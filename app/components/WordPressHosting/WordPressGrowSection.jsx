"use client";
import { motion } from "framer-motion";
import Image from "next/image";
const WordPressGrowSection = () => {

    const locations = [
    {
      skylineSrc: "/images/Group 3275.png",
      skylineAlt: "Cloud Services Skyline",
      title: "حظر البريد الإلكتروني غير المصرح به",
      descrption:
        "ارفع سرعة موقعك مع إضافة لايت اسبيد كاش الأفضل على الاطلاق. أنشئ نسخ احتياطية (backups) لموقعك بضغطة زر.",
    },
    {
      skylineSrc: "/images/Group 3274.png",
      skylineAlt: "Cloud Services Skyline",
      title: "تصفح وتنصيب وإدارة المكونات الإضافية",
      descrption:
        "نوفر لك امكانية تثبيت المكونات الإضافية على ووردبريس وإدارتها دون الحاجة لمغادرة لوحة تحكم المستخدم الخاصة بك.",
    },
    {
      skylineSrc: "/images/Group3277.png",
      skylineAlt: "Cloud Services Skyline",
      title: "لتحكم الكامل في إدارة ووردبريس",
      descrption:
        "قم بعرض وإنشاء وتحرير بالإضافة إلى حذف نسخ ووردبريس المثبتة باستخدام قائمة بسيطة من النماذج بنقرة واحدة",
    },
  ];


  return (
    <div className="container mx-auto px-4 py-8">
      <div className="py-8">
        <p className="text-center text-4xl font-bold text-[#2B1F51] ">
          انطلق أسرع وسارع في نموّ عملك
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
            className=" bg-white rounded-2xl border border-gray-200 shadow-md hover:shadow-lg transition-shadow p-4 "
          >
            <div className="">
              <Image
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

export default WordPressGrowSection;
