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
                <div className="pagePadder">
                    <div className="mainSplash">Meet Vik</div>

                </div>
                <div className="mainSplash2">
Hi I am Vik! In my spare time I love to code. There is nothing more satisfying than a light bulb turning on in your head when you a solve a complicated piece of code or algorithm. In my future career I see myself working for a large tech firm in a team based environment. I love sharing ideas and also learning from my peers. They say team work makes the dream work which is why I picked the perfect field! My favourite language is React and I love to use Node.js for the backend. I began my career in sales but have now transitioned into the satisfying world of Software Engineering. When I am not coding you will find me doing a ton of other fun stuff. I love creating music and can play several instruments. I love Hollywood movies, Swimming and playing video games when I can.</div>
                <div className="mainSplash3">Third Splash Here</div>
                <div className="mainSplash4">Fourth Splash Here</div>
                <div className="mainSplash5">Fifth Splash Here</div>
            </div>
        );
    }
}

export default About;