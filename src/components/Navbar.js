import React, { Component } from 'react';
import { Link } from "react-router-dom";
import "../styles.css";

class navbar extends Component {
  render() {
    return (
      <div className="navbarStyle">
            <div><h1>Navbar Logo</h1></div>
            <div className="navbarContainer">

              <Link to="/"> Home</Link>
              <Link to="/portfolio"> Portfolio</Link>
              <Link to="/about"> About</Link>
              <Link to="/contact"> Contact</Link>

            </div>
      </div>
    );
  }
}

export default navbar;