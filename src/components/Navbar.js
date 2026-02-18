
import React, { useState } from 'react';
import { Menu, X, Briefcase } from 'lucide-react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL || 'http://127.0.0.1:8000';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <Briefcase className="logo-icon" />
          JobPortal
        </Link>

        <div className="menu-icon" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </div>

        <ul className={isOpen ? 'nav-menu active' : 'nav-menu'}>

          <li className="nav-item">
            <a href={`${BACKEND_URL}/accounts/login/`} className="nav-links-mobile" onClick={() => setIsOpen(false)}>
              Login
            </a>
          </li>
          <li className="nav-item">
            <a href={`${BACKEND_URL}/accounts/registerJobseeker/`} className="nav-links-mobile" onClick={() => setIsOpen(false)}>
              Register as Job Seeker
            </a>
          </li>
          <li className="nav-item">
            <a href={`${BACKEND_URL}/accounts/registerEmployer/`} className="nav-links-mobile" onClick={() => setIsOpen(false)}>
              Register as Employer
            </a>
          </li>
        </ul>


        <div className="nav-btn">
          <a href={`${BACKEND_URL}/accounts/login/`} className="btn-link">
            <button className="btn primary">Login</button>
          </a>
          <div className="dropdown">
            <button className="btn secondary dropdown-toggle">Register</button>
            <div className="dropdown-menu">
              <a href={`${BACKEND_URL}/accounts/registerJobseeker/`} className="dropdown-item">Job Seeker</a>
              <a href={`${BACKEND_URL}/accounts/registerEmployer/`} className="dropdown-item">Employer</a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
