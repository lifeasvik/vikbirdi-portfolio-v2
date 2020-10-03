import React from "react";
import { slide as Menu } from "react-burger-menu";
import { Link } from "react-router-dom";

export default props => {
  return (
    <Menu {...props}>
      <Link to="/" className="menu-item">Home</Link>
      <Link to="/portfolio" className="menu-item">Portfolio</Link>
      <Link to="/about" className="menu-item">About</Link>
      <Link to="/contact" className="menu-item">Contact</Link>
    </Menu>
  );
};