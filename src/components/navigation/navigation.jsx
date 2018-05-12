import React, { Component } from 'react';
import './navigation.scss';

class Navigation extends Component{
  constructor(props) {
    super(props);
    this.state = { selection:"me" };
    this.select = this.select.bind(this);
  }

  select(e){
    const name = e.target.className;
    if (name !== this.state.selection) this.setState({ selection: name });
  }
  
  render() {
    
    if (this.state) {  
      let selection = this.state.selection
      let meClasses = `pixel-container${selection === "me" ? " selected" : ""}`;
      let workClasses = `pixel-container${selection === "work" ? " selected" : ""}`;
      let contactClasses = `pixel-container${selection === "contact" ? " selected" : ""}`;
      
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

