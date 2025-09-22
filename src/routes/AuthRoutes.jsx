import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router';

//pages
import Home from '../pages/Home';
import About from '../pages/About';
import Services from '../pages/Services';
import Portfolio from '../pages/Portfolio';
import News from '../pages/News';
import Contact from '../pages/Contact';

import Header from '../components/Header';
import Footer from '../components/Footer';

const AuthRoutes = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Navigate replace to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/news" element={<News />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default AuthRoutes;