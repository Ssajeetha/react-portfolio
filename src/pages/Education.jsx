import React from 'react';

/**
 * Education Page Component
 * Highlights academic degrees, colleges, dates, and specialized coursework.
 */
function Education() {
  const educationHistory = [
    {
      degree: "Advanced Diploma in Software Engineering Technology",
      institution: "Centennial College — School of Engineering Technology & Applied Science",
      location: "Toronto, ON",
      dates: "Sept 2024 – Present (Expected Graduation: 2026)",
      details: [
        "Focus Areas: Web Application Development (MERN Stack), Object-Oriented Software Design, Database Systems.",
        "Key Courses: COMP 229 (Web App Dev), COMP 246 (Systems Design), COMP 214 (Advanced Databases), COMP 228 (Java).",
        "Active member of the Software Development Club."
      ]
    },
    {
      degree: "Ontario Secondary School Diploma (OSSD)",
      institution: "Secondary High School",
      location: "Ontario, Canada",
      dates: "Graduated: June 2024",
      details: [
        "Honors in Computer Science, Advanced Functions, and Calculus.",
        "Recipient of Academic Excellence Award in Computer Technology."
      ]
    }
  ];

  return (
    <div style={{ maxWidth: '900px', margin: '40px auto', padding: '0 20px' }}>
      <h1 style={{ fontSize: '32px', color: '#0f172a', marginBottom: '8px' }}>Education & Qualifications</h1>
      <p style={{ color: '#64748b', marginBottom: '32px' }}>Academic milestones, diplomas, and technical specializations.</p>

      {/* Education Timeline Cards */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
        {educationHistory.map((item, index) => (
          <div 
            key={index}
            style={{
              backgroundColor: '#ffffff',
              padding: '28px',
              borderRadius: '14px',
              border: '1px solid #e2e8f0',
              boxShadow: '0 4px 16px rgba(0, 0, 0, 0.03)'
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '10px' }}>
              <div>
                <h2 style={{ fontSize: '20px', color: '#1e293b', marginBottom: '4px' }}>
                  {item.degree}
                </h2>
                <h4 style={{ color: '#2563eb', fontWeight: '500', marginBottom: '6px' }}>
                  {item.institution} • <span style={{ color: '#64748b' }}>{item.location}</span>
                </h4>
              </div>
              <span style={{
                backgroundColor: '#eff6ff',
                color: '#2563eb',
                fontWeight: '600',
                fontSize: '13px',
                padding: '4px 12px',
                borderRadius: '12px'
              }}>
                {item.dates}
              </span>
            </div>

            <ul style={{ marginTop: '16px', paddingLeft: '20px', color: '#475569', lineHeight: '1.7' }}>
              {item.details.map((point, i) => (
                <li key={i} style={{ marginBottom: '6px' }}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Education;