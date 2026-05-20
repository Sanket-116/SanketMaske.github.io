import React, { useState } from 'react';
import { ExternalLink, FileCode, CheckCircle2, Award, Terminal } from 'lucide-react';
import { Github } from './BrandIcons';
import './Projects.css';

export default function Projects() {
  const projectsData = [
    {
      title: 'Automated Certificate Generation & Distribution System',
      category: 'Python & Automation',
      tags: ['Python', 'Pandas', 'Pytest', 'ReportLab', 'SMTP'],
      github: 'https://github.com/sanket-116',
      accent: 'green',
      overview: 'Built an end-to-end automation tool that ingests bulk participant records from CSV datasets, designs customized PDF certificates dynamically, and distributes them via automated SMTP email systems featuring granular exception handling.',
      results: [
        'Processed over 1,000+ participant records in a single batch.',
        'Wrote 15+ Pytest unit tests to validate CSV parsing integrity and PDF boundary rendering.',
        'Achieved 99%+ email delivery accuracy backed by structured log reporting.'
      ],
      code: `import pandas as pd
from reportlab.pdfgen import canvas
import smtplib

def process_batch(csv_file):
    # Parse records from CSV using Pandas
    df = pd.read_csv(csv_file)
    for idx, row in df.iterrows():
        # Render customized PDF
        pdf_path = render_pdf(row['Name'], row['Course'])
        # SMTP email dispatch
        send_email(row['Email'], pdf_path)

def test_pdf_generation():
    # Pytest code quality check
    assert render_pdf("Test User", "QA") is not None`
    },
    {
      title: 'Web Scraping & Data Validation Pipeline',
      category: 'Data Engineering',
      tags: ['Python', 'BeautifulSoup', 'Selenium', 'PostgreSQL', 'SQLAlchemy'],
      github: 'https://github.com/sanket-116',
      accent: 'blue',
      overview: 'Automated target data harvesting from complex web layouts using BeautifulSoup and Selenium. Cleansed and normalized data using Pandas pipelines, and loaded it into relational tables via SQLAlchemy ORM.',
      results: [
        'Engineered an automated script saving hours of manual data collection.',
        'Enforced automated integrity constraint tests via custom SQL triggers.',
        'Implemented APScheduler for background script updates and fail-safe retry rules.'
      ],
      code: `from bs4 import BeautifulSoup
from sqlalchemy import create_engine
import pandas as pd

def scrape_and_validate(url, db_uri):
    html = fetch_html(url)
    soup = BeautifulSoup(html, 'html.parser')
    raw_data = extract_fields(soup)
    
    # Normalizing dataset with Pandas
    df = pd.DataFrame(raw_data).dropna()
    
    # Save to PostgreSQL
    engine = create_engine(db_uri)
    df.to_sql('raw_scraped_data', engine, if_exists='append')
    validate_constraints(engine)`
    },
    {
      title: 'Sales & Operations Analytics Dashboard',
      category: 'SQL & Analytics',
      tags: ['SQL Server', 'Power BI', 'DAX', 'MS Excel'],
      github: 'https://github.com/sanket-116',
      accent: 'amber',
      overview: 'Designed an end-to-end BI solution containing an optimized multi-table SQL relational database model. Built customized operational dashboards in Power BI with complex DAX formulas mapping company growth metrics.',
      results: [
        'Saved 60% of recurring weekly dashboard maintenance time through automated SQL data refreshes.',
        'Wrote advanced DAX queries to track YoY growth and MoM performance variances.',
        'Configured detailed drill-through visual dashboards and dynamic slicers for self-service analysis.'
      ],
      code: `WITH MonthlySales AS (
    SELECT 
        DATEPART(year, OrderDate) as SalesYear,
        DATEPART(month, OrderDate) as SalesMonth,
        SUM(TotalAmount) as CurrentSales
    FROM FactSales
    GROUP BY DATEPART(year, OrderDate), DATEPART(month, OrderDate)
)
SELECT 
    SalesYear, SalesMonth, CurrentSales,
    LAG(CurrentSales, 12) OVER (ORDER BY SalesYear, SalesMonth) as PrevYearSales,
    (CurrentSales - LAG(CurrentSales, 12) OVER (ORDER BY SalesYear, SalesMonth)) 
        / LAG(CurrentSales, 12) OVER (ORDER BY SalesYear, SalesMonth) * 100 as YoYGrowth
FROM MonthlySales;`
    }
  ];

  // Keep track of active tab for each project: 'overview', 'results', 'code'
  const [activeTabs, setActiveTabs] = useState({
    0: 'overview',
    1: 'overview',
    2: 'overview'
  });

  const setTab = (projectIndex, tabName) => {
    setActiveTabs(prev => ({
      ...prev,
      [projectIndex]: tabName
    }));
  };

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <div className="section-header">
          <span className="section-label">04. Selected Works</span>
          <h2 className="section-title">Technical Projects</h2>
        </div>

        <div className="projects-grid">
          {projectsData.map((project, idx) => {
            const currentTab = activeTabs[idx];

            return (
              <div key={idx} className="glass-card project-card">
                <div className={`card-indicator indicator-${project.accent}`}></div>
                
                <div className="project-card-header">
                  <span className={`project-cat badge ${project.accent}`}>
                    {project.category}
                  </span>
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="project-github-link"
                    aria-label="GitHub Repository"
                  >
                    <Github size={18} />
                  </a>
                </div>

                <h3 className="project-title">{project.title}</h3>

                {/* Project Card Tabs */}
                <div className="project-tabs">
                  <button 
                    className={`tab-btn ${currentTab === 'overview' ? 'active' : ''}`}
                    onClick={() => setTab(idx, 'overview')}
                  >
                    Overview
                  </button>
                  <button 
                    className={`tab-btn ${currentTab === 'results' ? 'active' : ''}`}
                    onClick={() => setTab(idx, 'results')}
                  >
                    Key Metrics
                  </button>
                  <button 
                    className={`tab-btn ${currentTab === 'code' ? 'active' : ''}`}
                    onClick={() => setTab(idx, 'code')}
                  >
                    Source Code
                  </button>
                </div>

                {/* Tab Contents */}
                <div className="project-tab-content">
                  {currentTab === 'overview' && (
                    <div className="tab-pane overview-pane">
                      <p>{project.overview}</p>
                    </div>
                  )}

                  {currentTab === 'results' && (
                    <div className="tab-pane results-pane">
                      <ul className="results-list">
                        {project.results.map((res, rIdx) => (
                          <li key={rIdx}>
                            <CheckCircle2 size={14} className="result-check" />
                            <span>{res}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {currentTab === 'code' && (
                    <div className="tab-pane code-pane">
                      <div className="code-pane-header">
                        <Terminal size={12} style={{ color: 'var(--text-muted)' }} />
                        <span>snippet.{project.accent === 'amber' ? 'sql' : 'py'}</span>
                      </div>
                      <pre>
                        <code>{project.code}</code>
                      </pre>
                    </div>
                  )}
                </div>

                {/* Footer Badges */}
                <div className="project-tags-list">
                  {project.tags.map((tag, tIdx) => (
                    <span key={tIdx} className="project-tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
