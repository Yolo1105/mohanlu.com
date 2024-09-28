import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Scene } from "./Scene"; // Assuming Scene.js is in the same directory
import { Interactive } from "./Interactive"; // Adjust the import path as necessary

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/interactive" element={<Interactive />} />
                <Route path="/scene" element={<Scene />} />
            </Routes>
        </Router>
    );
};

export default App;
