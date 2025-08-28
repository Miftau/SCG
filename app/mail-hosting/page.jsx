import React from "react";
import HeroSection from "../components/HeroSection/HeroSection";
import PricingCard from "../components/SharedHosting/PricingCard";
import DashboardFeatures from "../components/Home/DashboardFeatures";
import BeastSection from "../components/DataCenter/BeastSection/BeastSection";
import Asks from "../components/DataCenter/Asks/Asks";
import AllNeedSection from "../components/MailHosting/AllNeedSection";
import StrongSecurity from "../components/MailHosting/StrongSecurity";
import EasyTransitionSection from "../components/MailHosting/EasyTransitionSection";
import MailHostAdvantages from "../components/MailHosting/MailHostAdvantages";

const MailHosting = () => {
  return (
    <div className="overflow-x-hidden">
      <HeroSection
        title="إستضافات البريد"
        description="كلام و وصف للاستضافات المشتركة كلام و وصف للاستضافات المشتركة كلام و وصف للاستضافات كلام و المشتركة كلام و وصف للاستضافات المشتركة"
        primaryButtonText="انشاء حساب"
        secondaryButtonText="عرض الاسعار"
        imageBottom="/images/mailhero.svg"
        imageAlt="Hero Background"
      />
      <PricingCard />
      <AllNeedSection />
      <DashboardFeatures />
      <StrongSecurity />
      <MailHostAdvantages />
      <EasyTransitionSection />
      <Asks />
    </div>
  );
};

export default MailHosting;
