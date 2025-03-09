// components/Contact.jsx
import React from 'react';
import './Contact.css'; // Create Contact.css for styling
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

function Contact() {
  return (
    <section id="contact" className="contact">
      <h2>Contact Me</h2>
      <p>Feel free to reach out!</p>
      <form className="contact-form">
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" rows="5" required></textarea>
        </div>
        <button type="submit" className="submit-button">Send Message</button>
      </form>
      <div className="social-links">
        <a href="https://linkedin.com/ritesh-sutrave-8a2981268" target="_blank" rel="noopener noreferrer"><FaLinkedin /> LinkedIn</a>
        <a href="https://github.com/RiteshSutrave7" target="_blank" rel="noopener noreferrer"><FaGithub /> GitHub</a>
        <a href="mailto:rsutrave7@gmail.com"><FaEnvelope /> Email</a>
      </div>
    </section>
  );
}

export default Contact;