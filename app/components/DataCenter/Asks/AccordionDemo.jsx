"use client";

import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Plus } from "lucide-react";

const AccordionDemo = () => {
  const questions = [
    {
      q: "ما هو الخادم الافتراضي المخصص (VPS)؟",
      a: "الخادم الافتراضي هو خادم مقسم إلى بيئات استضافة منفصلة تمامًا. عندما تستخدم استضافة VPS، فإن بيئة واحدة تكون مخصصة لك بالكامل دون مشاركة للموارد.",
    },
    {
      q: "متى يجب أن أستخدم استضافة VPS بدلًا من الاستضافة المشتركة؟",
      a: "يفضّل استخدام استضافة VPS عندما يحتاج موقعك إلى أداء أعلى، موارد أكثر، وأمان أفضل مقارنة بالاستضافة المشتركة.",
    },
    {
      q: "ما الفرق بين الخادم الافتراضي والخادم المخصص؟",
      a: "الخادم الافتراضي (VPS) يشارك الجهاز الفعلي مع آخرين لكن يبقى معزول، بينما الخادم المخصص يمنحك الجهاز بأكمله لك وحدك.",
    },
    {
      q: "ما هي المواقع المتاحة لاستضافة VPS؟",
      a: "نوفر مراكز بيانات في أوروبا، أمريكا وآسيا لضمان سرعة واستقرار الخدمة.",
    },
  ];

  return (
    <div className="w-full bg-white shadow-md rounded-lg p-4 sm:p-6">
      <Accordion
        type="single"
        collapsible
        className="w-full"
        defaultValue="item-1"
      >
        {questions.map((item, i) => (
          <AccordionItem
            key={i}
            value={`item-${i + 1}`}
            className="border-b last:border-b-0"
          >
            <AccordionTrigger
              className="group flex flex-row space-x-12 justify-between items-start py-12 text-lg md:text-xl font-bold text-blue-600 hover:no-underline [&[data-state=open]>svg]:rotate-45"
            >
              <span className="leading-relaxed flex-grow justify-between">{item.q}</span>
              {/* أيقونة + */}
              
            </AccordionTrigger>
            <AccordionContent className="text-gray-600 text-base leading-relaxed py-2">
              {item.a}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default AccordionDemo;