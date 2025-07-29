

const FeatureSection = () => {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-neutral-50" >
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12 md:mb-16 text-gray-800">
          يمكنك بناء موقعك في 2 خطوات
        </h2>

        <div className="relative grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] items-center gap-y-12 md:gap-y-24 lg:gap-y-32">
          {/* Vertical line in the middle column */}
          <div className="hidden md:block col-start-2 row-span-full w-0.5 bg-blue-500 h-full justify-self-center relative">
            {/* Dots on the line */}
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-3 h-3 rounded-full bg-blue-500"></div>
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-3 h-3 rounded-full bg-blue-500"></div>
          </div>

          {/* Step 1 */}
          {/* Text on the left (col-start-1) */}
          <div className="flex flex-col items-center text-center space-y-4 md:col-start-1 md:text-right md:items-end md:space-y-2">
            <h3 className="text-2xl font-bold text-gray-800">
              اختر قالبك الخاص
            </h3>
            <p className="text-gray-600">اختار من بين اكثر من مليون قالب</p>
          </div>
          {/* Number 1 circle (col-start-2) */}
          <div className="relative flex-shrink-0 md:col-start-2 md:row-start-1 md:justify-self-center">
            <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold text-lg z-10">
              1
            </div>
          </div>
          {/* Image on the right (col-start-3) */}
          <div className="flex flex-col items-center text-center space-y-4 md:col-start-3 md:text-right md:items-end md:space-y-2">
            <img
              src="/images/62650397534c1c63594e7f4bea2d787439a6c3b8.png"
              width={300}
              height={200}
              alt="Choose Template"
              className="object-contain"
            />
          </div>

          {/* Step 2 */}
          {/* Image on the left (col-start-1) */}
          <div className="flex flex-col items-center text-center space-y-4 md:col-start-1 md:text-right md:items-end md:space-y-2">
            <img
              src="/images/a498d98ec34bddba1fe5fd41b0632e80e47f3be4.png"
              width={300}
              height={200}
              alt="Edit and Launch"
              className="object-contain"
            />
          </div>
          {/* Number 2 circle (col-start-2) */}
          <div className="relative flex-shrink-0 md:col-start-2 md:row-start-2 md:justify-self-center">
            <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold text-lg z-10">
              2
            </div>
          </div>
          {/* Text on the right (col-start-3) */}
          <div className="flex flex-col items-center text-center space-y-4 md:col-start-3 md:text-right md:items-end md:space-y-2">
            <h3 className="text-2xl font-bold text-gray-800">
              التعديل و الانطلاق
            </h3>
            <p className="text-gray-600">
              قم بالتعديل على موقعك بسهولة بواسطة السحب و الافلات
            </p>
          </div>
        </div>

        {/* Bottom Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 md:mt-24">
          {/* Card 3 */}
          <div className="bg-white p-6 rounded-lg shadow-sm flex flex-col items-center text-center md:items-end md:text-right space-y-4">
            <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold text-lg">
              3
            </div>
            <h4 className="text-xl font-bold text-gray-800">عزز وظائف موقعك</h4>
            <p className="text-gray-600">
              احصل على العديد من المكونات الإضافية والأدوات والوظائف التي
              تحتاجها لتحسين موقعك، بما في ذلك الأساسيات مثل معرض الصور والوسائط
              ومنصات التواصل الاجتماعي والمزيد.
            </p>
          </div>

          {/* Card 4 */}
          <div className="bg-white p-6 rounded-lg shadow-sm flex flex-col items-center text-center md:items-end md:text-right space-y-4">
            <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold text-lg">
              4
            </div>
            <h4 className="text-xl font-bold text-gray-800">
              قم بمعاينة الموقع
            </h4>
            <p className="text-gray-600">
              ألقي نظرة على موقع الويب الخاص بك بالقالب المحدد قبل أن تقوم بنشره
              للعلن.
            </p>
          </div>

          {/* Card 5 */}
          <div className="bg-white p-6 rounded-lg shadow-sm flex flex-col items-center text-center md:items-end md:text-right space-y-4">
            <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold text-lg">
              5
            </div>
            <h4 className="text-xl font-bold text-gray-800">
              قم بنشر أو حفظ الموقع - بنقرة واحدة
            </h4>
            <p className="text-gray-600">
              يمكنك نشر موقعك على الإنترنت أو حفظ مسودة لموقعك دون نشر.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
