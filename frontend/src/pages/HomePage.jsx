import React from 'react';
import { Helmet } from '@dr.pogodin/react-helmet';
import Hero from '../components/Hero';
import IntroContent from '../components/IntroContent';
import Services from '../components/Services';
import QuoteCTA from '../components/QuoteCTA';
import Fleet from '../components/Fleet';
import About from '../components/About';
import PromiseSection from '../components/Promise';
import BWIDifference from '../components/BWIDifference';
import WhyChooseUs from '../components/WhyChooseUs';
import Testimonials from '../components/Testimonials';
import Awards from '../components/Awards';
import HomeFAQ from '../components/HomeFAQ';

const HomePage = () => {
  return (
    <>
      <Helmet>
        <title>BWI Airport Car Service | Flat-Rate Chauffeur, No Surge</title>
        <meta name="description" content="BWI Chauffeur offers professional chauffeur service and hourly chauffeur service for airport transfers, business travel, and luxury rides in the BWI area." />
        <link rel="canonical" href="https://bwichauffeur.com/" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://bwichauffeur.com/" />
        <meta property="og:title" content="BWI Airport Car Service | Flat-Rate Chauffeur, No Surge" />
        <meta property="og:description" content="BWI Chauffeur offers professional chauffeur service and hourly chauffeur service for airport transfers, business travel, and luxury rides in the BWI area." />
        <meta property="og:image" content="https://bwichauffeur.com/logo.jpeg" />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:title" content="BWI Airport Car Service | Flat-Rate Chauffeur, No Surge" />
        <meta property="twitter:description" content="BWI Chauffeur offers professional chauffeur service and hourly chauffeur service for airport transfers, business travel, and luxury rides in the BWI area." />
        <meta property="twitter:image" content="https://bwichauffeur.com/logo.jpeg" />
      </Helmet>
      <Hero />
      <IntroContent />
      <Services />
      <QuoteCTA />
      <Fleet />
      <About />
      <PromiseSection />
      <BWIDifference />
      <Awards />
      <Testimonials />
      <WhyChooseUs />
      <HomeFAQ />
    </>
  );
};

export default HomePage;