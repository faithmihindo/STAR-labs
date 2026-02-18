
import React from 'react';
import { Link } from 'react-router-dom';
import MetricsDashboard from '../components/MetricsDashboard';

const Home: React.FC = () => {
  return (
    <div className="space-y-32 pb-32">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden px-6">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-slate-900/30 rounded-full blur-[150px]"></div>
        </div>
        
        <div className="relative z-10 text-center max-w-4xl mx-auto space-y-8">
          <div className="inline-block px-4 py-1 border border-slate-800 bg-slate-900/50 rounded-full text-[10px] tracking-[0.3em] font-bold text-slate-500 uppercase">
            EST. 2026 // Digital Transformation
          </div>
          <h1 className="text-6xl md:text-8xl font-bold leading-none tracking-tight">
            INVENTING THE <br />
            <span className="silver-gradient">FUTURE</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
            STAR LABS is a precision-driven tech collective dedicated to building the tools of tomorrow. 
            From startups to global enterprises, we engineer solutions that transform lives.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 pt-4">
            <Link to="/services" className="px-8 py-4 bg-white text-black text-sm font-bold tracking-widest hover:bg-slate-200 transition-all w-full sm:w-auto text-center">
              OUR SERVICES
            </Link>
            <Link to="/lab" className="px-8 py-4 border border-slate-700 text-sm font-bold tracking-widest hover:bg-slate-900 transition-all w-full sm:w-auto text-center">
              ENTER TECH LAB
            </Link>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        <div className="space-y-6">
          <h2 className="text-3xl font-bold tracking-tight">THE STAR <br /><span className="text-slate-500">PHILOSOPHY</span></h2>
          <div className="space-y-8">
            <div className="flex gap-6">
              <div className="flex-shrink-0 w-12 h-12 glass-card flex items-center justify-center text-xl font-mono">01</div>
              <div>
                <h4 className="font-bold text-white mb-2 uppercase tracking-wider">Precision Engineering</h4>
                <p className="text-slate-400">We treat every line of code like a mechanical clockwork. Reliability is not an option; it is our foundation.</p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="flex-shrink-0 w-12 h-12 glass-card flex items-center justify-center text-xl font-mono">02</div>
              <div>
                <h4 className="font-bold text-white mb-2 uppercase tracking-wider">Human-Centric Future</h4>
                <p className="text-slate-400">Technology exists to serve humanity. We focus on digital transformation that simplifies lifestyle and amplifies potential.</p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="flex-shrink-0 w-12 h-12 glass-card flex items-center justify-center text-xl font-mono">03</div>
              <div>
                <h4 className="font-bold text-white mb-2 uppercase tracking-wider">Radical Research</h4>
                <p className="text-slate-400">Our R&D department explores the fringes of AI, spatial computing, and decentralized networks.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="glass-card p-8 rounded-sm relative overflow-hidden">
          <div className="absolute top-0 right-0 w-24 h-24 border-t border-r border-slate-700"></div>
          <div className="absolute bottom-0 left-0 w-24 h-24 border-b border-l border-slate-700"></div>
          <h3 className="text-xs font-mono text-slate-500 mb-6 uppercase">System_Metrics.v04</h3>
          <MetricsDashboard />
          <p className="mt-8 text-xs text-slate-500 text-center font-mono">LIVE FEED: GLOBAL IMPACT INDEX</p>
        </div>
      </section>
    </div>
  );
};

export default Home;
