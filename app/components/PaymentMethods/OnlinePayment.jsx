"use client";

import { motion } from "framer-motion";

const OnlinePayment = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="">
        <p className="text-[#2B1F51] text-center text-4xl font-semi-bold">
          الدفع عبر الانترنت
        </p>
        <p className="text-[#2B1F51] text-center text-lg font-medium pt-6">
          تمتع بعملية دفع سريعة و مباشرة عبر الانترنت
        </p>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: { duration: 0.4, ease: "easeOut" },
        }}
        className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 justify-items-center"
      >
        <div className="w-[200px] h-[200px] flex items-center justify-center bg-white p-8 rounded-lg shadow-md  hover:shadow-xl transition-shadow duration-300 ">
          <img
            src="/images/express.png"
            alt="Online Payment"
            width={150}
            height={150}
            className="object-contain"
          />
        </div>
        <div className="w-[200px] h-[200px] flex items-center justify-center bg-white p-8 rounded-lg shadow-md  hover:shadow-xl transition-shadow duration-300 ">
          <img
            src="/images/visa.png"
            alt="Online Payment"
            width={150}
            height={150}
            className="object-contain"
          />
        </div>
        <div className="w-[200px] h-[200px] flex items-center justify-center bg-white p-8 rounded-lg shadow-md  hover:shadow-xl transition-shadow duration-300 ">
          <img
            src="/images/mastercard.png"
            alt="Online Payment"
            height={150}
            width={150}
            className="object-contain"
          />
        </div>
      </motion.div>
    </div>
  );
};

export default OnlinePayment;
