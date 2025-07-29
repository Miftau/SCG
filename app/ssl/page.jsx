import React from "react";
import HeroSection from "../components/HeroSection/HeroSection";
import SSLCertificates from "../components/SSL/SSLCertificates";
import SecuritySection from "../components/SSL/SecuritySection";
import BeastSection from "../components/DataCenter/BeastSection/BeastSection";
import Asks from "../components/DataCenter/Asks/Asks";
import FeaturesSection from "../components/SSL/FeaturesSection";

const SSL = () => {
  return (
    <div>
      <HeroSection
        title="الاستضافات المشتركة"
        description="كلام و وصف للاستضافات المشتركة كلام و وصف للاستضافات المشتركة كلام و وصف للاستضافات كلام و المشتركة كلام و وصف للاستضافات المشتركة"
        primaryButtonText="انشاء حساب"
        secondaryButtonText="عرض الاسعار"
        imagesrc="/images/Group4027.png"
        imageAlt="Hero Background"
      />
      <SSLCertificates />
      <SecuritySection />
      <FeaturesSection />
      <BeastSection />
      <Asks />
    </div>
  );
};

export default SSL;
