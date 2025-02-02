import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Background from '../components/Background';
import Index from '../pages/Index';
import About from '../pages/About';
import Experience from '../pages/Experience';
import Projects from '../pages/Projects';
import Skills from '../pages/Skills';
import Contact from '../pages/Contact';
import '../styles/global.css'; // Import your global styles
import '../styles/navbar.css'; // Import your navbar styles
import '../styles/background.css'; // Import your background styles
import '../styles/footer.css'; // Import your footer styles
import '../styles/about.css'; // Import your About page styles

const App = () => {

    return (
        <Router>
            <div className='fade-in' style={{ width: '100%', height: '100%' }}>
                <Background />  {/* Background component */}
                <Navbar />      {/* Navbar component */}
                <Routes>
                    <Route path="/" element={<Index />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/experience" element={<Experience />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/skills" element={<Skills />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
                <Footer />      {/* Footer component */}
            </div>
        </Router>
    );
};

export default App;
