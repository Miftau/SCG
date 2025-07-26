import { CheckCircle } from "lucide-react";
import React from "react";

const WhatMotivates = () => {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
      <div className="container grid items-center gap-8 px-4 md:grid-cols-2 md:px-6 lg:gap-12">
        {/* Left Column: Illustration */}
        <div className="flex justify-center md:order-1">
          <img
            src="/images/why-register-ly1.png"
            width={600}
            height={400}
            alt="Domain illustration"
            className="mx-auto aspect-[3/2] overflow-hidden object-contain"
          />
        </div>

        {/* Right Column: Text Content */}
        <div
          className="flex flex-col items-end text-right space-y-6 md:order-2"
          dir="rtl"
        >
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            ما الذي يدفعك لتسجيل اسم نطاق؟
          </h2>
          <p className="max-w-[600px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            بصفته اسم النطاق الدولي الرسمي المخصص لدولة ليبيا، يمثل امتداد sa.
            مكان تواجد عملك المحلي، مما يؤكد هوية عملك التجاري، ويدعم نشاط
            الأعمال التجارية الوطنية ويساعدك في الوصول إلى جمهورك المستهدف
            جغرافيًا من خلال:
          </p>
          <div className="grid gap-4 w-full">
            <div className="flex items-start gap-3">
              <CheckCircle className="h-5 w-5 flex-shrink-0 text-blue-600 mt-1" />
              <p className="text-gray-700">
                تأكيد ثقة العملاء المحليين بنشاطك التجاري، عبر استخدام اسم
                النطاق الوطني المعروف لدى أغلبهم.
              </p>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="h-5 w-5 flex-shrink-0 text-blue-600 mt-1" />
              <p className="text-gray-700">
                تمكن محركات البحث من تحديد الموقع الجغرافي لعملك التجاري بسهولة.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatMotivates;
