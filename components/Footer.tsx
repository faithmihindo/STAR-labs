
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="z-10 bg-black border-t border-slate-900 py-16 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12">
        <div className="col-span-2 space-y-6">
          <div className="flex items-center space-x-2">
            <div className="w-6 h-6 border border-slate-400 rotate-45 flex items-center justify-center">
              <div className="w-2 h-2 bg-slate-400"></div>
            </div>
            <span className="text-lg font-bold tracking-tighter silver-gradient">STAR LABS</span>
          </div>
          <p className="text-slate-500 max-w-sm text-sm leading-relaxed">
            Advanced digital transformation for a forward-thinking world. Engineering excellence, redefined for the next era of human industry.
          </p>
          <div className="flex space-x-4">
            {['X', 'IN', 'GH'].map(social => (
              <a key={social} href="#" className="w-10 h-10 glass-card flex items-center justify-center text-xs font-mono hover:bg-white hover:text-black transition-all">
                {social}
              </a>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          <h4 className="text-xs font-bold uppercase tracking-widest">Navigation</h4>
          <ul className="space-y-4 text-sm text-slate-500">
            <li><a href="/" className="hover:text-white transition-colors">Home</a></li>
            <li><a href="#/services" className="hover:text-white transition-colors">Services</a></li>
            <li><a href="#/lab" className="hover:text-white transition-colors">Innovation Lab</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
          </ul>
        </div>

        <div className="space-y-6">
          <h4 className="text-xs font-bold uppercase tracking-widest">HQ</h4>
          <p className="text-sm text-slate-500 leading-relaxed">
            Cyberpark Building 04<br />
            New Zurich Tech Zone<br />
            CH-8000 Switzerland
          </p>
          <p className="text-sm font-mono text-slate-300">contact@starlabs.io</p>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-[10px] font-mono text-slate-600 uppercase tracking-widest">
          © 2026 STAR LABS TECHNOLOGIES // ALL RIGHTS RESERVED
        </p>
        <div className="flex items-center gap-4">
          <div className="h-1 w-12 bg-slate-800"></div>
          <p className="text-[10px] font-mono text-slate-600 uppercase tracking-widest">PRECISION. INNOVATION. FUTURE.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
