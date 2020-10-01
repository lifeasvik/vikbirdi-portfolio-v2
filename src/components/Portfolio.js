import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Portfolio extends Component {
    render() {
        return (
            <div>
                <div><h1>Portfolio</h1></div>
                <div><Link to="/"> Home</Link></div>
            </div>
        );
    }
}

export default Portfolio;