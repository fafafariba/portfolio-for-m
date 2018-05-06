import React, { Component } from 'react';
import './app.css';
import Navigation from '../navigation/navigation';
import Me from '../me/me';
import Work from '../work/work';
import Contact from '../contact/contact';

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
