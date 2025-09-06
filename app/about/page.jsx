import React from 'react'
import AboutHeroSection from '../components/About/AboutHeroSection'
import TigersCompany from '../components/About/TigersCompany'
import AchievementsTimeline from '../components/About/AchievementsTimeline'
import WhyChooseUs from '../components/Programmers/WhyChooseUs'
import Asks from '../components/DataCenter/Asks/Asks'
import InsteretedContact from '../components/InsteretedContact'

const page = () => {
    return (
        <div className="overflow-x-hidden">
            <AboutHeroSection />
            <TigersCompany />
            <AchievementsTimeline />
            <WhyChooseUs />
            <InsteretedContact/>
            <Asks />

        </div>
    )
}

export default page