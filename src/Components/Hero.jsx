import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center bg-slate-50 dark:bg-slate-950 px-6 pt-20">
      
      <div className="w-full max-w-4xl mx-auto text-center relative z-10">
        
        {/* Compliance: Honest stage indicator builds trust */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 mb-8 rounded-full bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 text-xs font-semibold tracking-wide border border-indigo-200 dark:border-indigo-800/50">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
          </span>
          Phase 1: Active Development
        </div>

        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.15]">
          Building the Operating System for Modern Businesses
        </h1>

        <p className="mt-6 text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed">
          Businesses today operate across dozens of disconnected software tools - CRMs, project managers, helpdesks, spreadsheets, and more. Each tool works in isolation, creating data silos, manual overhead, and fragmented decision-making. The result is wasted time, duplicated effort, and a growing operational debt that holds companies back from scaling effectively.
          <br /><br />
          <span className="font-semibold text-indigo-600 dark:text-indigo-400">Baesrix is building the solution.</span>
        </p>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 w-full">
          <Link 
            to="/contact" 
            className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-3.5 rounded-md bg-indigo-600 text-white font-medium text-base hover:bg-indigo-700 transition-colors duration-200"
          >
            Request Demo <ArrowRight size={18} />
          </Link>
          <Link 
            to="/about" 
            className="w-full sm:w-auto px-8 py-3.5 rounded-md bg-transparent text-slate-700 dark:text-slate-200 font-medium text-base border border-slate-300 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors duration-200 text-center"
          >
            Read Our Vision
          </Link>
        </div>
        
      </div>
    </section>
  );
};

export default Hero;