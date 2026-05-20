import React, { useState } from 'react';
import { Mail, Phone, Send, MapPin, CheckCircle2 } from 'lucide-react';
import { Github, Linkedin } from './BrandIcons';
import './Contact.css';

export default function Contact() {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formState.name && formState.email && formState.message) {
      // Simulate form submission
      setIsSubmitted(true);
      setTimeout(() => {
        setFormState({ name: '', email: '', message: '' });
      }, 3000);
    }
  };

  const socialLinks = [
    { 
      name: 'Email', 
      value: 'sanketmaske16@gmail.com', 
      href: 'mailto:sanketmaske16@gmail.com',
      icon: <Mail size={20} />,
      accent: 'green' 
    },
    { 
      name: 'Phone', 
      value: '+91 9022779338', 
      href: 'tel:+919022779338',
      icon: <Phone size={20} />,
      accent: 'blue' 
    },
    { 
      name: 'LinkedIn', 
      value: 'sanket-maske-079061263', 
      href: 'https://www.linkedin.com/in/sanket-maske-079061263',
      icon: <Linkedin size={20} />,
      accent: 'blue' 
    },
    { 
      name: 'GitHub', 
      value: 'sanket-116', 
      href: 'https://github.com/sanket-116',
      icon: <Github size={20} />,
      accent: 'green' 
    }
  ];

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <div className="section-header">
          <span className="section-label">05. Connect</span>
          <h2 className="section-title">Get In Touch</h2>
        </div>

        <div className="contact-grid">
          {/* Social Links List */}
          <div className="contact-info">
            <h3 className="info-heading">Let's discuss your next project or role.</h3>
            <p className="info-text">
              I am open to job opportunities, QA automation setups, scripting queries, and database analytics tasks. Feel free to contact me directly using any of these channels:
            </p>

            <div className="socials-vertical-list">
              {socialLinks.map((link, idx) => (
                <a key={idx} href={link.href} target="_blank" rel="noopener noreferrer" className="glass-card contact-link-card">
                  <div className={`card-indicator indicator-${link.accent}`}></div>
                  <div className="link-card-content">
                    <span className={`link-card-icon icon-${link.accent}`}>
                      {link.icon}
                    </span>
                    <div>
                      <span className="link-card-label">{link.name}</span>
                      <span className="link-card-val">{link.value}</span>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div className="glass-card contact-form-card">
            <div className="card-indicator indicator-blue"></div>
            
            {isSubmitted ? (
              <div className="form-success-state">
                <CheckCircle2 size={48} className="success-icon" />
                <h4>Message Sent!</h4>
                <p>Thank you for reaching out, Sanket will get back to you shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                  <label htmlFor="name">Your Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    required 
                    value={formState.name}
                    onChange={(e) => setFormState(prev => ({ ...prev, name: e.target.value }))}
                    placeholder="John Doe"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email Address</label>
                  <input 
                    type="email" 
                    id="email" 
                    required 
                    value={formState.email}
                    onChange={(e) => setFormState(prev => ({ ...prev, email: e.target.value }))}
                    placeholder="john@example.com"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea 
                    id="message" 
                    rows="5" 
                    required 
                    value={formState.message}
                    onChange={(e) => setFormState(prev => ({ ...prev, message: e.target.value }))}
                    placeholder="Hi Sanket, I would like to talk about..."
                  ></textarea>
                </div>

                <button type="submit" className="btn btn-accent submit-btn">
                  Send Message <Send size={14} />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
