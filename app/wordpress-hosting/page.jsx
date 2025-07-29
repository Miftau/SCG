import React from "react";
import HeroSection from "../components/HeroSection/HeroSection";
import WordPressGrowSection from "../components/WordPressHosting/WordPressGrowSection";
import FreeToolsSection from "../components/WordPressHosting/FreeToolsSection";
import PricingCard from "../components/SharedHosting/PricingCard";
import WordpressFeatures from "../components/WordPressHosting/WordpressFeatures";
import ArabicSection from "../components/WordPressHosting/ArabicSection";
import ImageSection from "../components/WordPressHosting/ImageSection";
import BeastSection from "../components/DataCenter/BeastSection/BeastSection";
import Asks from "../components/DataCenter/Asks/Asks";
import FeatureSection from "../components/WordPressHosting/FeatureSection";

const WordPressHosting = () => {
  return (
    <div>
      <HeroSection
        title="استضافة WordPress المُدارة"
        description="انتقل بموقعك الالكتروني إلى مستوى أعلى من السرعة والأداء بسرعة تتجاوز الــ 5 أضعاف. بحلول مصممة خصيصاً لمضاعفة السرعة وتقديم أفضل سرعة أداء لموقعك"
        primaryButtonText="انشاء حساب"
        secondaryButtonText="عرض الاسعار"
        imagesrc="/images/Group4027.png"
        imageAlt="Hero Background"
      />
      <FreeToolsSection />
      <WordPressGrowSection />
      <PricingCard />
      <WordpressFeatures />
      <ArabicSection />
      <imgSection />
      <FeatureSection />
      <BeastSection />
      <Asks />
    </div>
  );
};

export default WordPressHosting;
