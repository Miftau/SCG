import React from 'react'
import ContactHeroSection from '../components/Contact/ContactHeroSection'
import LocationSection from '../components/Contact/LocationSection'
import Asks from '../components/DataCenter/Asks/Asks'

const Contact = () => {
  return (
    <div className='overflow-x-hidden'>
        <ContactHeroSection />
        <LocationSection />
        <Asks />
    </div>
  )
}

export default Contact