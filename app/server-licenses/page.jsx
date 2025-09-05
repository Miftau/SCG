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
        title="تراخيص الخوادم"
        description="ترخيص واحد للخوادم الخاصة والخوادم الكاملة المخصصة"
        primaryButtonText="انشاء حساب"
        secondaryButtonText="سجل الآن!"
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
