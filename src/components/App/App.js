import React, { Component } from 'react';
import './App.css';
import Navigation from '../Navigation/Navigation';

class App extends Component {
  render() {
    return (
      <section id="app">
        <Navigation />
        <p>Hello</p>
      </section>
    );
  }
}

export default App;
