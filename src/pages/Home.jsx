import React from 'react';
import { Link } from 'react-router-dom';

/**
 * Home Page Component
 * Features a welcoming hero section, professional mission statement,
 * and quick-action navigation buttons.
 */
function Home() {
  return (
    <div style={{ maxWidth: '1000px', margin: '40px auto', padding: '0 20px' }}>
      {/* Hero Welcome Section */}
      <section style={{
        textAlign: 'center',
        padding: '60px 20px',
        backgroundColor: '#f8fafc',
        borderRadius: '16px',
        border: '1px solid #e2e8f0',
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.03)'
      }}>
        <span style={{
          display: 'inline-block',
          padding: '6px 16px',
          backgroundColor: '#eff6ff',
          color: '#2563eb',
          borderRadius: '20px',
          fontSize: '14px',
          fontWeight: '600',
          marginBottom: '16px'
        }}>
          👋 Hello, I am Loshika Pragasam
        </span>

        <h1 style={{ fontSize: '42px', color: '#0f172a', marginBottom: '16px', lineHeight: '1.2' }}>
          Building Modern, Accessible & <br />
          <span style={{ color: '#2563eb' }}>High-Performance</span> Web Applications
        </h1>

        {/* Mission Statement */}
        <p style={{
          fontSize: '18px',
          color: '#475569',
          maxWidth: '700px',
          margin: '0 auto 32px auto',
          lineHeight: '1.6'
        }}>
          <strong>Mission Statement:</strong> My mission is to craft intuitive, resilient, and user-centric 
          digital solutions by bridging sound software engineering principles with cutting-edge 
          web technologies.
        </p>

        {/* Call to Action Buttons */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', flexWrap: 'wrap' }}>
          <Link to="/about" style={{
            textDecoration: 'none',
            backgroundColor: '#2563eb',
            color: '#ffffff',
            padding: '12px 28px',
            borderRadius: '8px',
            fontWeight: '600',
            fontSize: '16px',
            boxShadow: '0 4px 14px rgba(37, 99, 235, 0.3)'
          }}>
            Learn More About Me →
          </Link>

          <Link to="/projects" style={{
            textDecoration: 'none',
            backgroundColor: '#ffffff',
            color: '#1e293b',
            border: '1px solid #cbd5e1',
            padding: '12px 28px',
            borderRadius: '8px',
            fontWeight: '600',
            fontSize: '16px'
          }}>
            View My Projects
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Home;