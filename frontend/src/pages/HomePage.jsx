import React from 'react';
import { Helmet } from '@dr.pogodin/react-helmet';
import Hero from '../components/Hero';
import IntroContent from '../components/IntroContent';
import Services from '../components/Services';
import PricingTable from '../components/PricingTable';
import Fleet from '../components/Fleet';
import About from '../components/About';
import PromiseSection from '../components/Promise';
import BWIDifference from '../components/BWIDifference';
import WhyChooseUs from '../components/WhyChooseUs';
import Testimonials from '../components/Testimonials';
import HomeFAQ from '../components/HomeFAQ';

const HomePage = () => {
  return (
    <>
      <Helmet>
        <title>BWI Airport Car Service 2026 | Flat-Rate Chauffeur in MD, DC & VA</title>
        <meta name="description" content="BWI Chauffeur offers professional chauffeur service and hourly chauffeur service for airport transfers, business travel, and luxury rides in the BWI area." />
        <link rel="canonical" href="https://bwichauffeur.com/" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://bwichauffeur.com/" />
        <meta property="og:title" content="BWI Airport Car Service 2026 | Flat-Rate Chauffeur in MD, DC & VA" />
        <meta property="og:description" content="BWI Chauffeur offers professional chauffeur service and hourly chauffeur service for airport transfers, business travel, and luxury rides in the BWI area." />
        <meta property="og:image" content="https://bwichauffeur.com/logo.jpeg" />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:title" content="BWI Airport Car Service 2026 | Flat-Rate Chauffeur in MD, DC & VA" />
        <meta property="twitter:description" content="BWI Chauffeur offers professional chauffeur service and hourly chauffeur service for airport transfers, business travel, and luxury rides in the BWI area." />
        <meta property="twitter:image" content="https://bwichauffeur.com/logo.jpeg" />
      </Helmet>
      <Hero />
      <IntroContent />
      <Services />
      <PricingTable />
      <Fleet />
      <About />
      <PromiseSection />
      <BWIDifference />
      <Testimonials />
      <WhyChooseUs />
      <HomeFAQ />
    </>
  );
};

export default HomePage;