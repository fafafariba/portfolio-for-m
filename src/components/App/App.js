import React, { Component } from 'react';
import './app.css';
import Navigation from '../navigation/Navigation';
import Me from '../me/Me';
import Work from '../work/Work';
import Contact from '../contact/Contact';

class App extends Component {
  render() { 
    return( 
      <section id="app">
        <Navigation />
        <Me />
        <Work />
        <Contact/>
      </section>
    );
  }
}

export default App;
