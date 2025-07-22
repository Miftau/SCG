import React from "react";
import HeroSection from "../components/HeroSection/HeroSection";
import PricingCard from "../components/SharedHosting/PricingCard";
import GrowSection from "../components/ApplicationHosting/GrowSection";
import BeastSection from "../components/DataCenter/BeastSection/BeastSection";
import Asks from "../components/DataCenter/Asks/Asks";
import BackGroundSection from "./BackGroundSection";
import PlatformSupport from "../components/WindowsHosting/PlatformSupport";

const WorkHosting = () => {
  return (
    <div>
      <HeroSection
        title="إستضافات الاعمال"
        description="كلام و وصف للاستضافات المشتركة كلام و وصف للاستضافات المشتركة كلام و وصف للاستضافات كلام و المشتركة كلام و وصف للاستضافات المشتركة"
        primaryButtonText="انشاء حساب"
        secondaryButtonText="عرض الاسعار"
        imageSrc="/images/Group4027.png"
        imageAlt="Hero Background"
      />
      <PricingCard />
      <BackGroundSection />
      <GrowSection/>
      <BeastSection />
      <PlatformSupport />
      <Asks />
    </div>
  );
};

export default WorkHosting;
