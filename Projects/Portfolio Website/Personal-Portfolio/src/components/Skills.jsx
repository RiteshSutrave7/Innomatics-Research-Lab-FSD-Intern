// components/Skills.jsx
import React from 'react';
import './Skills.css';
import { FaReact, FaNodeJs, FaDatabase, FaGitAlt, FaHtml5, FaCss3Alt, FaJsSquare, FaPython, FaJava } from 'react-icons/fa';

function Skills() {
  const skills = [
    { name: 'HTML5', icon: <FaHtml5 />, proficiency: 95 },
    { name: 'CSS3', icon: <FaCss3Alt />, proficiency: 90 },
    { name: 'JavaScript', icon: <FaJsSquare />, proficiency: 90 },
    { name: 'React', icon: <FaReact />, proficiency: 90 },
    { name: 'Redux', icon: null, proficiency: 80 },
    { name: 'Next.js', icon: null, proficiency: 75 },
    { name: 'Responsive Design', icon: null, proficiency: 90 },
    { name: 'UI/UX Design Principles', icon: null, proficiency: 85 },
    { name: 'Node.js', icon: <FaNodeJs />, proficiency: 85 },
    { name: 'Express.js', icon: null, proficiency: 80 },
    { name: 'Python', icon: <FaPython />, proficiency: 75 },
    { name: 'Java', icon: <FaJava />, proficiency: 70 },
    { name: 'RESTful APIs', icon: null, proficiency: 85 },
    { name: 'GraphQL', icon: null, proficiency: 70 },
    { name: 'MySQL', icon: <FaDatabase />, proficiency: 85 },
    { name: 'PostgreSQL', icon: null, proficiency: 80 },
    { name: 'MongoDB', icon: null, proficiency: 75 },
    { name: 'Firebase', icon: null, proficiency: 70 },
    { name: 'Git', icon: <FaGitAlt />, proficiency: 80 },
    { name: 'GitHub/GitLab', icon: null, proficiency: 85 },
    { name: 'Agile Methodologies', icon: null, proficiency: 90 },
    { name: 'Testing & Debugging', icon: null, proficiency: 80 },
    { name: 'Problem Solving', icon: null, proficiency: 95 },
    { name: 'Communication', icon: null, proficiency: 90 },
  ];

  return (
    <section id="skills" className="skills">
      <h2>Skills</h2>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div key={index} className="skill-item">
            <div className="skill-icon">{skill.icon}</div> {/* Icon container */}
            <h3>{skill.name}</h3>
            <span className="skill-proficiency">{skill.proficiency}% Proficiency</span> {/* Proficiency as span */}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;