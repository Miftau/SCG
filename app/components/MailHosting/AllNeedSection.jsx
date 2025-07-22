"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const AllNeedSection = () => {

    const Beast = [
    {
      skylineSrc: "/images/gear-icon.png",
      skylineAlt: "Cloud Services Skyline",
      title: "سهولة الوصول والعمل المشترك",
      descrption:
        "قم بالوصول إلى بريدك الإلكتروني، التقويم، جهات الاتصال، والملفات من أي مكان وعلى أي جهاز، وتعاون مع فريقك في نفس الوقت، بينما يتم حفظ كل تغييرات العمل تلقائيًا"
    },
    {
      skylineSrc: "/images/Clippath2.png",
      skylineAlt: "Cloud Services Skyline",
      title: "الأمن",
      descrption:
        "باستخدام الذكاء الاصطناعي وبرامج الدفاع عن البريد الإلكتروني الذكية، تكافح LS Suite للحفاظ على بريدك الوارد آمنًا من الرسائل غير المرغوب فيها والفيروسات والبرامج الضارة، إضافةً إلى برامج الفدية، وهجمات التصيد الاحتيالي.",
    },
    {
      skylineSrc: "/images/Group3773.png",
      skylineAlt: "Cloud Services Skyline",
      title: "زيادة الوعي بالعلامة التجارية",
      descrption:
        "قم بتوصيل اسم نطاق شركتك لبناء الوعي بالعلامة التجارية وتقديم صورة أكثر احترافية مع بريد إلكتروني مخصص",
    },

  ];

  return (

    <div className="container mx-auto px-4 py-8">
      <div className="">
        <p className="text-center text-4xl font-bold">كل ما تحتاجه لعملك</p>
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
                <Image
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
    </div>  )
}

export default AllNeedSection