import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import Navigation from './components/Navigation.js'
import Home from './components/Home.js';
import About from './components/About.js';
import Contact from './components/Contact.js';
import Error from './components/Error.js';

//import logo from './logo.svg';
//import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Navigation />
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route component={Error} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
