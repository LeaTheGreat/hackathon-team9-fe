import { React, useEffect } from "react";
import { Link } from "react-router-dom";
// import { getUserById } from "../lib/api";
import { useAuth } from "../context/AuthContext";

const Navbar = () => {
  const { auth } = useAuth();

  const link = auth.role === "Parent" ? "/parent-dash" : "/doctor-dash";

  return (
    <nav className="nav">
      <h3 className="nav__logo">SpectrumScreen+</h3>
      <div className="btn-wrap">
        {auth.userId && (
          <>
            <Link to = {link}>
              <button className="nav__signup">Account</button>
            </Link>
          </>
        )}
        {!auth.userId && (
          <>
            <Link to="/">
              <button className="nav__login">Log In</button>
            </Link>
            <Link to="/signup">
              <button className="nav__signup">Sign Up</button>
            </Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
