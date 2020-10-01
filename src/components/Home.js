import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Home extends Component {
    render() {
        return (
            <div>
                        <h1>Hello</h1>
        <h3>This is a react page</h3>
        <h5>Wait for more to come</h5>
        <Link to="/portfolio"> Portfolio</Link>
                <div><Link to="/portfolio">Portfolio and more</Link></div>
            </div>
        );
    }
}

export default Home;