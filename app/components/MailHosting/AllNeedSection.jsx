"use client";

import React from "react";
import { motion } from "framer-motion";

const AllNeedSection = () => {
  const Beast = [
    {
      skylineSrc: "/images/download 26-B0LX2okM.svg",
      skylineAlt: "Cloud Services Skyline",
      title: "سهولة الوصول والعمل المشترك",
      descrption:
        "قم بالوصول إلى بريدك الإلكتروني، التقويم، جهات الاتصال، والملفات من أي مكان وعلى أي جهاز، وتعاون مع فريقك في نفس الوقت، بينما يتم حفظ كل تغييرات العمل تلقائيًا",
    },
    {
      skylineSrc: "/images/download 27-BvUVqT_n.svg",
      skylineAlt: "Cloud Services Skyline",
      title: "الأمن",
      descrption:
        "باستخدام الذكاء الاصطناعي وبرامج الدفاع عن البريد الإلكتروني الذكية، تكافح LS Suite للحفاظ على بريدك الوارد آمنًا من الرسائل غير المرغوب فيها والفيروسات والبرامج الضارة، إضافةً إلى برامج الفدية، وهجمات التصيد الاحتيالي.",
    },
    {
      skylineSrc: "/images/download 28-CHrlJoIy.svg",
      skylineAlt: "Cloud Services Skyline",
      title: "زيادة الوعي بالعلامة التجارية",
      descrption:
        "قم بتوصيل اسم نطاق شركتك لبناء الوعي بالعلامة التجارية وتقديم صورة أكثر احترافية مع بريد إلكتروني مخصص",
    },
  ];

  return (
    <div className="relative mt-32 mb-20">
      {/* Header */}
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-semibold text-gray-700 leading-tight">
          كل ما تحتاجه لعملك
        </h2>
      </div>

      {/* Cards Grid */}
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {Beast.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: { duration: 0.5, delay: index * 0.1, ease: "easeOut" },
              }}
              viewport={{ once: true }}
              className="bg-white rounded-lg shadow-sm border border-gray-100 p-6 hover:shadow-md transition-all duration-300 transform hover:-translate-y-1"
            >
              {/* Icon */}
              <div className="mb-5 flex justify-center">
                <img
                  src={item.skylineSrc}
                  alt={item.skylineAlt}
                  width={64}
                  height={64}
                  className="text-blue-600"
                />
              </div>

              {/* Title */}
              <h3 className="text-lg font-medium text-gray-800 mb-3 text-center">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-gray-600 leading-relaxed text-center">
                {item.descrption}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllNeedSection;