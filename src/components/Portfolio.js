import React, { Component } from 'react';
// import { Link } from "react-router-dom";
import SideBar from "./Sidebar";

class Portfolio extends Component {
    render() {
        return (
            <div>
                <div>
                    <SideBar />
                </div>

                <div className="homeBox">

                    <div className="homeContent1">
                        <h1>Image Here</h1>
                    </div>
                    
                    <div className="homeContent1">
                        <h1>Learn About Me</h1>
                    </div>
                
                    <div className="textShaper">
                        <h3>Here are some examples of design work I have completed. There are some examples of great UX and UI designs where others demonstrate the backend and front end synergy. Please feel free to contact me if you would like to work on a project.</h3>
                    </div>

                    <div className="homeContent1">
                        <div>
                            <div>
                                <h1>NPMM</h1>
                            </div>

                            <div>
                                <p> Node Package Manager Manager (NPMM) allows developers to frictionlessly browse and save npm packages. Saved packages can then be programmatically installed with our command line interface. Technologies: React, HTML5, CSS3, JavaScript, Redux, Node, PostgreSQL, Express, Mocha, Chai Live App or GitHub Repo.</p>
                            </div>
                        </div>
                    </div>
                    
                    <div className="homeContent1">
                        <div>
                            <h1>My Crazy Quiz App</h1>
                        </div>

                        <div>
                            <p>This app is a random 5 question quiz app that tests your knowledge. A user can click on up to 4 answers and is given a recurring score and a final retry quiz page. Technologies: HTML, JavaScript, jQuery, CSS Live Quiz App or GitHub Repo</p>
                        </div>
                    </div>

                    <div className="homeContent1">
                        <div>
                            <h1>POSTED</h1>
                        </div>

                        <div>
                            <p>An online postcard generator that allows users to create postcards using a URL link and text of their choice. Technologies: React, Node.JS, PostgreSQL, Express, Mocha, Chai. Live App or GitHub Repo</p>
                        </div>
                    </div>
                </div>
            </div>
            
        );
    }
}

export default Portfolio;
