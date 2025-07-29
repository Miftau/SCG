import { CheckCircle2 } from "lucide-react";

import React from "react";

const StrongSecurity = () => {
  return (
    
    <section className="relative py-12 md:py-24 lg:py-32 overflow-hidden bg-white" >
      {/* Background illustrations - positioned absolutely */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Shield */}
        <img
          src="/images/Group 3094.png"
          alt="Security Shield"
          width={800}
          height={800}
          className="absolute top-10 left-1/2 -translate-x-1/2 md:top-16 lg:-top-0"
        />
      </div>

      {/* Content */}
      <div className="container relative z-10 text-center px-4 md:px-6 pt-20">
        <div className="max-w-2xl mx-auto space-y-6">
          <h2 className="text-xl md:text-2xl font-bold text-[#0A1F44] leading-tight">أمان قوي لبريد إلكتروني محمي</h2>
          <p className="text-lg text-[#5A6B8C]">
            قم بحماية بريدك الإلكتروني الاحترافي باستخدام الأمن المعزز بالذكاء الاصطناعي ضد البريد العشوائي والتصيد
            والبرامج الضارة.
          </p>

          <div className="grid md:grid-cols-2 gap-8 text-right pt-8">
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-[#007BFF] flex-shrink-0 mt-1" />
                <span className="text-[#5A6B8C]">تأمين المستندات المشتركة بكلمة مرور وقيود زمنية.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-[#007BFF] flex-shrink-0 mt-1" />
                <span className="text-[#5A6B8C]">حدد أذونات لمن يمكنه قراءة المستندات أو تحريرها أو حذفها.</span>
              </li>
            </ul>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-[#007BFF] flex-shrink-0 mt-1" />
                <span className="text-[#5A6B8C]">أدوات متقدمة ومخصصة لمكافحة البريد العشوائي والفيروسات والتصيد.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-[#007BFF] flex-shrink-0 mt-1" />
                <span className="text-[#5A6B8C]">
                  تشفر رسائل البريد الإلكتروني والملفات بسهولة لحماية المعلومات الحساسة.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StrongSecurity;
