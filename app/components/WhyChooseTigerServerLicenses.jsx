import { Card } from "@/components/ui/card"
import { Award, MailX, MailCheck, Bug } from "lucide-react"

const WhyChooseTigerServerLicenses = () => {
  const features = [
    {
      icon: "images/licenses-1.svg",
      title: "حظر البريد الإلكتروني غير المصرح به",
      description:
        "يقوم PowerDMARC باستخدام القوة المشتركة لتقنيتي SPF و DKIM ليوفر لك حماية لا مثيل لها للبريد الإلكتروني. مع إمكانية الحصول على نتائج رسائل البريد الإلكتروني التي فشلت في المصادقة حتى تتمتع بالتحكم الكامل.",
    },
    {
      icon: "images/licenses-2.svg",
      title: "مراقبة التهديدات في الوقت الفعلي",
      description:
        "باستخدام محرك استخبارات التهديدات المعتمد على الذكاء الاصطناعي، يمكنك تتبع المصادر الضارة التي تنتحل اسم نطاقك أينما كانت في العالم.",
    },
      {
      icon: "images/licenses-3.svg",
      title: "عزّز صورة علامتك التجارية.",
      description:
        "عند استخدامك لـ PowerDMARC، لا تقتصر الفائدة على التخلص من انتحال البريد الإلكتروني، بل يمكنك أيضًا استخدام التقارير التفصيلية لتغيير استراتيجية المحتوى الخاصة بك على الفور. لا تدع مجالًا للصدفة."
    },
    {
      icon: "images/licenses-4.svg",
      title: "تحسين إمكانية التسليم",
      description:
        "تطبيق PowerDMARC يوضح للخدمات المتلقية أنك ملتزم بتحسين أمان بريدك الإلكتروني، مما يزيد من احتمالية وصول بريدك الإلكتروني إلى صناديق البريد الوارد للأشخاص المستهدفين.",
    },
  ];
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
      <div
        className="container px-4 md:px-6 relative z-10"
        style={{
          backgroundImage: 'url("/images/geometric-pattern.png")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <h2 className="text-3xl font-semibold tracking-tighter md:text-4xl text-v0-blue-dark">
            لماذا نختار
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="flex flex-col p-6 rounded-xl shadow-md"
            >
              <div className="flex items-center rounded-full bg-v0-blue-light mb-4">
               <img src={feature.icon} alt={feature.title} className="object-cover" width={70} />
              </div>
              <h3 className="text-xl font-semibold text-v0-blue-dark mb-2">
                {feature.title}
              </h3>
              <p className="">{feature.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseTigerServerLicenses;
