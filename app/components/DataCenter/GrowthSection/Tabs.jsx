"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const Tabs = () => {
  const [selected, setSelected] = useState("افريقيا");
  const tabs = [
    { name: "افريقيا" },
    { name: "امريكا" },
    { name: "اوروبا" },
    { name: "اسيا" },
  ];
  const locations = [
    {
      skylineSrc: "/images/image1.png",
      skylineAlt: "Dubai skyline with UAE flags",
      flagSrc: "/images/flag/abo.png",
      flagAlt: "UAE Flag",
      governorate: "دبي",
      country: "الإمارات",
      ipAddress: "",
    },
    {
      skylineSrc: "/images/image2.png",
      skylineAlt: "Khartoum skyline with Sudan flag",
      flagSrc: "/images/flag/sudan.png",
      flagAlt: "Sudan Flag",
      governorate: "الخرطوم",
      country: "السودان",
      ipAddress: "10.0.0.5",
    },
    {
      skylineSrc: "/images/image3.png",
      skylineAlt: "Riyadh skyline with Saudi Arabia flag",
      flagSrc: "/images/flag/saudi.png",
      flagAlt: "Saudi Arabia Flag",
      governorate: "الرياض",
      country: "السعودية",
      ipAddress: "172.16.0.10",
    },
  ];

  return (
    <div className="w-full p-4">
      {/* Tabs Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: { duration: 0.4, ease: "easeOut" },
        }}
        className="w-full max-w-3xl mx-auto mb-6"
      >
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
      </motion.div>
      {/* Tabs Content */}
      <div className="w-full">
        {selected === "افريقيا" && (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 ">
            {locations.map((location, index) => (
              <motion.div
                initial={{ opacity: 0, y: 100 }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.4, ease: "easeOut" },
                  
                }}
                key={index}
                className="bg-white rounded-2xl border border-gray-200 shadow-md hover:shadow-lg transition-shadow p-4 flex flex-col justify-between"
              >
                {/* Skyline Image */}
                <img
                  src={location.skylineSrc || "/placeholder.svg"}
                  alt={location.skylineAlt}
                  className="w-full h-32 object-contain rounded-t-md mb-4"
                />
                {/* Flag and Location */}
                <div className="flex items-center justify-end gap-3 mb-4">
                  <div className="flex flex-col items-end">
                    <p className="text-lg font-semibold">
                      {location.governorate}
                    </p>
                    <p className="text-sm text-gray-600">{location.country}</p>
                  </div>
                  <img
                    src={location.flagSrc || "/placeholder.svg"}
                    alt={location.flagAlt}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                </div>
                {/* IP and Button */}
                <div className="flex flex-col items-start gap-2 mt-auto">
                  <p className="text-sm text-gray-600">
                    <span className="font-semibold">ip:</span>{" "}
                    {location.ipAddress}
                  </p>
                  <button className="mt-2 w-full bg-[#2D1F90] text-white text-sm font-semibold py-2 rounded-lg hover:bg-[#1f146b] transition-colors">
                    إختبار السرعة
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        )}
        {selected === "اوروبا" && (
          <div className="text-gray-700 text-center text-lg font-medium">
            محتوى أوروبا
          </div>
        )}
        {selected === "اسيا" && (
          <div className="text-gray-700 text-center text-lg font-medium">
            محتوى آسيا
          </div>
        )}
        {selected === "امريكا" && (
          <div className="text-gray-700 text-center text-lg font-medium">
            محتوى أمريكا
          </div>
        )}
      </div>
    </div>
  );
};

export default Tabs;
