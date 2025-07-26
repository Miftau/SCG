"use client";

import { motion } from "framer-motion";
const MainFeature = () => {
  return (
    <div className="container px-4 md:px-12">
      <div>
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">
          مزايا رئيسية
        </h2>
        <p className="text-center font-medium text-muted-foreground">
          قم بامتلاك مُخدّمك المخصص مع نظام التشغيل المفضل لديك والتطبيقات
          المثبتة مسبقًا.
        </p>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: { duration: 0.4, ease: "easeOut" },
        }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-6 gap-8"
      >
        <div className="card-hover bg-white p-6 rounded-lg shadow-xl flex justify-center items-center">
          <div className="w-20 h-20 relative">
            <img
              src="/images/Layer3.png"
              alt="Cloud Servers"
              fill
              className="object-contain"
            />
          </div>
        </div>
        <div className="card-hover bg-white p-6 rounded-lg shadow-xl flex justify-center items-center">
          <div className="w-20 h-20 relative">
            <img
              src="/images/9d73dec4c85f02c04b8b670a9a50329be6156ae1.png"
              alt="Cloud Servers"
              fill
              className="object-contain"
            />
          </div>
        </div>
        <div className="card-hover bg-white p-6 rounded-lg shadow-xl flex justify-center items-center">
          <div className="w-24 h-24 relative">
            <img
              src="/images/linux-feat1.png"
              alt="Cloud Servers"
              fill
              className="object-contain"
            />
          </div>
        </div>
        <div className="card-hover bg-white p-6 rounded-lg shadow-xl flex justify-center items-center">
          <div className="w-20 h-20 relative">
            <img
              src="/images/cpanel.png"
              alt="Cloud Servers"
              fill
              className="object-contain"
            />
          </div>
        </div>
        <div className="card-hover bg-white p-6 rounded-lg shadow-xl flex justify-center items-center">
          <div className="w-20 h-20 relative">
            <img
              src="/images/Group 2368.png"
              alt="Cloud Servers"
              fill
              className="object-contain"
            />
          </div>
        </div>
        <div className="card-hover bg-white p-6 rounded-lg shadow-xl flex justify-center items-center">
          <div className="w-20 h-20 relative">
            <img
              src="/images/Group 2653.png"
              alt="Cloud Servers"
              fill
              className="object-contain"
            />
          </div>
        </div>

        <div className="card-hover bg-white p-6 rounded-lg shadow-xl flex justify-center items-center">
          <div className="w-20 h-20 relative">
            <img
              src="/images/cpanel.png"
              alt="Cloud Servers"
              fill
              className="object-contain"
            />
          </div>
        </div>
        <div className="card-hover bg-white p-6 rounded-lg shadow-xl flex justify-center items-center">
          <div className="w-20 h-20 relative">
            <img
              src="/images/Group 2368.png"
              alt="Cloud Servers"
              fill
              className="object-contain"
            />
          </div>
        </div>
        <div className="card-hover bg-white p-6 rounded-lg shadow-xl flex justify-center items-center">
          <div className="w-20 h-20 relative">
            <img
              src="/images/Group 2653.png"
              alt="Cloud Servers"
              fill
              className="object-contain"
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default MainFeature;
