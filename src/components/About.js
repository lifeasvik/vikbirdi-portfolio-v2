import React, { Component } from 'react';
// import { Link } from "react-router-dom";
import SideBar from "./Sidebar";

class About extends Component {
    render() {
        return (
            <div><div><SideBar /></div>
                <div className="pagePadder">
                    <div><h1>About</h1></div>
                </div>
            </div>
        );
    }
}

export default About;