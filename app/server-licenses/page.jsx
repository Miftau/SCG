import React from "react";
import HeroSection from "../components/HeroSection/HeroSection";
import PricingCard from "../components/SharedHosting/PricingCard";
import LicenseSection from "../components/ServerLicenses/LicenseSection";
import OverviewSection from "../components/ServerLicenses/OverviewSection";
import WhyChooseUs from "../components/ServerLicenses/WhyChooseUs";
import Asks from "../components/DataCenter/Asks/Asks";

const ServerLicenses = () => {
  return (
    <div className="overflow-x-hidden">
      <HeroSection
        title="الاستضافات المشتركة"
        description="كلام و وصف للاستضافات المشتركة كلام و وصف للاستضافات المشتركة كلام و وصف للاستضافات كلام و المشتركة كلام و وصف للاستضافات المشتركة"
        primaryButtonText="انشاء حساب"
        secondaryButtonText="عرض الاسعار"
        imageBottom="/images/server-l.svg"
        imageAltBottom="Hero Background"
      />
      <PricingCard />
      <LicenseSection />
      <OverviewSection />
      <WhyChooseUs />
      <Asks />
    </div>
  );
};

export default ServerLicenses;
