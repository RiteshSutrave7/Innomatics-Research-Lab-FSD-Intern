// components/Experience.jsx
import React from 'react';
import './Experience.css'; // Create Experience.css for styling

function Experience() {
  const experiences = [
    {
        role: 'Full Stack Developer Intern',
        company: 'Innomatric Research Lab',
        duration: 'January 2025 - Current',
        description: 'During my Full-Stack Development Internship at Innomatric Research Lab , I worked on developing and enhancing web applications using modern technologies',
    },
    {
        role: 'Frontend Developer Intern',
        company: 'OCTANET Private Limited',
        duration: 'February 2024 - April 2024',
        description: 'During my Front-End Development Internship at OCTANET Private Limited, I worked on designing and developing user-friendly web applications',
    },
    // ... more experiences
  ];

  return (
    <section id="experience" className="experience">
      <h2>Experience</h2>
      <div className="experience-list">
        {experiences.map((exp, index) => (
          <div key={index} className="experience-item">
            <h3>{exp.role}</h3>
            <p className="company">{exp.company} | {exp.duration}</p>
            <p className="description">{exp.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Experience;