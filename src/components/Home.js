import React, { Component } from 'react';
// import { Link } from "react-router-dom";

import SideBar from "./Sidebar";

class Home extends Component {
    render() {
        return (
            <div>
                <SideBar pageWrapId={"page-wrap"} outerContainerId={"App"} />
                <div><SideBar /></div>
                <div className="pagePadder">
                    <div><h1>About</h1></div>
                </div>
            </div>
        );
    }
}

export default Home;
