import React, { Component } from 'react';
import './navigation.scss';

class Navigation extends Component{
  constructor(props) {
    super(props);
    this.state = this.props.currentState;
    this.update = this.props.update;
    this.select = this.select.bind(this);
    this.default = "me";
  }

  static getDerivedStateFromProps (nextProps, prevState) {
    if (prevState.selection !== nextProps.currentState.selection) {
      return nextProps.currentState;
    } else return null;
  }

  select(e){
    const name = e.target.className;
    this.update(name);
  }

  
  render() {
    
    if (this.state) {  
      let view = this.state.selection ? this.state.selection : this.default;


      let meClasses = `pixel-container${view === "me" ? " selected" : ""}`;
      let workClasses = `pixel-container${view === "work" ? " selected" : ""}`;
      let contactClasses = `pixel-container${view === "contact" ? " selected" : ""}`;
      
      return <nav>
          <div className={meClasses}>
            <a className="me" href="#me" onClick={this.select}>
              Me
            </a>
            <div className="pixel" />
          </div>
          <div className={workClasses}>
            <a className="work" href="#work" onClick={this.select}>
              Work
            </a>
            <div className="pixel" />
          </div>
          <div className={contactClasses}>
          <a className="contact" href="#contact" onClick={this.select}>
              Contact
            </a>
            <div className="pixel" />
          </div>
        </nav>;
    } else {
      return <div></div>;
    }
  }
}
export default Navigation;

