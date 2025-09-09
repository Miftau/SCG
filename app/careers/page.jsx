import React from 'react'
import HeroSection from '../components/Careers/HeroSection';
import { NavigationMenuDemo } from '../components/Header/MainNavbar';
import Asks from '../components/DataCenter/Asks/Asks';
import AvailableJobs from '../components/Careers/AvailableJobs'; 
import Advantages from '../components/Careers/Advantages';

const Careers = () => {
  return (
    <div className='relative uk-animation-fade'>
        <NavigationMenuDemo />
        <HeroSection />
        <AvailableJobs/>
        <Advantages />
        <Asks />
        
    </div>
  )
}

export default Careers