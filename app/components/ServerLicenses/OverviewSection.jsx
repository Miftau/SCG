import { MailCheck , AlertTriangle, Lock, ShieldCheck } from "lucide-react";

const OverviewSection = () => {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-white" dir="rtl">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-heading">
            نظرة شاملة على نطاقك بالكامل
          </h2>
          <p className="max-w-[800px] text-muted-foreground md:text-xl">
            احصل على رؤية كاملة لكل ما يحدث في نطاقك على لوحة تحكم واحدة، وتحقق
            في أدق التفاصيل من خلال الرسوم البيانية التفاعلية وعناصر واجهة
            المستخدم.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Feature 1 */}
          <div className="flex flex-col items-center text-center space-y-4 p-4">
            <div className="w-16 h-16 rounded-full bg-icon-bg-blue flex items-center justify-center">
              <MailCheck  className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-foreground">
              نظرة عامة على البريد الإلكتروني الصادر
            </h3>
            <p className="text-muted-foreground">
              عرض نسبة رسائل البريد الإلكتروني التي تمر عبر DMARC.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="flex flex-col items-center text-center space-y-4 p-4">
            <div className="w-16 h-16 rounded-full bg-icon-bg-blue flex items-center justify-center">
              <AlertTriangle className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-foreground">
              أكبر 5 تهديدات
            </h3>
            <p className="text-muted-foreground">
              إظهار أكبر 5 عناوين IP التي تشكل أكبر التهديدات المحتملة لنطاقك.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="flex flex-col items-center text-center space-y-4 p-4">
            <div className="w-16 h-16 rounded-full bg-icon-bg-blue flex items-center justify-center">
              <Lock className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-foreground">
              التوافق مع أنظمة SPF & DKIM
            </h3>
            <p className="text-muted-foreground">
              النسبة المئوية لرسائل البريد الإلكتروني المرسلة تتوافق مع نظام
              التعرف على هوية المرسل SPF و DKIM على التوالي.
            </p>
          </div>

          {/* Feature 4 */}
          <div className="flex flex-col items-center text-center space-y-4 p-4">
            <div className="w-16 h-16 rounded-full bg-icon-bg-blue flex items-center justify-center">
              <ShieldCheck className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-foreground">
              التوافق مع منصة PowerDMARC
            </h3>
            <p className="text-muted-foreground">
              النسبة المئوية لرسائل البريد الإلكتروني الصادرة من نطاقك والتي
              تتوافق مع PowerDMARC.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OverviewSection;
