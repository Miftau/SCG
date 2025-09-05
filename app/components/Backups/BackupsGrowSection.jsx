"use client";
import { motion } from "framer-motion";

const BackupsGrowSection = () => {
  const locations = [
  
     {
      skylineSrc: "/images/Clip path group(5).png",
      skylineAlt: "Cloud Services Skyline",
      title: "حظر البريد الإلكتروني غير المصرح بهتحسين أداء الموقع عبر CDN",
      descrption:
        "تعمل شبكة توصيل المحتوى (CDN) الخاصة بنا على تحسين سرعة تحميل الصفحة وتقليل أحمال الخادم بنسبة 80٪ في المتوسط ​​لتحسين أداء موقعك.",
    },
    {
      skylineSrc: "/images/ddos-icon1.png",
      skylineAlt: "Cloud Services Skyline",
      title: "التخفيف من هجمات DDoSحظر البريد الإلكتروني غير المصرح به",
      descrption:
        "يمكن أن تتسبب هجمات حجب الخدمة الموزعة (DDoS) في التوقف التام لعملك. نحن نحظر هجمات DDoS للطبقات 3 و 4 و 7 ومع تأمين معدل نقل البيانات bandwidth أثناء الهجمات.",
    },
      {
      skylineSrc: "/images/Group (1).png",
      skylineAlt: "Cloud Services Skyline",
      title: "الحماية من عمليّات الاختراق والبرامج الخبيثة",
      descrption:
        "قم بحماية موقعك من البرامج الضارة ومنع محاولات الاختراق وهجمات استغلال الثغرات Zero-Day وهجمات تخمين كلمة المرور Brute Force.",
    },
   
  ];
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="py-8">
        <p className="text-center text-4xl font-semibold text-[#2B1F51] ">
          انطلق أسرع وسارع في نموّ عملك{" "}
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
              <p className="text-lg pt-6">{location.title}</p>
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

export default BackupsGrowSection;
