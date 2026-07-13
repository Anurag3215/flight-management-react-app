import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <header className="site-navbar">
      <div className="navbar-inner">
        <NavLink className="brand" to="/">
          Flight Management
        </NavLink>
        <nav className="nav-links">
          <NavLink className="nav-link" to="/">
            Home
          </NavLink>
          <NavLink className="nav-link" to="/add">
            Add Flight
          </NavLink>
          <NavLink className="nav-link" to="/view">
            View Flights
          </NavLink>
        </nav>
      </div>
    </header>
  );
};

export default NavBar;
