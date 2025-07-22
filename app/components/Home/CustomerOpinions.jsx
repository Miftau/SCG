"use client";

import { Shield, Eye, Users, Headphones } from "lucide-react";
import { motion } from "framer-motion";

const CustomerOpinions = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Customer Reviews Section */}
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4" dir="rtl">
            آراء العملاء
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Features Grid */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{
              opacity: 1,
              x: 0,
              transition: { duration: 0.4, ease: "easeOut" },
            }}
            className="grid grid-cols-2 gap-8"
          >
            <div className="text-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-black" />
              </div>
              <h3
                className="text-lg font-semibold text-gray-800 mb-2"
                dir="rtl"
              >
                صيام المعاملة
              </h3>
            </div>

            <div className="text-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Eye className="w-8 h-8 text-black" />
              </div>
              <h3
                className="text-lg font-semibold text-gray-800 mb-2"
                dir="rtl"
              >
                مراقبة
              </h3>
            </div>

            <div className="text-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-black" />
              </div>
              <h3
                className="text-lg font-semibold text-gray-800 mb-2"
                dir="rtl"
              >
                خدمات متخصصة
              </h3>
            </div>

            <div className="text-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Headphones className="w-8 h-8 text-black" />
              </div>
              <h3
                className="text-lg font-semibold text-gray-800 mb-2"
                dir="rtl"
              >
                خدمة العملاء
              </h3>
            </div>
          </motion.div>

          {/* Testimonial */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{
              opacity: 1,
              x: 0,
              transition: { duration: 0.4, ease: "easeOut" },
            }}
            className="bg-white p-8 rounded-xl shadow-lg relative"
          >
            <div className="absolute top-6 right-6 text-6xl text-black">
              "
            </div>
            <div className="pt-8">
              <p
                className="text-gray-700 text-lg leading-relaxed mb-8"
              
              >
                تجربتي مع شركم وشعتها الفنين ، حيث وصلني مسئول الشراء عملية
                التوريد توضيح كل ما هو جديد مع المتابعة المستمرة الاستضافه
                والطباعة ، في المقابل حصرت في 48% من الجهد، تقابل ذلك معناه وبدب
                شديد واستشعار الأمانة في الاستدامة كما في المسئوليه
              </p>

              <div className="flex items-center" dir="rtl">
                <div>
                  <h4 className="text-xl font-bold text-gray-800">أحمد شوقي</h4>
                  <p className="text-gray-500">نائب مدير شعبة</p>
                </div>
                <div className="mr-auto text-4xl text-black">"</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default CustomerOpinions;
