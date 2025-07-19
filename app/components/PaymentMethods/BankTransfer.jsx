"use client";
import Image from "next/image";
import React from "react";

import { motion } from "framer-motion";

const BankTransfer = () => {
  const bank = [
    {
      id: 1,
      name: " ايبان",
      image: "/images/bank2.png",
      description:
        "كلام عن اووكاش كلام عن اووكاش كلام عن اووكاش عن اووكاش عن اووكاش عناووكاش كلام عن اووكاش كلام عن اووكاش كلام عن اووكاش",
      moreInfo: "المزيد",
    },
    {
      id: 2,
      name: "فوري",
      image: "/images/bank3.png",
      description:
        "كلام عن اووكاش كلام عن اووكاش كلام عن اووكاش عن اووكاش عن اووكاش عناووكاش كلام عن اووكاش كلام عن اووكاش كلام عن اووكاش",
      moreInfo: "المزيد",
    },
    {
      id: 3,
      name: "بنكك",
      image: "/images/bank4.png",
      description:
        "كلام عن اووكاش كلام عن اووكاش كلام عن اووكاش عن اووكاش عن اووكاش عناووكاش كلام عن اووكاش كلام عن اووكاش كلام عن اووكاش",
      moreInfo: "المزيد",
    },
    {
      id: 4,
      name: "اوو - كاش",
      image: "/images/bank1.png",
      description:
        "كلام عن اووكاش كلام عن اووكاش كلام عن اووكاش عن اووكاش عن اووكاش عناووكاش كلام عن اووكاش كلام عن اووكاش كلام عن اووكاش",
      moreInfo: "المزيد",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="">
        <p className="text-[#2B1F51] text-center text-4xl font-bold">
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
              <Image
                src={item.image}
                alt={item.name}
                fill
                className="object-contain"
              />
            </div>

            <div className="pt-4 border-b-2 border-[#2B1F51] w-1/4"></div>
            <p className="pt-6 text-2xl font-bold"> {item.name}</p>
            <p className="pt-6 font-bold text-[#2B1F51]">{item.description}</p>
            <p className="pt-8 font-extrabold text-xl">{item.moreInfo}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default BankTransfer;
