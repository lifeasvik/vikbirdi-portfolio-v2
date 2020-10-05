import React, { Component } from 'react';
// import { Link } from "react-router-dom";
import SideBar from "./Sidebar";

class Portfolio extends Component {
    render() {
        return (
            <div><div><SideBar /></div>
                <div className="pagePadder">
                    <div><h1>Portfolio</h1></div>
                </div>
                <div className="pagePadder">
                    <div className="mainSplash">Splash Content Here</div>

                </div>
                <div className="mainSplash2">Secondary Splash Here</div>
                <div className="mainSplash3">Third Splash Here</div>
                <div className="mainSplash4">Fourth Splash Here</div>
                <div className="mainSplash5">Fifth Splash Here</div>
            </div>
        );
    }
}

export default Portfolio;