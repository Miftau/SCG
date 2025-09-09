"use client";

export default function SSLSection() {
  return (
    <div className="mt-32 container">
      {/* العنوان الرئيسي */}
      <h1 className="lg:text-4xl text-xl mb-6 text-center font-bold mb-12">
        أكثر من مجرد أمان
      </h1>
      <p className="text-center mb-16">
        امتلاك شهادة SSL للمواقع الإلكترونية أصبح ضرورة، وليس مجرد خيار للأمان.
      </p>

      {/* البطاقات */}
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 lg:ml-16 sm:mx-auto">
        {/* البطاقة الأولى */}
        <div className="bg-white rounded-lg px-6 py-6 flex items-start gap-4 shadow-lg flex-col gap-y-6 transition hover:scale-105">
          <img
            className="relative"
            src="/images/like-Da8t3xWU.svg"
            alt="بناء ثقة العملاء"
          />
          <div>
            <h1 className="mb-6 text-xl font-semibold">بناء ثقة العملاء</h1>
            <p className="text-sm">
              أظهر لعملائك أن عملك الإلكتروني آمن وموثوق من خلال طمأنتهم بأن
              بياناتهم الحساسة ومدفوعاتهم الإلكترونية محمية بالكامل.
            </p>
          </div>
        </div>

        {/* البطاقة الثانية */}
        <div className="bg-white rounded-lg px-6 py-6 flex items-start gap-4 shadow-lg flex-col gap-y-6 transition hover:scale-105">
          <img
            className="relative"
            src="/images/seo-increase%201-D7AQeU3P.svg"
            alt="تحسين ترتيب موقعك"
          />
          <div>
            <h1 className="mb-6 text-xl font-semibold">
              تحسين ترتيب موقعك في محركات البحث (SEO)
            </h1>
            <p className="text-sm">
              المواقع الآمنة لديها ميزة تحقيق ترتيب أعلى في نتائج محركات البحث،
              حيث يُعتبر الأمان عاملاً أساسياً في عملية الترتيب.
            </p>
          </div>
        </div>

        {/* البطاقة الثالثة */}
        <div className="bg-white rounded-lg px-6 py-6 flex items-start gap-4 shadow-lg flex-col gap-y-6 transition hover:scale-105">
          <img
            className="relative"
            src="/images/browser-friendly 1-DqkTfBE9.svg"
            alt="التوافق مع المتصفحات"
          />
          <div>
            <h1 className="mb-6 text-xl font-semibold">
              حافظ على ظهور موقعك في مختلف المتصفحات
            </h1>
            <p className="text-sm">
              إذا لم يكن لموقعك شهادة SSL، فإن معظم المتصفحات العالمية ستضع
              علامة "غير آمن" مع تحذير، وقد تمنع بعض المتصفحات الوصول إلى الموقع
              تماماً.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
