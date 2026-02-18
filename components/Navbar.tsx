
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar: React.FC = () => {
  const location = useLocation();

  const navItems = [
    { label: 'HOME', path: '/' },
    { label: 'SERVICES', path: '/services' },
    { label: 'INNOVATION LAB', path: '/lab' },
  ];

  return (
    <nav className="sticky top-0 z-50 glass-card border-b border-slate-800/50 px-6 py-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <div className="w-8 h-8 border-2 border-slate-400 rotate-45 flex items-center justify-center">
            <div className="w-4 h-4 bg-slate-400"></div>
          </div>
          <span className="text-xl font-bold tracking-tighter silver-gradient">STAR LABS</span>
        </Link>

        <div className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`text-sm font-medium tracking-widest transition-colors hover:text-white ${
                location.pathname === item.path ? 'text-white border-b border-white' : 'text-slate-500'
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>

        <button className="px-5 py-2 border border-slate-700 text-xs font-bold tracking-widest hover:bg-slate-800 transition-all uppercase">
          Contact Us
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
