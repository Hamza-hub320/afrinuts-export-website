import React from 'react';
import './Sustainability.css';
import sustainabilityImg from '../assets/images/sustainability-practices.jpg';
import csrReport from '../assets/documents/afrinuts-csr-report-2024.pdf';

const Sustainability = () => {
  return (
    <main className="sustainability-page">
      {/* Hero Section */}
      <section className="sustainability-hero">
        <div className="hero-content">
          <h1>Sustainability Commitment</h1>
          <p  style={{ color: '#B2CD9C' }}>Ethical farming for a better future</p>
        </div>
      </section>

      {/* Sustainability Practices */}
      <section className="sustainability-section">
        <div className="container">
          <h2>Our Sustainable Practices</h2>
          <div className="practice-cards">
            <div className="practice-card">
              <h3>Environmental Stewardship</h3>
              <ul>
                <li>Water conservation systems</li>
                <li>Organic farming methods</li>
                <li>Renewable energy usage</li>
              </ul>
            </div>
            <div className="practice-card">
              <h3>Community Empowerment</h3>
              <ul>
                <li>Fair wages for farmers</li>
                <li>Education programs</li>
                <li>Healthcare initiatives</li>
              </ul>
            </div>
            <div className="practice-card">
              <h3>Economic Sustainability</h3>
              <ul>
                <li>Direct trade relationships</li>
                <li>Value-added processing</li>
                <li>Long-term farmer partnerships</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CSR Report Download */}
      <section className="report-section">
        <div className="container">
          <div className="report-content">
            <div className="report-text">
              <h2>Corporate Social Responsibility</h2>
              <p>Download our comprehensive CSR report to learn about our sustainability initiatives and impact metrics.</p>
              <a href={csrReport} download="AfriNuts-CSR-Report-2024.pdf" className="download-button">
                Download CSR Report (PDF)
              </a>
            </div>
            <div className="report-image">
              <img src={sustainabilityImg} alt="Sustainable farming practices" />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Sustainability;