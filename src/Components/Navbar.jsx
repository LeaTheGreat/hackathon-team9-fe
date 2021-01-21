import { React } from "react";
import { Link } from "react-router-dom";
import { logout } from "../lib/api";
import { useAuth } from "../context/AuthContext";

const Navbar = () => {
  const { auth, dispatch } = useAuth();
  let link;

  switch (auth.role) {
    case "Parent":
      link = "/parent-dash";
      break;
    case "Doctor":
      link = "/doctor-dash";
      break;
    case "Admin":
    default:
      link = "/admin-dash";
      break;
  }

  const handleLogout = async () => {
    dispatch({
      type: "LOGOUT",
    });
    await logout();
  };

  return (
    <nav className="nav">
      <h3 className="nav__logo">SpectrumScreen+</h3>
      <div className="btn-wrap">
        {auth.userId && (
          <>
            <button className="nav__login" onClick={handleLogout}>
              Logout
            </button>
            <Link to={link}>
              <button className="nav__signup">Account</button>
            </Link>
          </>
        )}
        {!auth.userId && (
          <>
            <Link to="/login">
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
