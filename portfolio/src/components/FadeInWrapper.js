// src/components/FadeInWrapper.js
import React, { useEffect, useState } from 'react';
import '../styles/global.css'; // Ensure global styles are applied

const FadeInWrapper = ({ children }) => {
    const [isFadedIn, setIsFadedIn] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsFadedIn(true); // Trigger fade-in completion
        }, 100); // A very short duration to trigger the CSS animation

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className={isFadedIn ? '' : 'fade-in'} style={{ width: '100%', height: '100%' }}>
            {children} {/* Render children only after the fade-in is complete */}
        </div>
    );
};

export default FadeInWrapper;
