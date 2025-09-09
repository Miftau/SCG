"use client";

export default function WhoisSection() {
  return (
    <div className="container mt-32" dir="rtl">
      <div className="grid lg:grid-cols-2 grid-cols-1 items-center justify-between gap-8">
        {/* الصورة */}
        <img
          className="w-5/6 ms-auto"
          alt="أداة WHOIS"
          src="/images/Group1-fAQ2yaqz.svg"
        />

        {/* النص */}
        <div>
          <h1 className="text-3xl font-semibold">ما هي أداة WHOIS؟</h1>
          <p className="mt-8 lg:ml-16 sm:mx-auto font-normal text-sm text-indigo-950">
            أداة WHOIS هي خدمة توفر معلومات حول أسماء النطاقات، بما في ذلك مالك
            النطاق، تفاصيل التسجيل، تاريخ الانتهاء، ومعلومات الاتصال المرتبطة به.
            تساعد المستخدمين على التحقق من ملكية النطاق، وفحص توفر النطاقات،
            والتحقق من موثوقية المواقع. يستخدم العديد من مسجلي النطاقات وخبراء
            الأمن السيبراني أداة WHOIS لأغراض البحث، والأمن السيبراني، والامتثال.
          </p>
        </div>
      </div>
    </div>
  );
}
