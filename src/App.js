import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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

import WhatWeDo from './components/WhatWeDo';
import './App.css';

function App() {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <Services />
              <WhatWeDo />
              <EbookSection />
              <Values />
              <CtaJoinUs />
              <TestimonialsSection />
            </>
          } />
          <Route path="/join-us" element={<JoinUsPage />} />
          <Route path="/contact-us" element={<ContactUsPage />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;