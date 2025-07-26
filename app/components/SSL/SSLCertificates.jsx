"use client";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const SSLCertificates = () => {
  const sslCertificates = [
    {
      title: "GeoTrust QuickSSL Premium",
      price: "91.30",
      period: "د.ل / ربع سنوي",
      features: ["التحقق من صحة", "Organization", "ختم الموقع", "Dynamic"],
      buttonText: "اطلب الان",
      borderColor: "bg-[#fdd835]",
    },
    {
      title: "GeoTrust True BusinessID",
      price: "91.30",
      period: "د.ل / ربع سنوي",
      features: ["التحقق من صحة", "Organization", "ختم الموقع", "Dynamic"],
      buttonText: "اطلب الان",
      borderColor: "bg-[#e0e7ff]",
    },
    {
      title: "GeoTrust True BusinessID Wildcard",
      price: "91.30",
      period: "د.ل / ربع سنوي",
      features: ["التحقق من صحة", "Organization", "ختم الموقع", "Dynamic"],
      buttonText: "اطلب الان",
      borderColor: "bg-[#64b5f6]",
    },
    {
      title: "GeoTrust True BusinessID with EV",
      price: "91.30",
      period: "د.ل / ربع سنوي",
      features: ["التحقق من صحة", "Organization", "ختم الموقع", "Dynamic"],
      buttonText: "اطلب الان",
      borderColor: "bg-[#fdd835]",
    },
    {
      title: "GeoTrust True BusinessID Multi-Domain",
      price: "91.30",
      period: "د.ل / ربع سنوي",
      features: ["التحقق من صحة", "Organization", "ختم الموقع", "Dynamic"],
      buttonText: "اطلب الان",
      borderColor: "bg-[#e0e7ff]",
    },
    {
      title: "GeoTrust True BusinessID",
      price: "91.30",
      period: "د.ل / ربع سنوي",
      features: ["التحقق من صحة", "Organization", "ختم الموقع", "Dynamic"],
      buttonText: "اطلب الان",
      borderColor: "bg-[#64b5f6]",
    },
    {
      title: "GeoTrust True BusinessID with EV",
      price: "91.30",
      period: "د.ل / ربع سنوي",
      features: ["التحقق من صحة", "Organization", "ختم الموقع", "Dynamic"],
      buttonText: "اطلب الان",
      borderColor: "bg-[#fdd835]",
    },
    {
      title: "GeoTrust True BusinessID Multi-Domain",
      price: "91.30",
      period: "د.ل / ربع سنوي",
      features: ["التحقق من صحة", "Organization", "ختم الموقع", "Dynamic"],
      buttonText: "اطلب الان",
      borderColor: "bg-[#e0e7ff]",
    },
    {
      title: "GeoTrust True BusinessID",
      price: "91.30",
      period: "د.ل / ربع سنوي",
      features: ["التحقق من صحة", "Organization", "ختم الموقع", "Dynamic"],
      buttonText: "اطلب الان",
      borderColor: "bg-[#64b5f6]",
    },
  ];

  return (
    <section className="relative w-full min-h-screen bg-white overflow-hidden py-12 md:py-20 lg:py-24">
      {/* Background pattern */}
      <div className="absolute inset-0 z-0">
        <img
          src="/background-pattern.png"
          alt="Abstract background pattern"
          layout="fill"
          objectFit="cover"
          quality={100}
          className="opacity-5"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800 mb-4 leading-tight">
          قم بترسيخ موثوقية عملك
        </h2>
        <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto mb-12 leading-relaxed">
          قم بحماية موقعك وبيانات الزائرين - عبر إنشاء اتصال آمن وتشفير البيانات
          المقدمة من شهادات SSL. ودع زوار موقعك يعلمون أن موقع الويب الخاص بك
          آمن وموثوق من خلال علامة القفل المميزة واختصار https:// في بداية اسم
          نطاقك.
        </p>

        <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-10">
          اختر شهادة SSL المناسبة
        </h3>
        <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto mb-12 leading-relaxed">
          شركة العنكبوت التي توفر لك مجموعة متنوعة من شهادات الحماية من أكبر
          الشركات الموثوقة في المجال عالميًا.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sslCertificates.map((card, index) => (
            <Card
              key={index}
              className="card-hover w-full max-w-sm mx-auto rounded-lg shadow-md overflow-hidden p-0"
            >
              <div className={`h-3 ${card.borderColor}`} />
              <CardHeader className="text-center pt-6 pb-4">
                <CardTitle className="text-lg font-semibold text-gray-700">
                  {card.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col items-center justify-center py-4">
                <div className="text-5xl font-bold text-gray-800 mb-2">
                  {card.price}
                </div>
                <div className="text-sm text-gray-500 mb-6">{card.period}</div>
                <ul className="space-y-2 text-center text-gray-600 text-sm">
                  {card.features.map((feature, i) => (
                    <li key={i}>{feature}</li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter className="flex justify-center pb-6 pt-4">
                <Button className="bg-[#4a3a80] hover:bg-[#3a2a70] text-white font-bold py-2 px-6 rounded-md text-base">
                  {card.buttonText}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SSLCertificates;
