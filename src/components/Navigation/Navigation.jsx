import React from 'react';
import './Navigation.css';

export default function Navigation() {
    return (
        <nav>
            <ul>
                <li><a class="selected" href="#me">Me</a></li>
                <li><a href="#work">Work</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>
    );
}