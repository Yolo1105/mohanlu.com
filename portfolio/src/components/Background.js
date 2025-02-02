import React, { useCallback } from "react";
import Particles from "react-particles"; // Use the correct import for the particles component
import { loadSlim } from "tsparticles-slim"; // Load the slim version of tsparticles

const Background = () => {
    const particlesInit = useCallback(async (engine) => {
        console.log(engine);
        await loadSlim(engine); // Load the slim version of particles.js
    }, []);

    const particlesLoaded = useCallback(async (container) => {
        await console.log(container); // Log the container when loaded
    }, []);

    return (
        <>
            <div id="particle-canvas" style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', zIndex: -1 }}></div>
            
            <Particles
                id="tsparticles"
                init={particlesInit}
                loaded={particlesLoaded}
                options={{
                    interactivity: {
                        events: {
                            onClick: {
                                enable: true,
                                mode: "push", // Adds particles on click
                            },
                            onHover: {
                                enable: true,
                                mode: "repulse", // Repulse effect on hover
                            },
                            resize: true,
                        },
                        modes: {
                            push: {
                                quantity: 5,
                            },
                            repulse: {
                                distance: 50,
                                duration: 0.3,
                            },
                        },
                    },
                    particles: {
                        number: {
                            value: 100, // Number of particles
                            density: {
                                enable: true,
                                area: 1000,
                            },
                        },
                        color: {
                            value: "#ffffff", // Particle color
                        },
                        shape: {
                            type: "triangle", // Shape of particles
                        },
                        opacity: {
                            value: 0.3,
                        },
                        size: {
                            value: { min: 1, max: 3 }, // Size range of particles (smaller)
                        },
                        move: {
                            enable: true,
                            speed: 1, // Slower speed of particles
                            direction: "none",
                            random: false,
                            straight: false,
                            outModes: {
                                default: "out", // Particles leave the canvas when they go off-screen
                            },
                        },
                        links: {
                            enable: true,
                            distance: 150,
                            color: "#ffffff", // Link color
                            opacity: 0.3,
                            width: 1,
                        },
                    },
                    detectRetina: true,
                }}
            />
        </>
    );
};

export default Background;
