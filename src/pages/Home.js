import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';
import heroImage from '../assets/images/hero.jpg';
import { FaChevronDown, FaGlobe } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Home = () => {
  const [language, setLanguage] = useState('en');
  const navigate = useNavigate();

  const translations = {
    en: {
      welcome: "Welcome to AfriNuts Export",
      tagline: "Premium cashews from Ivory Coast",
      learnMore: "Learn More",
      viewStory: "View Our Story",
      products: "Our Products"
    },
    fr: {
      welcome: "Bienvenue chez AfriNuts Export",
      tagline: "Noix de cajou premium de Côte d'Ivoire",
      learnMore: "En savoir plus",
      viewStory: "Voir notre histoire",
      products: "Nos produits"
    }
  };

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'fr' : 'en');
  };

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about-preview');
    aboutSection.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="home-page">
      
      {/* Hero Section */}
      <section className="hero-section" style={{ backgroundImage: `url(${heroImage})` }}>
        <div className="hero-overlay">
          <h1>{translations[language].welcome}</h1>
          <p>{translations[language].tagline}</p>
          <div className="hero-buttons">
            <button 
              className="primary-button"
              onClick={() => navigate('/about')}
            >
              {translations[language].learnMore}
            </button>
            <button 
              className="secondary-button"
              onClick={() => navigate('/products')}
            >
              {translations[language].products}
            </button>
          </div>
          <div className="scroll-indicator" onClick={scrollToAbout}>
            <span>{translations[language].viewStory}</span>
            <FaChevronDown className="bounce" />
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section id="about-preview" className="about-preview">
        <h2>{language === 'en' ? "Our Story" : "Notre Histoire"}</h2>
        <p>
          {language === 'en' 
            ? "Transforming the cashew value chain in Ivory Coast through sustainable farming and community empowerment." 
            : "Transformer la chaîne de valeur de la noix de cajou en Côte d'Ivoire grâce à une agriculture durable et à l'autonomisation des communautés."}
        </p>
      </section>
    </div>
  );
};

export default Home;