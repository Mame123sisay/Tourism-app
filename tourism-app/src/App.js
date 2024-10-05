import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import AboutPage from './Components/AboutPage';
import Contact from './Components/Contact';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/" element={<Contact />} />
            </Routes>
        </Router>
    );
};

export default App;