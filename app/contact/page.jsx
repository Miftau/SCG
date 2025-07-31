import React from 'react'
import ContactHeroSection from '../components/Contact/ContactHeroSection'
import LocationSection from '../components/Contact/LocationSection'
import ContactForm from '../components/Contact/ContactForm'

const Contact = () => {
  return (
    <div className='overflow-x-hidden'>
        <ContactHeroSection />
        <LocationSection />
        <ContactForm />
    </div>
  )
}

export default Contact