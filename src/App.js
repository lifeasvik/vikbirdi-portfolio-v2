import React, { Component } from 'react';
import { Route, Switch } from "react-router-dom";
import Home from "./components/Home.js";
import Portfolio from "./components/Portfolio.js";
import About from "./components/About.js";
import Contact from "./components/Contact.js";

class App extends Component {
  render() {
    return (
        <Switch>
          <main>
            <Route exact path={"/"} component={Home} />{" "}
            <Route path={"/portfolio"} component={Portfolio} />{" "}
            <Route path={"/about"} component={About} />{" "}
            <Route path={"/contact"} component={Contact} />{" "}
          </main>
        </Switch>
    );
  }
}

export default App;
