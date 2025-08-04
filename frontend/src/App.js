import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import EbookSection from './components/EbookSection';
import CtaJoinUs from './components/CtaJoinUs';
import Values from './components/Values';
import TestimonialsSection from './components/TestimonialsSection';
import Footer from './components/Footer';
import JoinUsPage from './pages/JoinUsPage';
import ContactUsPage from './pages/ContactUsPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import TermsPage from './pages/TermsPage';
import MaintenancePage from './pages/MaintenancePage';

import WhatWeDo from './components/WhatWeDo';
import './App.css';

function AppContent() {
  const location = useLocation();
  const isPrivacyPolicy = location.pathname === '/privacy-policy';
  const isTerms = location.pathname === '/terms';
  const isMaintenance = location.pathname === '/advocacy' || location.pathname === '/finance';
  const disableScrollEffect = isPrivacyPolicy || isTerms;
  const darkNavbar = isPrivacyPolicy || isTerms;
  return (
    <>
      {!isMaintenance && <Header disableScrollEffect={disableScrollEffect} dark={darkNavbar} />}
      <main>
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <Services />
              <WhatWeDo />
              <EbookSection />
              <Values />
              <TestimonialsSection />
              <CtaJoinUs />
            </>
          } />
          <Route path="/join-us" element={<JoinUsPage />} />
          <Route path="/contact-us" element={<ContactUsPage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
          <Route path="/terms" element={<TermsPage />} />
          // <Route path="/advocacy" element={<MaintenancePage serviceName="Advocacy" />} />
          // <Route path="/finance" element={<MaintenancePage serviceName="Finance" />} />
        </Routes>
      </main>
      {!isMaintenance && <Footer />}
    </>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
