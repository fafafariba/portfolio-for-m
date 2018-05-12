import React, { Component } from 'react';
import './app.scss';
import Navigation from '../navigation/navigation';
import Me from '../me/me';
import Work from '../work/work';
import Contact from '../contact/contact';


class App extends Component {
  
  render() { 
    return (
      <div id="app">
        <div class="logo-container">
          <img src="logo.svg" id="logo" alt="logo"/>
        </div>
        <Navigation />
        <div className="sidebar"></div>
        <Me />
        <Work />
        <Contact />
      </div>
    );
  }
}

export default App;
