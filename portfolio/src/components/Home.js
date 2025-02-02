import React, { useEffect, useRef } from 'react';
import Typewriter from 'typewriter-effect';
import '../styles/home.css';

function Home() {
    const helloTextRef = useRef(null);
    const passionateRef = useRef(null); // Reference for "A passionate Software Engineer"
    const buttonContainerRef = useRef(null);

    useEffect(() => {
        // Triggers for existing animations
        setTimeout(() => {
            if (helloTextRef.current) {
                helloTextRef.current.classList.add('fade-in-slide-up');
            }
            if (buttonContainerRef.current) {
                buttonContainerRef.current.classList.add('fade-in-slide-down');
            }
        }, 100);

        // Specific trigger for the passionate text to add the new class
        setTimeout(() => {
            if (passionateRef.current) {
                passionateRef.current.classList.add('passionate-text');
            }
        }, 500); // Slightly delayed to ensure it triggers after the hello text
    }, []);

    return (
        <div className="center-content">
            <div ref={helloTextRef} className="small-text">
                Hello!! I'm Mohan Lu.
            </div>
            <div id="typewriter">
                <Typewriter
                    options={{
                        autoStart: true,
                        loop: false,
                        delay: 50,
                        cursor: '<span class="blue">|</span>',
                    }}
                    onInit={(typewriter) => {
                        typewriter
                            .typeString('Full Stack ')
                            .typeString('<span class="blue">Developer</span>')
                            .start();
                    }}
                />
            </div>
            <div  className="change-container">
                <span className="changing">A passionate Software Engineer.</span>
            </div>
            <div ref={buttonContainerRef} className="button-container">
                <a href="https://drive.google.com/file/d/19GdxFsVE3yhs7xCvLrsvVnsN-Z5HdGmu/view?usp=sharing" className="btn btn-light" target="_blank" rel="noopener noreferrer">Download CV</a>
                <a href="https://www.linkedin.com/in/mohan-lu" className="btn btn-dark" target="_blank" rel="noopener noreferrer">Contact Me</a>
            </div>
        </div>
    );
}

export default Home;
