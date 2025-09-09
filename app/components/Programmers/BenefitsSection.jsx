"use client";

export default function BenefitsSection() {
  return (
    <div className="mt-32 container">
      {/* العنوان الرئيسي */}
      <h1 className="lg:text-4xl text-xl mb-6 text-center font-semibold !mb-20">
        المميزات
      </h1>

      {/* البطاقات */}
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 lg:ml-16 mb-16 sm:mx-auto">
        {/* البطاقة الأولى */}
        <div className="bg-white rounded-lg px-6 py-6 flex items-start gap-4 shadow-lg flex-col gap-y-6 transition hover:scale-105">
          <img
            className="relative"
            src="/images/improve-DzFuaegp.svg"
            alt="تحسين أداء الموقع"
          />
          <div>
            <h1 className="mb-6 text-xl font-semibold">
              تحسين أداء الموقع عبر CDN
            </h1>
            <p className="text-sm">
              تعمل شبكتنا لتوزيع المحتوى (CDN) على تسريع تحميل الصفحات وتقليل
              ضغط الخادم بنسبة تصل إلى 80% في المتوسط، مما يحسّن أداء موقعك.
            </p>
          </div>
        </div>

        {/* البطاقة الثانية */}
        <div className="bg-white rounded-lg px-6 py-6 flex items-start gap-4 shadow-lg flex-col gap-y-6 transition hover:scale-105">
          <img
            className="relative"
            src="/images/ddos-ygxr3yLR.svg"
            alt="التخفيف من هجمات DDoS"
          />
          <div>
            <h1 className="mb-6 text-xl font-semibold">التخفيف من هجمات DDoS</h1>
            <p className="text-sm">
              يمكن أن تؤدي هجمات الحرمان من الخدمة الموزعة (DDoS) إلى إيقاف عملك
              بالكامل. نقوم بحجب هذه الهجمات على الطبقات 3 و4 و7 ونؤمن عرض
              النطاق أثناء الهجوم.
            </p>
          </div>
        </div>

        {/* البطاقة الثالثة */}
        <div className="bg-white rounded-lg px-6 py-6 flex items-start gap-4 shadow-lg flex-col gap-y-6 transition hover:scale-105">
          <img
            className="relative"
            src="/images/protection-B2-zzg0v.svg"
            alt="الحماية من الاختراق والبرمجيات الخبيثة"
          />
          <div>
            <h1 className="mb-6 text-xl font-semibold">
              الحماية من الاختراق والبرمجيات الخبيثة
            </h1>
            <p className="text-sm">
              احمِ موقعك من البرمجيات الخبيثة ومنع محاولات الاختراق، وهجمات
              Zero-Day، وهجمات تخمين كلمات المرور (Brute Force).
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
