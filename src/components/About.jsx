import React from 'react';
import { GraduationCap, Calendar, Award, BookOpen } from 'lucide-react';
import './About.css';

export default function About() {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <div className="section-header">
          <span className="section-label">01. Biography</span>
          <h2 className="section-title">About Me</h2>
        </div>

        <div className="about-grid">
          <div className="about-narrative">
            <h3 className="narrative-heading">
              Motivated software engineer dedicated to building high-accuracy data systems and test automation frameworks.
            </h3>
            <p>
              I am a B.Tech graduate in Information Technology from MGM University. My passion lies at the intersection of backend engineering, robust data pipeline development, and automated quality assurance. I enjoy breaking down complex problems and writing clean scripts that simplify repeating tasks and guarantee data reliability.
            </p>
            <p>
              During my recent role at <strong>Yardi Systems</strong>, I honed my analytical skill set by diagnosing backend discrepancies, validating production workloads, and developing Python scripts that saved hours of manual labor. I aim to apply my strong foundation in SQL, Python scripting, and structured testing methodologies to build high-performance software systems.
            </p>
          </div>

          <div className="about-meta">
            <div className="glass-card education-card">
              <div className="card-indicatorindicator-blue"></div>
              <div className="education-header">
                <GraduationCap className="education-icon" size={24} />
                <div>
                  <span className="edu-duration">2021 &mdash; 2025</span>
                  <h4>Bachelor of Technology</h4>
                  <p className="edu-field">Information Technology</p>
                </div>
              </div>
              
              <div className="education-body">
                <div className="edu-row">
                  <BookOpen size={16} className="edu-row-icon" />
                  <div>
                    <span className="edu-label">Institution</span>
                    <span className="edu-value">Jawaharlal Nehru Engineering College (JNEC), MGM University</span>
                  </div>
                </div>

                <div className="edu-row">
                  <Award size={16} className="edu-row-icon" />
                  <div>
                    <span className="edu-label">Performance Metric</span>
                    <span className="edu-value highlight-text">CGPA: 8.25 / 10</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="quick-facts-grid">
              <div className="glass-card fact-card">
                <div className="fact-number">1+</div>
                <div className="fact-label">Years Professional Exp.</div>
              </div>
              <div className="glass-card fact-card">
                <div className="fact-number">1K+</div>
                <div className="fact-label">Client Data Solutions</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
