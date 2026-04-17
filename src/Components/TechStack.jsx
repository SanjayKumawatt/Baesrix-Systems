import React from 'react';
import { motion } from 'framer-motion';

const techGroups = [
  {
    id: 1,
    title: 'Salesforce',
    tags: ['Apex', 'LWC', 'Flow Builder', 'SOQL', 'Sales Cloud', 'Service Cloud', 'Einstein'],
    pillClass: 'bg-indigo-100 hover:bg-indigo-200 text-indigo-800 dark:bg-indigo-500/10 dark:hover:bg-indigo-500/20 dark:text-indigo-300 border border-transparent dark:border-indigo-500/20 transition-all duration-200'
  },
  {
    id: 2,
    title: 'Web & Backend',
    tags: ['React', 'TypeScript', 'Node.js', 'Tailwind CSS', 'REST APIs', 'PostgreSQL', 'Supabase'],
    pillClass: 'bg-slate-100 hover:bg-slate-200 text-slate-800 dark:bg-slate-800 dark:hover:bg-slate-700 dark:text-slate-200 border border-transparent dark:border-slate-700 transition-all duration-200'
  },
  {
    id: 3,
    title: 'AI & Tooling',
    tags: ['OpenAI API', 'LangChain', 'Python', 'Vercel', 'Git', 'VS Code', 'Postman'],
    pillClass: 'bg-purple-100 hover:bg-purple-200 text-purple-800 dark:bg-purple-500/10 dark:hover:bg-purple-500/20 dark:text-purple-300 border border-transparent dark:border-purple-500/20 transition-all duration-200'
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const pillVariants = {
  hidden: { opacity: 0, y: 15, scale: 0.95 },
  show: { 
    opacity: 1, 
    y: 0, 
    scale: 1,
    transition: { duration: 0.4, ease: 'easeOut' } 
  }
};

const TechStack = () => {
  return (
    <section className="py-24 px-6 bg-white dark:bg-slate-950">
      <div className="max-w-5xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4 tracking-tight">
            Tools we work with
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300">
            No stack evangelism - we use what is right for the job.
          </p>
        </motion.div>

        <div className="flex flex-col gap-12">
          {techGroups.map((group) => (
            <div key={group.id} className="flex flex-col items-center">
              <h3 className="text-sm font-bold uppercase tracking-widest text-slate-400 dark:text-slate-400 mb-6 text-center">
                {group.title}
              </h3>
              
              <motion.div 
                variants={containerVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-50px" }}
                className="flex flex-wrap justify-center gap-3 md:gap-4 max-w-3xl"
              >
                {group.tags.map((tag, index) => (
                  <motion.span
                    key={index}
                    variants={pillVariants}
                    className={`px-5 py-2 rounded-full text-sm font-medium select-none ${group.pillClass}`}
                  >
                    {tag}
                  </motion.span>
                ))}
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;