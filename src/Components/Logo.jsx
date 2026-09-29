import React from 'react';
import { Link } from 'react-router-dom';

/**
 * CustomLogo Component
 * Features a modern geometric badge with initials.
 * Clicking the logo returns the user to the Home page.
 */
function Logo() {
  return (
    <Link to="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '10px' }}>
      {/* Geometric SVG Hexagon/Diamond badge with Initials */}
      <div style={{
        width: '42px',
        height: '42px',
        background: 'linear-gradient(135deg, #2563eb, #7c3aed)',
        borderRadius: '10px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#ffffff',
        fontWeight: 'bold',
        fontSize: '18px',
        boxShadow: '0 4px 12px rgba(37, 99, 235, 0.3)'
      }}>
        LP
      </div>
      <span style={{
        fontSize: '20px',
        fontWeight: '700',
        color: '#1e293b',
        letterSpacing: '-0.5px'
      }}>
        Portfolio<span style={{ color: '#2563eb' }}>.</span>
      </span>
    </Link>
  );
}

export default Logo;