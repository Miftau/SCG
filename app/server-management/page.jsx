import React from "react";
import HeroSection from "../components/HeroSection/HeroSection";
import PricingCard from "../components/SharedHosting/PricingCard";
import BackupsGrowSection from "../components/Backups/BackupsGrowSection";
import BeastSection from "../components/DataCenter/BeastSection/BeastSection";
import Asks from "../components/DataCenter/Asks/Asks";
import PlatformSupport from "../components/Backups/PlatformSupport";

const ServerManagement = () => {
  return (
    <div className="overflow-x-hidden">
      <HeroSection
        title="إدارة الخوادم"
        description="دعنا ندير جميع خوادمك من أجلك!"
        primaryButtonText="تسجيل الان"
         imageBottom="/images/server-m.svg"
        imageAlt="Hero Background"
      />
      <PricingCard />
      <BackupsGrowSection />
      <PlatformSupport />
      <BeastSection />
      <Asks />
    </div>
  );
};

export default ServerManagement;
