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
        <title>BWI Airport Car Service | #1 Flat-Rate Chauffeur, No Surge Ever</title>
        <meta name="description" content="BWI's trusted chauffeur service: flat-rate airport transfers, corporate travel & hourly hire across Maryland, DC & VA. 24/7, no surge. Call 877-609-1919." />
        <link rel="canonical" href="https://www.bwichauffeur.com/" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.bwichauffeur.com/" />
        <meta property="og:title" content="BWI Airport Car Service | #1 Flat-Rate Chauffeur, No Surge Ever" />
        <meta property="og:description" content="BWI's trusted chauffeur service: flat-rate airport transfers, corporate travel & hourly hire across Maryland, DC & VA. 24/7, no surge. Call 877-609-1919." />
        <meta property="og:image" content="https://www.bwichauffeur.com/logo.jpeg" />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:title" content="BWI Airport Car Service | #1 Flat-Rate Chauffeur, No Surge Ever" />
        <meta property="twitter:description" content="BWI's trusted chauffeur service: flat-rate airport transfers, corporate travel & hourly hire across Maryland, DC & VA. 24/7, no surge. Call 877-609-1919." />
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