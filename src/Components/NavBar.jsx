// NavBar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

function NavBar() {
  return (
    <nav className="navbar">
      <div className="container">
        <div className="nav-logo">
          <Link to='/'>
            <img src="./public/tt.png" alt="Terz's Logo" className="logo" />
          </Link>
        </div>
        <div className="nav-links">
          <ul>
            <li><Link to='/'>Home</Link></li>
             <li><Link to='/services'>Product</Link></li>
            <li><Link to='/providers'>Contact</Link></li>
            <li><Link to='/contactcard'>FAQS</Link></li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
