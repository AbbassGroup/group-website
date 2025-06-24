import React from 'react';
import './MaintenancePage.css';

const MaintenancePage = ({ serviceName }) => (
  <div className="maintenance-page">
    <div className="maintenance-container">
      <h1>{serviceName} - Under Maintenance</h1>
      <p>
        We're currently performing maintenance on our {serviceName} service.<br/>
        This page is temporarily unavailable and will be back online as soon as possible.<br/>
        <strong>We appreciate your patience and understanding.</strong><br/>
      </p>
      <a href="/" className="maintenance-home-btn">Go Back to Home</a>
    </div>
  </div>
);

export default MaintenancePage; 