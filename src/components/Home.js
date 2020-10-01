import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

class Home extends Component {
    render() {
        return (
            <div>
                <div><Navbar /></div>
                <div><h1>This is a React Page</h1></div>
            </div>
        );
    }
}

export default Home;