import React, { Component } from 'react';
import SideBar from "./Sidebar";

class Languages extends Component {
    render() {
        return (
            <div>
                <div>
                    <SideBar />
                </div>

                <div className="homeBox">

                    <div className="homeContent1">
                        <h1>Languages</h1>
                    </div>

                    <div className="homeContent1">
                        <ul>
                            <li>React.JS</li>
                            <li>HTML5</li>
                            <li>CSS3</li>
                            <li>JavaScript</li>
                            <li>Node.JS</li>
                            <li>PostgreSQL</li>
                            <li>MongoDB</li>
                            <li>Python</li>
                        </ul>
                    </div>
            
                 </div>
            </div>
        );
    }
}

export default Languages;