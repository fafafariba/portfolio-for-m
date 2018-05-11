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
            <Project order={1} />
            <Project order={2} />
            <Project order={3} />
        </section>);
}