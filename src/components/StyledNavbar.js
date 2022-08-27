import React from "react";
import { NavLink } from "react-router-dom";

const StyledNavbar = () => {
  return (
    <React.Fragment>
      <nav>
        <NavLink
          to="/"
          style={({ isActive }) => {
            return { color: isActive ? "green" : "red" };
          }}
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          style={({ isActive }) => {
            return { color: isActive ? "green" : "red" };
          }}
        >
          About
        </NavLink>
        <NavLink
          to="/products"
          style={({ isActive }) => {
            return { color: isActive ? "green" : "red" };
          }}
        >
          Products
        </NavLink>
        <NavLink
          to="/login"
          style={({ isActive }) => {
            return { color: isActive ? "green" : "red" };
          }}
        >
          Login
        </NavLink>
      </nav>
    </React.Fragment>
  );
};

export default StyledNavbar;
