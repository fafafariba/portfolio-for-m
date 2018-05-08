import React from 'react';

export default function Project(props) {
    return (
        <article id={`project-${props.id}`}>
            <div>
                <header>
                    <h4>{props.id}</h4>
                    <h3>Project</h3>
                </header>
                <a href="#work">Learn More</a>
                <p>Hi, I’m Miad, UX/UI Designer based in San Francisco.
                    I’m passionate about Visual Design and User Experience because it represents the perfect balance between creative and analytical thinking.
                </p>
            </div>
            <img src="zeit.png" alt="project zeit" />
        </article>
    );
}


