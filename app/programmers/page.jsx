import React from 'react'
import HeroSection from '../components/HeroSection/HeroSection'
import WhyChooseUs from '../components/Programmers/WhyChooseUs'
import PricingCard from '../components/SharedHosting/PricingCard'
import FeatureSection from '../components/Programmers/FeactureSection'
import SSLSection from '../components/Programmers/SSLSection'
import WhoisSection from '../components/Programmers/WhiosSection'
import Asks from '../components/DataCenter/Asks/Asks'
import BenefitsSection from '../components/Programmers/BenefitsSection'
import ImageSection from '../components/Security/ImageSection'

const Programmers = () => {
    return (
        <div className="overflow-x-hidden">
            <HeroSection
                title="Hosting programmers"
                description="خوادم سحابية عالية الأداء والثبات تصل إلى 100% مع مواقع جغرافية متعددة"
                primaryButtonText="سجل الان"
                imageBottom="/images/dev-host-hero.svg"
                imageAlt="Hero Background"
            />
            <WhyChooseUs />
            <ImageSection/>
            <PricingCard />
            <FeatureSection />
            <SSLSection/>
            <WhoisSection/>
            <BenefitsSection />
            <Asks />
        </div>
    )
}

export default Programmers