import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

/**
 * Contact Page Component
 * Features a direct contact info panel and an interactive form.
 * Captures form inputs using React state and redirects back to Home on submit.
 */
function Contact() {
  const navigate = useNavigate();

  // State to store form input data
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    contactNumber: '',
    emailAddress: '',
    message: ''
  });

  // Handle typing inside any input field
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  // Handle Form Submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevents browser from refreshing

    // Log captured user information
    console.log("Captured Contact Form Submission:", formData);

    // Provide friendly confirmation feedback
    alert(
      `Thank you, ${formData.firstName} ${formData.lastName}!\n\nYour message has been captured successfully.\nYou will now be redirected back to the Home Page.`
    );

    // Redirect user back to the Home Page as required by assignment rubric
    navigate('/');
  };

  return (
    <div style={{ maxWidth: '1000px', margin: '40px auto', padding: '0 20px' }}>
      <h1 style={{ fontSize: '32px', color: '#0f172a', marginBottom: '8px' }}>Get in Touch</h1>
      <p style={{ color: '#64748b', marginBottom: '32px' }}>Have a question or want to collaborate? Send a message below.</p>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
        gap: '32px',
        alignItems: 'start'
      }}>
        {/* Contact Information Panel */}
        <div style={{
          backgroundColor: '#1e293b',
          color: '#ffffff',
          padding: '32px',
          borderRadius: '16px',
          boxShadow: '0 8px 24px rgba(15, 23, 42, 0.15)'
        }}>
          <h2 style={{ fontSize: '22px', marginBottom: '16px', color: '#f8fafc' }}>
            Contact Information
          </h2>
          <p style={{ color: '#94a3b8', fontSize: '14px', lineHeight: '1.6', marginBottom: '24px' }}>
            Feel free to reach out directly through email, phone, or LinkedIn.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '18px', fontSize: '15px' }}>
            <div>
              <span style={{ color: '#38bdf8', fontWeight: '600' }}>📍 Location:</span>
              <p style={{ margin: '4px 0 0 0', color: '#cbd5e1' }}>Toronto, Ontario, Canada</p>
            </div>
            <div>
              <span style={{ color: '#38bdf8', fontWeight: '600' }}>📧 Email:</span>
              <p style={{ margin: '4px 0 0 0', color: '#cbd5e1' }}>student@my.centennialcollege.ca</p>
            </div>
            <div>
              <span style={{ color: '#38bdf8', fontWeight: '600' }}>📱 Phone:</span>
              <p style={{ margin: '4px 0 0 0', color: '#cbd5e1' }}>+1 (416) 289-5000</p>
            </div>
            <div>
              <span style={{ color: '#38bdf8', fontWeight: '600' }}>💼 LinkedIn:</span>
              <p style={{ margin: '4px 0 0 0', color: '#cbd5e1' }}>linkedin.com/in/student-portfolio</p>
            </div>
          </div>
        </div>

        {/* Interactive Contact Form */}
        <div style={{
          backgroundColor: '#ffffff',
          padding: '32px',
          borderRadius: '16px',
          border: '1px solid #e2e8f0',
          boxShadow: '0 4px 16px rgba(0, 0, 0, 0.04)'
        }}>
          <h2 style={{ fontSize: '22px', color: '#0f172a', marginBottom: '20px' }}>Send a Message</h2>
          
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {/* First & Last Name */}
            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
              <div style={{ flex: '1 1 140px' }}>
                <label style={{ display: 'block', fontSize: '13px', fontWeight: '600', color: '#334155', marginBottom: '6px' }}>
                  First Name *
                </label>
                <input 
                  type="text" 
                  name="firstName" 
                  required
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="John"
                  style={{ width: '100%', padding: '10px 12px', borderRadius: '8px', border: '1px solid #cbd5e1', fontSize: '14px', boxSizing: 'border-box' }}
                />
              </div>

              <div style={{ flex: '1 1 140px' }}>
                <label style={{ display: 'block', fontSize: '13px', fontWeight: '600', color: '#334155', marginBottom: '6px' }}>
                  Last Name *
                </label>
                <input 
                  type="text" 
                  name="lastName" 
                  required
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder="Doe"
                  style={{ width: '100%', padding: '10px 12px', borderRadius: '8px', border: '1px solid #cbd5e1', fontSize: '14px', boxSizing: 'border-box' }}
                />
              </div>
            </div>

            {/* Contact Number */}
            <div>
              <label style={{ display: 'block', fontSize: '13px', fontWeight: '600', color: '#334155', marginBottom: '6px' }}>
                Contact Number
              </label>
              <input 
                type="tel" 
                name="contactNumber" 
                value={formData.contactNumber}
                onChange={handleChange}
                placeholder="+1 (123) 456-7890"
                style={{ width: '100%', padding: '10px 12px', borderRadius: '8px', border: '1px solid #cbd5e1', fontSize: '14px', boxSizing: 'border-box' }}
              />
            </div>

            {/* Email Address */}
            <div>
              <label style={{ display: 'block', fontSize: '13px', fontWeight: '600', color: '#334155', marginBottom: '6px' }}>
                Email Address *
              </label>
              <input 
                type="email" 
                name="emailAddress" 
                required
                value={formData.emailAddress}
                onChange={handleChange}
                placeholder="john.doe@example.com"
                style={{ width: '100%', padding: '10px 12px', borderRadius: '8px', border: '1px solid #cbd5e1', fontSize: '14px', boxSizing: 'border-box' }}
              />
            </div>

            {/* Message */}
            <div>
              <label style={{ display: 'block', fontSize: '13px', fontWeight: '600', color: '#334155', marginBottom: '6px' }}>
                Your Message *
              </label>
              <textarea 
                name="message" 
                rows="4" 
                required
                value={formData.message}
                onChange={handleChange}
                placeholder="Hi, I would love to discuss a project..."
                style={{ width: '100%', padding: '10px 12px', borderRadius: '8px', border: '1px solid #cbd5e1', fontSize: '14px', resize: 'vertical', boxSizing: 'border-box' }}
              />
            </div>

            {/* Submit Button */}
            <button 
              type="submit"
              style={{
                backgroundColor: '#2563eb',
                color: '#ffffff',
                border: 'none',
                padding: '12px 24px',
                borderRadius: '8px',
                fontWeight: '600',
                fontSize: '15px',
                cursor: 'pointer',
                boxShadow: '0 4px 12px rgba(37, 99, 235, 0.3)',
                marginTop: '8px'
              }}
            >
              Send Message & Return Home →
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;