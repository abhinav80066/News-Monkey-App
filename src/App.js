import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';

import React, { Component } from 'react'
import NavBar from './Components/NavBar';
import News from './Components/News';



export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
        <NavBar/>
        <Switch>
          <Route exact path="/"><News key = "general" pageSize = {7} country = "in" category = "general" /></Route>
          <Route exact path="/business"><News key = "business" pageSize = {7} country = "in" category = "business" /></Route>
          <Route exact path="/entertainment"><News key = "entertainment"  pageSize = {7} country = "in" category = "entertainment" /></Route>
          <Route exact path="/health"><News key = "health" pageSize = {7} country = "in" category = "health" /></Route>
          <Route exact path="/science"><News key = "science" pageSize = {7} country = "in" category = "science" /></Route>
          <Route exact path="/sports"><News key = "sports" pageSize = {7} country = "in" category = "sports" /></Route>
          <Route exact path="/technology"><News key = "technology" pageSize = {7} country = "in" category = "technology" /></Route>
        </Switch>
        </Router>
      </div>
    )
  }
}
