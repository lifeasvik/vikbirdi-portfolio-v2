import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

class Contact extends Component {
    render() {
        return (
            <div>
                <div><Navbar /></div>
                <div><h1>Contact</h1></div>
                <div><h1>Contact@Contact.com</h1></div>
                <div><Link to="/"> Home</Link></div>
            </div>
        );
    }
}

export default Contact;