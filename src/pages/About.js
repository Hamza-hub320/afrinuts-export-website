import React from 'react';
import './About.css';
import { useTranslation } from 'react-i18next';
import farmImage from '../assets/images/cashew-farm.jpg';
import ceoImage from '../assets/images/ceo.jpg';
import {
  FaTree, FaSeedling, FaHandshake, FaLeaf, FaIndustry, FaGlobe, FaUsers,
  FaArrowDown, FaRocket, FaMapMarkerAlt, FaChartLine, FaHandsHelping, FaMosque, FaWater
} from 'react-icons/fa';

const About = () => {
  const { t } = useTranslation('about');

  return (
    <main className="about-page">
      {/* Hero Section */}
      <section className="about-hero" style={{
        backgroundImage: `linear-gradient(rgba(75, 53, 42, 0.7), rgba(75, 53, 42, 0.7)), url(${require('../assets/images/about-hero.jpg')})`,
        backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat'
      }}>
        <div className="hero-content">
          <h1 style={{ color: '#B2CD9C' }}>{t('hero.title')}</h1>
          <p style={{ color: '#B2CD9C' }}>{t('hero.subtitle')}</p>
        </div>
      </section>

      {/* CEO Message Section */}
      <section className="ceo-section" id="ceo-message">
        <div className="ceo-container">
          <div className="ceo-image">
            <img src={ceoImage} alt={t('ceo.alt')} />
          </div>
          <div className="ceo-message">
            <h2 style={{ color: '#4B352A' }}>A Message From Our CEO</h2>
            <p className="ceo-signature">- Hamza S. Ralsan Sangare</p>
            <h2>{t('ceo.title')}</h2>
            <p>{t('ceo.message')}</p>
            <p className="ceo-signature">{t('ceo.signature')}</p>
          </div>
        </div>
      </section>

      {/* Brand Statement */}
      <section className="brand-statement" id="brand-statement" style={{ backgroundColor: '#F5ECD5' }}>
        <div className="statement-container">
          <h2>{t('brand.title')}</h2>
          <p>{t('brand.text')}</p>
        </div>
      </section>

      {/* Vision, Mission, Values */}
      <section className="core-values-section" id="vmv">
        <div className="values-container">
          <div className="vision-mission-values">
            <div className="vmv-card">
              <h3>{t('vmv.vision.title')}</h3>
              <p>{t('vmv.vision.text')}</p>
            </div>
            <div className="vmv-card">
              <h3>{t('vmv.mission.title')}</h3>
              <p>{t('vmv.mission.text')}</p>
            </div>
            <div className="vmv-card">
              <h3>{t('vmv.values.title')}</h3>
              <p>{t('vmv.values.text')}</p>
            </div>
          </div>

          {/* Community */}
          <div className="community-values" id="community">
            <h2>{t('community.title')}</h2>
            <div className="community-cards">
              <div className="community-card" style={{ backgroundColor: '#B2CD9C' }}>
                <FaHandsHelping className="community-icon" />
                <h3>{t('community.cards.pledge.title')}</h3>
                <p>{t('community.cards.pledge.text')}</p>
              </div>
              <div className="community-card" style={{ backgroundColor: '#94B4C1' }}>
                <FaWater className="community-icon" />
                <h3>{t('community.cards.water.title')}</h3>
                <p>{t('community.cards.water.text')}</p>
              </div>
              <div className="community-card" style={{ backgroundColor: '#CA7842'}}>
                <FaMosque className="community-icon" />
                <h3>{t('community.cards.religion.title')}</h3>
                <p>{t('community.cards.religion.text')}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Farm */}
      <section className="farm-section" style={{ backgroundColor: '#B2CD9C' }}>
        <div className="farm-content">
          <div className="farm-text">
            <h2>{t('farm.title')}</h2>
            <p>{t('farm.text')}</p>
            <div className="farm-stats">
              <div className="stat-item">
                <FaMapMarkerAlt className="stat-icon" style={{ color: '#CA7842' }} />
                <span>{t('farm.location')}</span>
              </div>
              <div className="stat-item">
                <FaChartLine className="stat-icon" style={{ color: '#CA7842' }} />
                <span>{t('farm.size')}</span>
              </div>
            </div>
          </div>
          <div className="farm-image">
            <img src={farmImage} alt={t('farm.alt')} className="farm-photo" />
          </div>
        </div>
      </section>

      {/* Legacy Timeline */}
      <section className="legacy-section" id="roots" style={{ backgroundColor: '#B2CD9C' }}>
        <div className="legacy-container">
          <h2>{t('legacy.title')}</h2>

          <div className="legacy-timeline">
            {/* Family Era */}
            <div className="era">
              <div className="era-header" style={{ backgroundColor: '#CA7842', color: '#B2CD9C' }}>
                <FaTree className="era-icon" />
                <h3>{t('legacy.family.title')}</h3>
              </div>
              <div className="era-content">
                <p>{t('legacy.family.text')}</p>
                <ul className="legacy-feats">
                  <li><FaSeedling /> {t('legacy.family.feats.0')}</li>
                  <li><FaHandshake /> {t('legacy.family.feats.1')}</li>
                  <li><FaLeaf /> {t('legacy.family.feats.2')}</li>
                </ul>
              </div>
            </div>

            <div className="transition-arrow">
              <FaArrowDown />
            </div>

            {/* AfriNuts Era */}
            <div className="era">
              <div className="era-header" style={{ backgroundColor: '#CA7842', color: '#B2CD9C' }}>
                <FaChartLine className="era-icon" />
                <h3>{t('legacy.afrinuts.title')}</h3>
              </div>
              <div className="era-content">
                <p>{t('legacy.afrinuts.text')}</p>
                <ul className="legacy-feats">
                  <li><FaIndustry /> {t('legacy.afrinuts.feats.0')}</li>
                  <li><FaGlobe /> {t('legacy.afrinuts.feats.1')}</li>
                  <li><FaUsers /> {t('legacy.afrinuts.feats.2')}</li>
                  <li><FaSeedling /> {t('legacy.afrinuts.feats.3')}</li>
                </ul>
              </div>
            </div>

            {/* Vision 2031 */}
            <div className="future-vision">
              <div className="vision-header">
                <FaRocket />
                <h3>{t('legacy.future.title')}</h3>
              </div>
              <p>{t('legacy.future.text')}</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
