import React, { Component } from 'react';
import { Link, Route } from "react-router-dom";

class navbar extends Component {
  render() {
    return (
      <div>
            <div><h1>Navbar</h1></div>
            <div><Link to="/"> Home</Link></div>
      </div>
    );
  }
}

export default navbar;