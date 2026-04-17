import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Eye, Minimize2, Handshake } from 'lucide-react';

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
};

export const AboutUsPage = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 pt-32 pb-24 selection:bg-indigo-100 selection:text-indigo-900 dark:selection:bg-indigo-900/50 dark:selection:text-indigo-100">
      
      {/* Hero Section - Editorial Style */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        className="max-w-4xl mx-auto px-6 text-center mb-16"
      >
        <span className="inline-block py-1.5 px-4 rounded-full bg-indigo-50 dark:bg-indigo-500/10 text-indigo-700 dark:text-indigo-300 text-sm font-bold tracking-wide border border-indigo-100 dark:border-indigo-500/20 mb-8">
          THE FOUNDATIONAL PROBLEM
        </span>
        <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold text-slate-900 dark:text-white mb-8 tracking-tight leading-[1.05]">
          Most software projects fail quietly.
        </h1>
        <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 leading-relaxed max-w-3xl mx-auto">
          Not with a crash - with a slow drift. Scope that was never clear. Estimates that were optimistic on purpose. Developers who never spoke to the person with the actual problem. We started Baesrix because we were tired of watching that pattern repeat. We are building an alternative model: direct communication, transparent scoping, and engineering rigor from day one.
        </p>
      </motion.div>

      {/* Hero Image */}
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
        className="max-w-7xl mx-auto px-6 mb-24 lg:mb-32"
      >
        <div className="w-full aspect-[21/9] md:aspect-[21/8] rounded-2xl md:rounded-[2rem] overflow-hidden border border-slate-200 dark:border-slate-800 shadow-2xl shadow-slate-200/50 dark:shadow-none">
          <img 
            src="https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
            alt="Clean, minimal workspace representing focused engineering" 
            className="w-full h-full object-cover"
          />
        </div>
      </motion.div>

      {/* Section 2: What Baesrix is */}
      <section className="py-20 bg-slate-50 dark:bg-slate-900/30 border-y border-slate-200 dark:border-slate-800/60">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center"
          >
            <motion.div variants={itemVariants}>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white leading-tight tracking-tight">
                A small team. <br className="hidden lg:block" />
                <span className="text-indigo-600 dark:text-indigo-400">On purpose.</span>
              </h2>
            </motion.div>
            
            <motion.div variants={itemVariants} className="flex flex-col gap-6 text-base md:text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
              <p>
                BAESRIX TECH (OPC) PRIVATE LIMITED is a focused engineering company incorporated in Andhra Pradesh. We are building a practice around three core things: Salesforce optimization, modern web applications, and practical AI integrations. 
              </p>
              <p>
                A small team means every client engagement gets real, senior attention - not a junior developer handed a brief by an account manager who does not understand the code. We are deliberately structuring our operations to avoid the bloated hierarchies of traditional tech agencies.
              </p>
              <p>
                We are actively partnering with businesses that recognize the value of robust, maintainable software infrastructure built correctly from the ground up, and who want to work directly with the people writing the code.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Section 3: Beliefs */}
      <section className="py-24 md:py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white tracking-tight">
              Our operating principles
            </h2>
          </motion.div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {/* Belief 1 */}
            <motion.div variants={itemVariants} className="p-8 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl">
              <div className="w-12 h-12 rounded-lg bg-indigo-50 dark:bg-indigo-500/10 flex items-center justify-center mb-6">
                <Eye className="text-indigo-600 dark:text-indigo-400" size={24} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                Clarity before code
              </h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm md:text-base">
                A project scoped badly will be built badly. We spend time on the problem before writing a line. There is no substitute for understanding the business process before attempting to automate it.
              </p>
            </motion.div>

            {/* Belief 2 */}
            <motion.div variants={itemVariants} className="p-8 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl">
              <div className="w-12 h-12 rounded-lg bg-indigo-50 dark:bg-indigo-500/10 flex items-center justify-center mb-6">
                <Minimize2 className="text-indigo-600 dark:text-indigo-400" size={24} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                Small is a feature
              </h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm md:text-base">
                We do not scale the team to seem bigger. You work directly with the people building your product. This eliminates the communication gaps caused by account managers and non-technical liaisons.
              </p>
            </motion.div>

            {/* Belief 3 */}
            <motion.div variants={itemVariants} className="p-8 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl">
              <div className="w-12 h-12 rounded-lg bg-indigo-50 dark:bg-indigo-500/10 flex items-center justify-center mb-6">
                <Handshake className="text-indigo-600 dark:text-indigo-400" size={24} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                Honest over impressive
              </h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm md:text-base">
                We would rather tell you something cannot be done in your budget than overpromise and underdeliver. Trust is built on realistic expectations and transparent constraints, not sales pitches.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Section 4: The Details */}
      <section className="py-20 bg-slate-50 dark:bg-slate-900/30 border-y border-slate-200 dark:border-slate-800/60 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-10">
              The details
            </h2>
            
            <div className="bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-2xl overflow-hidden shadow-sm">
              <dl className="divide-y divide-slate-200 dark:divide-slate-800">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 px-6 py-5 sm:p-6">
                  <dt className="text-sm font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wide mt-0.5">Full name</dt>
                  <dd className="sm:col-span-2 text-base font-semibold text-slate-900 dark:text-white">BAESRIX TECH (OPC) PRIVATE LIMITED</dd>
                </div>
              
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 px-6 py-5 sm:p-6">
                  <dt className="text-sm font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wide mt-0.5">State</dt>
                  <dd className="sm:col-span-2 text-base font-medium text-slate-900 dark:text-white">Andhra Pradesh, India</dd>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 px-6 py-5 sm:p-6 bg-slate-50/50 dark:bg-slate-900/20">
                  <dt className="text-sm font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wide mt-0.5">Activity</dt>
                  <dd className="sm:col-span-2 text-base font-medium text-slate-900 dark:text-white">IT related services</dd>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 px-6 py-5 sm:p-6">
                  <dt className="text-sm font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wide mt-0.5">Domain</dt>
                  <dd className="sm:col-span-2 text-base font-medium text-indigo-600 dark:text-indigo-400">
                    <a href="https://baesrixsystems.in" target="_blank" rel="noopener noreferrer" className="hover:underline">baesrixsystems.in</a>
                  </dd>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 px-6 py-5 sm:p-6 bg-slate-50/50 dark:bg-slate-900/20">
                  <dt className="text-sm font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wide mt-0.5">Email</dt>
                  <dd className="sm:col-span-2 text-base font-medium text-indigo-600 dark:text-indigo-400">
                    <a href="mailto:contact@baesrixsystems.in" className="hover:underline">contact@baesrixsystems.in</a>
                  </dd>
                </div>
              </dl>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Bottom CTA */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl mx-auto px-6 text-center mt-32"
      >
        <h3 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-8">
          If what you read here makes sense to you, let us talk.
        </h3>
        <Link 
          to="/contact"
          className="inline-block px-8 py-4 bg-indigo-600 text-white font-bold text-base rounded-full hover:bg-indigo-700 transition-colors duration-200 shadow-lg shadow-indigo-600/20"
        >
          Start the Conversation
        </Link>
      </motion.div>

    </div>
  );
};

export default AboutUsPage;