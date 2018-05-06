import React from 'react';
import './contact.css';

export default function Contact() {
    return (
        <section id="contact">
            <footer>
                <header>
                    <div class="rectangle"></div>
                    <h1>Contact Me</h1>
                </header>
                <p>
                    Please feel free to reach to me with comments, questions, critiques, or just to say hi, I'd love to hear from you!
            </p>
                <ul>
                    <li>
                        <a href="mailto:miadmn@icloud.com" 
                            rel="noopener noreferrer" target="_blank">Miadmn@icloud.com</a>
                    </li>
                    <li><a href="#me">Resume</a></li>
                    <li>
                        <a href="https://www.linkedin.com/in/1miad/" 
                            rel="noopener noreferrer" target="_blank">LinkedIn</a>
                    </li>
                    <li>
                        <a href="https://dribbble.com/1miad" 
                            rel="noopener noreferrer" target="_blank">Dribble</a>
                    </li>
                    <li>
                        <a href="https://www.behance.net/mmiadmn2cb29" 
                            rel="noopener noreferrer" target="_blank">Behance</a>
                    </li>
                    <li><a href="#top">Top</a></li>
                </ul>
            </footer>
        </section>
    );
}