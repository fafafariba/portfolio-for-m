import React from 'react';

export default function Text(props) {
    return (
        <li>
            <li className="header">
                <header>
                    <h4>{props.order}</h4>
                    <h3>Project</h3>
                </header>
            </li>
            <li>
                <a href="#work">Learn More</a>
            </li>
            <li>
                <p>Hi, I’m Miad, UX/UI Designer based in San Francisco.
                I’m passionate about Visual Design and User Experience because it represents the perfect balance between creative and analytical thinking.
                </p>
            </li>
        </li>
    );
}