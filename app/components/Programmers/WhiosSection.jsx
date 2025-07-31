import React from 'react'

const WhiosSection = () => {
  return (

    <section className=" py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Arabic Text Content */}
          <div className="text-right" dir="rtl">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">ما هي أداة WHOIS؟</h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              أداة WHOIS هي خدمة توفر معلومات حول أسماء النطاقات، بما في ذلك مالك النطاق وتفاصيل التسجيل وتاريخ الإنشاء
              ومعلومات الاتصال المرتبطة به. تساعد المستخدمين على التحقق من ملكية النطاق، وفحص توفر النطاق، والتحقق من
              شرعية المواقع الإلكترونية. يستخدم العديد من مسجلي النطاقات والمتخصصين في الأمن السيبرالي أداة WHOIS لأغراض
              البحث والأمن السيبرالي والامتثال.
            </p>
          </div>

          {/* 3D Illustration */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <img
                src="/images/Group1-fAQ2yaqz.svg"
                alt="WHOIS Tool Illustration"
                width={400}
                height={300}
                className="w-full max-w-md h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>  )
}

export default WhiosSection