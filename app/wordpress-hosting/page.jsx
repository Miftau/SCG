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
import AdvantageSection from "../components/WordPressHosting/AdvantageSection";


const WordPressHosting = () => {
  return (
    <div>
      <HeroSection
        title="استضافة ووردبريس مُدارة بأداء فائق وسرعة لا مثيل لها"
        description="احصل على استضافة ووردبريس مُدارة بالكامل مع أداء فائق وسرعة لا مثيل لها، مما يضمن لموقعك الإلكتروني تجربة مستخدم سلسة وسريعة."
        primaryButtonText="ابدأ الآن"
        secondaryButtonText="تعرّف على المزيد"
        imageBottom="/images/wpfull.svg"
        imageAltTop="Background top"

      />
      <FreeToolsSection />
      <WordPressGrowSection />
      <PricingCard />
      <WordpressFeatures />
      <ArabicSection />
      <ImageSection />
      <FeatureSection />
      <AdvantageSection />
      <Asks />
    </div>
  );
};

export default WordPressHosting;
