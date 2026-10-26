import React from 'react';
import { Helmet } from '@dr.pogodin/react-helmet';
import Hero from '../components/Hero';
import IntroContent from '../components/IntroContent';
import Services from '../components/Services';
import QuoteCTA from '../components/QuoteCTA';
import Fleet from '../components/Fleet';
import Gallery from '../components/Gallery';
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
        <title>BWI Airport Car Service | Flat Rate, No Surge — Book Today</title>
        <meta name="description" content="Flat-rate BWI Airport car service since 2014 — no surge, free flight tracking, licensed chauffeurs. Serving MD, DC & VA 24/7. Call 877-609-1919 or book online." />
        <link rel="canonical" href="https://www.bwichauffeur.com/" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.bwichauffeur.com/" />
        <meta property="og:title" content="BWI Airport Car Service | Flat Rate, No Surge — Book Today" />
        <meta property="og:description" content="Flat-rate BWI Airport car service since 2014 — no surge, free flight tracking, licensed chauffeurs. Serving MD, DC & VA 24/7. Call 877-609-1919 or book online." />
        <meta property="og:image" content="https://www.bwichauffeur.com/logo.jpeg" />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:title" content="BWI Airport Car Service | Flat Rate, No Surge — Book Today" />
        <meta property="twitter:description" content="Flat-rate BWI Airport car service since 2014 — no surge, free flight tracking, licensed chauffeurs. Serving MD, DC & VA 24/7. Call 877-609-1919 or book online." />
        <meta property="twitter:image" content="https://www.bwichauffeur.com/logo.jpeg" />
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'LocalBusiness',
            name: 'BWI Chauffeur',
            url: 'https://www.bwichauffeur.com/',
            telephone: '+1-877-609-1919',
            image: 'https://www.bwichauffeur.com/logo.jpeg',
            address: {
              '@type': 'PostalAddress',
              streetAddress: '9836 Lyon Ave',
              addressLocality: 'Laurel',
              addressRegion: 'MD',
              postalCode: '20723',
              addressCountry: 'US',
            },
            areaServed: [
              { '@type': 'State', name: 'Maryland' },
              { '@type': 'State', name: 'Virginia' },
              { '@type': 'State', name: 'Delaware' },
              { '@type': 'AdministrativeArea', name: 'Washington DC' },
            ],
            priceRange: '$$',
          })}
        </script>
      </Helmet>
      <Hero />
      <IntroContent />
      <Services />
      <QuoteCTA />
      <Fleet />
      <Gallery />
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