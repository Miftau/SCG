// app/components/BeastSection.jsx
'use client';

import React from 'react';
import { motion } from 'framer-motion';

const BeastSection = () => {
  const Beast = [
    {
      iconSrc: "/images/gear-icon.png",
      iconAlt: "CDN Optimization",
      title: "تحسين أداء الموقع عبر CDN",
      description: "تعمل شبكة توصيل المحتوى (CDN) الخاصة بنا على تحسين سرعة تحميل الصفحة وتقليل أحمال الخادم بنسبة 80٪ في المتوسط لتحسين أداء موقعك. يُمكن أن تصل سرعة التحميل إلى 180 ميغابايت في الثانية من أي مكان حول العالم."
    },
    {
      iconSrc: "/images/Clippath2.png",
      iconAlt: "DDoS Protection",
      title: "التخفيف من هجمات DDoS",
      description: "يمكن أن تتسبب هجمات حجب الخدمة الموزعة (DDoS) في التوقف التام لعملك. نحن نحظر هجمات DDoS للطبقات 3 و 4 و 7 ومع تأمين معدل نقل البيانات bandwidth أثناء الهجمات."
    },

    {
      iconSrc: "/images/Group(1).png",
      iconAlt: "Security Protection",
      title: "الحماية من عمليّات الاختراق والبرامج الخبيثة",
      description: "قم بحماية موقعك من البرامج الضارة ومنع محاولات الاختراق وهجمات استغلال الثغرات Zero-Day وهجمات تخمين كلمة المرور Brute Force."
    },
    {
      iconSrc: "/images/Clippath.png",
      iconAlt: "DDoS Protection",
      title: "التخفيف من هجمات DDoS",
      description: "يمكن أن تتسبب هجمات حجب الخدمة الموزعة (DDoS) في التوقف التام لعملك. نحن نحظر هجمات DDoS للطبقات 3 و 4 و 7 ومع تأمين معدل نقل البيانات bandwidth أثناء الهجمات."
    },
        {
      iconSrc: "/images/Clippath2.png",
      iconAlt: "DDoS Protection",
      title: "التخفيف من هجمات DDoS",
      description: "يمكن أن تتسبب هجمات حجب الخدمة الموزعة (DDoS) في التوقف التام لعملك. نحن نحظر هجمات DDoS للطبقات 3 و 4 و 7 ومع تأمين معدل نقل البيانات bandwidth أثناء الهجمات."
    },
    {
      iconSrc: "/images/visitors-icon1.png",
      iconAlt: "CDN Optimization",
      title: "تحسين أداء الموقع عبر CDN",
      description: "تعمل شبكة توصيل المحتوى (CDN) الخاصة بنا على تحسين سرعة تحميل الصفحة وتقليل أحمال الخادم بنسبة 80٪ في المتوسط لتحسين أداء موقعك. يُمكن أن تصل سرعة التحميل إلى 180 ميغابايت في الثانية من أي مكان حول العالم."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-16 px-4">
      {/* Header */}
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
          ما الذي يميز
        </h2>
      </div>

      {/* Cards Grid */}
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {Beast.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: { duration: 0.5, ease: "easeOut", delay: index * 0.1 }
              }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-lg transition-all duration-300"
            >
              <div className="p-6 flex flex-col items-center text-center">
                {/* Icon */}
                <div className="w-16 h-16 mb-4 flex items-center justify-center">
                  <img 
                    src={item.iconSrc} 
                    alt={item.iconAlt} 
                    className="w-full h-full object-contain"
                  />
                </div>
                
                {/* Title */}
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {item.title}
                </h3>
                
                {/* Description */}
                <p className="text-sm text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BeastSection;