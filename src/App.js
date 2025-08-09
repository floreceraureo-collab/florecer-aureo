import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Plans from './pages/Plans';
import AboutUs from './pages/AboutUs';
import Contact from './pages/Contact';

export default function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/planes" element={<Plans />} />
                <Route path="/sobre-nosotros" element={<AboutUs />} />
                <Route path="/contacto" element={<Contact />} />
            </Routes>
            <Footer />
        </Router>
    );
}