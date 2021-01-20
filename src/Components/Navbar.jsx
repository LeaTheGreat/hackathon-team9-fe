import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="nav">
      <h3 className="nav__logo">SpectrumScreen+</h3>
      <div className="btn-wrap">
        <Link to="/">
          <button className="nav__login">Log In</button>
        </Link>
        <Link to="/signup">
          <button className="nav__signup">Sign Up</button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
