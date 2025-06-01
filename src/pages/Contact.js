import './Contact.css';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock, FaPaperclip, FaCheckCircle } from 'react-icons/fa';
import emailjs from '@emailjs/browser';
import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    file: null
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!formData.subject.trim()) newErrors.subject = 'Subject is required';
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    
    // File validation (optional)
    if (formData.file && formData.file.size > 5 * 1024 * 1024) {
      newErrors.file = 'File size must be less than 5MB';
    }

    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user types
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: null
      }));
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file && file.size > 5 * 1024 * 1024) {
      setErrors(prev => ({ ...prev, file: 'File size must be less than 5MB' }));
      return;
    }
    setFormData(prev => ({
      ...prev,
      file
    }));
    setErrors(prev => ({ ...prev, file: null }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);

    try {
      // Initialize EmailJS
      emailjs.init(process.env.REACT_APP_EMAILJS_USER_ID);

      // Create form element reference
      const formElement = e.target;

      // Send form using EmailJS
      const response = await emailjs.sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        formElement
      );

      if (response.status === 200) {
        setShowSuccess(true);
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: '',
          file: null
        });
        // Reset file input
        document.getElementById('file').value = '';
      }
    } catch (error) {
      console.error('Failed to send message:', error);
      setErrors({ submit: 'Failed to send message. Please try again later.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="contact-page">
      {/* Success Modal */}
      {showSuccess && (
        <div className="success-modal">
          <div className="modal-content">
            <FaCheckCircle className="success-icon" />
            <h3>Message Sent Successfully!</h3>
            <p>We'll get back to you soon.</p>
            <button 
              onClick={() => setShowSuccess(false)}
              className="modal-close-btn"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section 
        className="contact-hero" 
        style={{ backgroundImage: `linear-gradient(rgba(75, 53, 42, 0.7), rgba(75, 53, 42, 0.7)), url(${require('../assets/images/contact-hero.jpg')})` }}
      >
        <div className="hero-content">
          <h1 style={{ color: '#B2CD9C' }}>Contact Us</h1>
          <p style={{ color: '#B2CD9C' }}>Get in touch with our team for inquiries and partnerships</p>
        </div>
      </section>

      {/* Contact Content */}
      <div className="contact-container">
        {/* Contact Form */}
        <section className="contact-form-section">
          <h2>Send Us a Message</h2>
          {errors.submit && <div className="error-message">{errors.submit}</div>}
          
          <form onSubmit={handleSubmit} className="contact-form" encType="multipart/form-data">
            <div className="form-group">
              <label htmlFor="name">Your Name*</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={errors.name ? 'error' : ''}
              />
              {errors.name && <span className="error-message">{errors.name}</span>}
            </div>
            
            <div className="form-group">
              <label htmlFor="email">Email Address*</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={errors.email ? 'error' : ''}
              />
              {errors.email && <span className="error-message">{errors.email}</span>}
            </div>
            
            <div className="form-group">
              <label htmlFor="subject">Subject*</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className={errors.subject ? 'error' : ''}
              />
              {errors.subject && <span className="error-message">{errors.subject}</span>}
            </div>
            
            <div className="form-group">
              <label htmlFor="message">Message*</label>
              <textarea
                id="message"
                name="message"
                rows="6"
                value={formData.message}
                onChange={handleChange}
                className={errors.message ? 'error' : ''}
              ></textarea>
              {errors.message && <span className="error-message">{errors.message}</span>}
            </div>
            
            <div className="form-group">
              <label htmlFor="file" className="file-upload-label">
                <FaPaperclip /> Attach File (Optional, max 5MB)
                <input
                  type="file"
                  id="file"
                  name="attachment"
                  onChange={handleFileChange}
                  className="file-input"
                  accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
                />
              </label>
              {errors.file && <span className="error-message">{errors.file}</span>}
              {formData.file && (
                <div className="file-preview">
                  <span>{formData.file.name}</span>
                  <button 
                    type="button" 
                    onClick={() => {
                      setFormData(prev => ({ ...prev, file: null }));
                      document.getElementById('file').value = '';
                    }}
                    className="remove-file-btn"
                  >
                    ×
                  </button>
                </div>
              )}
            </div>
            {/* Hidden fields for EmailJS compatibility */}
            <input type="hidden" name="from_name" value={formData.name} />
            <input type="hidden" name="from_email" value={formData.email} />
            <button 
              type="submit" 
              className="submit-button"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <span className="spinner"></span>
                  Sending...
                </>
              ) : (
                'Send Message'
              )}
            </button>
          </form>
        </section>

        {/* Contact Info */}
        <section className="contact-info-section">
          <h2>Our Contact Information</h2>
          
          <div className="contact-info-card">
            <FaMapMarkerAlt className="contact-icon" />
            <div>
              <h3>Address</h3>
              <p>Odienné, Ivory Coast</p>
              <p>Zip Code: 00225</p>
            </div>
          </div>
          
          <div className="contact-info-card">
            <FaPhone className="contact-icon" />
            <div>
              <h3>Phone</h3>
              <p>+225 XX XX XX XX</p>
              <p>Mon-Fri: 8am-5pm</p>
            </div>
          </div>
          
          <div className="contact-info-card">
            <FaEnvelope className="contact-icon" />
            <div>
              <h3>Email</h3>
              <p>contact@afrinutsexport.com</p>
              <p>inquiries@afrinutsexport.com</p>
            </div>
          </div>
          
          <div className="contact-info-card">
            <FaClock className="contact-icon" />
            <div>
              <h3>Business Hours</h3>
              <p>Monday - Friday: 8:00 - 17:00</p>
              <p>Saturday: 9:00 - 13:00</p>
            </div>
          </div>
        </section>
      </div>

      {/* Map Section */}
      <section className="map-section">
        <h2>Our Location</h2>
        <div className="map-container">
          <iframe
            title="AfriNuts Export Location"
            src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126906.4744261831!2d-7.5903136!3d9.5091664!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zOcKwMzAnMzMuMCJOIDfCsDM1JzI1LjEiVw!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus`}
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </section>
    </div>
  );
};

export default Contact;
