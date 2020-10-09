import React, { Component } from 'react';
// import { Link } from "react-router-dom";

import SideBar from "./Sidebar";

class Home extends Component {
    render() {
        return (
            <div>
                <SideBar pageWrapId={"page-wrap"} outerContainerId={"App"} />
                <div><SideBar /></div>
                <div className="mainBox1">
                    <div className="mainContent1">
                        
                    </div>
                </div>
                <div className="pagePadder, boxSizer">
                    <div className="mainPageTitle"><h2>TEST ANIMATION VIK</h2></div>
                </div>

                <div className="mainSplash3">Third Splash Here</div>
                <div className="mainSplash4">Fourth Splash Here</div>
                <div className="mainSplash5">Fifth Splash Here</div>
            </div>
        );
    }
}

export default Home;
