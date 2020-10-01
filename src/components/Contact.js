import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Contact extends Component {
    render() {
        return (
            <div>
                <div><h1>Contact</h1></div>
                <div><h1>Contact@Contact.com</h1></div>
                <div><Link to="/"> Home</Link></div>
            </div>
        );
    }
}

export default Contact;