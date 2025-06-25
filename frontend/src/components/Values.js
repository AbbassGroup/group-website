import React from 'react';
import '../components/Values.css';
import award from '../assets/images/values/award.svg';
import handshake from '../assets/images/values/handshake.svg';
import target from '../assets/images/values/target.svg';
import clock from '../assets/images/values/clock.svg';
import star from '../assets/images/values/star.svg';

const Values = () => {
  const values = [
    {
      id: 1,
      icon: award,
      title: 'Trust',
    },
    {
      id: 2,
      icon: handshake,
      title: 'Excellence',
    },
    {
      id: 3,
      icon: target,
      title: 'Commitment',
    },
    {
      id: 4,
      icon: clock,
      title: 'Convenience',
    },
    {
      id: 5,
      icon: star,
      title: 'Expertise',
    }
  ];

  return (
    <section className="values-section">
      <div className="container">
        <div className="section-header">
          <h2>Our Values</h2>
          {/* <p>The principles that guide us in delivering exceptional real estate services</p> */}
        </div>
        <div className="values-grid">
          {values.map((value, index) => (
            <div 
              className="value-card" 
              key={value.id}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="value-icon">
                <img src={value.icon} alt={value.title} />
              </div>
              <h3>{value.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Values; 