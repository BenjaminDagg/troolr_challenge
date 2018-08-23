import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Logo } from './components/Logo/Logo.js';
import { NavBar } from "./components/NavBar/NavBar";
import { ProfileTile} from "./components/ProfileTile/ProfileTile";
import { profiles} from "./models/profiles";
import { ProfileList} from "./components/ProfileList/ProfileList";

class App extends Component {
  render() {
    return (
      <div className="App">
          <Logo/>
          <NavBar/>
          <ProfileList profiles={profiles}/>
      </div>
    );
  }
}

export default App;
