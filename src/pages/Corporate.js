import React from 'react';
import { Link } from 'react-router-dom';
import './Corporate.css';
import companyTimeline from '../assets/images/company-timeline.jpg';
import profileInfographic from '../assets/images/profile-infographic.jpg';

const Corporate = () => {
  return (
    <main className="corporate-page">
      {/* Hero Section */}
      <section className="corporate-hero">
        <div className="hero-content">
          <h1>Corporate Information</h1>
          <p style={{ color: '#B2CD9C' }}>Our journey, values, and commitment to excellence</p>
        </div>
      </section>

      {/* Company History */}
      <section className="corporate-section">
        <div className="container">
          <h2>Company History & Milestones</h2>
          <div className="grid-layout">
            <div className="text-content">
              <p>Founded in 2023, AfriNuts Export has rapidly grown from a family-owned operation to a leading cashew exporter in Ivory Coast...</p>
              <ul className="milestones">
                <li><strong>2023:</strong> Company founded with 50-hectare family farm</li>
                <li><strong>2026:</strong> Expanded trading operations across West Africa</li>
                <li><strong>2031:</strong> First harvest from our plantation</li>
                <li><strong>2032:</strong> Processing facility operational</li>
              </ul>
            </div>
            <div className="image-content">
              <img src={companyTimeline} alt="Company growth timeline" />
            </div>
          </div>
        </div>
      </section>

      {/* Company Profile */}
      <section className="corporate-section alt-bg">
        <div className="container">
          <h2>Company Profile</h2>
          <div className="grid-layout reversed">
            <div className="text-content">
              <h3>Our Operations</h3>
              <p>AfriNuts Export specializes in premium cashew products from farm to international markets...</p>
              
              <h3>Key Figures</h3>
              <div className="stats-grid">
                <div className="stat-item">
                  <span className="stat-number">50+</span>
                  <span className="stat-label">Hectares Farmed</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">100+</span>
                  <span className="stat-label">Local Partners</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">5</span>
                  <span className="stat-label">Countries Served</span>
                </div>
              </div>
            </div>
            <div className="image-content">
              <img src={profileInfographic} alt="Company profile infographic" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="corporate-cta">
        <div className="container">
          <h2>Want to know more about our corporate details?</h2>
          <Link to="/contact" className="cta-button">Contact Our Team</Link>
        </div>
      </section>
    </main>
  );
};

export default Corporate;