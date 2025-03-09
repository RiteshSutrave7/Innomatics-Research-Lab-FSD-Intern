// components/Home.jsx
import React from 'react';
import './Home.css';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import ProfileImage from '../assets/Profile.jpeg'; // Make sure this path is correct

function Home() {
  return (
    <section id="home" className="home">
      <div className="profile-image">
        <img src={ProfileImage} alt="Your Profile Picture" />
      </div>
      <div className="introduction">
        <h1>Hello, I'm Ritesh Sutrave</h1>
        <h2>Full Stack Developer</h2>
        <p>
          A passionate Full Stack Developer with expertise in HTML,CSS,JavaScript,Node,React,MongoDB,SQL,Python,Java. 
        </p>
          Welcome to my personal portfolio website!
        <p>
          
        </p>

        <div className="social-links-home">
          <a href="https://linkedin.com/in/ritesh-sutrave-8a2981268e" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
          <a href="https://github.com/RiteshSutrave7" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
        </div>

        {/* Resume Download Button */}
        <div className="resume-download-button">
          <a href="/assets/Ritesh_CV.pdf" download="Your_Resume.pdf">
            Download Resume
          </a>
        </div>
        {/* End Resume Download Button */}
      </div>
    </section>
  );
}

export default Home;