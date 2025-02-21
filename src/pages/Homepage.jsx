import React from 'react'


import Navbar from '../components/Homepage/Navbar'
import Hero from '../components/Homepage/Hero'
import Features from '../components/Homepage/Features'
import HowItWorks from '../components/Homepage/HowItWorks'
import Stats from '../components/Homepage/Stats'
import Partners from '../components/Homepage/Partners'
import ImpactStories from '../components/Homepage/ImpactStories'
import Testimonials from '../components/Homepage/Testimonial'
import CallToAction from '../components/Homepage/CallToAction'
import Footer from '../components/Homepage/Footer'

const Homepage = () => {
  return (
    <>
      <Navbar />
      <Hero/>
      <Features/>
      <HowItWorks/>
      <Stats/>
      <Partners />
      <ImpactStories />
      <Testimonials />
      <CallToAction />
      <Footer />
    </>
  )
}

export default Homepage