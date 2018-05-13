import React from 'react';
import './contact.scss';

export default function Contact(props) {
    return (
        <section id="contact">
            <header>
                <div className="rectangle"></div>
                <h1>Contact Me</h1>
            </header>
            <p>
                Please feel free to reach to me with comments, questions, critiques, or just to say hi, I'd love to hear from you!
            </p>
            <footer>
                <a href="mailto:miadmn@icloud.com" 
                    rel="noopener noreferrer" target="_blank">Miadmn@icloud.com</a>
                <a href="#me">Resume</a>
                <a href="https://www.linkedin.com/in/1miad/" 
                    rel="noopener noreferrer" target="_blank">LinkedIn</a>
                <a href="https://dribbble.com/1miad" 
                    rel="noopener noreferrer" target="_blank">Dribble</a>
                <a href="https://www.behance.net/mmiadmn2cb29" 
                    rel="noopener noreferrer" target="_blank">Behance</a>
                <a href="#top" onClick={() => props.update("me")}>
                    <img src="top.svg" alt="Navigate to Top"/>
                </a>
            </footer>
        </section>
    );
}