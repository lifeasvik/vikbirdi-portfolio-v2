import React, { Component } from 'react';
// import { Link } from "react-router-dom";

import SideBar from "./Sidebar";

class Home extends Component {
    render() {
        return (
            <div>
                <SideBar pageWrapId={"page-wrap"} outerContainerId={"App"} />
                <div><SideBar /></div>

                <div className="homeBox">
                    <div className="homeContent1"><h1>Image Here</h1></div>
                    <div className="homeContent1"><h1>Meet Vik</h1></div>
                    <div className="homeContent2"><h1>Challenging boundaries through innovation, perserverence and dedication.</h1></div>
                </div>
                {/* TEST CONTENT HERE */}

                <div className="testAnimationContainer hidden">
                    <div className="mainText"><div><h1>Vik Birdi</h1></div></div>
                    <div className="testBox1 hidden"></div>
                    <div className="testBox2"></div>
                    <div className="testBox3 hidden"></div> 
                    <div className="testBox4 hidden"></div>
                </div>

                {/* TEST CONTENT HERE */}

                {/* <div className="mainBox1">
                    <div className="mainContent1">
                        <div className="mainSplash"></div>
                    </div>
                </div>

                <div className="pagePadder, boxSizer">
                    <div className="mainPageTitle"><h2>TEST ANIMATION VIK</h2></div>
                </div>

                <div className="mainSplash3">Third Splash Here</div>
                <div className="mainSplash4">Fourth Splash Here</div>
                <div className="mainSplash5">Fifth Splash Here</div> */}
            </div>
        );
    }
}

export default Home;
