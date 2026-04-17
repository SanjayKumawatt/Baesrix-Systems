import React from 'react'
import Hero from '../Components/Hero'
import ServicesOverview from '../Components/Services'
import WhyBaesrix from '../Components/WhyBaesrix'
import HowWeWork from '../Components/HowWeWork'
import TechStack from '../Components/TechStack'
import CTABanner from '../Components/CTABanner'

const Home = () => {
  return (
    <div>
      <Hero/>
      <ServicesOverview/>
      <WhyBaesrix/>
      <HowWeWork/>
      <TechStack/>
      <CTABanner/>
    </div>
  )
}

export default Home