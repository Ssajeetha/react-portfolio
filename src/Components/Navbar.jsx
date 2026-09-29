import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from './Logo';

/**
 * Navbar Component
 * Contains the custom logo and navigation links for all 6 required pages.
 * Highlights the active page link automatically.
 */
function Navbar() {
  // Helper function to apply active styles when on the current page
  const navLinkStyle = ({ isActive }) => ({
    textDecoration: 'none',
    color: isActive ? '#2563eb' : '#475569',
    fontWeight: isActive ? '600' : '500',
    fontSize: '15px',
    padding: '8px 12px',
    borderRadius: '6px',
    backgroundColor: isActive ? '#eff6ff' : 'transparent',
    transition: 'all 0.2s ease-in-out'
  });

  return (
    <header style={{
      position: 'sticky',
      top: 0,
      zIndex: 100,
      backgroundColor: 'rgba(255, 255, 255, 0.95)',
      backdropFilter: 'blur(8px)',
      borderBottom: '1px solid #e2e8f0',
      padding: '12px 32px'
    }}>
      <nav style={{
        maxWidth: '1200px',
        margin: '0 auto',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: '16px'
      }}>
        {/* Custom Logo on the left */}
        <Logo />

        {/* Links to all 6 required pages on the right */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
          <NavLink to="/" style={navLinkStyle} end>Home</NavLink>
          <NavLink to="/about" style={navLinkStyle}>About Me</NavLink>
          <NavLink to="/projects" style={navLinkStyle}>Projects</NavLink>
          <NavLink to="/education" style={navLinkStyle}>Education</NavLink>
          <NavLink to="/services" style={navLinkStyle}>Services</NavLink>
          <NavLink to="/contact" style={navLinkStyle}>Contact Me</NavLink>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;