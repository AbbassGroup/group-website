import React, { useState } from 'react';
import './EbookSection.css';
import EbookDownloadModal from './EbookDownloadModal';

import escapeTheEmployeeMindset from '../assets/images/books-image/Escape The Employee Mindset.png';
import startSmart from '../assets/images/books-image/Start Smart What to do in the first 90 days.png';
import systemsOverStress from '../assets/images/books-image/Systems over stress.png';
import theBreakoutBlueprint from '../assets/images/books-image/The breakout blueprint.png';
import theConfidenceCode from '../assets/images/books-image/The confidence code.png';
import theSalesBlueprint from '../assets/images/books-image/The sales blueprint.png';
import theSilentEntrepreneur from '../assets/images/books-image/The silent entrepreneur.png';
import yourLicenceToThrive from '../assets/images/books-image/Your licence to thrive.png';

const ebooks = [
  {
    title: 'Escape The Employee Mindset',
    subtitle: 'Unlocking your property investment potential',
    image: escapeTheEmployeeMindset,
    description: 'Unlock your property investment potential with this guide to escaping the employee mindset.',
    pdfFile: 'Escape The Employee Mindset.pdf',
    pdfPath: '/src/assets/Ebooks-PDFs/Escape The Employee Mindset.pdf'
  },
  {
    title: 'Start Smart: What to do in the first 90 days',
    subtitle: 'Your guide to a strong business start',
    image: startSmart,
    description: 'Your guide to a strong business start. Learn what to do in the first 90 days.',
    pdfFile: 'Start Smart What to Do in Your First 90 Days of Business.pdf',
    pdfPath: '/src/assets/Ebooks-PDFs/Start Smart What to Do in Your First 90 Days of Business.pdf'
  },
  {
    title: 'Systems over stress',
    subtitle: 'Build systems, reduce stress, grow faster',
    image: systemsOverStress,
    description: 'Build systems, reduce stress, and grow your business faster.',
    pdfFile: 'Systems Over Stress.pdf',
    pdfPath: '/src/assets/Ebooks-PDFs/Systems Over Stress.pdf'
  },
  {
    title: 'The breakout blueprint',
    subtitle: 'Blueprint for business breakthrough',
    image: theBreakoutBlueprint,
    description: 'A blueprint for breaking through in business.',
    pdfFile: 'The Breakout Blueprint.pdf',
    pdfPath: '/src/assets/Ebooks-PDFs/The Breakout Blueprint.pdf'
  },
  {
    title: 'The confidence code',
    subtitle: 'Confidence for entrepreneurs',
    image: theConfidenceCode,
    description: 'Build your confidence as an entrepreneur.',
    pdfFile: 'The Confidence Code.pdf',
    pdfPath: '/src/assets/Ebooks-PDFs/The Confidence Code.pdf'
  },
  {
    title: 'The sales blueprint',
    subtitle: 'Master the art of sales',
    image: theSalesBlueprint,
    description: 'Master the art of sales with this comprehensive blueprint.',
    pdfFile: 'The Sales Blueprint.pdf',
    pdfPath: '/src/assets/Ebooks-PDFs/The Sales Blueprint.pdf'
  },
  {
    title: 'The silent entrepreneur',
    subtitle: 'Quietly building business success',
    image: theSilentEntrepreneur,
    description: 'Quietly build your business success as a silent entrepreneur.',
    pdfFile: 'The Silent Entrepreneur.pdf',
    pdfPath: '/src/assets/Ebooks-PDFs/The Silent Entrepreneur.pdf'
  },
  {
    title: 'Your licence to thrive',
    subtitle: 'Thrive in business and life',
    image: yourLicenceToThrive,
    description: 'Thrive in business and life with this essential guide.',
    pdfFile: 'Your Licence to Thrive How to Launch and Grow Your Own Business Under a Trusted Brand.pdf',
    pdfPath: '/src/assets/Ebooks-PDFs/Your Licence to Thrive How to Launch and Grow Your Own Business Under a Trusted Brand.pdf'
  },
];

const EBOOKS_PER_PAGE = 4;

const EbookSection = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedEbook, setSelectedEbook] = useState(null);
  const [page, setPage] = useState(0); // 0: first 4, 1: next 4

  const maxPage = Math.ceil(ebooks.length / EBOOKS_PER_PAGE) - 1;
  const startIdx = page * EBOOKS_PER_PAGE;
  const visibleEbooks = ebooks.slice(startIdx, startIdx + EBOOKS_PER_PAGE);

  // Detect mobile view
  const isMobile = typeof window !== 'undefined' && window.matchMedia('(max-width: 600px)').matches;

  // For mobile, show all ebooks in a single row, no arrows, horizontal scroll
  const renderEbooks = () => {
    if (isMobile) {
      return (
        <div className="ebooks-grid mobile-scroll">
          {ebooks.map((book, idx) => (
            <div className="ebook-card" key={idx}>
              <div className="ebook-cover">
                <img src={book.image} alt={book.title} />
              </div>
              <div className="ebook-info">
                <h3>{book.title}</h3>
                <p>{book.subtitle}</p>
                <a
                  href="#"
                  className="download-now-btn"
                  onClick={e => {
                    e.preventDefault();
                    setSelectedEbook(book);
                    setModalOpen(true);
                  }}
                >
                  Download Now
                </a>
              </div>
            </div>
          ))}
        </div>
      );
    }
    // Desktop/tablet: keep paginated view with arrows
    return (
      <>
        <button
          className="ebooks-arrow left"
          onClick={() => setPage(page - 1)}
          aria-label="Previous"
          disabled={page === 0}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15.5 19L8.5 12L15.5 5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
        <div className="ebooks-grid">
          {visibleEbooks.map((book, idx) => (
            <div className="ebook-card" key={startIdx + idx}>
              <div className="ebook-cover">
                <img src={book.image} alt={book.title} />
              </div>
              <div className="ebook-info">
                <h3>{book.title}</h3>
                <p>{book.subtitle}</p>
                <a
                  href="#"
                  className="download-now-btn"
                  onClick={e => {
                    e.preventDefault();
                    setSelectedEbook(book);
                    setModalOpen(true);
                  }}
                >
                  Download Now
                </a>
              </div>
            </div>
          ))}
        </div>
        <button
          className="ebooks-arrow right"
          onClick={() => setPage(page + 1)}
          aria-label="Next"
          disabled={page === maxPage}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8.5 5L15.5 12L8.5 19" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </>
    );
  };

  return (
    <section className="ebook-section">
      <div className="ebook-container">
        <div className="ebook-content">
          <h2>Want to Build Your Own Business?</h2>
          <p>Download our free eBooks and learn how to start your journey with ABBASS.</p>
          <div className="ebooks-scroll-container no-scrollbar">
            {renderEbooks()}
          </div>
        </div>
      </div>
      <EbookDownloadModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        ebook={selectedEbook}
      />
    </section>
  );
};

export default EbookSection; 