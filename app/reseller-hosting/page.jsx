import React from 'react'
import HeroSection from '../components/HeroSection/HeroSection'
import KubernetesHostingIntro from '../components/Microsoft365/KubernetesHostingIntro'
import PricingCard from '../components/SharedHosting/PricingCard'
import ClickSection from '../components/SharedHosting/ClickSection'
import JoinSection from '../components/SharedHosting/JoinSection'
import BeastSection from '../components/DataCenter/BeastSection/BeastSection'
import Asks from '../components/DataCenter/Asks/Asks'

const ResellerHosting = () => {
  return (
    <div className='overflow-x-hidden'>
        <HeroSection
        title="الاستضافات المشتركة"
        description="كلام و وصف للاستضافات المشتركة كلام و وصف للاستضافات المشتركة كلام و وصف للاستضافات كلام و المشتركة كلام و وصف للاستضافات المشتركة"
        primaryButtonText="انشاء حساب"
        secondaryButtonText="عرض الاسعار"
        imagesrc="/images/Group4027.png"
        imageAlt="Hero Background"
      />
      <KubernetesHostingIntro />
      <PricingCard/>
      <ClickSection/>
      <JoinSection />
      <BeastSection />
      <Asks/>
    </div>
  )
}

export default ResellerHosting