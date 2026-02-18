
import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Lab from './pages/Lab';
import Services from './pages/Services';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <Router>
      <div className="min-h-screen bg-black text-slate-300 flex flex-col relative overflow-hidden">
        {/* Global Decorative Elements */}
        <div className="fixed inset-0 pointer-events-none z-0">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-slate-800 rounded-full blur-[120px] opacity-20"></div>
          <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-slate-900 rounded-full blur-[120px] opacity-20"></div>
          <div className="scanline"></div>
        </div>

        <Navbar />
        
        <main className="flex-grow z-10">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/lab" element={<Lab />} />
            <Route path="/services" element={<Services />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
};

export default App;
