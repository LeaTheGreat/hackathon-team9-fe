import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="nav">
      <h3 className="nav__logo">SpectrumScreen+</h3>
      <div className="btn-wrap">
        <Link to="/home">
          <button className="nav__login">Home</button>
        </Link>
        <Link to="/home">
          <button className="nav__signup">Account</button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
