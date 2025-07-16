"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
const ServerLocation = () => {
  const locations = [
    {
      name: "أمريكا",
      flag: "/images/Amreci.png",
      response: "20ms",
      color: "#46CC3F",
    },
    {
      name: "المانيا",
      flag: "/images/Germen.png",
      response: "35ms",
      color: "#46CC3F",
    },
    {
      name: "تركيا",
      flag: "/images/turkey.png",
      response: "50ms",
      color: "#46CC3F",
    },
    {
      name: "ايطاليا",
      flag: "/images/Italy.png",
      response: "70ms",
      color: "#46CC3F",
    },
    {
      name: "كوريا",
      flag: "/images/Kore.png",
      response: "70ms",
      color: "#46CC3F",
    },
    {
      name: "الامارات",
      flag: "/images/Dubai.png",
      response: "70ms",
      color: "#46CC3F",
    },
    {
      name: "بيرطانيا",
      flag: "/images/England.png",
      response: "70ms",
      color: "#46CC3F",
    },
    {
      name: "السعودية",
      flag: "/images/Sud.png",
      response: "70ms",
      color: "#46CC3F",
    },
    {
      name: "السعودية",
      flag: "/images/Sud.png",
      response: "70ms",
      color: "#46CC3F",
    },
    {
      name: "فنلند",
      flag: "/images/Finland.png",
      response: "70ms",
      color: "#46CC3F",
    },
    {
      name: "السودان",
      flag: "/images/Suda.png",
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
            className="flex items-center justify-around bg-white rounded-lg shadow-md p-4 hover:shadow-xl transition-shadow"
          >
            <div className="">
              <Image
                src={location.flag}
                alt={`${location.name} Flag`}
                width={50}
                height={50}
                className="rounded-full"
              />
            </div>
            <div className="">
              <p className="text-xl font-semibold">{location.name}</p>
              <p className="text-sm font-medium text-gray-600 flex items-center gap-2 mt-1">
                <span
                  className="inline-block w-2.5 h-2.5 rounded-full"
                  style={{ backgroundColor: location.color }}
                ></span>
                <span
                  className="font-semibold"
                  style={{ color: location.color }}
                >
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
