import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Logo } from './components/Logo/Logo.js';
import { NavBar } from "./components/NavBar/NavBar";
import { ProfileTile} from "./components/ProfileTile/ProfileTile";

class App extends Component {
  render() {
    return (
      <div className="App">
          <Logo/>
          <NavBar/>
          <ProfileTile/>
      </div>
    );
  }
}

export default App;
