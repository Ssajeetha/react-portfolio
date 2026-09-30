import React, { useState, useEffect } from 'react';

/**
 * About Me Page Component
 * Displays candidate's legal name, professional headshot, bio, and resume link.
 */
function About() {
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);

  // Close modal on Escape key press
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setIsResumeModalOpen(false);
      }
    };

    if (isResumeModalOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isResumeModalOpen]);

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
            alt="portfolio/public/image0.jpg"
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

          {/* Trigger button to choose View or Download */}
          <button 
            type="button"
            onClick={() => setIsResumeModalOpen(true)}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              backgroundColor: '#0f172a',
              color: '#ffffff',
              padding: '12px 22px',
              borderRadius: '8px',
              border: 'none',
              cursor: 'pointer',
              fontWeight: '600',
              fontSize: '15px',
              boxShadow: '0 4px 12px rgba(15, 23, 42, 0.15)',
              transition: 'background-color 0.2s ease, transform 0.1s ease'
            }}
            onMouseOver={(e) => { e.currentTarget.style.backgroundColor = '#1e293b'; }}
            onMouseOut={(e) => { e.currentTarget.style.backgroundColor = '#0f172a'; }}
          >
            📄 View / Download Resume
          </button>
        </div>
      </div>

      {/* Interactive Resume Choice Modal */}
      {isResumeModalOpen && (
        <div 
          onClick={() => setIsResumeModalOpen(false)}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(15, 23, 42, 0.6)',
            backdropFilter: 'blur(4px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 1000,
            padding: '20px'
          }}
        >
          <div 
            onClick={(e) => e.stopPropagation()}
            style={{
              backgroundColor: '#ffffff',
              borderRadius: '16px',
              padding: '28px',
              maxWidth: '460px',
              width: '100%',
              boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.2), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
              border: '1px solid #e2e8f0',
              animation: 'fadeIn 0.2s ease-out'
            }}
          >
            {/* Header */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
              <h3 style={{ fontSize: '20px', fontWeight: '700', color: '#0f172a', margin: 0 }}>
                Resume Options
              </h3>
              <button 
                type="button"
                onClick={() => setIsResumeModalOpen(false)}
                style={{
                  background: 'none',
                  border: 'none',
                  fontSize: '22px',
                  color: '#94a3b8',
                  cursor: 'pointer',
                  padding: '4px',
                  lineHeight: '1'
                }}
                aria-label="Close modal"
              >
                ✕
              </button>
            </div>

            <p style={{ color: '#64748b', fontSize: '14px', margin: '0 0 24px 0', lineHeight: '1.5' }}>
              How would you like to access <strong>Loshika Pragasam's Resume</strong>?
            </p>

            {/* Options List */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {/* Option 1: View in Browser */}
              <a 
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsResumeModalOpen(false)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '14px',
                  padding: '14px 18px',
                  borderRadius: '10px',
                  border: '1px solid #cbd5e1',
                  backgroundColor: '#f8fafc',
                  textDecoration: 'none',
                  color: '#0f172a',
                  transition: 'all 0.2s ease'
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.backgroundColor = '#eff6ff';
                  e.currentTarget.style.borderColor = '#3b82f6';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.backgroundColor = '#f8fafc';
                  e.currentTarget.style.borderColor = '#cbd5e1';
                }}
              >
                <span style={{ fontSize: '24px' }}>👁️</span>
                <div style={{ textAlign: 'left' }}>
                  <div style={{ fontWeight: '600', fontSize: '15px', color: '#1e293b' }}>
                    View in Browser
                  </div>
                  <div style={{ fontSize: '13px', color: '#64748b' }}>
                    Opens the PDF in a new tab without downloading
                  </div>
                </div>
              </a>

              {/* Option 2: Download PDF */}
              <a 
                href="/resume.pdf"
                download="Loshika_Pragasam_Resume.pdf"
                onClick={() => setIsResumeModalOpen(false)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '14px',
                  padding: '14px 18px',
                  borderRadius: '10px',
                  border: '1px solid #2563eb',
                  backgroundColor: '#2563eb',
                  textDecoration: 'none',
                  color: '#ffffff',
                  transition: 'all 0.2s ease',
                  boxShadow: '0 4px 12px rgba(37, 99, 235, 0.25)'
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.backgroundColor = '#1d4ed8';
                  e.currentTarget.style.borderColor = '#1d4ed8';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.backgroundColor = '#2563eb';
                  e.currentTarget.style.borderColor = '#2563eb';
                }}
              >
                <span style={{ fontSize: '24px' }}>📥</span>
                <div style={{ textAlign: 'left' }}>
                  <div style={{ fontWeight: '600', fontSize: '15px', color: '#ffffff' }}>
                    Download Resume
                  </div>
                  <div style={{ fontSize: '13px', color: '#bfdbfe' }}>
                    Saves Loshika_Pragasam_Resume.pdf to your device
                  </div>
                </div>
              </a>
            </div>

            {/* Cancel Button */}
            <div style={{ marginTop: '20px', textAlign: 'right' }}>
              <button 
                type="button"
                onClick={() => setIsResumeModalOpen(false)}
                style={{
                  background: 'none',
                  border: 'none',
                  color: '#64748b',
                  fontSize: '14px',
                  fontWeight: '500',
                  cursor: 'pointer',
                  padding: '8px 14px',
                  borderRadius: '6px'
                }}
                onMouseOver={(e) => { e.currentTarget.style.backgroundColor = '#f1f5f9'; }}
                onMouseOut={(e) => { e.currentTarget.style.backgroundColor = 'transparent'; }}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default About;