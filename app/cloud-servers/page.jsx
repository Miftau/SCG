import React from "react";
import HeroSection from "../components/HeroSection/HeroSection";
import PricingSection from "../components/CloudServers/PricingSection";
import FeaturesSection from "../components/CloudServers/FeaturesSection";
import NISTFrameworkSection from "../components/CloudServers/NISTFrameworkSection";
import MainFeature from "../components/CloudServers/MainFeature";
import BeastSection from "../components/DataCenter/BeastSection/BeastSection";
import Asks from "../components/DataCenter/Asks/Asks";
import ImageSection from "../components/CloudServers/ImageSection";

const CloudServers = () => {
  return (
    <div className="overflow-x-hidden">
      <HeroSection
        title="الاستضافات المشتركة"
        description="كلام و وصف للاستضافات المشتركة كلام و وصف للاستضافات المشتركة كلام و وصف للاستضافات كلام و المشتركة كلام و وصف للاستضافات المشتركة"
        primaryButtonText="انشاء حساب"
        secondaryButtonText="عرض الاسعار"
        imagesrc="/images/Group4027.png"
        imageAlt="Hero Background"
      />
      <PricingSection />
      <FeaturesSection />
      <NISTFrameworkSection />
      <MainFeature/>
      <imgSection />
      <BeastSection />
      <Asks />
    </div>
  );
};

export default CloudServers;
