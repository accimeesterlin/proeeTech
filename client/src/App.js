import React, { Component } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";

import 'semantic-ui-css/semantic.min.css';


import{
  Home,
  Products,
  Dashboard,
  Pricing,
  Company,
  Documentation,
  Contact,
  Footer,
  Nav
} from "./components";

class App extends Component {
  render() {
    return (
        <Router>
          <div>
            <Route exact path = "/" component = {Home}/>
            <Route exact path = "/products" component = {Products}/>
            <Route exact path = "/dashboard" component = {Dashboard}/>
            <Route exact path = "/pricing" component = {Pricing}/>
            <Route exact path = "/company" component = {Company}/>
            <Route exact path = "/documentation" component = {Documentation}/>
            <Route exact path = "/contact" component = {Contact}/>
            <Route exact path = "/footer" component = {Footer}/>
            <Route exact path = "/nav" component = {Nav}/>
          </div>
        </Router>
    );
  }
}

export default App;
