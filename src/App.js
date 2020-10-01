import React from 'react';
import { Link, Route } from "react-router-dom";

import Home from "./components/Home.js";
import Portfolio from "./components/Portfolio.js";
import About from "./components/About.js";
import Contact from "./components/Contact.js";

class App extends React.Component {
  render() {
    return (
      <div>
        <main>
          <Route exact path="/" component={Home} />
          <Route path="/portfolio" component={Portfolio} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
        </main>
      </div>
    );
  }
}

export default App;
