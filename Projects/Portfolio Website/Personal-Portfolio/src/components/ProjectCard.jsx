// components/ProjectCard.jsx
import React from 'react';
import './ProjectCard.css'; // Create ProjectCard.css for styling

function ProjectCard({ project }) {
  return (
    <div className="project-card">
      <img src={project.image} alt={project.title} className="project-image" />
      <div className="project-info">
        <h3>{project.title}</h3>
        <p className="description">{project.description}</p>
        <p className="technologies">Technologies: {project.technologies.join(', ')}</p>
        <div className="project-links">
          <a href={project.liveLink} target="_blank" rel="noopener noreferrer">Live Demo</a>
          <a href={project.githubLink} target="_blank" rel="noopener noreferrer">GitHub Repo</a>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;