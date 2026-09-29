import React from 'react';

/**
 * About Me Page Component
 * Displays candidate's legal name, professional headshot, bio, and resume link.
 */
function About() {
  return (
    <div style={{ maxWidth: '900px', margin: '40px auto', padding: '0 20px' }}>
      <h1 style={{ fontSize: '32px', color: '#0f172a', marginBottom: '8px' }}>About Me</h1>
      <p style={{ color: '#64748b', marginBottom: '32px' }}>A brief introduction to my background and passions.</p>

      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: '40px',
        alignItems: 'center',
        backgroundColor: '#ffffff',
        padding: '36px',
        borderRadius: '16px',
        border: '1px solid #e2e8f0',
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.04)'
      }}>
        {/* Profile Image (Using a clean placeholder avatar that you can replace with your photo) */}
        <div style={{ flex: '1 1 240px', textAlign: 'center' }}>
          <img 
            src="image0.jpg" 
            alt="Profile Headshot"
            style={{
              width: '200px',
              height: '200px',
              borderRadius: '50%',
              objectFit: 'cover',
              border: '4px solid #3b82f6',
              boxShadow: '0 6px 16px rgba(59, 130, 246, 0.25)'
            }}
          />
        </div>

        {/* Bio & Details */}
        <div style={{ flex: '2 1 360px' }}>
          <h2 style={{ fontSize: '24px', color: '#1e293b', marginBottom: '8px' }}>
            Loshika (Student Developer)
          </h2>
          <h4 style={{ color: '#2563eb', fontWeight: '500', marginBottom: '16px' }}>
            Software Engineering Technology - Fast track Student @ Centennial College
          </h4>
          
          <p style={{ color: '#475569', lineHeight: '1.7', marginBottom: '16px' }}>
            Hello! I am an aspiring to become a software engineer specializing in full-stack web development. 
            I enjoy transforming complex requirements into responsive, elegant web applications 
            using modern frameworks like React, Node.js, and MongoDB.
          </p>

          <p style={{ color: '#475569', lineHeight: '1.7', marginBottom: '24px' }}>
            When I'm not writing code, I enjoy exploring cloud architecture, system design patterns, 
            and collaborating on open-source initiatives.
          </p>

          {/* Link to PDF Resume */}
          <a 
            href="/resume.pdf"
            download="Loshika_Pragasam_Resume.pdf"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              backgroundColor: '#0f172a',
              color: '#ffffff',
              padding: '10px 20px',
              borderRadius: '8px',
              textDecoration: 'none',
              fontWeight: '500',
              fontSize: '15px'
            }}
          >
            📄 View / Download Resume (resume.pdf)
          </a>
        </div>
      </div>
    </div>
  );
}

export default About;