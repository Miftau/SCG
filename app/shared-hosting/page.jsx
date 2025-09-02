import React from "react";
import HeroSection from "../components/HeroSection/HeroSection";
import PricingCard from "../components/SharedHosting/PricingCard";
import AdvantagesShared from "../components/SharedHosting/AdvantagesShared";
import FeaturesSection from "../components/SharedHosting/FeaturesSection";
import PartnersGrid from "../components/SharedHosting/PartnersGrid";
import Asks from "../components/DataCenter/Asks/Asks";
import PaymentSection from "../components/CloudTigers/PaymentSection";
import NIStFrameworkSection from "../components/CloudServers/NISTFrameworkSection";




const SharedHosting = () => {
  return (
    <div className="overflow-x-hidden">
      <HeroSection
        title="الاستضافات المشتركة"
        description="كلام و وصف للاستضافات المشتركة كلام و وصف للاستضافات المشتركة كلام و وصف للاستضافات كلام و المشتركة كلام و وصف للاستضافات المشتركة"
        primaryButtonText="انشاء حساب"
        secondaryButtonText="عرض الاسعار"
        imageBottom="/images/full-shared-hero.svg"
      />
      <PricingCard/>
      <PaymentSection/>
      <NIStFrameworkSection/>
      <FeaturesSection/>
      <AdvantagesShared />
      <PartnersGrid/>
      <Asks/>
   
    </div>
  );
};

export default SharedHosting;
