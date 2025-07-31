import React from 'react'
import HeroSection from '../components/HeroSection/HeroSection'
import WhyChooseUs from '../components/Programmers/WhyChooseUs'
import PricingSection from '../components/Programmers/PricingSection'
import WhiosSection from '../components/Programmers/WhiosSection'
import Asks from '../components/DataCenter/Asks/Asks'
import BenefitsSection from '../components/Programmers/BenefitsSection'

const Programmers = () => {
    return (
        <div className="overflow-x-hidden">
            <HeroSection
                title="Hosting programmers"
                description="خوادم سحابية عالية الأداء والثبات تصل إلى 100% مع مواقع جغرافية متعددة"
                primaryButtonText="سجل الان"
                imagesrc="/images/Group4027.png"
                imageAlt="Hero Background"
            />
            <WhyChooseUs />
            <PricingSection />
            <WhiosSection />
            <BenefitsSection />
            <Asks />
        </div>
    )
}

export default Programmers