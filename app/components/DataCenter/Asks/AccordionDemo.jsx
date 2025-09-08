"use client";
import { useState } from "react";

const faqs = [
  {
    q: "ما هو الخادم الافتراضي (VPS)؟",
    a: "الخادم الافتراضي هو خادم يتم تقسيمه إلى بيئات استضافة منفصلة تمامًا. عند حصولك على استضافة VPS، فإن إحدى هذه البيئات تكون مخصصة لك بالكامل..."
  },
  {
    q: "متى يجب أن أستخدم استضافة VPS بدلًا من الاستضافة المشتركة؟",
    a: "الخادم الافتراضي الخاص مناسب للمستخدمين الذين يبحثون عن مزيد من التحكم في بيئة الاستضافة الخاصة بهم..."
  },
  {
    q: "ما الفرق بين الخادم الافتراضي والخادم المخصص؟",
    a: "الخادم الافتراضي يشارك الموارد على جهاز فعلي مع مستخدمين آخرين، بينما الخادم المخصص يمنحك وصولًا كاملاً لجميع الموارد..."
  },
  {
    q: "ما المواقع المتاحة لاستضافة VPS؟",
    a: "مع ليبيان سبايدر، يمكنك اختيار موقع الخادم: ألمانيا أو فنلندا."
  }
];

export default function AccordionDemo() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (i) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <div className="p-8 flex flex-col gap-3 max-w-2xl bg-white shadow-lg rounded text-right">
      {faqs.map((faq, i) => (
        <div
          key={i}
          className="overflow-hidden transition-all duration-300 rounded-lg mb-2"
        >
          {/* Question Row */}
          <div
            className="flex justify-between items-start p-6 cursor-pointer gap-6"
            onClick={() => toggle(i)}
          >
            <div className="text-lg font-bold text-blue-500 hover:text-black">
              {faq.q}
            </div>

            {/* Plus / Minus Icon */}
            <div className="w-6 h-6 relative flex items-center justify-center text-blue-500">
              {/* الخط الأفقي (يظهر دائمًا) */}
              <span className="absolute w-5 h-0.5 bg-current"></span>
              {/* الخط العمودي (يختفي عند الفتح) */}
              <span
                className={`absolute h-5 w-0.5 bg-current transition-all duration-300 ${
                  openIndex === i ? "opacity-0 rotate-90" : "opacity-100"
                }`}
              ></span>
            </div>
          </div>

          {/* Answer */}
          <div
            className={`px-6 pb-6 text-gray-600 text-md transition-all duration-300 ${
              openIndex === i ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
            } overflow-hidden`}
          >
            {faq.a}
          </div>
        </div>
      ))}
    </div>
  );
}
