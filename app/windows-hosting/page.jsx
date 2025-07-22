import React from "react";
import HeroSection from "../components/HeroSection/HeroSection";
import PricingCard from "../components/SharedHosting/PricingCard";
import KubernetesWindosHosting from "../components/WindowsHosting/KubernetesWindosHosting";
import BeastSection from "../components/DataCenter/BeastSection/BeastSection";
import CloudAdoptionSupport from "../components/WindowsHosting/CloudAdoptionSupport";
import Asks from "../components/DataCenter/Asks/Asks";
import PlatformSupport from "../components/WindowsHosting/PlatformSupport";

const WindowsHosting = () => {
  return (
    <div className="overflow-x-hidden">
      <HeroSection
        title="الاستضافات المشتركة"
        description="كلام و وصف للاستضافات المشتركة كلام و وصف للاستضافات المشتركة كلام و وصف للاستضافات كلام و المشتركة كلام و وصف للاستضافات المشتركة"
        primaryButtonText="انشاء حساب"
        secondaryButtonText="عرض الاسعار"
        imageSrc="/images/Group4027.png"
        imageAlt="Hero Background"
      />
      <KubernetesWindosHosting />
      <PricingCard />
      <CloudAdoptionSupport />
      <BeastSection />
      <PlatformSupport  />
      <Asks />
    </div>
  );
};

export default WindowsHosting;
