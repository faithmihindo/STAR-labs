
import React, { useState } from 'react';
import { generateTechConcept } from '../services/geminiService';
import { LabResult } from '../types';

const Lab: React.FC = () => {
  const [query, setQuery] = useState('');
  const [result, setResult] = useState<LabResult | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleGenerate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;

    setLoading(true);
    setError(null);
    try {
      const data = await generateTechConcept(query);
      setResult(data);
    } catch (err) {
      setError("The Lab's neural network encountered an error. Please try again.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-24 min-h-screen">
      <div className="text-center space-y-6 mb-16">
        <h2 className="text-4xl md:text-6xl font-bold uppercase tracking-tighter silver-gradient">Innovation Lab</h2>
        <p className="text-slate-500 max-w-2xl mx-auto font-mono text-sm tracking-wide">
          INTERFACE VERSION: 3.0.1 // AI CONSULTANT ONLINE
        </p>
      </div>

      <div className="grid lg:grid-cols-5 gap-12">
        {/* Left Column: Input */}
        <div className="lg:col-span-2 space-y-8">
          <div className="glass-card p-8 rounded-sm space-y-6 border-l-4 border-l-slate-400">
            <h3 className="text-xl font-bold uppercase tracking-widest">Brainstorm Concept</h3>
            <p className="text-sm text-slate-400">
              Input a problem, industry, or seed idea. Our STAR-AI will draft a futuristic digital transformation roadmap.
            </p>
            <form onSubmit={handleGenerate} className="space-y-4">
              <textarea
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="E.g. Smart logistics for local farmers..."
                className="w-full h-32 bg-black border border-slate-800 p-4 text-slate-300 focus:outline-none focus:border-slate-500 font-mono text-sm resize-none"
              />
              <button
                disabled={loading}
                className={`w-full py-4 font-bold tracking-[0.2em] transition-all flex items-center justify-center gap-2 ${
                  loading ? 'bg-slate-800 text-slate-500 cursor-not-allowed' : 'bg-slate-100 text-black hover:bg-white'
                }`}
              >
                {loading ? (
                  <>
                    <div className="w-4 h-4 border-2 border-slate-500 border-t-transparent animate-spin rounded-full"></div>
                    PROCESSING...
                  </>
                ) : (
                  'GENERATE CONCEPT'
                )}
              </button>
            </form>
          </div>

          <div className="glass-card p-6 border border-slate-800/50">
            <h4 className="text-xs font-mono text-slate-500 uppercase mb-4">Core Lab Metrics</h4>
            <div className="space-y-4">
              <div className="flex justify-between items-center text-xs">
                <span className="text-slate-500">Processing Node</span>
                {/* Fix: Update UI string to reflect the backend model upgrade to Gemini 3 Pro */}
                <span className="font-mono text-slate-300">GEMINI-PRO-01</span>
              </div>
              <div className="flex justify-between items-center text-xs">
                <span className="text-slate-500">Latency</span>
                <span className="font-mono text-slate-300">~1.4s</span>
              </div>
              <div className="flex justify-between items-center text-xs">
                <span className="text-slate-500">Status</span>
                <span className="font-mono text-emerald-500">OPERATIONAL</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Result */}
        <div className="lg:col-span-3">
          {error && (
            <div className="bg-red-900/20 border border-red-800 p-6 text-red-400 font-mono text-sm">
              SYSTEM ERROR: {error}
            </div>
          )}

          {!result && !loading && !error && (
            <div className="h-full min-h-[400px] border border-dashed border-slate-800 flex flex-col items-center justify-center text-slate-700">
              <svg className="w-16 h-16 mb-4 opacity-20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              <p className="font-mono text-xs tracking-[0.3em] uppercase">Awaiting Input Signal</p>
            </div>
          )}

          {loading && (
            <div className="h-full min-h-[400px] flex flex-col items-center justify-center space-y-6">
              <div className="relative w-24 h-24">
                <div className="absolute inset-0 border-2 border-slate-800 animate-ping"></div>
                <div className="absolute inset-4 border-2 border-slate-700 animate-pulse"></div>
                <div className="absolute inset-8 bg-slate-500 animate-spin"></div>
              </div>
              <p className="font-mono text-sm text-slate-500 animate-pulse">SYNTHESIZING INNOVATION...</p>
            </div>
          )}

          {result && (
            <div className="glass-card p-10 animate-in fade-in slide-in-from-bottom-4 duration-700 space-y-8 relative overflow-hidden">
               <div className="absolute top-0 right-0 p-4">
                  <span className="text-[60px] font-mono text-slate-900 absolute right-4 top-2 select-none opacity-50">{result.feasibility}%</span>
               </div>
               
               <div>
                 <h3 className="text-3xl font-bold uppercase tracking-wider mb-4 border-b border-slate-800 pb-4 silver-gradient">
                   {result.title}
                 </h3>
                 <p className="text-slate-400 leading-relaxed italic">
                   "{result.concept}"
                 </p>
               </div>

               <div className="space-y-6">
                 <h4 className="text-xs font-mono text-slate-500 uppercase tracking-widest">Digital Transformation Roadmap</h4>
                 <div className="space-y-4">
                   {result.roadmap.map((step, idx) => (
                     <div key={idx} className="flex gap-4 group">
                       <div className="flex-shrink-0 w-8 h-8 rounded-full border border-slate-800 flex items-center justify-center text-xs font-mono text-slate-500 group-hover:border-slate-500 group-hover:text-white transition-all">
                         {idx + 1}
                       </div>
                       <p className="text-slate-300 pt-1 group-hover:translate-x-1 transition-transform">{step}</p>
                     </div>
                   ))}
                 </div>
               </div>

               <div className="pt-8 border-t border-slate-800 flex justify-between items-center">
                 <button className="text-xs font-mono text-slate-500 uppercase hover:text-white transition-colors">
                   Save Concept
                 </button>
                 <div className="flex items-center gap-2 text-xs text-slate-600 font-mono">
                    <div className={`w-2 h-2 rounded-full ${result.feasibility > 70 ? 'bg-emerald-500' : 'bg-amber-500'}`}></div>
                    Feasibility: {result.feasibility > 70 ? 'High' : 'Moderate'}
                 </div>
               </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Lab;
