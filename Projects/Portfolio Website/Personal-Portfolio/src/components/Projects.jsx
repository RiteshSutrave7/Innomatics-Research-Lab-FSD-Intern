// components/Projects.jsx
import React from 'react';
import ProjectCard from './ProjectCard';
import './Projects.css'; // Create Projects.css for styling
//import ProjectImage1 from '../assets/images/project1.png'; // Import project images

function Projects() {
  const projects = [
    {
      title: 'Innomatric Clone Website',
            description: 'In This Project the Basic Clone Innomatric Rescearch Lab Using Only HTML And CSS.',
            technologies: ['HTML', 'CSS',],
            image: 'https://static-gi.asianetnews.com/images/ani20250228111920/image-96144660-4f88-48bb-8236-c7b595f25925_1200x630xt.jpg', 
            liveLink: 'https://innomatric-clone.netlify.app/', 
            githubLink: 'https://github.com/RiteshSutrave7/Innomatics-Research-Lab-FSD-Intern.git',
    },
    {
            title: 'Memory Match Game',
            description: 'In This The Memory Matching Game The Advance Of The HTML,CSS and JavaScript is used ',
            technologies: ['HTML', 'CSS', 'JavaScript'],
            image: 'https://www.calculators.org/graphics/memory-games.png', 
            liveLink: 'https://memory-matching-game-updated.netlify.app/', 
            githubLink: 'https://github.com/RiteshSutrave7/Innomatics-Research-Lab-FSD-Intern.git',
    },
    {
            title: 'BrewHub Coffee Shop ',
            description: 'In This The BrewHub Coffee Shop The Advance Of The HTML,CSS and JavaScript is used ',
            technologies: ['HTML', 'CSS'],
            image: 'https://media.istockphoto.com/id/1262771454/vector/coffee-shop-emblem-template.jpg?s=612x612&w=0&k=20&c=y1EyHCxENVCPCgblJ00BEdjiUjwMnYk4QgZSKRCegxY=', 
            liveLink: 'https://brewcoffee-shop-website.netlify.app/', 
            githubLink: 'https://github.com/RiteshSutrave7/Innomatics-Research-Lab-FSD-Intern.git',
    },
    {
            title: 'BrewHub Coffee Fiance App ',
            description: 'In This The BrewHub Coffee Fiance App The Advance Of The HTML,CSS and JavaScript is used ',
            technologies: ['HTML', 'CSS', 'JavaScript'],
            image: 'https://static.vecteezy.com/system/resources/previews/021/813/044/non_2x/coffee-shop-logo-design-template-with-coffee-icon-and-store-perfect-for-business-company-mobile-app-etc-free-vector.jpg', 
            liveLink: 'https://brew-hub-coffeshop.netlify.app/', 
            githubLink: 'https://github.com/RiteshSutrave7/Innomatics-Research-Lab-FSD-Intern.git',
    },
    {
            title: 'Interative-Todo-list ',
            description: 'In This The Interative-Todo-list App The Vite+React is used ',
            technologies: ['Vite+React'],
            image: 'https://media.istockphoto.com/id/1285308242/photo/to-do-list-text-on-notepad.jpg?s=612x612&w=0&k=20&c=p85bCVQZwvkrqqqNOJGg2QuPDu6ynTlQHkASQOTELh8=', 
            liveLink: 'https://interative-todo-list.netlify.app/', 
            githubLink: 'https://github.com/RiteshSutrave7/Innomatics-Research-Lab-FSD-Intern.git',
    },
    {
            title: 'Shopping Cart Web Application',
            description: 'In This The Shopping Cart Web Application The Advance Of The HTML,CSS and JavaScript is used ',
            technologies: ['HTML', 'CSS', 'JavaScript'],
            image: 'https://www.milesweb.in/blog/wp-content/uploads/2015/06/ecommerce-stores-hosted-vs-licensed-shopping-cart-solutions-min-1.jpg', 
            liveLink: 'https://ecoomerce-website.netlify.app//', 
            githubLink: 'https://github.com/RiteshSutrave7/Innomatics-Research-Lab-FSD-Intern.git',
    },
    
    // ... more projects
  ];

  return (
    <section id="projects" className="projects">
      <h2>Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </section>
  );
}

export default Projects;