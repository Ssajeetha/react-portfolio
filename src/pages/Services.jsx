import React from 'react';

/**
 * Services Page Component
 * Outlines professional offerings (Web Dev, Backend/APIs, Database, UI/UX)
 * with visual imagery and technology badges.
 */
function Services() {
  const serviceList = [
    {
      title: "Full-Stack Web Development",
      description: "End-to-end modern single-page applications built using the MERN stack (MongoDB, Express, React, Node.js). Clean component hierarchy and state management.",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=500&auto=format&fit=crop&q=80",
      skills: ["React.js", "Node.js", "Express", "REST APIs"]
    },
    {
      title: "Database Modeling & Management",
      description: "Architecting relational (SQL) and non-relational (MongoDB) database schemas, ensuring data normalization, indexing, and high query performance.",
      image: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=500&auto=format&fit=crop&q=80",
      skills: ["MongoDB Atlas", "Oracle SQL", "Data Normalization"]
    },
    {
      title: "General Software Programming",
      description: "Developing robust object-oriented software, desktop applications, and automated utility scripts adhering to SOLID design principles.",
      image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=500&auto=format&fit=crop&q=80",
      skills: ["Java (OOP)", "Modern ES6+ JavaScript", "C# / .NET"]
    },
    {
      title: "Responsive UI/UX & Web Design",
      description: "Crafting mobile-first, accessible, and high-converting user interfaces with clean CSS layouts, responsive grids, and intuitive navigation.",
      image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=500&auto=format&fit=crop&q=80",
      skills: ["Responsive CSS", "Flexbox / Grid", "Figma", "Accessibility"]
    }
  ];

  return (
    <div style={{ maxWidth: '1100px', margin: '40px auto', padding: '0 20px' }}>
      <h1 style={{ fontSize: '32px', color: '#0f172a', marginBottom: '8px' }}>Services Offered</h1>
      <p style={{ color: '#64748b', marginBottom: '32px' }}>Professional engineering services and capabilities available for freelance or employment.</p>

      {/* Grid of 4 Service Cards */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
        gap: '24px'
      }}>
        {serviceList.map((service, index) => (
          <div 
            key={index}
            style={{
              backgroundColor: '#ffffff',
              borderRadius: '12px',
              border: '1px solid #e2e8f0',
              overflow: 'hidden',
              boxShadow: '0 4px 16px rgba(0, 0, 0, 0.04)',
              display: 'flex',
              flexDirection: 'column'
            }}
          >
            <img 
              src={service.image} 
              alt={service.title}
              style={{ width: '100%', height: '160px', objectFit: 'cover' }}
            />
            <div style={{ padding: '20px', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
              <h2 style={{ fontSize: '18px', color: '#1e293b', marginBottom: '10px' }}>
                {service.title}
              </h2>
              <p style={{ fontSize: '14px', color: '#475569', lineHeight: '1.6', marginBottom: '16px', flexGrow: 1 }}>
                {service.description}
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                {service.skills.map((skill, sIdx) => (
                  <span key={sIdx} style={{
                    fontSize: '11px',
                    backgroundColor: '#eff6ff',
                    color: '#2563eb',
                    padding: '3px 8px',
                    borderRadius: '6px',
                    fontWeight: '600'
                  }}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;