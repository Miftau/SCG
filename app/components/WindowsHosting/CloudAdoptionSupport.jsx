import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";
import Image from "next/image";

const CloudAdoptionSupport = () => {
  return (
    <section className="w-full py-12 md:py-20 lg:py-24 bg-white" dir="rtl">
      <div className="container px-4 md:px-6 max-w-4xl mx-auto text-center">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4 leading-tight">
          لست واثقا من أين ستبدأ؟ لا تقلق، سنقوم بمساعدتك
        </h1>
        <p className="text-muted-foreground text-base md:text-lg mb-6 max-w-2xl mx-auto">
          شركة العنكبوت الليبي وصفتها مزودًا رسميًا لحلول مايكروسوفت السحابية
          على استعداد لمساعدة مؤسستك في تلقي حل الإنتاجية السحابي
          &quot;مايكروسوفت 365&quot; ودمجه بالكامل مع آليه عملك.
        </p>
        <p className="text-muted-foreground text-base md:text-lg mb-8 max-w-2xl mx-auto">
          نفتخر بخدمتنا للعديد من الشركات في رحلتهم لتنفيذ عملية انتقالهم إلى
          خدمات مايكروسوفت 365 بنجاح - ويسعدنا مساعدتكم أنتم كذلك!
        </p>
        <Button
          variant="outline"
          className="border-gray-400 text-gray-700 hover:bg-gray-50 px-8 py-6 text-lg rounded-md bg-transparent"
        >
          اطلب الان
        </Button>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          <div className="flex flex-col items-center text-center">
            <CheckCircle className="w-8 h-8 text-gray-600 mb-2" />
            <p className="font-medium text-lg text-gray-800">الدعم الفني</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <CheckCircle className="w-8 h-8 text-gray-600 mb-2" />
            <p className="font-medium text-lg text-gray-800">التدريب</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <CheckCircle className="w-8 h-8 text-gray-600 mb-2" />
            <p className="font-medium text-lg text-gray-800">
              تغييرات الإعدادات
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <CheckCircle className="w-8 h-8 text-gray-600 mb-2" />
            <p className="font-medium text-lg text-gray-800">
              ترحيل SharePoint Online
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <CheckCircle className="w-8 h-8 text-gray-600 mb-2" />
            <p className="font-medium text-lg text-gray-800">
              ترحيل البيانات والمستخدمين
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <CheckCircle className="w-8 h-8 text-gray-600 mb-2" />
            <p className="font-medium text-lg text-gray-800">
              ضبط الإعدادات والتخصيص
            </p>
          </div>
        </div>
      </div>

      <div className="w-full h-full  mt-20 px-8 md:px-16 lg:px-24">
        <Image
          src="/images/ls-start-graphic 1.svg"
          alt="Cloud Services Skyline"
          width={1000}
          height={1000}
          quality={100}
          className=" object-cover"
        />
      </div>
    </section>
  );
};

export default CloudAdoptionSupport;
