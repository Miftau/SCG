'use client';

import React from 'react';
import { motion } from 'framer-motion';

const WindowsKeyAdSection = () => {
  const Beast = [
    {
      iconSrc: "/images/winds-keyAdSec-1.svg",
      iconAlt: "CDN Optimization",
      title: "العمل عبر منصات متعددة",
    },
    {
      iconSrc: "/images/winds-keyAdSec-2.svg",
      iconAlt: "DDoS Protection",
      title: "تخفيف هجمات DDoS",
    },

    {
      iconSrc: "/images/winds-keyAdSec-3.svg",
      iconAlt: "Security Protection",
      title: "اكتشاف وإزالة البرمجيات الخبيثة",
    },
    {
      iconSrc: "/images/winds-keyAdSec-4.svg",
      iconAlt: "DDoS Protection",
      title:"شهادة أمان SSL",
    },
    {
      iconSrc: "/images/winds-keyAdSec-5.svg",
      iconAlt: "CDN Optimization",
      title: "المراقبة الأمنية",
    },
    {
      iconSrc: "/images/winds-keyAdSec-6.svg",
      iconAlt: "CDN Optimization",
      title: "تحسين الأداء",
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-16 px-4">
      {/* Header */}
      <div className="max-w-5xl mx-auto text-center mb-12">
        <h2 className="text-2xl font-semi-bold text-gray-900 leading-tight">
        مزايا رئيسية
        </h2>
        <p className='mt-5'>
            امتلك خادماً مخصصاً خاصاً بك مع نظام التشغيل المفضل لديك والتطبيقات المثبتة مسبقاً
        </p>
      </div>

      {/* Cards Grid */}
      <div className="max-w-6xl mx-auto">
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
              className="bg-white rounded-md shadow-sm border border-gray-200 overflow-hidden hover:shadow-lg transition hover:scale-105 duration-300"
            >
              <div className="px-12 py-3 flex flex-col items-center text-center">
                {/* Icon */}
                <div className="w-28 h-28 mb-4 flex items-center justify-center">
                  <img 
                    src={item.iconSrc} 
                    alt={item.iconAlt} 
                    className="w-full h-full object-contain"
                  />
                </div>
                
                {/* Title */}
                <h3 className="text-sm text-gray-900 mb-3">
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

export default WindowsKeyAdSection;


