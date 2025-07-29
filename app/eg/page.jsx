import React from "react";
import HeroSection from "../components/HeroSection/HeroSection";
import DomainSection from "../components/LocalDomains/DomainSection";
import DomianCard from "../components/LocalDomains/DomianCard";
import RtlSection from "../components/LocalDomains/RtlSection";
import WhatMotivates from "../components/LocalDomains/WhatMotivates";
import ArabicSection from "../components/LocalDomains/ArabicSection";
import BeastSection from "../components/DataCenter/BeastSection/BeastSection";
import Asks from "../components/DataCenter/Asks/Asks";

const EG = () => {
  const topDomain = {
    name: ".EG",
    price: "20 دولار فقط",
    flag: "/images/flag/egypt.png",
  };

  const domains = [
    { name: ".org.sa", price: "20 دولار فقط" },
    { name: ".net.sa", price: "20 دولار فقط" },
    { name: ".com.sa", price: "20 دولار فقط" },
    { name: ".edu.sa", price: "20 دولار فقط" },
    { name: ".plc.sa", price: "20 دولار فقط" },
    { name: ".sch.sa", price: "20 دولار فقط" },
    { name: ".id.sa", price: "20 دولار فقط" },
    { name: ".med.sa", price: "20 دولار فقط" },
  ];

  const rtlTitle = "أسماء النطاق التي تحتاج إلى موافقة المسجل";

  const rtlItems = [
    {
      label: "edu.sa للجامعات والمعاهد العليا فقط.",
      description:
        "خطاب رسمي إلى شركة ليبيا للاتصالات والتقنية؛ لطلب الموافقة على تسجيل اسم النطاق.",
    },
    {
      label: "",
      description:
        "خطاب رسمي إلى شركة ليبيا للاتصالات والتقنية؛ لطلب الموافقة على تسجيل اسم النطاق.",
    },
    {
      label: "sch.sa للمدارس.",
      description:
        "خطاب رسمي إلى شركة ليبيا للاتصالات والتقنية؛ لطلب الموافقة على تسجيل اسم النطاق.",
    },
    {
      label: "gov.sa للحكومات.",
      description:
        "يتم تسجيله مباشرة مع شركة ليبيا للاتصالات والتقنية بعد موافقة الهيئة العامة للاتصالات والمعلوماتية وطلب تسجيله تحت لوحة تحكم العنكبوت الليبي.",
    },
  ];

  return (
    <div className="overflow-x-hidden">
      <HeroSection
        title="نطاقات sa"
        description="كلام و وصف للاستضافات المشتركة كلام و وصف للاستضافات المشتركة كلام و وصف للاستضافات كلام و المشتركة كلام و وصف للاستضافات المشتركة"
        primaryButtonText="انشاء حساب"
        secondaryButtonText="عرض الاسعار"
        imagesrc="/images/Group4027.png"
        imageAlt="Hero Background"
      />
      <DomainSection
        title="احصل على اسم نطاق sa. من المسجل رقم #1"
        description="الآلاف من أسماء نطاق sa. تم تسجيلها بالفعل، سارع بالتسجيل واحجز اسم نطاقك الفريد sa. الآن مع عدّة امتدادات متنوّعة متوفّرة"
      />
      <DomianCard domains={domains} topDomain={topDomain} />
      <RtlSection title={rtlTitle} items={rtlItems} />
      <WhatMotivates />
      <ArabicSection title="احصائيات eg." description={"القِ نضرة على الأرقام:"} number="500" />
      <BeastSection />
      <Asks />
    </div>
  );
};

export default EG;
