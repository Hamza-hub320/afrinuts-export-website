// src/pages/About.js
/*const About = () => {
  return (
    <main className="about-page">
      <h1>Our Story</h1>
      <section className="mission">
        <h2>Mission</h2>
        <p>To deliver premium cashew products through sustainable farming and community empowerment</p>
      </section>
      <section className="farm-details">
        <h2>Our Farm</h2>
        <p>50 hectares in Odienné, Ivory Coast - First harvest expected 2031</p>
      </section>
    </main>
  );
};

export default About; */

import React from 'react';
import './About.css';
import { FaTree, FaMapMarkerAlt, FaUsers, FaChartLine } from 'react-icons/fa';

const About = () => {
  return (
    <main className="about-page">
      {/* Hero Section */}
      <section className="about-hero" style={{ backgroundColor: '#4B352A' }}>
        <div className="hero-content">
          <h1 style={{ color: '#F0F2BD' }}>Our Story</h1>
          <p style={{ color: '#B2CD9C' }}>Transforming the cashew value chain in Ivory Coast</p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="mission-section">
        <div className="mission-content">
          <h2 style={{ color: '#4B352A' }}>Our Mission</h2>
          <p className="mission-statement" style={{ color: '#4B352A' }}>
            To deliver premium cashew products by cultivating strong relationships with local farmers, 
            implementing rigorous quality control, and promoting sustainable agriculture in West Africa.
          </p>
          <div className="mission-values">
            <div className="value-card" style={{ backgroundColor: '#F0F2BD' }}>
              <FaTree className="value-icon" style={{ color: '#4B352A' }} />
              <h3 style={{ color: '#4B352A' }}>Sustainability</h3>
              <p>Organic farming practices that protect the environment</p>
            </div>
            <div className="value-card" style={{ backgroundColor: '#B2CD9C' }}>
              <FaUsers className="value-icon" style={{ color: '#4B352A' }} />
              <h3 style={{ color: '#4B352A' }}>Community</h3>
              <p>Empowering local farmers through fair partnerships</p>
            </div>
          </div>
        </div>
      </section>

      {/* Farm Section */}
      <section className="farm-section" style={{ backgroundColor: '#F0F2BD' }}>
        <div className="farm-content">
          <div className="farm-text">
            <h2 style={{ color: '#4B352A' }}>Our Farm in Odienné</h2>
            <p style={{ color: '#4B352A' }}>
              Located in the heart of Ivory Coast's cashew belt, our 50-hectare family-owned farm 
              is the foundation of our operation. With the first harvest expected in 2031, we're 
              committed to sustainable plantation development that benefits both the land and 
              the local community.
            </p>
            <div className="farm-stats">
              <div className="stat-item">
                <FaMapMarkerAlt className="stat-icon" style={{ color: '#CA7842' }} />
                <span style={{ color: '#4B352A' }}>Odienné, Ivory Coast</span>
              </div>
              <div className="stat-item">
                <FaChartLine className="stat-icon" style={{ color: '#CA7842' }} />
                <span style={{ color: '#4B352A' }}>50 Hectares</span>
              </div>
            </div>
          </div>
          <div className="farm-image">
            {/* Replace with your farm image */}
            <div className="image-placeholder" style={{ backgroundColor: '#B2CD9C' }}>
              Farm Image
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="timeline-section">
        <h2 style={{ color: '#4B352A' }}>Our Journey</h2>
        <div className="timeline">
          <div className="timeline-item">
            <div className="timeline-date" style={{ backgroundColor: '#CA7842' }}>2023</div>
            <div className="timeline-content" style={{ backgroundColor: '#F0F2BD' }}>
              <h3 style={{ color: '#4B352A' }}>Company Founded</h3>
              <p>Established AfriNuts Export in Odienné</p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-date" style={{ backgroundColor: '#CA7842' }}>2026</div>
            <div className="timeline-content" style={{ backgroundColor: '#F0F2BD' }}>
              <h3 style={{ color: '#4B352A' }}>Farm Development</h3>
              <p>Began planting on our 50-hectare farm</p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-date" style={{ backgroundColor: '#CA7842' }}>2031</div>
            <div className="timeline-content" style={{ backgroundColor: '#F0F2BD' }}>
              <h3 style={{ color: '#4B352A' }}>First Harvest</h3>
              <p>Expected first harvest from our plantation</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;