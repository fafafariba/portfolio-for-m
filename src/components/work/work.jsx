import React from 'react';
import './work.css';
import Project from '../project/project';

export default function Work() {
    return (
        <section id="work">
            <header>
                <div class="rectangle"></div>
                <h1>Previous Work</h1>
            </header>
            <Project />
            <Project />
            <Project />
        </section>
    );
}