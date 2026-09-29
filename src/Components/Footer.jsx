import React from 'react';

/**
 * Footer Component
 * Displays copyright info, course details, and portfolio branding.
 */
function Footer() {
  return (
    <footer style={{
      marginTop: 'auto',
      borderTop: '1px solid #e2e8f0',
      backgroundColor: '#f8fafc',
      padding: '24px 20px',
      textAlign: 'center',
      color: '#64748b',
      fontSize: '14px'
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <p style={{ margin: '0 0 6px 0', fontWeight: '500', color: '#334155' }}>
          © {new Date().getFullYear()} Student Portfolio • COMP 229 Web Application Development
        </p>
        <p style={{ margin: 0, fontSize: '13px' }}>
          Built with React & React Router • Hosted on the Cloud
        </p>
      </div>
    </footer>
  );
}

export default Footer;