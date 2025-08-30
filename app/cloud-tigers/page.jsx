import React from "react";
import HeroSection from "../components/HeroSection/HeroSection";
import CloudFeaturesSection from "../components/CloudTigers/CloudFeaturesSection";
import PricingSectionTigers from "../components/CloudTigers/PricingSectionTigers";
import PaymentSection from "../components/CloudTigers/PaymentSection";
import WhyChooseUs from "../components/CloudTigers/WhyChooseUs";
import Asks from "../components/DataCenter/Asks/Asks";
import PlatformSupport from "../components/WindowsHosting/PlatformSupport";

const CloudTigers = () => {
  return (
    <div className="overflow-x-hidden">
      <HeroSection
        title="الاستضافات المشتركة"
        description="كلام و وصف للاستضافات المشتركة كلام و وصف للاستضافات المشتركة كلام و وصف للاستضافات كلام و المشتركة كلام و وصف للاستضافات المشتركة"
        primaryButtonText="انشاء حساب"
        secondaryButtonText="عرض الاسعار"
        imageBottom="/images/cloud-tiger-hero.svg"
        imageAlt="Hero Background"
      />
      <CloudFeaturesSection />
      <PricingSectionTigers />
      <PaymentSection />
      <WhyChooseUs />
      <PlatformSupport />
      <Asks />
    </div>
  );
};

export default CloudTigers;
