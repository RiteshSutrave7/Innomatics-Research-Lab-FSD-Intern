// components/Footer.jsx
import React from 'react';
import './Footer.css'; // Create Footer.css for styling

function Footer() {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} Ritesh Sutrave. All Rights Reserved.</p>
    </footer>
  );
}

export default Footer;