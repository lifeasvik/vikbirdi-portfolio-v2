import React, { Component } from 'react';
// import { Link } from "react-router-dom";
import SideBar from "./Sidebar";

class Contact extends Component {
    render() {
        return (
            <div><div><SideBar /></div>
                <div className="pagePadder">
                    <div><h1>Contact</h1></div>
                </div>
            </div>
        );
    }
}

export default Contact;