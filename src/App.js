import React from 'react';
import { Route } from "react-router-dom";

import Home from "./components/Home.js";
import Portfolio from "./components/Portfolio.js";
import About from "./components/About.js";
import Contact from "./components/Contact.js";

import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './global';
import { theme } from './theme';
import { Burger} from './components/Hamburger';
import { Menu } from './components/Menu';

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
