// app/components/MicrosoftCards.jsx
'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const MicrosoftCards = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const cards = [
    {
      id: 1,
      title: "Excel",
      icon: "/images/microsoft/excel1.png",
      description: "أفضل تطبيق جداول بيانات لتحليل البيانات وعرض النتائج بشكل مبسط وسهل الاستخدام.",
      hoverColor: "bg-green-600"
    },
    {
      id: 2,
      title: "Word",
      icon: "/images/microsoft/word1.png",
      description: "أداة كتابة نصوص قوية وسهلة الاستخدام مع دعم للتنسيق والتحرير المتقدم.",
      hoverColor: "bg-blue-600"
    },
    {
      id: 3,
      title: "Microsoft Teams",
      icon: "/images/microsoft/MT 1.png",
      description: "منصة تواصل اجتماعي داخلية للفرق، تمكّن من التفاعل والتعاون بسهولة في الوقت الفعلي.",
      hoverColor: "bg-purple-600"
    },
    {
      id: 4,
      title: "PowerPoint",
      icon: "/images/microsoft/powerpoint.png",
      description: "أداة عرض تقديمي قوية لإنشاء عروض تقديمية احترافية وجذابة.",
      hoverColor: "bg-red-600"
    },
    {
      id: 5,
      title: "Exchange",
      icon: "/images/microsoft/exchange 1.png",
      description: "خدمة البريد الإلكتروني المؤسسي مع دعم للبريد والجدول والتقويم والمهام.",
      hoverColor: "bg-blue-500"
    },
    {
      id: 6,
      title: "OneDrive",
      icon: "/images/microsoft/onedrive 1.png",
      description: "تخزين سحابي آمن وسهل الوصول إليه، مع إمكانية مزامنة الملفات عبر الأجهزة.",
      hoverColor: "bg-blue-400"
    },
    {
      id: 7,
      title: "SharePoint",
      icon: "/images/microsoft/sp 1.png",
      description: "منصة إدارة المحتوى والتعاون، تمكن من مشاركة الملفات وتنظيمها بفعالية.",
      hoverColor: "bg-teal-600"
    },
    {
      id: 8,
      title: "Access",
      icon: "/images/microsoft/access 1.png",
      description: "قاعدة بيانات قوية وسهلة الاستخدام، متاحة للشركات الصغيرة والمتوسطة (Premium & Enterprise فقط).",
      hoverColor: "bg-red-700"
    }
  ];

  const cardVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    hover: {
      scale: 1.02,
      boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1)"
    }
  };

  const iconVariants = {
    initial: { scale: 1 },
    hover: { scale: 1.1 }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-16 px-4">
      {/* Header */}
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight mb-4">
          جميع تطبيقاتك الموثوقة ككل فاكهة تحتاجها كل يوم
        </h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          استخدم أفضل التطبيقات التي تعرفها وتحبها بسهولة وموثوقية عالية
        </p>
      </div>

      {/* Cards Grid */}
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
          <AnimatePresence>
            {cards.map((card) => (
              <motion.div
                key={card.id}
                variants={cardVariants}
                initial="initial"
                animate="animate"
                whileHover="hover"
                onMouseEnter={() => setHoveredCard(card.id)}
                onMouseLeave={() => setHoveredCard(null)}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-lg shadow-md border border-gray-200 overflow-hidden hover:shadow-lg transition-all duration-300 cursor-pointer relative"
              >
                <div className="p-4 flex flex-col h-full">
                  
                  {/* Title + Icon aligned to right */}
                  <div className="flex items-center justify-end mb-2 space-x-72">
                    <h3 className="text-lg font-semibold text-gray-900">{card.title}</h3>
                    <motion.div
                      variants={iconVariants}
                      className="w-10 h-12 flex items-center justify-center"
                    >
                      <img 
                        src={card.icon} 
                        alt={`${card.title} icon`} 
                        className="w-full h-full object-contain"
                      />
                    </motion.div>
                  </div>
                  
                  <div className="flex-1">
                    <p className="text-md text-gray-600 leading-relaxed text-right">
                      {card.description}
                    </p>
                  </div>
                  
                  {/* Hover Effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent to-black opacity-0"
                    animate={{
                      opacity: hoveredCard === card.id ? 0.1 : 0
                    }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

    </div>
  );
};

export default MicrosoftCards;
