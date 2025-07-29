"use client";

import { CheckCircle } from "lucide-react";
import { motion } from "framer-motion";
const PaymentFeaturesSection = () => {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
      <div className="container px-4 md:px-6">
        {/* Main Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-[#333366]">
          لا توجد رسوم مخفية، يتم تجديد الاشتراك بنفس سعر الاشتراك.
        </h2>

        {/* Payment Methods Card */}
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { duration: 0.4, ease: "easeOut" },
          }}
          className="relative bg-gradient-to-br from-white to-gray-50 hover:from-gray-300 transition duration-300 ease-in-out rounded-xl p-8 md:p-12 shadow-lg flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 overflow-hidden mb-16"
        >
          <img
            src="/images/right-blocks.png"
            alt="Abstract background pattern"
            width={200}
            height={200}
            className="absolute  bg-gray-700 bottom-0 right-0 opacity-10 translate-x-1/4 translate-y-1/4"
          />

          <p className="text-xl md:text-2xl font-semibold text-right text-[#333366] flex-1">
            ادفع باستخدام فوري أو أكثر من 20 طريقة دفع أخرى
          </p>
          <div className="">
            <img
              src="/images/payment.png"
              alt="PayPal payment logo"
              width={300}
              height={300}
              className="object-cover"
            />
          </div>
        </motion.div>

        {/* Features Section */}
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { duration: 0.4, ease: "easeOut" },
          }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 text-right"
        >
          {/* Column 1 (Right in original image) */}
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <CheckCircle className="w-6 h-6 text-black flex-shrink-0 mt-1" />
              <p className="text-lg text-gray-700">
                النسخ الاحتياطي والاسترداد للبيانات المادية والافتراضية
                والسحابية.
              </p>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="w-6 h-6 text-black flex-shrink-0 mt-1" />
              <p className="text-lg text-gray-700">
                اكتشاف التهديدات المتقدمة والاستجابة لها.
              </p>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="w-6 h-6 text-black flex-shrink-0 mt-1" />
              <p className="text-lg text-gray-700">{"إدارة ومراقبة مركزية."}</p>
            </div>
          </div>

          {/* Column 2 (Middle in original image) */}
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <CheckCircle className="w-6 h-6 text-black flex-shrink-0 mt-1" />
              <p className="text-lg text-gray-700">
                الحماية من البرامج الضارة ومكافحة برامج الفدية.
              </p>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="w-6 h-6 text-black flex-shrink-0 mt-1" />
              <p className="text-lg text-gray-700">
                حماية البريد الإلكتروني والأرشفة.
              </p>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="w-6 h-6 text-black flex-shrink-0 mt-1" />
              <p className="text-lg text-gray-700">{"إدارة ومراقبة مركزية."}</p>
            </div>
          </div>

          {/* Column 3 (Left in original image) */}
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <CheckCircle className="w-6 h-6 text-black flex-shrink-0 mt-1" />
              <p className="text-lg text-gray-700">
                حماية الأجهزة الطرفية وإدارتها.
              </p>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="w-6 h-6 text-black flex-shrink-0 mt-1" />
              <p className="text-lg text-gray-700">
                التعافي من الكوارث المستند إلى السحابة.
              </p>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="w-6 h-6 text-black flex-shrink-0 mt-1" />
              <p className="text-lg text-gray-700">إدارة ومراقبة مركزية.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PaymentFeaturesSection;
