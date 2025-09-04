import React from "react";
import HeroSection from "../components/HeroSection/HeroSection";
import PricingCard from "../components/SharedHosting/PricingCard";
import KubernetesWindosHosting from "../components/WindowsHosting/KubernetesWindosHosting";
import CloudAdoptionSupport from "../components/WindowsHosting/CloudAdoptionSupport";
import Asks from "../components/DataCenter/Asks/Asks";
import PlatformSupport from "../components/WindowsHosting/PlatformSupport";
import WindowsKeyAdSection from "../components/WindowsKeyAdSection";

const WindowsHosting = () => {
  return (
    <div className="overflow-x-hidden">
      <HeroSection
        title="استضافة ويندوز"
        description="واحدة من أفضل وأسرع وأسهل خدمات الاستضافة"
        primaryButtonText="انشاء حساب"
        secondaryButtonText="سجل الآن"
        imageBottom="/images/winds-hero.svg"
        imageAltBottom="Hero Background"
    
      />
      <KubernetesWindosHosting />
      <PricingCard />
      <CloudAdoptionSupport />
      <WindowsKeyAdSection/>
      <PlatformSupport  />
      <Asks />
    </div>
  );
};

export default WindowsHosting;
