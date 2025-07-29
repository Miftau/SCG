import { Card } from "@/components/ui/card"
import { Award, MailX, MailCheck, Bug } from "lucide-react"

const WhyChooseUs = () => {
  const features = [
    {
      icon: Award,
      title: "عزز صورة علامتك التجارية",
      description:
        "عندما تقوم باستخدام PowerDMARC، فإنك لا تقضي على عمليات انتحال البريد الإلكتروني فحسب، بل يمكنك أيضًا استخدام التقارير المفصلة لتغيير استراتيجية المحتوى الخاصة بك على الفور. لا تترك مجالًا للصدفة.",
    },
    {
      icon: MailX,
      title: "حظر البريد الإلكتروني غير المصرح به",
      description:
        "يقوم PowerDMARC باستخدام القوة المشتركة لتقنيتي SPF و DKIM ليوفر لك حماية لا مثيل لها للبريد الإلكتروني. مع إمكانية الحصول على نتائج رسائل البريد الإلكتروني التي فشلت في المصادقة حتى تتمتع بالتحكم الكامل.",
    },
    {
      icon: MailCheck,
      title: "تحسين إمكانية التسليم",
      description:
        "تطبيق PowerDMARC يوضح للخدمات المتلقية أنك ملتزم بتحسين أمان بريدك الإلكتروني، مما يزيد من احتمالية وصول بريدك الإلكتروني إلى صناديق البريد الوارد للأشخاص المستهدفين.",
    },
    {
      icon: Bug,
      title: "مراقبة التهديدات في الوقت الفعلي",
      description:
        "باستخدام محرك استخبارات التهديدات المعتمد على الذكاء الاصطناعي، يمكنك تتبع المصادر الضارة التي تنتحل اسم نطاقك أينما كانت في العالم.",
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
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-v0-blue-dark">
            لماذا نختار
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="flex flex-col items-end p-6 rounded-xl shadow-md text-right"
            >
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-v0-blue-light mb-4">
                <feature.icon className="w-6 h-6 text-v0-blue-primary" />
              </div>
              <h3 className="text-xl font-bold text-v0-blue-dark mb-2">
                {feature.title}
              </h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
