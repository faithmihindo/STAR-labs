
import React from 'react';

const Services: React.FC = () => {
  const services = [
    {
      id: '01',
      title: 'Web & App Architecture',
      desc: 'Scalable, performant React and Node.js solutions built with precision for the modern web.',
      tags: ['React', 'TypeScript', 'Cloud Native']
    },
    {
      id: '02',
      title: 'Digital Transformation',
      desc: 'Modernizing legacy systems with cutting-edge workflows and automated research pipelines.',
      tags: ['AI Integration', 'Automation', 'Consulting']
    },
    {
      id: '03',
      title: 'Innovation R&D',
      desc: 'Bespoke research into emerging technologies like Generative AI and IoT lifestyle tools.',
      tags: ['R&D', 'Prototyping', 'Future-Tech']
    },
    {
      id: '04',
      title: 'Enterprise Security',
      desc: 'Robust, zero-trust infrastructure to protect your most valuable digital assets.',
      tags: ['Encryption', 'Audit', 'DevSecOps']
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-24">
      <div className="mb-20 space-y-4">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight uppercase">Services & <br /><span className="text-slate-500">Expertise</span></h2>
        <div className="w-24 h-1 bg-white"></div>
      </div>

      <div className="grid md:grid-cols-2 gap-px bg-slate-800">
        {services.map((s) => (
          <div key={s.id} className="bg-black p-12 group hover:bg-slate-900/40 transition-all duration-500 relative">
            <div className="mb-8 text-5xl font-mono text-slate-800 group-hover:text-slate-700 transition-colors">
              {s.id}
            </div>
            <h3 className="text-2xl font-bold mb-4 uppercase tracking-wider">{s.title}</h3>
            <p className="text-slate-400 mb-8 leading-relaxed max-w-sm">
              {s.desc}
            </p>
            <div className="flex flex-wrap gap-2">
              {s.tags.map(t => (
                <span key={t} className="text-[10px] font-mono border border-slate-800 px-3 py-1 text-slate-500 group-hover:border-slate-600 transition-all">
                  {t}
                </span>
              ))}
            </div>
            <div className="absolute bottom-8 right-8 opacity-0 group-hover:opacity-100 transition-opacity transform translate-x-4 group-hover:translate-x-0">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-32 glass-card p-12 text-center space-y-8">
        <h3 className="text-3xl font-bold uppercase tracking-widest">Ready to transform?</h3>
        <p className="text-slate-400 max-w-2xl mx-auto">
          Every great transformation begins with a single conversation. Our engineers are ready to build your vision.
        </p>
        <button className="px-10 py-4 bg-white text-black font-bold tracking-widest hover:bg-slate-200 transition-all">
          BOOK A CONSULTATION
        </button>
      </div>
    </div>
  );
};

export default Services;
