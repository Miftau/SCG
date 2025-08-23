import React from "react";
import HeroSection from "../components/HeroSection/HeroSection";
import KubernetesHostingIntro from "../components/SharedHosting/KubernetesHostingIntro";
import PricingCard from "../components/SharedHosting/PricingCard";
import ClickSection from "../components/SharedHosting/ClickSection";
import JoinSection from "../components/SharedHosting/JoinSection";
import BeastSection from "../components/DataCenter/BeastSection/BeastSection";
import MicrosoftCards from "../components/SharedHosting/MicrosoftCards";
import FeaturesSection from "../components/SharedHosting/FeaturesSection";
import PartnersGrid from "../components/SharedHosting/PartnersGrid";
import Asks from "../components/DataCenter/Asks/Asks";

const SharedHosting = () => {
  return (
    <div className="relative uk-animation-fade">
      <HeroSection
        title="الاستضافات المشتركة"
        description="كلام و وصف للاستضافات المشتركة كلام و وصف للاستضافات المشتركة كلام و وصف للاستضافات كلام و المشتركة كلام و وصف للاستضافات المشتركة"
        primaryButtonText="انشاء حساب"
        secondaryButtonText="عرض الاسعار"
        imageTop="/images/shared-top.png"
        imageAltTop="Hero Background2"
        imageBottom="/images/bottom-back-shared.png"
      />
      <KubernetesHostingIntro />
      <PricingCard/>
      <MicrosoftCards/>
      <BeastSection />
      <FeaturesSection/>
      <PartnersGrid/>
      <Asks/>
   
    </div>
  );
};

export default SharedHosting;
