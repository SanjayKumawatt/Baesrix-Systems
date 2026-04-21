import React from 'react';
import { motion } from 'framer-motion';
import { Users, Shield, Layers, Clock } from 'lucide-react';

const differentiators = [
  {
    id: 1,
    icon: Users,
    title: 'Direct communication',
    description: 'You talk directly to the person writing your code. Always. We eliminate the friction of account managers and non-technical liaisons, meaning your requirements are understood immediately and implemented without translation errors. We value direct developer-to-client technical syncs.'
  },
  {
    id: 2,
    icon: Shield,
    title: 'No inflated estimates',
    description: 'Scope is defined clearly before work starts. No surprise invoices, no hidden padding. We believe in transparent pricing models where you know exactly what you are paying for and what the tangible deliverables will be. If it takes less time, you pay less.'
  },
  {
    id: 3,
    icon: Layers,
    title: 'Full stack delivery',
    description: 'Salesforce implementations, modern React/Node web applications, and LLM AI integrations all live under one roof. We handle the entire tech ecosystem so you don\'t have to manage multiple vendors, resolve cross-team conflicts, or worry about fragile handoff gaps between stacks.'
  },
  {
    id: 4,
    icon: Clock,
    title: 'Startup pace',
    description: 'We move fast because we are not waiting for internal approvals or navigating corporate red tape. We employ lean methodologies that actually mean being agile-focusing on rapid iterations, continuous deployment, and getting your product to market or into your users\' hands faster.'
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, x: 20 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: 'easeOut' }
  }
};

const leftVariants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' }
  }
};

const WhyBaesrix = () => {
  return (
    <section className="py-24 px-6 bg-white dark:bg-slate-950">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">

          {/* Left Column - Editorial Content */}
          <motion.div
            variants={leftVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="lg:col-span-5 flex flex-col lg:sticky lg:top-32 h-fit"
          >
            <div className="mb-8">
              <span className="text-xs font-extrabold uppercase tracking-widest text-indigo-600 dark:text-indigo-400 mb-3 block">
                Why work with us
              </span>
              <p className="text-lg font-medium text-slate-500 dark:text-slate-400 leading-snug">
                Small team. Direct access. No account managers between you and the people building your product.
              </p>
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-6 tracking-tight leading-[1.1]">
              We operate as a focused engineering unit, working directly on system design and execution without unnecessary layers between planning and development.            </h2>

            <p className="text-base text-slate-600 dark:text-slate-300 mb-10 leading-relaxed">
              Most software shops grow their team and add layers of management. We stay small on purpose - so every project gets senior attention, not delegation. When you partner with Baesrix, you are bypassing the bloat of traditional agencies. We build bespoke systems tailored to your exact operational needs without the overhead that slows development down.
            </p>

            <div className="w-full h-64 md:h-80 rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-lg shadow-slate-200/50 dark:shadow-none relative">
              <div className="absolute inset-0 bg-slate-900/10 dark:bg-slate-950/40 z-10 mix-blend-multiply pointer-events-none"></div>
              <img
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                alt="Clean code workspace"
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105 relative z-0"
              />
            </div>
          </motion.div>

          {/* Right Column - Differentiators List */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="lg:col-span-7 flex flex-col"
          >
            <div className="flex flex-col border-t border-slate-200 dark:border-slate-800">
              {differentiators.map((item) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.id}
                    variants={itemVariants}
                    className="flex gap-6 py-10 border-b border-slate-200 dark:border-slate-800 last:border-0 group"
                  >
                    <div className="shrink-0 mt-1">
                      <div className="w-12 h-12 rounded-xl bg-slate-50 dark:bg-slate-900 border border-transparent dark:border-slate-800 flex items-center justify-center group-hover:bg-indigo-50 dark:group-hover:bg-indigo-500/10 dark:group-hover:border-indigo-500/30 transition-all duration-300">
                        <Icon className="text-indigo-600 dark:text-indigo-400" size={24} strokeWidth={2} />
                      </div>
                    </div>

                    <div>
                      <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                        {item.title}
                      </h3>
                      <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default WhyBaesrix;