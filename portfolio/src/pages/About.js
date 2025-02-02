import React from 'react';
import '../styles/global.css';
import '../styles/navbar.css';
import '../styles/background.css';
import '../styles/footer.css';
import '../styles/about.css'; // Import your About page specific styles
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Background from '../components/Background';

const About = () => {
    const introduction = (
        <>
            <h1>Hey there<span>!</span></h1>
            <p>
                My name is <strong>Mohan Lu</strong>. I'm interested in helping engineer the future of software and web applications.
            </p>
        </>
    );

    const technicalSpecs = (
        <>
            <h2 className="section-title">Technical Specs<span className="highlight">.</span></h2>
            <p>
                I've spent the last two years honing my skills in full-stack web development, completing highly recommended online courses and building a variety of personal projects. I enjoy programming at both ends of the tech stack, whether it's creating data models, optimizing database queries, or animating SVGs and crafting fluid digital experiences.
            </p>
        </>
    );

    const briefHistory = (
        <>
            <h2 className="section-title">A Brief History<span className="highlight">...</span></h2>
            <p>
                I am an undergraduate student at NYU, focusing on software engineering and full-stack web development. Through my coursework and personal projects, I've built a strong foundation in both front-end and back-end technologies. I am passionate about solving real-world problems and building innovative digital solutions.
            </p>
        </>
    );

    return (
        <div className="about-page">
            <Navbar />
            <Background />
            <div className="container">
                {introduction}
                {technicalSpecs}
                {briefHistory}
            </div>
            <Footer />
        </div>
    );
};

export default About;
