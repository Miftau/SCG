import React from "react";
import HeroSection from "../components/HeroSection/HeroSection";
import PricingCard from "../components/FullServers/PricingCard";
import BackupsGrowSection from "../components/Backups/BackupsGrowSection";
import Asks from "../components/DataCenter/Asks/Asks";
import PlatformSupport from "../components/Backups/PlatformSupport";
import WindowsKeyAdSection from "../components/WindowsKeyAdSection";

const ServerManagement = () => {
  return (
    <div className="overflow-x-hidden">
      <HeroSection
        title="إدارة الخوادم"
        description="دعنا ندير جميع خوادمك من أجلك!"
        primaryButtonText="تسجيل الان"
        secondaryButtonText="سجل الآن!"
        imageBottom="/images/server-m.svg"
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

export default ServerManagement;
