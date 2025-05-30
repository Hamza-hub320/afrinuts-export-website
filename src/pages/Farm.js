import React from 'react';
import './Farm.css';
import farmImage1 from '../assets/images/farm-1.jpg'; 
import farmImage2 from '../assets/images/farm-2.jpg';
import farmHero from '../assets/images/farm-hero.jpg';
import { FaTree, FaMapMarkerAlt, FaCalendarAlt, FaLeaf } from 'react-icons/fa';

const Farm = () => {
  const farmStats = [
    { icon: <FaTree />, value: "50 Hectares", label: "Total Area" },
    { icon: <FaMapMarkerAlt />, value: "Odienné", label: "Location" },
    { icon: <FaCalendarAlt />, value: "2026-2031", label: "Development Phase" },
    { icon: <FaLeaf />, value: "Sustainable", label: "Farming Practices" }
  ];

  return (
    <div className="farm-page">
      {/* Hero Section */}
      <section
        className="farm-hero"
        style={{
          backgroundImage: `linear-gradient(rgba(75, 53, 42, 0.7), rgba(75, 53, 42, 0.7)), url(${farmHero})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          height: '60vh',
          minHeight: '400px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          color: '#F0F2BD'
        }}
      >
        <div className="hero-content">
          <h1 style={{ color: '#F0F2BD' }}>Our Cashew Farm</h1>
          <p style={{ color: '#B2CD9C' }}>Sustainably cultivating premium cashews in the heart of Ivory Coast</p>
        </div>
      </section>

      {/* Farm Overview */}
      <section className="farm-overview">
        <div className="overview-content">
          <h2>50 Hectares of Premium Cashews</h2>
          <p>
            Located in Odienné, the cashew belt of Ivory Coast, our family-owned farm 
            is being developed using sustainable agricultural practices to produce 
            the highest quality raw cashew nuts.
          </p>
          <div className="stats-grid">
            {farmStats.map((stat, index) => (
              <div key={index} className="stat-card">
                <div className="stat-icon">{stat.icon}</div>
                <h3>{stat.value}</h3>
                <p>{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Farm Development Timeline */}
      <section className="timeline-section">
        <h2>Our Development Timeline</h2>
        <div className="timeline">
          <div className="timeline-item">
            <div className="timeline-date">2026</div>
            <div className="timeline-content">
              <h3>Land Preparation</h3>
              <p>Soil analysis, land clearing, and irrigation setup</p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-date">2027</div>
            <div className="timeline-content">
              <h3>Planting Begins</h3>
              <p>Initial planting of cashew trees across 35 hectares</p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-date">2031</div>
            <div className="timeline-content">
              <h3>First Harvest</h3>
              <p>Expected first commercial harvest from our plantation</p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="gallery-section">
        <h2>Farm Gallery</h2>
        <div className="gallery-grid">
          <div className="gallery-item">
            <img src={farmImage1} alt="Cashew plantation" />
          </div>
          <div className="gallery-item">
            <img src={farmImage2} alt="Farm development" />
          </div>
        </div>
      </section>

      {/* Sustainability Section */}
      <section className="sustainability-section">
        <h2>Sustainable Farming Practices</h2>
        <div className="practices-grid">
          <div className="practice-card">
            <h3>Water Conservation</h3>
            <p>Efficient irrigation systems to minimize water usage</p>
          </div>
          <div className="practice-card">
            <h3>Organic Methods</h3>
            <p>Minimal chemical inputs, natural pest control</p>
          </div>
          <div className="practice-card">
            <h3>Soil Health</h3>
            <p>Crop rotation and organic matter to maintain fertility</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Farm;