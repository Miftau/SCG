import React from "react";
import HeroSection from "../components/HeroSection/HeroSection";
import PricingCard from "../components/SharedHosting/PricingCard";
import BackupsGrowSection from "../components/Backups/BackupsGrowSection";
import Asks from "../components/DataCenter/Asks/Asks";
import PlatformSupport from "../components/Backups/PlatformSupport";
import WindowsKeyAdSection from "../components/WindowsKeyAdSection";

const Backups = () => {
  return (
    <div className="overflow-x-hidden">
      <HeroSection
        title="النسخ الاحتياطية"
        description="نسخ احتياطية تلقائية ودائمة!"
        primaryButtonText="انشاء حساب"
        secondaryButtonText="سجل الآن!"
        imageBottom="/images/backups.svg"
        imageMobile="/images/backups-m.svg"
        imageAltBottom="Hero Background"
      />
      <PricingCard />
      <BackupsGrowSection />
      <PlatformSupport />
      <WindowsKeyAdSection/>
      <Asks />
    </div>
  );
};

export default Backups;
