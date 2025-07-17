import React from "react";
import HeroSection from "../components/HeroSection/HeroSection";
import LaunchHero from "../components/Fast/LaunchHero/LaunchHero";
import BackGroundSection from "../components/Fast/BackGroundSection/BackGroundSection";
import BeastSection from "../components/DataCenter/BeastSection/BeastSection";
import Asks from "../components/DataCenter/Asks/Asks";

const Fast = () => {
  return (
    <div className="overflow-x-hidden">
      <HeroSection
        title="السرعة"
        description="السرعة السرعة السرعة السرعة السرعة السرعة السرعة"
        primaryButtonText="ابدا الان!"
        imageSrc="/images/Group19.png"
        imageAlt="Hero Background"
      />
      <LaunchHero />
      <BackGroundSection />
      <BeastSection />
      <Asks />
    </div>
  );
};

export default Fast;
