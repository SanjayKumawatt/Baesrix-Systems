import React from 'react'
import Hero from '../Components/Hero'
import ServicesOverview from '../Components/Services'
import WhyBaesrix from '../Components/WhyBaesrix'
import HowWeWork from '../Components/HowWeWork'
import TechStack from '../Components/TechStack'
import CTABanner from '../Components/CTABanner'
import SystemOverview from '../Components/SystemOverview'
import VisionMission from '../Components/VisionMission'
import CloudAndStatus from '../Components/CloudAndStatus'
import CloudStrategy from '../Components/CloudStrategy'

const Home = () => {
  return (
    <div>
      <Hero/>
      <SystemOverview/>
      {/* <ServicesOverview/> */}
      <VisionMission/>
      <CloudAndStatus/>
      <CloudStrategy/>
      {/* <WhyBaesrix/>
      <HowWeWork/>
      <TechStack/> */}
      <CTABanner/>
    </div>
  )
}

export default Home