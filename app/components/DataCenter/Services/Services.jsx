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
      skylineSrc: "/images/Path.png",
      skylineAlt: "Cloud Services Skyline",
      title: "JPaaS المنصة كخدمة",
      descrption:
        "PaaS المُدارة مع عمليات DevOps المؤتمتة. تسعير الدفع حسب الاستخدام.",
      button: "اعرف المزيد",
    },
    {
      skylineSrc: "/images/download.png",
      skylineAlt: "Cloud Services Skyline",
      title: "LS Suite",
      descrption:
        "بريد إلكتروني احترافي وتخزين عبر الإنترنت واجتماعات مشتركة والمزيد. بنيت للعمل..",
      button: "اعرف المزيد",
    },
    {
      skylineSrc: "/images/Group1682.png",
      skylineAlt: "Cloud Services Skyline",
      title: "الاستضافة السحابية المشتركة",
      descrption:
        "Paاستضف موقعك بسهولة وأريحيّة وبتكلفة اقتصادية! مع الاستضافة السحابية المشتركة.aS المُدارة مع عمليات DevOps المؤتمتة. تسعير الدفع حسب الاستخدام.",
      button: "اعرف المزيد",
    },
  ];
  return (
    <div className="relative mt-32 mb-32">
      <img class="absolute right-0 -z-10 -top-[150px]" alt="" src="data:image/svg+xml,%3csvg%20width='393'%20height='636'%20viewBox='0%200%20393%20636'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_9_77870)'%3e%3cg%20opacity='0.71'%3e%3cpath%20d='M330.305%20134.66L468%2071.9882L330.305%200L192.61%2071.9882L330.305%20134.66Z'%20fill='%23F2F6FE'/%3e%3cpath%20d='M192.61%2071.9883V427.472L330.305%20489.904V134.658L192.61%2071.9883Z'%20fill='url(%23paint0_linear_9_77870)'/%3e%3cpath%20d='M468%2071.9883L330.305%20134.659V489.901L468%20409.631'%20fill='url(%23paint1_linear_9_77870)'/%3e%3cpath%20d='M275.391%20218.09L137.695%20280.761V636.003L275.391%20555.733'%20fill='url(%23paint2_linear_9_77870)'/%3e%3cpath%20d='M137.695%20280.76L275.391%20218.09L137.695%20146.102L0.00302124%20218.09L137.695%20280.76Z'%20fill='%23F2F6FE'/%3e%3cpath%20d='M7.62939e-05%20218.09V573.573L137.695%20636.005V280.761L7.62939e-05%20218.09Z'%20fill='url(%23paint3_linear_9_77870)'/%3e%3cpath%20d='M275.391%20218.09L137.695%20280.761V636.003L275.391%20555.733'%20fill='url(%23paint4_linear_9_77870)'/%3e%3c/g%3e%3c/g%3e%3cdefs%3e%3clinearGradient%20id='paint0_linear_9_77870'%20x1='268.204'%20y1='547.158'%20x2='156.896'%20y2='70.7977'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='white'%20stop-opacity='0'/%3e%3cstop%20offset='1'%20stop-color='%23E0E7FD'/%3e%3c/linearGradient%3e%3clinearGradient%20id='paint1_linear_9_77870'%20x1='380.564'%20y1='287.631'%20x2='562.528'%20y2='271.179'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='white'/%3e%3cstop%20offset='1'%20stop-color='%23E0E7FD'/%3e%3c/linearGradient%3e%3clinearGradient%20id='paint2_linear_9_77870'%20x1='187.954'%20y1='433.733'%20x2='369.918'%20y2='417.281'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='white'/%3e%3cstop%20offset='1'%20stop-color='%23E0E7FD'/%3e%3c/linearGradient%3e%3clinearGradient%20id='paint3_linear_9_77870'%20x1='75.5948'%20y1='693.26'%20x2='-35.713'%20y2='216.899'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='white'%20stop-opacity='0'/%3e%3cstop%20offset='1'%20stop-color='%23E0E7FD'/%3e%3c/linearGradient%3e%3clinearGradient%20id='paint4_linear_9_77870'%20x1='187.954'%20y1='433.733'%20x2='369.918'%20y2='417.28'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='white'%20stop-opacity='0'/%3e%3cstop%20offset='1'%20stop-color='%23E0E7FD'/%3e%3c/linearGradient%3e%3cclipPath%20id='clip0_9_77870'%3e%3crect%20width='468'%20height='636'%20fill='white'%20transform='matrix(-1%200%200%201%20468%200)'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e"></img>
      <img class="absolute left-0 -z-10 -top-[150px]" alt="" src="data:image/svg+xml,%3csvg%20width='393'%20height='636'%20viewBox='0%200%20393%20636'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_9_77861)'%3e%3cg%20opacity='0.71'%3e%3cpath%20d='M62.6952%20134.66L-75%2071.9882L62.6952%200L200.39%2071.9882L62.6952%20134.66Z'%20fill='%23F2F6FE'/%3e%3cpath%20d='M200.39%2071.9883V427.472L62.6953%20489.904V134.658L200.39%2071.9883Z'%20fill='url(%23paint0_linear_9_77861)'/%3e%3cpath%20d='M-75%2071.9883L62.6952%20134.659V489.901L-75%20409.631'%20fill='url(%23paint1_linear_9_77861)'/%3e%3cpath%20d='M117.609%20218.09L255.305%20280.761V636.003L117.609%20555.733'%20fill='url(%23paint2_linear_9_77861)'/%3e%3cpath%20d='M255.305%20280.76L117.609%20218.09L255.305%20146.102L392.997%20218.09L255.305%20280.76Z'%20fill='%23F2F6FE'/%3e%3cpath%20d='M393%20218.09V573.573L255.305%20636.005V280.761L393%20218.09Z'%20fill='url(%23paint3_linear_9_77861)'/%3e%3cpath%20d='M117.609%20218.09L255.305%20280.761V636.003L117.609%20555.733'%20fill='url(%23paint4_linear_9_77861)'/%3e%3c/g%3e%3c/g%3e%3cdefs%3e%3clinearGradient%20id='paint0_linear_9_77861'%20x1='124.796'%20y1='547.158'%20x2='236.104'%20y2='70.7977'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='white'%20stop-opacity='0'/%3e%3cstop%20offset='1'%20stop-color='%23E0E7FD'/%3e%3c/linearGradient%3e%3clinearGradient%20id='paint1_linear_9_77861'%20x1='12.4365'%20y1='287.631'%20x2='-169.528'%20y2='271.179'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='white'/%3e%3cstop%20offset='1'%20stop-color='%23E0E7FD'/%3e%3c/linearGradient%3e%3clinearGradient%20id='paint2_linear_9_77861'%20x1='205.046'%20y1='433.733'%20x2='23.0819'%20y2='417.281'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='white'/%3e%3cstop%20offset='1'%20stop-color='%23E0E7FD'/%3e%3c/linearGradient%3e%3clinearGradient%20id='paint3_linear_9_77861'%20x1='317.405'%20y1='693.26'%20x2='428.713'%20y2='216.899'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='white'%20stop-opacity='0'/%3e%3cstop%20offset='1'%20stop-color='%23E0E7FD'/%3e%3c/linearGradient%3e%3clinearGradient%20id='paint4_linear_9_77861'%20x1='205.046'%20y1='433.733'%20x2='23.0819'%20y2='417.28'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='white'%20stop-opacity='0'/%3e%3cstop%20offset='1'%20stop-color='%23E0E7FD'/%3e%3c/linearGradient%3e%3cclipPath%20id='clip0_9_77861'%3e%3crect%20width='468'%20height='636'%20fill='white'%20transform='translate(-75)'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e"></img>

      {/* title and description */}
      <div className="container">
        <h1 className="lg:text-4xl text-xl mb-6 text-center text-3xl !font-bold !mb-20">
          خدمات كبيرة تلبي احتياجات عملك
        </h1>
        <p className="text-center md:w-3/6 mx-auto">
          من خلال منتجاتنا وخدماتنا السحابية، ستجد بأننا نلبي 100٪ من احتياجات
          عملك والبيانات، مع أمان فائق للبنية التحتية الخاصة بك
        </p>
        {/* Tabs Buttons */}
          <div className="bg-gray-100 md:w-fit md:flex items-center gap-16 mx-auto mt-8 py-2 px-4 rounded-md font-medium">
            {tabs.map((tab) => (
              <button
                key={tab.name}
                className={`bg-gray-100 md:w-fit md:flex items-center gap-16 mx-auto mt-2 py-2 px-4 rounded-md font-medium ${
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
        <div className="container overflow-hidden">
          {selected === "خدمات سحابية" && (
            <div className="mt-16 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 mx-16 overflow-hidden">
              {locations.map((location, index) => (
                <motion.div
                  initial={{ opacity: 0, y: 100 }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.4, ease: "easeOut" },
                  }}
                  key={index}
                  className="bg-white rounded-lg px-6 py-6 flex items-start gap-4 shadow-light flex-col gap-4 justify-between transition hover:scale-105 "
                >
                  <div className="">
                    <img
                      src={location.skylineSrc}
                      alt={location.skylineAlt}
                      width={50}
                      height={50}
                      className=" undefined relative before:absolute before:w-16 before:h-2 before:bg-black before:bottom-0 before:left-0"
                      
                    />
                    <p className="mb-6 text-xl undefined">{location.title}</p>
                    <p className="text-sm undefined">
                      {location.descrption}
                    </p>
                    <p className=" flex items-center gap-2 text-blue-600 hover:text-blue-900 duration-300 hover:translate-x-1 rounded-md">
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
  );
};

export default Services;

<div class="bg-gray-100 md:w-fit md:flex items-center gap-16 mx-auto mt-8 py-2 px-4 rounded-md font-medium">
  <p>Design and development</p><p class="my-2 md:m-0">Ranges</p>
  <p class="bg-white px-4 py-2 rounded-md">Cloud services</p></div>