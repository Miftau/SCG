import React from "react";
import HeroSection from "../components/HeroSection/HeroSection";
import PricingSection from "../components/ApplicationHosting/PricingSection";
import PaymentFeaturesSection from "../components/ApplicationHosting/PaymentFeaturesSection";
import ECommercePlatforms from "../components/ApplicationHosting/ECommercePlatforms";
import GrowSection from "../components/ApplicationHosting/GrowSection";
import Asks from "../components/DataCenter/Asks/Asks";
import BeastSection from "../components/DataCenter/BeastSection/BeastSection";

const ApplicationHosting = () => {
  return (
    <div className="overflow-x-hidden">
      <HeroSection
        title="استضافة التطبيقات"
        description="كلام و وصف للاستضافات المشتركة كلام و وصف للاستضافات المشتركة كلام و وصف للاستضافات كلام و المشتركة كلام و وصف للاستضافات المشتركة"
        primaryButtonText="انشاء حساب"
        secondaryButtonText="عرض الاسعار"
        imagesrc="/images/Group4027.png"
        imageAlt="Hero Background"
      />
      <PricingSection />
      <PaymentFeaturesSection />
      <ECommercePlatforms />
      <GrowSection />
      <BeastSection />
      <Asks />
    </div>
  );
};

export default ApplicationHosting;
