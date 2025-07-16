"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
const ServerLocation = () => {
  const locations = [
    {
      name: "أمريكا",
      flag: "/images/flag/Amreci.png",
      response: "20ms",
      color: "#46CC3F",
    },
    {
      name: "المانيا",
      flag: "/images/flag/Germen.png",
      response: "35ms",
      color: "#46CC3F",
    },
    {
      name: "تركيا",
      flag: "/images/flag/turkey.png",
      response: "50ms",
      color: "#46CC3F",
    },
    {
      name: "ايطاليا",
      flag: "/images/flag/Italy.png",
      response: "70ms",
      color: "#46CC3F",
    },
    {
      name: "كوريا",
      flag: "/images/flag/Kore.png",
      response: "70ms",
      color: "#46CC3F",
    },
    {
      name: "الامارات",
      flag: "/images/flag/Dubai.png",
      response: "70ms",
      color: "#46CC3F",
    },
    {
      name: "بيرطانيا",
      flag: "/images/flag/England.png",
      response: "70ms",
      color: "#46CC3F",
    },
    {
      name: "السعودية",
      flag: "/images/flag/Sud.png",
      response: "70ms",
      color: "#46CC3F",
    },
    {
      name: "السعودية",
      flag: "/images/flag/Sud.png",
      response: "70ms",
      color: "#46CC3F",
    },
    {
      name: "فنلند",
      flag: "/images/flag/Finland.png",
      response: "70ms",
      color: "#46CC3F",
    },
    {
      name: "السودان",
      flag: "/images/flag/Suda.png",
      response: "70ms",
      color: "#46CC3F",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <p className="text-center text-4xl font-bold">أماكن سيرفراتنا</p>
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: { duration: 0.4, ease: "easeOut" },
        }}
        className="mt-12 flex justify-center items-center"
      >
        <Image
          src="/images/Group4.png"
          alt="Server Location"
          width={1000}
          height={1000}
        />
      </motion.div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 mt-8">
        {locations.map((location, index) => (
         <motion.div
  key={index}
  initial={{ opacity: 0, y: 100 }}
  whileInView={{
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" },
  }}
  className="flex flex-col items-center sm:flex-row sm:justify-around bg-white rounded-lg shadow-md p-4 hover:shadow-xl transition-shadow text-center sm:text-start"
>
  <div className="mb-2 sm:mb-0">
    <Image
      src={location.flag}
      alt={`${location.name} Flag`}
      width={50}
      height={50}
      className="rounded-full"
    />
  </div>
  <div>
    <p className="text-lg sm:text-xl font-semibold">{location.name}</p>
    <p className="text-sm font-medium text-gray-600 flex justify-center sm:justify-start items-center gap-2 mt-1">
      <span
        className="inline-block w-2.5 h-2.5 rounded-full"
        style={{ backgroundColor: location.color }}
      ></span>
      <span className="font-semibold" style={{ color: location.color }}>
        {location.response}
      </span>
      <span>الاستجابة</span>
    </p>
  </div>
</motion.div>

        ))}
      </div>
    </div>
  );
};

export default ServerLocation;
