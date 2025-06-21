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
    description: 'Unlock your property investment potential with this guide to escaping the employee mindset.'
  },
  {
    title: 'Start Smart: What to do in the first 90 days',
    subtitle: 'Your guide to a strong business start',
    image: startSmart,
    description: 'Your guide to a strong business start. Learn what to do in the first 90 days.'
  },
  {
    title: 'Systems over stress',
    subtitle: 'Build systems, reduce stress, grow faster',
    image: systemsOverStress,
    description: 'Build systems, reduce stress, and grow your business faster.'
  },
  {
    title: 'The breakout blueprint',
    subtitle: 'Blueprint for business breakthrough',
    image: theBreakoutBlueprint,
    description: 'A blueprint for breaking through in business.'
  },
  {
    title: 'The confidence code',
    subtitle: 'Confidence for entrepreneurs',
    image: theConfidenceCode,
    description: 'Build your confidence as an entrepreneur.'
  },
  {
    title: 'The sales blueprint',
    subtitle: 'Master the art of sales',
    image: theSalesBlueprint,
    description: 'Master the art of sales with this comprehensive blueprint.'
  },
  {
    title: 'The silent entrepreneur',
    subtitle: 'Quietly building business success',
    image: theSilentEntrepreneur,
    description: 'Quietly build your business success as a silent entrepreneur.'
  },
  {
    title: 'Your licence to thrive',
    subtitle: 'Thrive in business and life',
    image: yourLicenceToThrive,
    description: 'Thrive in business and life with this essential guide.'
  },
];

const EbookSection = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedEbook, setSelectedEbook] = useState(null);

  return (
    <section className="ebook-section">
      <div className="ebook-container">
        <div className="ebook-content">
          <h2>Want to Build Your Own Business?</h2>
          <p>Download our free eBooks and learn how to start your journey with ABBASS.</p>
          <div className="ebooks-scroll-container">
            <div className="ebooks-grid">
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