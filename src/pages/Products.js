import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaLeaf, FaSeedling, FaIndustry, FaWeightHanging } from 'react-icons/fa';
import './Products.css';

const Products = () => {
  const navigate = useNavigate();
  const products = [
    {
      name: "Raw Cashew Nuts",
      description: "Premium quality raw cashews sourced directly from our farm and trusted local growers in Odienné",
      features: [
        "Grade A quality",
        "Sun-dried and carefully sorted",
        "Available in 50kg bags"
      ],
      icon: <FaSeedling className="product-icon" />,
      available: true,
      backgroundImage: 'raw-cashew.jpg'
    },
    {
      name: "Cashew Kernels",
      description: "Processed cashew kernels ready for export, available in multiple grades",
      features: [
        "W320, W240, W180 grades available",
        "Manually inspected for quality",
        "Vacuum-packed for freshness"
      ],
      icon: <FaWeightHanging className="product-icon" />,
      available: false,
      comingSoon: "Available from 2031",
      backgroundImage: 'cashew-kernels.jpg'
    },
    {
      name: "Cashew Butter",
      description: "Creamy, organic cashew butter made from 100% Ivory Coast cashews",
      features: [
        "No additives or preservatives",
        "Rich in healthy fats and proteins",
        "Perfect for vegan diets"
      ],
      icon: <FaIndustry className="product-icon" />,
      available: false,
      comingSoon: "Coming in 2031",
      backgroundImage: 'cashew-butter.jpg'
    },
    {
      name: "Cashew Nut Shell Liquid",
      description: "Valuable by-product with industrial applications",
      features: [
        "Used in coatings and resins",
        "Industrial grade quality",
        "Available in bulk quantities"
      ],
      icon: <FaLeaf className="product-icon" />,
      available: false,
      comingSoon: "Production starts 2031",
      backgroundImage: 'cashew-nut-shell-liquid.jpg'
    },
    {
      name: "Roasted Cashew Nuts",
      description: "Premium roasted cashews with perfect crunch and flavor",
      features: [
        "Lightly salted or natural options",
        "Perfect for snacking and recipes",
        "Rich in nutrients and antioxidants"
      ],
      icon: <FaLeaf className="product-icon" />,
      available: false,
      comingSoon: "Coming in 2031",
      backgroundImage: 'roasted-cashew.jpg'
    }
  ];

  const handleContactClick = () => {
    navigate('/contact');
  };

  return (
    <main className="products-page">
      {/* Hero Section */}
      <section 
        className="products-hero" 
        style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${require('../assets/images/our-product-hero.jpg')})` }}
      >
        <div className="hero-content">
          <h1>Our Products</h1>
          <p>From our farm to your table - premium quality cashew products</p>
        </div>
      </section>

      {/* Intro Section */}
      <section className="products-intro">
        <div className="intro-container">
          <h2>Quality You Can Trust</h2>
          <p>
            AfriNuts Export specializes in premium cashew products, with our processing facility 
            launching in 2031 to provide value-added products. Currently we offer raw cashew nuts 
            sourced from our 50-hectare farm and trusted local growers in Ivory Coast.
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="products-grid-section">
        <div className="products-grid-container">
          <div className="products-grid">
            {products.map((product, index) => (
              <div 
                key={index}
                className="modern-product-card"
                style={{ 
                  backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.4) 70%), url(${require(`../assets/images/${product.backgroundImage}`)})`
                }}
              >
                <div className="modern-product-content">
                  <div className="product-header">
                    <div className="product-icon-container">
                      {product.icon}
                    </div>
                    <h3>{product.name}</h3>
                  </div>
                  
                  <div className="product-body">
                    <p className="product-description">{product.description}</p>
                    
                    <ul className="modern-features-list">
                      {product.features.map((feature, i) => (
                        <li key={i}>{feature}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="product-footer">
                    {product.available ? (
                      <button 
                        className="modern-product-button"
                        onClick={handleContactClick}
                      >
                        Request Quote
                      </button>
                    ) : (
                      <div className="coming-soon-container">
                        <span className="coming-soon-badge">{product.comingSoon}</span>
                       </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="products-cta">
        <div className="cta-container">
          <h2>Interested in our products?</h2>
          <p>Contact us for wholesale inquiries and pricing</p>
          <button 
            className="cta-button"
            onClick={handleContactClick}
          >
            Get in Touch
          </button>
        </div>
      </section>
    </main>
  );
};

export default Products;