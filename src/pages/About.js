
import React from 'react';
import './About.css';
import farmImage from '../assets/images/cashew-farm.jpg';
import ceoImage from '../assets/images/ceo.jpg'; // Add your CEO image
import { 
  FaTree, 
  FaSeedling, 
  FaHandshake, 
  FaLeaf, 
  FaIndustry, 
  FaGlobe, 
  FaUsers,
  FaArrowDown,
  FaRocket,
  FaMapMarkerAlt,
  FaChartLine,
  FaHandsHelping,
  FaMosque,
  FaWater
} from 'react-icons/fa';

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

      {/* CEO Message Section */}
      <section className="ceo-section">
        <div className="ceo-container">
          <div className="ceo-image">
            <img src={ceoImage} alt="Hamza S. Ralsan Sangare, CEO of AfriNuts Export" />
          </div>
          <div className="ceo-message">
            <h2 style={{ color: '#4B352A' }}>A Message From Our CEO</h2>
            <p>
              "At AfriNuts Export, we're not just building a business - we're cultivating a legacy. 
              As a native of Odienné, I've witnessed firsthand the potential of our land and people. 
              Our mission goes beyond cashews; we're creating sustainable opportunities that will 
              benefit generations to come."
            </p>
            <p className="ceo-signature">- Hamza S. Ralsan Sangare</p>
          </div>
        </div>
      </section>

      {/* Brand Statement Section */}
      <section className="brand-statement" style={{ backgroundColor: '#F0F2BD' }}>
        <div className="statement-container">
          <h2 style={{ color: '#4B352A' }}>Our Brand Promise</h2>
          <p style={{ color: '#4B352A' }}>
            AfriNuts Export represents the finest quality Ivory Coast cashews, grown with integrity 
            and processed with care. We bridge the gap between West Africa's rich agricultural 
            heritage and global markets hungry for premium, ethically-sourced products.
          </p>
        </div>
      </section>

      {/* Mission/Vision/Values Section */}
      <section className="core-values-section">
        <div className="values-container">
          <div className="vision-mission-values">
            <div className="vmv-card">
              <h3 style={{ color: '#4B352A' }}>Our Vision</h3>
              <p>
                To revolutionize West Africa's cashew industry by becoming a global leader in 
                quality, sustainability, and community impact by 2031.
              </p>
            </div>
            <div className="vmv-card">
              <h3 style={{ color: '#4B352A' }}>Our Mission</h3>
              <p>
                To deliver premium cashew products through sustainable farming, rigorous quality 
                control, and fair partnerships with local farmers.
              </p>
            </div>
            <div className="vmv-card">
              <h3 style={{ color: '#4B352A' }}>Our Values</h3>
              <p>
                Quality, Sustainability, Community Empowerment, and Innovation guide every decision 
                we make at AfriNuts Export.
              </p>
            </div>
          </div>

        {/* Community Value Cards */}
          <div className="community-values">
            <h2 style={{ color: '#4B352A', textAlign: 'center' }}>Community Commitment</h2>
            <div className="community-cards">
              <div className="community-card" style={{ backgroundColor: '#B2CD9C' }}>
                <FaHandsHelping className="community-icon" style={{ color: '#4B352A' }} />
                <h3 style={{ color: '#4B352A' }}>10% Profit Pledge</h3>
                <p>
                  We dedicate 10% of annual profits to community development projects including 
                  wells, mosques, and madrassas in our farming regions.
                </p>
              </div>
              <div className="community-card" style={{ backgroundColor: '#F0F2BD' }}>
                <FaWater className="community-icon" style={{ color: '#4B352A' }} />
                <h3 style={{ color: '#4B352A' }}>Clean Water Initiative</h3>
                <p>
                  Building wells to provide clean drinking water to communities near our farms.
                </p>
              </div>
              <div className="community-card" style={{ backgroundColor: '#CA7842', color: '#F0F2BD' }}>
                <FaMosque className="community-icon" />
                <h3>Religious Infrastructure</h3>
                <p>
                  Supporting the construction and maintenance of mosques and Islamic schools.
                </p>
              </div>
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
            <img 
              src={farmImage} 
              alt="AfriNuts Export cashew farm in Odienné, Ivory Coast" 
              className="farm-photo"
            />
          </div>
          </div>
      </section>

      {/* Legacy Timeline Section */}
      <section className="legacy-section" style={{ backgroundColor: '#F0F2BD' }}>
        <div className="legacy-container">
          <h2 style={{ color: '#4B352A', textAlign: 'center', marginBottom: '40px' }}>
            From Family Roots to Global Vision
          </h2>
          
          <div className="legacy-timeline">
            {/* Family Legacy Era */}
            <div className="era">
              <div className="era-header" style={{ backgroundColor: '#4B352A', color: '#F0F2BD' }}>
                <FaTree className="era-icon" />
                <h3>Family Legacy (1990-2020)</h3>
              </div>
              <div className="era-content">
                <p>
                  For over 30 years, our family has cultivated this land in Côte d'Ivoire, 
                  mastering traditional cashew farming techniques passed down through generations.
                </p>
                <ul className="legacy-feats">
                  <li><FaSeedling /> Established sustainable farming practices</li>
                  <li><FaHandshake /> Built trust with local farming communities</li>
                  <li><FaLeaf /> Preserved the ecological balance of our land</li>
                </ul>
              </div>
            </div>

            {/* Transition Arrow */}
            <div className="transition-arrow">
              <FaArrowDown style={{ color: '#CA7842', fontSize: '2rem' }} />
            </div>

            {/* AfriNuts Era */}
            <div className="era">
              <div className="era-header" style={{ backgroundColor: '#CA7842', color: '#F0F2BD' }}>
                <FaChartLine className="era-icon" />
                <h3>AfriNuts Evolution (2023-Present)</h3>
              </div>
              <div className="era-content">
                <p>
                  Today, AfriNuts Export represents our commitment to take this legacy to the next level - 
                  combining traditional knowledge with modern innovation.
                </p>
                <ul className="legacy-feats">
                  <li><FaIndustry /> Establishing processing facilities</li>
                  <li><FaGlobe /> Expanding to international markets</li>
                  <li><FaUsers /> Empowering local communities</li>
                  <li><FaSeedling /> Implementing precision agriculture</li>
                </ul>
              </div>
            </div>

            {/* Future Vision */}
            <div className="future-vision" style={{ borderColor: '#B2CD9C' }}>
              <div className="vision-header">
                <FaRocket style={{ color: '#4B352A', fontSize: '1.5rem' }} />
                <h3 style={{ color: '#4B352A' }}>Our 2031 Vision</h3>
              </div>
              <p>
                By 2031, we aim to become West Africa's premier cashew exporter while maintaining 
                our core values of sustainability and community development.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;