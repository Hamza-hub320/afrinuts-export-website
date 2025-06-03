import React from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import './Home.css';
import heroImage from '../assets/images/hero.jpg';
import { FaChevronDown } from 'react-icons/fa';

const Home = () => {
  const { t } = useTranslation('home');
  const navigate = useNavigate();

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about-preview');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section" style={{ backgroundImage: `url(${heroImage})` }}>
        <div className="hero-overlay">
          <h1>{t('hero.welcome')}</h1>
          <p>{t('hero.tagline')}</p>
          <div className="hero-buttons">
            <button 
              className="primary-button"
              onClick={() => navigate('/about')}
            >
              {t('hero.learnMore')}
            </button>
            <button 
              className="secondary-button"
              onClick={() => navigate('/products')}
            >
              {t('hero.products')}
            </button>
          </div>
          <div className="scroll-indicator" onClick={scrollToAbout}>
            <span>{t('hero.viewStory')}</span>
            <FaChevronDown className="bounce" />
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section id="about-preview" className="about-preview">
        <h2>{t('aboutPreview.title')}</h2>
        <p>{t('aboutPreview.description')}</p>
      </section>
    </div>
  );
};

export default Home;