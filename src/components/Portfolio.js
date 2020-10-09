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
                <div className="mainSplash2">Quiz App - This app is a random 5 question quiz app that tests your knowledge. A user can click on up to 4 answers and is given a recurring score and a final retry quiz page.
Technologies: HTML, JavaScript, jQuery, CSS</div>
                <div className="mainSplash3">NPMM - Node Package Manager Manager (NPMM) allows developers to frictionlessly browse and save npm packages. Saved packages can then be programmatically installed with our command line interface.
Technologies: React, HTML5, CSS3, JavaScript, Redux, Node, PostgreSQL, Express, Mocha, Chai</div>
                <div className="mainSplash4">POSTED - An online postcard generator that allows users to create postcards using a URL link and text of their choice.
Technologies: React, Node.JS, PostgreSQL, Express, Mocha, Chai
</div>
                <div className="mainSplash5">Fifth Splash Here</div>
            </div>
        );
    }
}

export default Portfolio;