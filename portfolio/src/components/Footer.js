import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa'; // Import the icons

function Footer() {
    return (
        <div className="footer fade-in-slide-up">
            <p>CONNECT WITH ME</p>
            <div className="social-links">
                <span>
                    <a href="https://github.com/your-profile" target="_blank" rel="noopener noreferrer">
                        <FaGithub />
                    </a>
                </span>
                <span>
                    <a href="https://www.linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin />
                    </a>
                </span>
            </div>
        </div>
    );
}

export default Footer;
