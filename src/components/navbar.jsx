import { NavLink } from "react-router-dom";
import carLogo from "../assets/Car-Logo-PNG-File.png";
function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">

        <NavLink to="/" className="logo">
          <img src={carLogo} alt="Car Logo" />
        </NavLink>

        <div className="nav-links">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;