"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
const Services = () => {
  const [selected, setSelected] = useState("خدمات سحابية");
  const tabs = [
    { name: "خدمات سحابية" },
    { name: "نطاقات" },
    { name: "التصميم والتطوير" },
  ];
  const locations = [
    {
      skylineSrc: "/scg/images/Path.png",
      skylineAlt: "Cloud Services Skyline",
      title: "JPaaS المنصة كخدمة",
      descrption:
        "PaaS المُدارة مع عمليات DevOps المؤتمتة. تسعير الدفع حسب الاستخدام.",
      button: "اعرف المزيد",
    },
    {
      skylineSrc: "/scg/images/download.png",
      skylineAlt: "Cloud Services Skyline",
      title: "LS Suite",
      descrption:
        "بريد إلكتروني احترافي وتخزين عبر الإنترنت واجتماعات مشتركة والمزيد. بنيت للعمل..",
      button: "اعرف المزيد",
    },
    {
      skylineSrc: "/scg/images/Group1682.png",
      skylineAlt: "Cloud Services Skyline",
      title: "الاستضافة السحابية المشتركة",
      descrption:
        "Paاستضف موقعك بسهولة وأريحيّة وبتكلفة اقتصادية! مع الاستضافة السحابية المشتركة.aS المُدارة مع عمليات DevOps المؤتمتة. تسعير الدفع حسب الاستخدام.",
      button: "اعرف المزيد",
    },
  ];
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="">
        <p className="text-center text-4xl font-bold">
          خدمات كبيرة تلبي احتياجات عملك
        </p>
        <p className="text-center text-xl font-normal pt-4">
          من خلال منتجاتنا وخدماتنا السحابية، ستجد بأننا نلبي 100٪ من احتياجات
          عملك والبيانات، مع أمان فائق للبنية التحتية الخاصة بك
        </p>
      </div>

      {/* tabs */}
      <div className="w-full p-6">
        {/* Tabs Buttons */}
        <div className="w-full max-w-3xl mx-auto mb-6">
          <div className="flex flex-wrap rounded-md bg-gray-200 p-1 text-sm shadow-sm">
            {tabs.map((tab) => (
              <button
                key={tab.name}
                className={`flex-1 rounded-md px-4 py-2 text-center transition-colors ${
                  selected === tab.name
                    ? "bg-white text-black"
                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                }`}
                onClick={() => setSelected(tab.name)}
              >
                {tab.name}
              </button>
            ))}
          </div>
        </div>
        {/* Tabs Content */}
        <div className="w-full">
          {selected === "خدمات سحابية" && (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full">
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
                    <p className="font-bold text-lg">{location.title}</p>
                    <p className="font-normal text-sm text-gray-600 pt-4">
                      {location.descrption}
                    </p>
                    <p className="font-extrabold text-xl pt-4">
                      {location.button}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
          {selected === "نطاقات" && (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full">
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
                    <p className="font-bold text-lg">{location.title}</p>
                    <p className="font-normal text-sm text-gray-600 pt-4">
                      {location.descrption}
                    </p>
                    <p className="font-extrabold text-xl pt-4">
                      {location.button}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
          {selected === "التصميم والتطوير" && (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full">
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
                    <p className="font-bold text-lg">{location.title}</p>
                    <p className="font-normal text-sm text-gray-600 pt-4">
                      {location.descrption}
                    </p>
                    <p className="font-extrabold text-xl pt-4">
                      {location.button}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Services;
