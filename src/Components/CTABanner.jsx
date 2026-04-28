import React from 'react';
import { Link } from 'react-router-dom';

const CTABanner = () => {
  return (
    <section className="relative py-20 px-6 overflow-hidden bg-indigo-600 dark:bg-indigo-900">
      {/* Background decoration elements */}
      <div className="absolute top-0 left-1/4 w-72 h-72 bg-indigo-500 dark:bg-indigo-800 rounded-full mix-blend-multiply filter blur-3xl opacity-50 -translate-y-1/2" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-400 dark:bg-indigo-700 rounded-full mix-blend-multiply filter blur-3xl opacity-30 translate-y-1/3" />

      <div className="relative z-10 max-w-3xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
          Got something to build?
        </h2>

        <p className="text-lg md:text-xl text-white/80 dark:text-indigo-100 mb-10 leading-relaxed max-w-2xl mx-auto">
          Describe what you need. We will tell you if and how we can help-no sales pitch, no commitment required.
        </p>

        <div className="flex flex-col items-center">
          <Link 
            to="/contact"
            className="inline-block px-8 py-4 bg-white text-indigo-600 dark:text-indigo-900 font-bold text-base rounded-full shadow-lg hover:bg-slate-50 dark:hover:bg-slate-100 transition-colors duration-200"
          >
            Start the Conversation
          </Link>
          
          {/* Compliance Pass: Clear response time stated */}
          <span className="mt-5 text-sm text-indigo-200 dark:text-indigo-300 font-medium">
            We aim to respond within 1 business day.
          </span>
        </div>
      </div>
    </section>
  );
};

export default CTABanner;