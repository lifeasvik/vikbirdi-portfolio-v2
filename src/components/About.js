import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

class About extends Component {
    render() {
        return (
            <div>
                <div><Navbar /></div>
                <div><h1>About</h1></div>
                <div><Link to="/"> Home</Link></div>
            </div>
        );
    }
}

export default About;