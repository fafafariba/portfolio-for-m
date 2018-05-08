import React from 'react';
import './work.scss';
import Project from '../project/project';

export default function Work() {
    return (
        <section id="work">
            <header>
                <div className="rectangle" />
                <h1>Previous Work</h1>
            </header>
            <Project id="01"/>
            <Project id="02"/>
            <Project id="03"/>
        </section>);
}