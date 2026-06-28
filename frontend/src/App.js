import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { HelmetProvider } from "@dr.pogodin/react-helmet";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import HomePage from "./pages/HomePage";
import ServicesPage from "./pages/ServicesPage";
import FleetPage from "./pages/FleetPage";
import CoveragePage from "./pages/CoveragePage";
import BookingPage from "./pages/BookingPage";
import BlogPage from "./pages/BlogPage";
import BlogPostPage from "./pages/BlogPostPage";
import FAQPage from "./pages/FAQPage";
import AboutPage from "./pages/AboutPage";
import BaltimoreSportsPage from "./pages/BaltimoreSportsPage";
import CruiseTransportationPage from "./pages/CruiseTransportationPage";
import PrivacyPolicyPage from "./pages/PrivacyPolicyPage";
import TermsConditionsPage from "./pages/TermsConditionsPage";
import NotFoundPage from "./pages/NotFoundPage";
import ServiceAreasPage from "./pages/ServiceAreasPage";
import CityPage from "./pages/CityPage";
import ContactPage from "./pages/ContactPage";
import RoutePage from "./pages/RoutePage";
import { CITIES } from "./data/cities";
import { BWI_ROUTES } from "./data/bwiRoutes";
import ChatWidget from "./components/ChatWidget";
import { Toaster } from "sonner";

function App() {
  return (
    <HelmetProvider>
      <div className="App">
        <BrowserRouter>
          <ScrollToTop />
          <div className="min-h-screen bg-black">
            <header>
              <Navbar />
            </header>
            <main>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/services" element={<ServicesPage />} />
                <Route path="/luxury-fleet" element={<FleetPage />} />
                <Route path="/fleet" element={<Navigate to="/luxury-fleet" replace />} />
                <Route path="/coverage" element={<CoveragePage />} />
                <Route path="/booking" element={<BookingPage />} />
                <Route path="/blog" element={<BlogPage />} />
                <Route path="/blog/:slug" element={<BlogPostPage />} />
                <Route path="/faq" element={<FAQPage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/baltimore-sports-transportation" element={<BaltimoreSportsPage />} />
                <Route path="/cruise-transportation" element={<CruiseTransportationPage />} />
                <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
                <Route path="/terms-conditions" element={<TermsConditionsPage />} />
                <Route path="/service-areas" element={<ServiceAreasPage />} />
                <Route path="/contact" element={<ContactPage />} />
                {CITIES.map((city) => (
                  <Route
                    key={city.slug}
                    path={`/limo-service-${city.slug}`}
                    element={<CityPage city={city} />}
                  />
                ))}
                {BWI_ROUTES.map((route) => (
                  <Route
                    key={route.slug}
                    path={`/${route.slug}`}
                    element={<RoutePage route={route} />}
                  />
                ))}
                <Route path="*" element={<NotFoundPage />} />
              </Routes>
            </main>
            <footer>
              <Footer />
            </footer>
            <ChatWidget />
            <Toaster position="top-right" richColors />
          </div>
        </BrowserRouter>
      </div>
    </HelmetProvider>
  );
}

export default App;
