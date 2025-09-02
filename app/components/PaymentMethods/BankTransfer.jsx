"use client";

import React from "react";

import { motion } from "framer-motion";

const BankTransfer = () => {
  const bank = [
     {
      id: 1,
      name: "بنكك",
      image: "/images/bank4.png",
      description:"تعرف على المزيد حول مصرفك، وخدماته، وكيف يساعدك في إدارة معاملاتك المالية بشكل آمن وفعال.",
      moreInfo: "المزيد",
    },
    {
      id: 2,
      name: " ايبان",
      image: "/images/bank2.png",
      description:"فهم أهمية رقم الحساب المصرفي الدولي (IBAN) في المعاملات الدولية وكيف يضمن تحويلات مالية آمنة ودقيقة.",
      moreInfo: "المزيد",
    },
     {
      id: 3,
      name: "تحويلات فورية",
      image: "/images/bank3.png",
      description:"أرسل واستقبل الأموال على الفور مع حلول دفع آمنة وموثوقة مصممة لإنجاز المعاملات بسرعة",
      moreInfo: "المزيد",
    },
    {
      id: 4,
      name: "اوو - كاش",
      image: "/images/bank1.png",
      description:"اكتشف مزايا Aww-Cash للمدفوعات الرقمية السلسة والإدارة المالية السهلة.",
      moreInfo: "المزيد",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="">
        <p className="text-[#2B1F51] text-center text-4xl font-semi-bold">
          طرق دفع التحويل البنكي
        </p>
        <p className="text-[#2B1F51] text-center text-lg font-medium pt-6">
          قم باجراء التحويلات البنكية بسهولة و امان
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
        {bank.map((item, index) => (
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

            <div className="pt-2 border-b-4 border-[#2B1F51] w-1/4"></div>
            <p className="pt-6 text-2xl font-semi-bold"> {item.name}</p>
            <p className="pt-6 text-sm text-[#2B1F51]">{item.description}</p>
            <p className="pt-8 text-lg">{item.moreInfo}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default BankTransfer;
