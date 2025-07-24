import { CheckCircle2 } from "lucide-react";

const FeaturesSection = () => {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-white text-gray-800">
      <div className="container px-4 md:px-12 text-right">
        {" "}
        {/* Added text-right for RTL alignment */}
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">
          مزايا رئيسية
        </h2>
        <div className="grid gap-8 md:grid-cols-3 md:gap-12 lg:gap-16">
          {/* Column 1 (Rightmost in RTL layout) */}
          <div className="flex flex-col items-start space-y-4">
          
            {/* items-end for RTL alignment */}
            <div className="flex items-center gap-3">
              <CheckCircle2 className="h-5 w-5 text-gray-700 flex-shrink-0" />
              <span className="text-lg text-gray-700 text-right">
                النسخ الاحتياطي والاسترداد للبيانات المادية والافتراضية
                والسحابية.
              </span>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle2 className="h-5 w-5 text-gray-700 flex-shrink-0" />
              <span className="text-lg text-gray-700 text-right">
                اكتشاف التهديدات المتقدمة والاستجابة لها.
              </span>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle2 className="h-5 w-5 text-gray-700 flex-shrink-0" />
              <span className="text-lg text-gray-700 text-right">
                إدارة ومراقبة مركزية.
              </span>
            </div>
          </div>

          {/* Column 2 (Middle) */}
          <div className="flex flex-col items-end space-y-4">
            {" "}
            {/* items-end for RTL alignment */}
            <div className="flex items-center gap-3">
              <CheckCircle2 className="h-5 w-5 text-gray-700 flex-shrink-0" />
              <span className="text-lg text-gray-700 text-right">
                الحماية من البرامج الضارة ومكافحة برامج الفدية.
              </span>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle2 className="h-5 w-5 text-gray-700 flex-shrink-0" />
              <span className="text-lg text-gray-700 text-right">
                حماية البريد الإلكتروني والأرشفة.
              </span>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle2 className="h-5 w-5 text-gray-700 flex-shrink-0" />
              <span className="text-lg text-gray-700 text-right">
                إدارة ومراقبة مركزية.
              </span>
            </div>
          </div>

          {/* Column 3 (Leftmost in RTL layout) */}
          <div className="flex flex-col items-end space-y-4">
            {" "}
            {/* items-end for RTL alignment */}
            <div className="flex items-center gap-3">
              <CheckCircle2 className="h-5 w-5 text-gray-700 flex-shrink-0" />
              <span className="text-lg text-gray-700 text-right">
                حماية الأجهزة الطرفية وإدارتها.
              </span>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle2 className="h-5 w-5 text-gray-700 flex-shrink-0" />
              <span className="text-lg text-gray-700 text-right">
                التعافي من الكوارث المستند إلى السحابة.
              </span>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle2 className="h-5 w-5 text-gray-700 flex-shrink-0" />
              <span className="text-lg text-gray-700 text-right">
                إدارة ومراقبة مركزية.
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
