"use client";

import { motion } from "framer-motion";

const MainFeature = () => {
  return (
    <div className="container px-4 md:px-12">
      {/* Background Image */}
      <div className="w-full h-90 mb-10 relative -z-5 opacity-50">
        <img
          src="/images/cloud-s-imgsec.svg"
          alt="Cloud Servers"
          className="object-cover"
        />
      </div>

      {/* Title */}
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-gray-900 dark:text-white">
          مزايا رئيسية
        </h2>
        <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
          قم بامتلاك مُخدّمك المخصص مع نظام التشغيل المفضل لديك والتطبيقات المثبتة مسبقًا.
        </p>
      </div>

      {/* Logo Grid */}
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: { duration: 0.4, ease: "easeOut" },
        }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3"
      >
        {/* Row 1 */}
        <div className="group bg-gray-50 rounded-xl p-3 text-center hover:shadow-md transition-all duration-300 transform hover:-translate-y-1 hover:bg-blue-50 border border-gray-100 flex flex-col items-center justify-center">
          <div className="w-32 h-32 relative">
            <img
              src="/images/Layer3.png"
              alt="Cloud Servers"
              className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-110"
            />
          </div>
        </div>
        <div className="group bg-gray-50 rounded-xl p-3 text-center hover:shadow-md transition-all duration-300 transform hover:-translate-y-1 hover:bg-blue-50 border border-gray-100 flex flex-col items-center justify-center">
          <div className="w-32 h-32 relative">
            <img
              src="/images/9d73dec4c85f02c04b8b670a9a50329be6156ae1.png"
              alt="Cloud Servers"
              className="object-contain w-full h-full"
            />
          </div>
        </div>
        <div className="card-hover bg-white py-2 -px-4 rounded-lg shadow-sm border border-gray-100 flex justify-center items-center transition-transform duration-200 hover:scale-105">
          <div className="w-32 h-32 relative">
            <img
              src="/images/linux-feat1.png"
              alt="Cloud Servers"
              className="object-contain w-full h-full"
            />
          </div>
        </div>

        {/* Row 2 */}
        <div className="card-hover bg-white p-6 rounded-lg shadow-sm border border-gray-100 flex justify-center items-center transition-transform duration-200 hover:scale-105">
          <div className="w-32 h-32 relative">
            <img
              src="/images/microsoft-GkOjRO04.svg"
              alt="Cloud Servers"
              className="object-contain w-full h-full"
            />
          </div>
        </div>
        <div className="card-hover bg-white p-6 rounded-lg shadow-sm border border-gray-100 flex justify-center items-center transition-transform duration-200 hover:scale-105">
          <div className="w-32 h-32 relative">
            <img
              src="/images/cloudlinux-logo1.svg"
              alt="Cloud Servers"
              className="object-contain w-full h-full"
            />
          </div>
        </div>
        <div className="card-hover bg-white p-6 rounded-lg shadow-sm border border-gray-100 flex justify-center items-center transition-transform duration-200 hover:scale-105">
          <div className="w-32 h-32 relative">
            <img
              src="/images/isp_logo1.svg"
              alt="Cloud Servers"
              className="object-contain w-full h-full"
            />
          </div>
        </div>

        {/* Row 3 */}
        <div className="card-hover bg-white p-6 rounded-lg shadow-sm border border-gray-100 flex justify-center items-center transition-transform duration-200 hover:scale-105">
          <div className="w-32 h-32 relative">
            <img
              src="/images/cpanel.png"
              alt="Cloud Servers"
              className="object-contain w-full h-full"
            />
          </div>
        </div>
        <div className="card-hover bg-white p-6 rounded-lg shadow-sm border border-gray-100 flex justify-center items-center transition-transform duration-200 hover:scale-105">
          <div className="w-20 h-20 relative">
            <img
              src="/images/Group 2368.png"
              alt="Cloud Servers"
              className="object-contain w-full h-full"
            />
          </div>
        </div>
        <div className="card-hover bg-white p-6 rounded-lg shadow-sm border border-gray-100 flex justify-center items-center transition-transform duration-200 hover:scale-105">
          <div className="w-32 h-32 relative">
            <img
              src="/images/Group 2653.png"
              alt="Cloud Servers"
              className="object-contain w-full h-full"
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default MainFeature;