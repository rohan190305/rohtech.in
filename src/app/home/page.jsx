import React from 'react'
import Navbar from '@/components/navbar'
import HeroSection from '@/components/home'
import ServicesSection from '@/components/services'
import AboutSection from '@/components/about'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

const page = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <Contact />
      <Footer />
    </div>
  )
}

export default page
