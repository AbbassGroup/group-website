import React from 'react';
import './Services.css';
import businessBrokerLogo from '../assets/images/group_website_logos/Business-Broker.png';
import advocacyLogo from '../assets/images/group_website_logos/Advocacy.png';
import financeLogo from '../assets/images/group_website_logos/Finance.png';
import globalPropertiesLogo from '../assets/images/group_website_logos/Global-Properties.png';

import businessBrokerImage from '../assets/images/group_website_images/Business-Brokers.png';
import advocacyImage from '../assets/images/group_website_images/Advocacy.png';
import financeImage from '../assets/images/group_website_images/Finance.png';
import globalPropertiesImage from '../assets/images/group_website_images/Global-Properties.jpg';

const Services = () => {
  const divisions = [
    {
      description: 'Buy or sell a business with expert guidance.',
      logo: businessBrokerLogo,
      image: businessBrokerImage,
      link: '/businessbrokers',
      cta: 'Sell Your Business'
    },
    {
      description: 'Professional representation for your property journey.',
      logo: advocacyLogo,
      image: advocacyImage,
      link: '/advocacy',
      cta: 'Buy a Property',
      target: '_blank'
    },
    {
      description: 'Finance solutions tailored to your needs.',
      logo: financeLogo,
      image: financeImage,
      link: '/finance',
      cta: 'Get Finance',
      target: '_blank'
    },
    {
      description: 'Invest in premium properties in Dubai.',
      logo: globalPropertiesLogo,
      image: globalPropertiesImage,
      link: 'https://abbassglobalproperties.com/',
      cta: 'Invest in Dubai',
      target: '_blank'
    }
  ];

  return (
    <section className="services">
      <div className="services-container">
        <div className="divisions">
          <h2>Explore Our Divisions</h2>
          <div className="division-cards modern-division-cards">
            {divisions.map((division, index) => (
              <div key={index} className="division-card modern-division-card">
                <img src={division.logo} alt={division.title + ' logo'} className="division-logo" />
                <img src={division.image} alt={division.title + ' images'} className="division-image" />
                <p className="division-desc">{division.description}</p>
                <a href={division.link} className="btn btn-secondary division-cta" target={division.target} rel="noopener noreferrer">{division.cta}</a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services; 