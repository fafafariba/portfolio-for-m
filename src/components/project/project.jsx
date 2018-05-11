import React from 'react';
import './project.scss';

export default function Project(props) {
    console.log(props.order);
    return <ul id={`project-${props.order}`}>
        <li className="text">
            <h3 className="flex">
                <h4>{`0${props.order}`}</h4>
                ZEIT
            </h3>
            <a href="#work">Learn More</a>
            <p>Zeit is a time travel agency. The goal of the Zeit is to provide
            a safe and enjoyable experience. They need a new logo and a
            responsive website to introduce and sell travel packages.</p>
        </li>
        <li className="image">
          <img src="zeit.png" alt="project zeit" />
        </li>
      </ul>;
}


