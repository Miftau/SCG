"use client";
import React, { use } from 'react';

const AdvantageSection = () => {
  const advantages = [
    {
      icon: '/images/multiling.png',
      description: "مواقع متعددة اللغات"

      },
    {
      icon: '/images/50lang.png',
      description: "دعم 50 لغة"

    },
    {
      icon: '/images/responsive.svg',
      description: "القدرة على التكيف مع جميع الأجهزة"
    },
    {
      icon: '/images/easytool.svg',
      description: "واجهة مستخدم بسيطة وسهلة"
    },
    {
      icon: '/images/vlesson.svg',
      description: "تعليمات تفصيلية للمستخدمين"
    },
    {
      icon: '/images/plugins.svg',
      description: "مجموعة واسعة من الإضافات"
    },
    {
      icon: '/images/templates.svg',
      description: "مكتبة ضخمة من القوالب"
    },
    {
      icon: '/images/transfer.svg',
      description: "استيراد سهل من أدوات أخرى"
    }
  ];

  return (
    <section className="py-8 px-4 bg-gray-50 min-h-screen">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-900 mb-2">المزايا</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">الفوائد الأساسية في جميع خططنا</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 max-w-6xl mx-auto">
        {advantages.map((advantage, index) => (
          <div 
            key={index}
            className="bg-white rounded-xl p-5 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 text-center"
          >
            <div className="flex justify-center mb-4">
              <img 
                src={advantage.icon} 
                alt={advantage.description}
                width="60" 
                height="60"
                className="w-15 h-15 object-contain"
              />
            </div>
            <p className="text-gray-600 text-sm leading-relaxed">{advantage.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AdvantageSection;