"use client";

import { motion } from "framer-motion";

const platforms = [
  {
    name: "مركز المعلومات والتوثيق",
    image: "/images/partner1.jpg",
  },
  {
    name: "لجنة الإفراجات المالية",
    image: "/images/partner2.png",
  },
  {
    name: "صندوق الضمان الاجتماعي",
    image: "/images/partner3.png",
  },
  {
    name: "مصلحة السجل التجاري",
    image: "/images/partner2.png",
  },
  {
    name: "صيدلية ذات الصواري",
    image: "/images/partner6.png",
  },
];

const PlatformSupport = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div>
        <p className="text-[#2B1F51] text-center text-4xl font-bold">
          موثوق به من قبل عملائنا
        </p>
      </div>

      <div className="w-full flex justify-center">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { duration: 0.4, ease: "easeOut" },
          }}
          className="mt-8 flex justify-center flex-wrap gap-6 w-full md:w-5xl"
        >
          {platforms.map((platform, index) => (
            <div
              key={index}
              className="w-[220px] h-[200px] flex flex-col-reverse items-center justify-between bg-white p-4 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <p className="text-[#2B1F51] text-center text-sm">
                {platform.name}
              </p>
              <div className="w-[100px] h-[100px] relative">
                <img
                  src={platform.image}
                  alt={platform.name}
                  width={100}
                  height={100}
                  className="object-contain w-full h-full"
                />
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default PlatformSupport;
