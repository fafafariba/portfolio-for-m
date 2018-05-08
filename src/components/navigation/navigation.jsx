import React from 'react';
import './navigation.scss';

export default function Navigation() {
  return <nav>
      <a className="selected" id="me" href="#me">
        Me
      </a>
      <a href="#work" id="work">
        Work
      </a>
      <a href="#contact" id="contact">
        Contact
      </a>
    </nav>;
}

