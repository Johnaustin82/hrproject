import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';
import Logo from '../../assets/logo.png';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo-container">
        <Link to="/" className="logo-link">
          <img src={Logo} alt="BetterFit Logo" className="logo-image" />
          <div className="logo-text">BetterFit</div>
        </Link>
      </div>
      <ul className="nav-links">
        <li><Link to="/programs">Our Programs</Link></li>
        <li><Link to="/nutrition">Healthy Diet</Link></li>
        <li><Link to="/Membership">Become A Member</Link></li>
        <li><Link to="/login">Log In</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;