"use client";

import React from "react";

import { motion } from "framer-motion";
const ElectronicWallets = () => {
  const wallets = [
     {
      id: 1,
      name: "سداد",
      image: "/images/bank5.png",
      description:"قم بإجراء دفعات آمنة وسريعة مع حلول الدفع الموثوقة لدينا، مما يضمن لك تجربة معاملات سلسة.",
      moreInfo: "المزيد",
    },
    {
      id: 2,
      name: "بايبال",
      image: "/images/paypal.png",
      description:"أرسل واستقبل الأموال في جميع أنحاء العالم باستخدام PayPal، منصة الدفع الإلكتروني الموثوقة التي توفر معاملات آمنة.",
      moreInfo: "المزيد",
    },
     {
      id: 3,
      name: "فودافون",
      image: "/images/bank6.png",
      description:"حوّل الأموال وادفع الفواتير واشحن رصيدك بسهولة مع خدمة الدفع عبر الهاتف المحمول من فودافون.",
      moreInfo: "المزيد",
    },
     {
      id: 4,
      name: " زين كاش",
      image: "/images/bnak7.png",
      description:"استمتع بمعاملات مالية سلسة معزين كاش، الذي يوفر مدفوعات رقمية وتحويلات مالية آمنة.",
      moreInfo: "المزيد",
    },
  ];
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="">
        <p className="text-[#2B1F51] text-center text-4xl font-semi-bold">
          المحافض الالكترونية
        </p>
        <p className="text-[#2B1F51] text-center text-lg font-medium pt-6">
          احصل على ترخيص مفرد للخوادم الخاصة و الخوادم المخصصة الكاملة
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
        { wallets.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 100 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: { duration: 0.4, ease: "easeOut" },
            }}
            className="bg-white p-4 rounded-lg shadow-md flex flex-col hover:shadow-xl transition-shadow duration-300 "
          >
            <div className="w-[150px] h-[150px] relative">
              <img
                src={item.image}
                alt={item.name}
          
                className="object-contain"
              />
            </div>

            <div className="border-b-4 border-[#2B1F51] w-1/4"></div>
            <p className="pt-3 text-xl font-semi-bold"> {item.name}</p>
            <p className="pt-6 text-[#2B1F51]">{item.description}</p>
            <p className="pt-8 text-lg">{item.moreInfo}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ElectronicWallets;
