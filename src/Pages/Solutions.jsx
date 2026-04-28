import React from 'react';
import { Link } from 'react-router-dom';
import { AlertCircle, Layers, GitBranch, BrainCircuit, Users } from 'lucide-react';

const solutions = [
  {
    id: 1,
    icon: AlertCircle,
    title: 'Your Salesforce org has become a liability',
    description: 'It was set up years ago, documentation is missing, and now your team works around it instead of with it. You are dealing with broken automations, confusing validation rules, and custom objects that slow everything down. Our engineering process is designed to audit what exists, safely deprecate technical debt, and restructure the environment to function as an asset rather than a daily friction point.',
    target: 'Teams handling inherited, legacy CRM structures.',
    image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 2,
    icon: Layers,
    title: 'You need a system, not a 6-month bloated sprint',
    description: 'You have a clear scope and no interest in paying for heavy project management layers, endless sprint ceremonies, or non-technical account handlers. Our operational model is built to scope, build, and deploy software with you communicating directly with the developers. We focus on clean architecture and practical React stacks that hit deliverables without compromising on code quality.',
    target: 'Operations seeking direct developer execution.',
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 3,
    icon: GitBranch,
    title: 'Your data sits in isolated, disconnected platforms',
    description: 'Your CRM data is in one place, operations in another, and finance relies on a fragile spreadsheet. This leads to human error and data silos. Our technical capability focuses on architecting secure API integrations, webhooks, and automated data pipelines designed to connect fragmented tools seamlessly, eliminating manual data entry.',
    target: 'Teams relying on manual platform synchronization.',
    image: 'https://images.unsplash.com/photo-1695668548342-c0c1ad479aee?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    id: 4,
    icon: BrainCircuit,
    title: 'You want AI logic, but zero hype',
    description: 'Not every business needs to train a custom model from scratch-most require LLMs connected to specific bottlenecks in their existing process. Whether it involves extracting structured data from PDFs, designing RAG architecture for internal docs, or basic triage logic, our approach is to identify where AI computation adds measurable value and build the integration layer.',
    target: 'Businesses looking for functional, hype-free LLM integration.',
    image: 'https://plus.unsplash.com/premium_vector-1725576475744-53214953405c?q=80&w=725&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  }
];

export const SolutionsPage = () => {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 pt-32 pb-24 selection:bg-indigo-100 selection:text-indigo-900 dark:selection:bg-indigo-900/50 dark:selection:text-indigo-100">
      
      {/* Hero Section */}
      <div className="max-w-4xl mx-auto px-6 text-center mb-24">
        <span className="inline-block py-1.5 px-4 rounded-full bg-indigo-100 dark:bg-indigo-500/10 text-indigo-700 dark:text-indigo-300 text-sm font-bold tracking-wide border border-indigo-200 dark:border-indigo-500/20 mb-6">
          ENGINEERING SOLUTIONS
        </span>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 dark:text-white mb-8 tracking-tight leading-[1.1]">
          Problems we are architecting to solve.
        </h1>
        <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 leading-relaxed max-w-3xl mx-auto">
          The systems we are designing aim to address recurring operational gaps such as disconnected tools, manual data handling, and legacy technical debt.
        </p>
      </div>

      {/* Solutions Grid */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {solutions.map((solution) => {
            const Icon = solution.icon;
            return (
              <div 
                key={solution.id}
                className="flex flex-col bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl overflow-hidden shadow-sm transition-all duration-300"
              >
                {/* Image Header */}
                <div className="w-full h-48 sm:h-56 relative overflow-hidden border-b border-slate-200 dark:border-slate-800">
                  <div className="absolute inset-0 bg-slate-900/10 dark:bg-slate-900/40 z-10 mix-blend-multiply"></div>
                  <img 
                    src={solution.image} 
                    alt={solution.title} 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-6 left-6 z-20 w-12 h-12 rounded-xl bg-white dark:bg-slate-950 flex items-center justify-center shadow-md border border-slate-100 dark:border-slate-800">
                    <Icon className="text-indigo-600 dark:text-indigo-400" size={24} strokeWidth={2.5} />
                  </div>
                </div>

                {/* Content Body */}
                <div className="p-8 flex flex-col flex-grow">
                  <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 leading-snug">
                    {solution.title}
                  </h2>
                  
                  <p className="text-base text-slate-600 dark:text-slate-400 mb-8 leading-relaxed flex-grow">
                    {solution.description}
                  </p>

                  <div className="mt-auto pt-6 border-t border-slate-100 dark:border-slate-800/60 flex items-start gap-3">
                    <Users className="text-slate-400 shrink-0 mt-0.5" size={18} />
                    <p className="text-sm italic text-slate-500 dark:text-slate-400 leading-snug">
                      <span className="font-semibold not-italic mr-1 text-slate-700 dark:text-slate-300">Intended focus:</span> 
                      {solution.target}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="max-w-3xl mx-auto px-6 text-center mt-32 bg-indigo-50 dark:bg-slate-900 border border-indigo-100 dark:border-slate-800 rounded-3xl p-12 md:p-16">
        <h3 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-6">
          Recognize one of these issues?
        </h3>
        <p className="text-lg text-slate-600 dark:text-slate-400 mb-8">
          Stop patching over structural problems. Let's discuss an architectural fix.
        </p>
        <Link 
          to="/contact"
          className="inline-block px-8 py-4 bg-indigo-600 text-white font-bold text-base rounded-lg hover:bg-indigo-700 transition-colors duration-200"
        >
          Start the Conversation
        </Link>
        <p className="mt-5 text-sm text-slate-500 dark:text-slate-400 font-medium">
          We aim to respond within 1 business day.
        </p>
      </div>

    </div>
  );
};

export default SolutionsPage;