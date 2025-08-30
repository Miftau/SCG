"use client";
import { motion } from "framer-motion";
import { HardDrive, MemoryStick, Cpu } from 'lucide-react';

const PricingCards = () => {
  const plans = [
    { title: "أوبليوز ناتف", price: "91.30", color: "border-t-yellow-400" },
    { title: "أوبليوز ناتف", price: "91.30", color: "border-t-gray-300" },
    { title: "أوبليوز ناتف", price: "91.30", color: "border-t-blue-400" },
    { title: "أوبليوز ناتف", price: "91.30", color: "border-t-yellow-400" },
    { title: "أوبليوز ناتف", price: "91.30", color: "border-t-gray-300" },
    { title: "أوبليوز ناتف", price: "91.30", color: "border-t-blue-400" },
  ];

  return (
    <div className="w-full py-16 px-6 bg-white">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-12 text-[#2D2F34]">
        اختر الخطة المناسبة
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {plans.map((plan, idx) => (
          <motion.div
            key={idx}
            whileHover={{ scale: 1.05, boxShadow: "0px 10px 20px rgba(0,0,0,0.1)" }}
            className={`relative bg-white rounded-xl shadow-md overflow-hidden 
                       border-t-8 ${plan.color} p-6 flex flex-col items-center text-center`}
          >
            <h3 className="text-lg font-semibold text-[#2D2F34] mb-4">
              {plan.title}
            </h3>
            <p className="text-4xl font-bold text-[#2D2F34] mb-6">
              {plan.price}
              <div className="text-base font-medium text-gray-500 mt-8"> ريال سعودي</div>
            </p>

            {/* Specs Icons Section with Circular Outline */}
            <div className="flex items-center justify-center gap-6 mb-16">
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 flex items-center justify-center rounded-full border border-gray-300">
                  <HardDrive className="w-6 h-6 text-blue-500" />
                </div>
                <p className="text-xs text-gray-500 mt-1">20GB</p>
                <p className="text-xs text-gray-600">تخزين SSD</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 flex items-center justify-center rounded-full border border-gray-300">
                  <MemoryStick className="w-6 h-6 text-blue-500" />
                </div>
                <p className="text-xs text-gray-500 mt-1">2GB</p>
                <p className="text-xs text-gray-600">الذاكرة</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 flex items-center justify-center rounded-full border border-gray-300">
                  <Cpu className="w-6 h-6 text-blue-500" />
                </div>
                <p className="text-xs text-gray-500 mt-1">1</p>
                <p className="text-xs text-gray-600">vCPU</p>
              </div>
            </div>

            <button className="bg-[#2D2F34] text-white px-6 py-2 rounded-lg hover:bg-[#41434A] transition">
              اطلب الآن
            </button>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default PricingCards;
