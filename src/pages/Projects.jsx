import React from 'react';

/**
 * Projects Page Component
 * Showcases at least 3 featured projects with descriptions,
 * defined roles, and measurable outcomes.
 */
function Projects() {
  const projectList = [
    {
      id: 1,
      title: "Expiry Date Reminder Application",
      role: "Lead Software Architect & Frontend Developer",
      image: "https://images.unsplash.com/photo-1542838132-92c53300491e?w=600&auto=format&fit=crop&q=80",
      description: "A smart pantry inventory system designed to track perishables and notify users before food expires to eliminate domestic waste.",
      outcome: "Designed full software requirements specification (SRS), UML class diagrams, and automated reminder logic reducing food waste by an estimated 35%."
    },
    {
      id: 2,
      title: "Campus Student Marketplace",
      role: "Full-Stack Developer",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&auto=format&fit=crop&q=80",
      description: "A collaborative web portal for college students to securely buy, sell, and exchange used textbooks and study hardware.",
      outcome: "Implemented secure user authentication, responsive product search, and RESTful API endpoints with MongoDB Atlas integration."
    },
    {
      id: 3,
      title: "Interactive Weather & Travel Dashboard",
      role: "Frontend Engineer (React & API Integration)",
      image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=600&auto=format&fit=crop&q=80",
      description: "A responsive single-page application consuming third-party weather APIs to provide 7-day atmospheric forecasts and travel alerts.",
      outcome: "Achieved sub-second load times using ES6 async/await API fetching and dynamic visual temperature charts."
    }
  ];

  return (
    <div style={{ maxWidth: '1100px', margin: '40px auto', padding: '0 20px' }}>
      <h1 style={{ fontSize: '32px', color: '#0f172a', marginBottom: '8px' }}>Featured Projects</h1>
      <p style={{ color: '#64748b', marginBottom: '32px' }}>A showcase of recent software solutions, academic labs, and web applications.</p>

      {/* Grid of 3 Project Cards */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
        gap: '28px'
      }}>
        {projectList.map((project) => (
          <div 
            key={project.id}
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
            {/* Project Image */}
            <img 
              src={project.image} 
              alt={project.title}
              style={{ width: '100%', height: '180px', objectFit: 'cover' }}
            />

            {/* Card Content */}
            <div style={{ padding: '24px', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
              <h2 style={{ fontSize: '20px', color: '#1e293b', marginBottom: '8px' }}>
                {project.title}
              </h2>

              <p style={{ fontSize: '13px', fontWeight: '600', color: '#2563eb', marginBottom: '12px' }}>
                Role: {project.role}
              </p>

              <p style={{ fontSize: '14px', color: '#475569', lineHeight: '1.6', marginBottom: '16px', flexGrow: 1 }}>
                {project.description}
              </p>

              {/* Outcome Highlight Box */}
              <div style={{
                backgroundColor: '#f8fafc',
                borderLeft: '4px solid #2563eb',
                padding: '10px 14px',
                borderRadius: '0 6px 6px 0',
                fontSize: '13px',
                color: '#334155',
                lineHeight: '1.5'
              }}>
                <strong>Outcome:</strong> {project.outcome}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;