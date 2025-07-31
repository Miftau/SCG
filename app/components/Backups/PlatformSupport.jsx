"use client";
import { motion } from "framer-motion";

const platforms = [
  {
    name: "Phpbb",
    image: "/images/2b081e2af564ba23048250b2346aa2d1006ca7d8.png",
  },
  {
    name: "Joomla",
    image: "/images/c1279760d98df16893193f8d684cf90b5022b958.png",
  },
  {
    name: "Drupal",
    image: "/images/a8f099c22358fde6d6f58dac6c01b07fbd2c9625.png",
  },
  {
    name: "Magento",
    image: "/images/226dc0bdd5ea31390b4f41d5a46ef46b115af19d.png",
  },
  {
    name: "WordPress",
    image: "/images/1f8757075395225dcd6dce9f20161229e3df05e3.png",
  },
];

const PlatformSupport = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div>
        <p className="text-[#2B1F51] text-center text-4xl font-bold">
          تُقدّم Sucuri دعم لمختلف المنصات
        </p>
        <p className="text-[#2B1F51] text-center text-lg font-medium pt-6">
          تُقدّم Sucuri دعم لمختلف المنصات يعمل جدار حماية موقع الويب Sucuri عبر
          جميع المنصات، بما في ذلك العلامات التجارية الأكثر شهرة اليوم.
        </p>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: { duration: 0.4, ease: "easeOut" },
        }}
        className="mt-8 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 justify-items-center"
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
              <img
                src={platform.image}
                alt={platform.name}
                
                className="object-contain"
              />
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default PlatformSupport;
