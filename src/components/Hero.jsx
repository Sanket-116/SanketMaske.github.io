import React from 'react';
import { Mail, Phone, MapPin, ArrowRight, Download } from 'lucide-react';
import { Github, Linkedin } from './BrandIcons';
import './Hero.css';

export default function Hero() {
  const contactDetails = [
    { icon: <Mail size={16} />, text: 'sanketmaske16@gmail.com', href: 'mailto:sanketmaske16@gmail.com' },
    { icon: <Phone size={16} />, text: '+91 9022779338', href: 'tel:+919022779338' },
    { icon: <MapPin size={16} />, text: 'Pune, Maharashtra', href: null },
  ];

  const socialLinks = [
    { icon: <Github size={20} />, href: 'https://github.com/sanket-116', label: 'GitHub' },
    { icon: <Linkedin size={20} />, href: 'https://www.linkedin.com/in/sanket-maske-079061263', label: 'LinkedIn' },
  ];

  return (
    <section id="home" className="hero-section">
      <div className="container hero-container">
        <div className="hero-content">
          <div className="hero-tag">Available for Opportunities</div>
          
          <h1 className="hero-title">
            Sanket Maske
          </h1>
          
          <h2 className="hero-subtitle">
            Python Developer <span>&bull;</span> SQL Developer <span>&bull;</span> QA Automation
          </h2>
          
          <p className="hero-description">
            Software Engineer with 1+ year of experience delivering high-accuracy data solutions, 
            complex SQL queries, and robust Python automation scripts. Focused on writing clean, 
            maintainable pipelines and automating testing frameworks.
          </p>

          <div className="hero-contact-chips">
            {contactDetails.map((detail, idx) => (
              detail.href ? (
                <a key={idx} href={detail.href} className="contact-chip">
                  {detail.icon}
                  <span>{detail.text}</span>
                </a>
              ) : (
                <div key={idx} className="contact-chip">
                  {detail.icon}
                  <span>{detail.text}</span>
                </div>
              )
            ))}
          </div>

          <div className="hero-actions">
            <a href="#projects" className="btn btn-primary" onClick={(e) => {
              e.preventDefault();
              document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }}>
              View My Work <ArrowRight size={16} />
            </a>
            
            <a href="#contact" className="btn btn-secondary" onClick={(e) => {
              e.preventDefault();
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }}>
              Get in Touch
            </a>
          </div>
        </div>

        <div className="hero-visual">
          <div className="visual-depth-card">
            <div className="window-header">
              <div className="window-dots">
                <span className="dot dot-red"></span>
                <span className="dot dot-yellow"></span>
                <span className="dot dot-green"></span>
              </div>
              <div className="window-title">sanket_maske.py</div>
            </div>
            <pre className="code-content">
              <code>
{`class SoftwareEngineer:
    def __init__(self):
        self.name = "Sanket Maske"
        self.location = "Pune, India"
        self.experience_years = 1.0
        self.skills = {
            "backend": ["Python", "SQL Server", "PostgreSQL"],
            "qa_automation": ["Pytest", "Selenium"],
            "data_analytics": ["Pandas", "Power BI", "DAX"]
        }

    def execute_workflow(self):
        # Automating repetitive workflows by 80%+
        self.process_data()
        self.validate_data()
        self.run_qa_tests()

# Ready to build reliable backend & automation solutions!`}
              </code>
            </pre>
          </div>
        </div>
      </div>

      <div className="hero-socials-vertical">
        {socialLinks.map((social, idx) => (
          <a key={idx} href={social.href} target="_blank" rel="noopener noreferrer" aria-label={social.label}>
            {social.icon}
          </a>
        ))}
        <div className="socials-line"></div>
      </div>
    </section>
  );
}
