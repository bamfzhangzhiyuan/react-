import React, {Component} from 'react';

import {BrowserRouter as Router,Route,Switch} from "react-router-dom"

import Login from "./pages/login"

import Admin from "./pages/admin"

import "./assets/less/index.less"
class App extends Component {
  render () {
    return (
      <Router>
        <Switch>
          <Route path="/login" component={Login}/>
          <Route path="/" component={Admin}/>
        </Switch>
      </Router>
    )
  }
}

export default App;