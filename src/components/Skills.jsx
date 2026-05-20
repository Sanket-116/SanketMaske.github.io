import React from 'react';
import { Database, CheckSquare, Cpu, BarChart2, Terminal, Briefcase } from 'lucide-react';
import './Skills.css';

export default function Skills() {
  const skillCategories = [
    {
      title: 'SQL & Databases',
      icon: <Database size={20} />,
      accentClass: 'blue',
      skills: [
        'SQL Server (SSMS)', 'MySQL', 'PostgreSQL', 'Oracle (Basics)', 
        'Joins & Subqueries', 'CTEs', 'Window Functions', 'Stored Procedures', 
        'Query Optimization', 'Data Profiling', 'ETL Validation'
      ]
    },
    {
      title: 'QA & Testing',
      icon: <CheckSquare size={20} />,
      accentClass: 'green',
      skills: [
        'Manual Testing', 'Test Case Design', 'Test Case Execution', 
        'Regression Testing', 'Smoke Testing', 'User Acceptance Testing (UAT)', 
        'Bug Reporting & Tracking', 'Test Plans', 'Root Cause Analysis', 
        'Pytest Framework', 'Selenium WebDriver'
      ]
    },
    {
      title: 'Python & Automation',
      icon: <Cpu size={20} />,
      accentClass: 'green',
      skills: [
        'Python 3.x', 'Pandas', 'NumPy', 'Selenium WebDriver', 
        'BeautifulSoup', 'REST API Testing (Requests)', 'FastAPI', 
        'Flask', 'APScheduler', 'SMTP Automation', 'Data Scripting'
      ]
    },
    {
      title: 'Data & BI',
      icon: <BarChart2 size={20} />,
      accentClass: 'amber',
      skills: [
        'Power BI', 'DAX Measures', 'KPI Dashboards', 'Drill-through Reports', 
        'Tableau', 'Excel (Pivot Tables, VLOOKUP)', 'Power Query', 
        'Exploratory Data Analysis (EDA)', 'Data Cleaning', 'Data Reconciliation'
      ]
    },
    {
      title: 'Tools & DevOps',
      icon: <Terminal size={20} />,
      accentClass: 'blue',
      skills: [
        'Jira', 'Git', 'GitHub', 'Postman', 'Swagger UI', 
        'VS Code', 'Jupyter Notebook', 'Confluence', 'Docker (Basics)', 'Linux CLI'
      ]
    },
    {
      title: 'Methodologies',
      icon: <Briefcase size={20} />,
      accentClass: 'amber',
      skills: [
        'Agile Framework', 'Scrum Sprint Planning', 'SDLC Models', 
        'SLA Adherence', 'Technical Documentation', 'Stakeholder Communication', 
        'Cross-functional Collaboration'
      ]
    }
  ];

  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <div className="section-header">
          <span className="section-label">02. Capabilities</span>
          <h2 className="section-title">Technical Expertise</h2>
        </div>

        <div className="skills-grid">
          {skillCategories.map((category, idx) => (
            <div key={idx} className="glass-card skill-category-card">
              <div className={`card-indicator indicator-${category.accentClass}`}></div>
              
              <div className="category-header">
                <span className={`category-icon icon-${category.accentClass}`}>
                  {category.icon}
                </span>
                <h3>{category.title}</h3>
              </div>

              <div className="category-skills-list">
                {category.skills.map((skill, sIdx) => (
                  <span key={sIdx} className={`badge ${category.accentClass}`}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
