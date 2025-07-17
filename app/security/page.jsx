import React from "react";
import HeroSection from "../components/HeroSection/HeroSection";
import WhyUsSection from "../components/Security/WhyUsSection";
import WhoisTool from "../components/Security/WhoisTool";
import Asks from "../components/DataCenter/Asks/Asks";
import BeastMain from "../components/Security/BeastMain";

const Security = () => {
  return (
    <div className="overflow-x-hidden">
      <HeroSection
        title="الأمان"
        description="تعزيز الأمان لموقعك الإلكتروني مع خدماتنا المتقدمة"
        primaryButtonText="ابدأ الآن"
        imageSrc="/images/Group19548.svg"
        imageAlt="Hero Background"
      />
      <WhyUsSection />
      <WhoisTool />
      <BeastMain />
      <Asks/>
    </div>
  );
};

export default Security;
