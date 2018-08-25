import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Logo } from './components/Logo/Logo.js';
import { NavBar } from "./components/NavBar/NavBar";
import { profiles} from "./models/profiles";
import {ProfileResultTable} from "./components/ProfileResultTable/ProfileResultTable";
import { ProfileDetails } from "./components/ProfileDetails/ProfileDetails";
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
          <Logo/>
          <NavBar/>
          <Router>
              <div>
                  <Route exact={true} path="/" render={()=><ProfileResultTable profiles={profiles}/>} />
                  <Route path="/profile/:id" component={ProfileDetails} />
              </div>


          </Router>
      </div>
    );
  }
}

export default App;
