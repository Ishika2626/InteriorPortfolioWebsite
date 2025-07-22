import { useEffect, useState } from 'react';
import Navbar from '../pages/Navbar';
import '../style/HeroSection.css'
import HeroSection from './HeroSection';
import EducationSection from './EducationSection';
import PortfolioSection from './PortfolioSection';
import ServicesSection from './ServicesSection';
import AboutSection from './AboutSection';
import ContactSection from './ContactSection';
import FooterSection from './FooterSection';
function Home() {
  return (
    <>
      <Navbar />

     <HeroSection />
     <AboutSection />
    <ServicesSection />
     <PortfolioSection />

      <EducationSection />
<ContactSection />
<FooterSection />


         </>
  );
}

export default Home;
