// components/Navbar.jsx
import { NavLink } from 'react-router-dom';
import './Navbar.css'; // Create Navbar.css for styling

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">Ritesh Portfolio</div>
      <ul className="nav-links">
        <li><NavLink to="/" exact activeClassName="active">Home</NavLink></li>
        <li><NavLink to="/about" activeClassName="active">About</NavLink></li>
        <li><NavLink to="/skills" activeClassName="active">Skills</NavLink></li>
        <li><NavLink to="/projects" activeClassName="active">Projects</NavLink></li>
        <li><NavLink to="/experience" activeClassName="active">Experience</NavLink></li>
        <li><NavLink to="/contact" activeClassName="active">Contact</NavLink></li>
      </ul>
    </nav>
  );
}

export default Navbar;