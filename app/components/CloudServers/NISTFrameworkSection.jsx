"use client";
import React from "react";
import {
  ShieldCheck,
  ClipboardList,
  Scan,
  RotateCcw,
  ArrowUpRight,
} from "lucide-react";
import { motion } from "framer-motion";
const NISTFrameworkSection = () => {
  const iconColor = "#4A3B8F"; // Custom color for icons and main heading

  const features = [
    {
      icon: <ShieldCheck size={24} color={iconColor} />,
      title: "الحماية",
      description:
        "باستخدام أفضل الممارسات في مجال الأمان والإدارة وتحديثات البرامج والمزيد",
    },
    {
      icon: <ClipboardList size={24} color={iconColor} />,
      title: "التعرف",
      description:
        "على الثغرات الأمنية في البنية التحتية لتكنولوجيا المعلومات لديك وإجراء الاكتشاف التلقائي للأجهزة في شبكتك",
    },
    {
      icon: <Scan size={24} color={iconColor} />,
      title: "التحقق",
      description:
        "من التهديدات وتوفير دفاعات قوية ضد البرامج الضارة / برامج الفدية",
    },
    {
      icon: <RotateCcw size={24} color={iconColor} />,
      title: "الاستعادة",
      description:
        "يمكننا بسرعة معالجة واستعادة البيانات والأنظمة المفقودة عن بعد مع التحقق من سبب حدوث المشكلة",
    },
    {
      icon: <ArrowUpRight size={24} color={iconColor} />,
      title: "الاستجابة",
      description:
        "السريعة باستخدام تنبيهات مركز عمليات الحماية الإلكترونية والدعم في حالة حدوث هجوم إلكتروني",
    },
  ];

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 ">
      <div className="container px-4 md:px-6">
        {/* Main Centered Title */}
        <h2
          className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12"
          style={{ color: iconColor }}
        >
          متوافق مع إطار عمل NIST
        </h2>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:order-1">
          <div className="flex flex-col items-end text-right space-y-3">
            <p className="max-w-[600px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              يتوافق Acronis مع إطار عمل المعهد الوطني للمعايير والتكنولوجيا
              (NIST)، والذي يتكون من خمسة مبادئ لحماية عملك:
            </p>
          </div>
          {features.map((feature, index) => (
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: { duration: 0.4, ease: "easeOut" },
              }}
              key={index}
              className="card-hover bg-white rounded-lg shadow-md p-6 flex flex-col items-end text-right space-y-3"
            >
              <div className="flex-shrink-0">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NISTFrameworkSection;
