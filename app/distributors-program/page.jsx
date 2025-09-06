import React from 'react'
import HeroSection from '../components/HeroSection/HeroSection'
import KubernetesSection from '../components/DistributorsProgram/KubernetesSection'
import ArabicFeaturesSection from '../components/DistributorsProgram/ArabicFeaturesSection'
import BackGroundSection from '../components/DistributorsProgram/BackGroundSection'
import PricingSection from '../components/DistributorsProgram/PricingSection'
import ClickSection from '../components/SharedHosting/ClickSection'
import WordPressMigrationSection from '../components/DistributorsProgram/WordPressMigrationSection'
import AdvantageSection from '../components/WordPressHosting/AdvantageSection'
import Asks from '../components/DataCenter/Asks/Asks'

const DistributorsProgram = () => {
    return (

        <div className="overflow-x-hidden">
            <HeroSection
                title="برنامج الموزعين"
                description="حقق الأرباح ووسع خدماتك."
                primaryButtonText="سجل الان"
                imageBottom="/images/dist-hero.svg"
                imageAlt="Hero Background"
            />
            <KubernetesSection />
            <ArabicFeaturesSection />
            <BackGroundSection/>
            <PricingSection />
            <ClickSection />
            <WordPressMigrationSection />
            <AdvantageSection />
            <Asks />
        </div>
    )
}

export default DistributorsProgram