import React, { Component } from 'react';
import './app.scss';
import Navigation from '../navigation/navigation';
import Me from '../me/me';
import Work from '../work/work';
import Contact from '../contact/contact';


class App extends Component {
  constructor(props){
    super(props);
    this.props = props;
    this.storageKey = "madebymiad";
    this.state = {};
    this.setStorage = this.setStorage.bind(this)
    this.setSelectionAsState = this.setSelectionAsState.bind(this);
    this.getFromStorage = this.getFromStorage.bind(this);
    this.updateSelection = this.updateSelection.bind(this);
  }
  
  setStorage(name) {
    localStorage.setItem(this.storageKey, JSON.stringify({ selection: name }));
  }

  getFromStorage() {
    return JSON.parse(localStorage.getItem(this.storageKey));
  }
  
  componentDidMount(){
    if (this.props) {
      let route = this.selectRoute(this.props.location);
      this.updateSelection(route);
    } else {}
  }

  componentWillUnmount() {
    localStorage.removeItem(this.storageKey);
  }

  selectRoute(params){
    if (params.hash) {
      return params.hash.match(/([^#]\w+)/g)[0];
    } else return "me";
  }

  setSelectionAsState(){
    this.setState(this.getFromStorage());
  }

  updateSelection(name){
    this.setStorage(name);
    this.setSelectionAsState();
  }
  
  render() {

    const appHTML = <div id="app">
      <div className="logo-container">
        <img src="logo.svg" id="logo" alt="logo" />
      </div>
      <Navigation update={this.updateSelection} currentState={this.state} />
      <div className="sidebar"></div>
      <Me />
      <Work />
      <Contact update={this.updateSelection}/>
    </div>;

    if (this.state !== {}) return appHTML;
    else return <div></div>;
    
  }
}

export default App;
