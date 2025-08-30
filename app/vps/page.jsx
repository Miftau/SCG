import React from "react";
import HeroSection from "../components/HeroSection/HeroSection";
import PricingSection from "../components/CloudServers/PricingSection";
import FeaturesSection from "../components/CloudServers/FeaturesSection";
import NISTFrameworkSection from "../components/CloudServers/NISTFrameworkSection";
import MainFeature from "../components/VPS/MainFeature";
import BeastSection from "../components/DataCenter/BeastSection/BeastSection";
import Asks from "../components/DataCenter/Asks/Asks";
import CloudImageSection from "../components/CloudServers/CloudImageSection";
import DashboardFeatures from "../components/Home/DashboardFeatures";
import PartnersGrid from "../components/SharedHosting/PartnersGrid";

const VPS = () => {
  return (
    <div className="overflow-x-hidden">
      <HeroSection
        title="الاستضافات المشتركة"
        description="كلام و وصف للاستضافات المشتركة كلام و وصف للاستضافات المشتركة كلام و وصف للاستضافات كلام و المشتركة كلام و وصف للاستضافات المشتركة"
        primaryButtonText="انشاء حساب"
        secondaryButtonText="عرض الاسعار"
        imageBottom="/images/vps-hero.svg"
        imageAlt="Hero Background"
      />
      <PricingSection />
      <FeaturesSection />
      <NISTFrameworkSection />
      <MainFeature/>
      <CloudImageSection />
      <DashboardFeatures />
      <PartnersGrid />
      <BeastSection />
      <Asks />
    </div>
  );
};

export default VPS;

