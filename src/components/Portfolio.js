import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

class Portfolio extends Component {
    render() {
        return (
            <div>
                <div><Navbar /></div>
                <div><h1>Portfolio</h1></div>
                <div><Link to="/"> Home</Link></div>
            </div>
        );
    }
}

export default Portfolio;