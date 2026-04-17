import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { AlertCircle, Layers, GitBranch, BrainCircuit, Users } from 'lucide-react';

const solutions = [
  {
    id: 1,
    icon: AlertCircle,
    title: 'Your Salesforce org has become a liability',
    description: 'It was set up years ago, nobody documented it, and now your team works around it instead of with it. You are dealing with broken automations, confusing validation rules, and custom objects that slow everything down. We audit what exists, remove technical debt that does not serve you, and rebuild the parts that should work better. We turn your CRM back into an asset rather than a daily frustration.',
    target: 'Sales teams, ops managers, and founders who inherited a broken CRM.',
    image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 2,
    icon: Layers,
    title: 'You need a web app but not a 6-month agency project',
    description: 'You have a clear scope, a real deadline, and no interest in paying for bloated project management layers, endless sprint ceremonies, or account handlers. We scope it, build it, and deliver it - with you involved directly with the developers throughout. We focus on clean architecture, modern React stacks, and practical deliverables that hit your timeline without compromising on code quality.',
    target: 'Startups and small businesses who know exactly what they want built.',
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 3,
    icon: GitBranch,
    title: 'Your data sits in systems that do not talk to each other',
    description: 'Your CRM data is in one place, operations in another, and finance is tracking everything in a massive, fragile spreadsheet. This leads to human error, duplicated work, and blind spots. We build secure API integrations, webhooks, and automated data pipelines that connect your tools seamlessly - so your team stops doing manual data entry and starts focusing on actual work.',
    target: 'Operations teams tired of copying and pasting data between platforms.',
    image: 'https://images.unsplash.com/photo-1695668548342-c0c1ad479aee?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    id: 4,
    icon: BrainCircuit,
    title: 'You want AI in your workflow but do not know where to start',
    description: 'Not every business needs to train a custom model from scratch - most just need AI connected to the right place in their existing process. We cut through the hype. Whether it is extracting structured data from messy PDFs, setting up RAG (Retrieval-Augmented Generation) for your internal docs, or automating basic support triage, we identify where AI adds real value and build the integration cleanly.',
    target: 'Business owners curious about AI but highly skeptical of the hype-train.',
    image: 'https://plus.unsplash.com/premium_vector-1725576475744-53214953405c?q=80&w=725&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
};

export const SolutionsPage = () => {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 pt-32 pb-24 selection:bg-indigo-100 selection:text-indigo-900 dark:selection:bg-indigo-900/50 dark:selection:text-indigo-100">
      
      {/* Hero Section */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        className="max-w-4xl mx-auto px-6 text-center mb-24"
      >
        <span className="inline-block py-1.5 px-4 rounded-full bg-indigo-100 dark:bg-indigo-500/10 text-indigo-700 dark:text-indigo-300 text-sm font-bold tracking-wide border border-indigo-200 dark:border-indigo-500/20 mb-6">
          INDUSTRY SOLUTIONS
        </span>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 dark:text-white mb-8 tracking-tight leading-[1.1]">
          Problems we are built to solve.
        </h1>
        <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 leading-relaxed max-w-3xl mx-auto">
          Most software problems are not inherently technical - they are structural. Poor architecture, misaligned tools, and broken processes cause more friction than bad code. We work backwards from your operational bottlenecks, not forwards from a generic service menu, to build systems that actually fix the underlying issue.
        </p>
      </motion.div>

      {/* Solutions Grid */}
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12"
        >
          {solutions.map((solution) => {
            const Icon = solution.icon;
            return (
              <motion.div 
                key={solution.id}
                variants={cardVariants}
                className="flex flex-col bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:shadow-indigo-500/5 dark:hover:shadow-indigo-500/10 transition-all duration-300"
              >
                {/* Image Header */}
                <div className="w-full h-48 sm:h-56 relative overflow-hidden border-b border-slate-200 dark:border-slate-800">
                  <div className="absolute inset-0 bg-slate-900/10 dark:bg-slate-900/40 z-10 mix-blend-multiply"></div>
                  <img 
                    src={solution.image} 
                    alt={solution.title} 
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                  <div className="absolute top-6 left-6 z-20 w-12 h-12 rounded-xl bg-white dark:bg-slate-950 flex items-center justify-center shadow-lg">
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
                      <span className="font-semibold not-italic mr-1 text-slate-700 dark:text-slate-300">Who this is for:</span> 
                      {solution.target}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      {/* Bottom CTA */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl mx-auto px-6 text-center mt-32 bg-indigo-50 dark:bg-slate-900 border border-indigo-100 dark:border-slate-800 rounded-3xl p-12 md:p-16"
      >
        <h3 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-6">
          Recognise one of these?
        </h3>
        <p className="text-lg text-slate-600 dark:text-slate-400 mb-8">
          Stop patching over structural problems. Let's fix it properly.
        </p>
        <Link 
          to="/contact"
          className="inline-block px-8 py-4 bg-indigo-600 text-white font-bold text-base rounded-lg hover:bg-indigo-700 transition-colors duration-200"
        >
          Start the Conversation
        </Link>
        <p className="mt-5 text-sm text-slate-500 dark:text-slate-400 font-medium">
          We respond within one working day.
        </p>
      </motion.div>

    </div>
  );
};

export default SolutionsPage;