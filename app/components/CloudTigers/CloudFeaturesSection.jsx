
const CloudFeaturesSection = () => {
  return (
    <section className="relative py-16 md:py-24 lg:py-32 bg-white overflow-hidden">
      {/* Top background element */}
      <img
        src="/images/Group 3946.png"
        alt="Top background wave"
        width={1920}
        height={150}
        className="absolute top-0 left-0 w-full h-[150px] object-cover object-top -z-10"
      />
      {/* Left cloud background element */}
      <img
        src="/images/Group 3946.png"
        alt="Cloud background"
        width={300}
        height={200}
        className="absolute left-0 top-1/4 opacity-50 -z-10"
        style={{ transform: "translateY(-50%)" }}
      />
      {/* Right cloud background element */}
      <img
        src="/images/Group 3946.png"
        alt="Cloud background"
        width={300}
        height={200}
        className="absolute right-0 top-3/4 opacity-50 -z-10 bg-red-500"
        style={{ transform: "translateY(-50%)" }}
      />

      <div className="container mx-auto px-4 md:px-6 text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
          بنية تحتية مرنة، سهلة الإدارة وقابلة للتوسع
        </h2>
        <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-8">
          تجمع سحابة العنكبوت Cloud LS كلا من موارد الحوسبة، التخزين والشبكات
          إضافة إلى أدوات التحليلات والمراقبة المتقدمة في منصة سحابية واحدة سهلة
          الاستخدام.
        </p>

        <h3 className="text-2xl md:text-3xl font-semibold mb-8">
          موارد سحابية يمكن تثبيتها في دقائق
        </h3>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
          {/* Item 1: Virtual Services */}
          <div className="flex flex-col items-center text-center">
            <div className="w-24 h-24 flex items-center justify-center mb-4">
              <img
                src="/images/Group 3978.png"
                alt="Virtual Services Icon"
                width={50}
                height={50}
              />
            </div>
            <p className="text-lg font-medium">خدمات افتراضية</p>
          </div>

          {/* Item 2: Storage Volumes */}
          <div className="flex flex-col items-center text-center">
            <div className="w-24 h-24 flex items-center justify-center mb-4">
              <img
                src="/images/Group 3984.png"
                alt="Storage Volumes Icon"
                width={50}
                height={50}

              />
            </div>
            <p className="text-lg font-medium">أحجام تخزين</p>
          </div>

          {/* Item 3: Networks */}
          <div className="flex flex-col items-center text-center">
            <div className="w-24 h-24 flex items-center justify-center mb-4">
              <img
                src="/images/Group 3978.png"
                alt="Networks Icon"
                width={50}
                height={50}
              />
            </div>
            <p className="text-lg font-medium">شبكات</p>
          </div>

          {/* Item 4: Load Balancers */}
          <div className="flex flex-col items-center text-center">
            <div className="w-24 h-24 flex items-center justify-center mb-4">
              <img
                src="/images/Group 1709.png"
                alt="Load Balancers Icon"
                width={50}
                height={50}
              />
            </div>
            <p className="text-lg font-medium">موازين الأحمال</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CloudFeaturesSection;
