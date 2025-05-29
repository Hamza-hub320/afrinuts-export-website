import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaChevronDown, FaGlobe } from 'react-icons/fa';
import logo from '../images/AfriNuts-Brand-Mark.png'; // Replace with your actual logo path
import heroImage from '../images/hero-image.jpg'; // Replace with your hero image path

const Home = () => {
  const [language, setLanguage] = useState('en');
  const navigate = useNavigate();

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'fr' : 'en');
  };

  const content = {
    en: {
      title: "Premium Cashews from Ivory Coast",
      subtitle: "Sustainably grown on our 50-hectare family farm in Odienné",
      cta: "Learn More",
      scrollPrompt: "View Our Story"
    },
    fr: {
      title: "Noix de Cajou Premium de Côte d'Ivoire",
      subtitle: "Cultivées durablement sur notre ferme familiale de 50 hectares à Odienné",
      cta: "En savoir plus",
      scrollPrompt: "Voir notre histoire"
    }
  };

  return (
    <div className="relative h-screen overflow-hidden">
      {/* Language Toggle */}
      <button 
        onClick={toggleLanguage}
        className="absolute top-4 right-4 z-50 flex items-center gap-2 px-4 py-2 rounded-full bg-[#4B352A] text-[#F0F2BD] hover:bg-[#CA7842] transition-all"
      >
        <FaGlobe />
        <span>{language === 'en' ? 'FR' : 'EN'}</span>
      </button>

      {/* Logo */}
      <div className="absolute top-4 left-4 z-50">
        <img src={logo} alt="AfriNuts Export Logo" className="h-16 md:h-20" />
      </div>

      {/* Hero Section */}
      <div className="relative h-full w-full">
        {/* Hero Image */}
        <img 
          src={heroImage} 
          alt="Cashew farm in Ivory Coast" 
          className="w-full h-full object-cover"
        />
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-[#4B352A] bg-opacity-60 flex items-center justify-center">
          <div className="text-center px-4 max-w-4xl">
            <h1 className="text-4xl md:text-6xl font-bold text-[#F0F2BD] mb-6">
              {content[language].title}
            </h1>
            <p className="text-xl md:text-2xl text-[#B2CD9C] mb-8">
              {content[language].subtitle}
            </p>
            <button 
              onClick={() => navigate('/about')}
              className="bg-[#CA7842] hover:bg-[#a85d34] text-[#F0F2BD] font-bold py-3 px-8 rounded-full text-lg transition-all"
            >
              {content[language].cta}
            </button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-50 animate-bounce">
        <a 
          href="#our-story" 
          className="flex flex-col items-center text-[#F0F2BD] hover:text-[#CA7842] transition-all"
        >
          <span className="mb-2">{content[language].scrollPrompt}</span>
          <FaChevronDown className="text-2xl" />
        </a>
      </div>

      {/* Our Story Section (Anchor Point) */}
      <section id="our-story" className="py-20 bg-[#F0F2BD]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-[#4B352A] mb-8 text-center">
            {language === 'en' ? 'Our Story' : 'Notre Histoire'}
          </h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-lg text-[#4B352A] mb-4">
                {language === 'en' 
                  ? "AfriNuts Export is transforming the cashew value chain through trading, plantation development, and processing in Ivory Coast."
                  : "AfriNuts Export transforme la chaîne de valeur de la noix de cajou grâce au commerce, au développement de plantations et à la transformation en Côte d'Ivoire."}
              </p>
              <p className="text-lg text-[#4B352A]">
                {language === 'en'
                  ? "With our 50-hectare family farm and upcoming processing facility, we're committed to sustainable agriculture and community empowerment."
                  : "Avec notre ferme familiale de 50 hectares et notre future usine de transformation, nous nous engageons en faveur d'une agriculture durable et de l'autonomisation des communautés."}
              </p>
            </div>
            <div className="bg-[#B2CD9C] rounded-lg p-8 text-[#4B352A]">
              <h3 className="text-xl font-bold mb-4">
                {language === 'en' ? 'Key Milestones' : 'Étapes Clés'}
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="inline-block bg-[#CA7842] text-[#F0F2BD] rounded-full w-6 h-6 flex items-center justify-center mr-3">1</span>
                  {language === 'en' ? 'Founded in 2023' : 'Fondée en 2023'}
                </li>
                <li className="flex items-start">
                  <span className="inline-block bg-[#CA7842] text-[#F0F2BD] rounded-full w-6 h-6 flex items-center justify-center mr-3">2</span>
                  {language === 'en' ? '50-hectare farm development' : 'Développement de la ferme de 50 hectares'}
                </li>
                <li className="flex items-start">
                  <span className="inline-block bg-[#CA7842] text-[#F0F2BD] rounded-full w-6 h-6 flex items-center justify-center mr-3">3</span>
                  {language === 'en' ? 'Processing facility coming 2031' : 'Usine de transformation en 2031'}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;