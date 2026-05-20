import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';

export default function App() {
  return (
    <div className="app-container">
      <Navbar />
      <main className="main-content">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </main>
      
      {/* Footer */}
      <footer style={{
        padding: '2.5rem 0',
        textAlign: 'center',
        borderTop: '1px solid var(--border-color)',
        backgroundColor: 'var(--bg-main)',
        fontSize: '0.8rem',
        color: 'var(--text-muted)'
      }}>
        <div className="container">
          <p>&copy; {new Date().getFullYear()} Sanket Maske. All rights reserved.</p>
          <p style={{ marginTop: '0.5rem', fontSize: '0.75rem' }}>
            Built with React, Vite &amp; Custom CSS.
          </p>
        </div>
      </footer>
    </div>
  );
}
