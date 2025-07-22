"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const platforms = [
  {
    name: "مركز المعلومات والتوثيق",
    image: "/images/a876ccb0b019f9fc5dc76046c3efb52ea3870823.jpg",
  },
  {
    name: "لجنة الإفراجات المالية",
    image: "/images/Group (10).png",
  },
  {
    name: "صندوق الضمان الاجتماعي",
    image: "/images/Social-Security-Fund 1.png",
  },
  {
    name: "صندوق الضمان الاجتماعي",
    image: "/images/Social-Security-Fund 1.png",
  },
  {
    name: "مصلحة السجل التجاري",
    image: "/images/Group (10).png",
  },
  {
    name: "صيدلية ذات الصواري",
    image: "/images/35ed025d3689ce6be5e970a1d2d80e19579cb130.png",
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
              className="w-[200px] h-[200px] flex flex-col-reverse items-center justify-between bg-white p-4 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <p className="text-[#2B1F51] text-center text-xl font-bold">
                {platform.name}
              </p>
              <div className="w-[100px] h-[100px] relative">
                <Image
                  src={platform.image}
                  alt={platform.name}
                  fill
                  className="object-contain"
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
