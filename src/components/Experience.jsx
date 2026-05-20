import React from 'react';
import { Calendar, Building2, CheckCircle2, Terminal, ArrowRight, Play } from 'lucide-react';
import './Experience.css';

export default function Experience() {
  const achievements = [
    'Delivered 1000+ client-specific data solutions with 90% first-pass accuracy, reducing rework cycles and improving delivery quality.',
    'Wrote and optimized complex SQL queries — multi-table joins, CTEs, window functions, and stored procedures — across datasets of 10K–100K+ records to extract and validate business-critical data.',
    'Investigated and resolved 200+ production data discrepancies through structured root cause analysis, debugging SQL logic, and identifying upstream data issues.',
    'Designed and executed data validation and QA test cases for client deliverables, ensuring accuracy and consistency of outputs.',
    'Built Python automation scripts for bulk data processing, reducing manual effort by 80%+ and enabling near-zero turnaround on repetitive workflows.',
    'Managed SLA-based ticket handling in Jira and actively participated in Agile/Scrum sprint planning, daily standups, and retrospectives.',
    'Built and maintained Power BI dashboards integrating KPIs and operational metrics, improving stakeholder decision-making.'
  ];

  const highlights = [
    { label: 'Solutions Delivered', value: '1,000+' },
    { label: 'First-Pass Accuracy', value: '90%' },
    { label: 'Production Fixes', value: '200+' },
    { label: 'Effort Reduced', value: '80%+' },
  ];

  return (
    <section id="experience" className="experience-section">
      <div className="container">
        <div className="section-header">
          <span className="section-label">03. Career history</span>
          <h2 className="section-title">Professional Experience</h2>
        </div>

        <div className="experience-layout">
          {/* Metrics Panel */}
          <div className="experience-metrics">
            {highlights.map((highlight, idx) => (
              <div key={idx} className="glass-card metric-card-small">
                <span className="metric-val">{highlight.value}</span>
                <span className="metric-lbl">{highlight.label}</span>
              </div>
            ))}
          </div>

          {/* Timeline Node */}
          <div className="timeline-container">
            <div className="timeline-node">
              <div className="timeline-header">
                <div className="company-logo-stub">
                  <Building2 size={22} />
                </div>
                <div className="timeline-title-block">
                  <div className="role-and-time">
                    <h3>Software Engineer</h3>
                    <span className="timeline-time">
                      <Calendar size={13} style={{ marginRight: '0.25rem' }} />
                      Jan 2025 &mdash; Jan 2026
                    </span>
                  </div>
                  <div className="company-name">
                    <span>Yardi Systems</span> &bull; Full-time
                  </div>
                </div>
              </div>

              <div className="timeline-body">
                <p className="experience-intro-summary">
                  Responsible for developing and validating client data workflows, performing deep-dive database analysis, and scripting automated ETL validation checks in an Agile framework.
                </p>
                
                <ul className="achievements-list">
                  {achievements.map((item, idx) => (
                    <li key={idx}>
                      <span className="achievement-icon-wrapper">
                        <Play size={10} className="achievement-icon" />
                      </span>
                      <span className="achievement-text">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
