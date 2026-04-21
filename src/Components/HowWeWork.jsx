import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, FileText, Rocket } from 'lucide-react';

const steps = [
  {
    id: 1,
    num: '01',
    icon: MessageSquare,
    title: 'You describe the problem',
    description: 'Tell us what you are trying to fix or build. No brief template, no RFP required - a plain message works. We will set up a direct call with the developers who will actually write the code to discuss your business goals, technical constraints, and long-term vision. We focus on understanding the root problem before suggesting any architecture.'
  },
  {
    id: 2,
    num: '02',
    icon: FileText,
    title: 'We scope it honestly',
    description: 'We come back with what we think it takes - time, approach, and cost. No padding, no vague retainers. You receive a transparent technical blueprint that outlines the exact stack, milestones, and deliverables. You will know exactly what the project entails and what you are paying for before any commitment is made.'
  },
  {
    id: 3,
    num: '03',
    icon: Rocket,
    title: 'We build and deliver',
    description: 'Work starts with a clear, agreed-upon scope. You get updates as the project progresses, not a big reveal at the end. We build in fast, iterative cycles, giving you access to staging environments along the way. Your feedback is integrated in real-time, ensuring the final product matches your exact operational needs without surprises.'
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  show: { 
    opacity: 1, 
    x: 0, 
    transition: { duration: 0.6, ease: 'easeOut' } 
  }
};

const HowWeWork = () => {
  return (
    <section className="py-24 px-6 bg-slate-50 dark:bg-slate-950 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-center max-w-2xl mx-auto mb-20"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-5 tracking-tight">
            How systems are introduced
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300">
            We begin by understanding existing workflows and data movement. From there, we map how systems should interact, define integration points, and implement the required components in structured phases.
          </p>
        </motion.div>

        <div className="relative max-w-6xl mx-auto">
          {/* Connector Lines */}
          <div className="absolute inset-0 pointer-events-none">
            {/* Desktop Line */}
            <div className="hidden md:block absolute top-[5.25rem] left-[16.66%] right-[16.66%] border-t-[3px] border-dashed border-slate-300 dark:border-slate-700/60" />
            
            {/* Mobile Line */}
            <div className="md:hidden absolute top-[6rem] bottom-[6rem] left-[2.4rem] border-l-[3px] border-dashed border-slate-300 dark:border-slate-700/60" />
          </div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-3 gap-14 md:gap-8 relative z-10"
          >
            {steps.map((step) => {
              const Icon = step.icon;
              return (
                <motion.div 
                  key={step.id} 
                  variants={itemVariants}
                  className="flex flex-row md:flex-col items-start md:items-center gap-6 md:gap-0 group"
                >
                  <div className="flex flex-col items-center shrink-0 w-20 md:w-full md:mb-8">
                    <span className="text-2xl md:text-3xl font-black text-indigo-600 dark:text-indigo-400 mb-4 tracking-tighter">
                      {step.num}
                    </span>

                    <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-white dark:bg-slate-900 border-2 border-slate-200 dark:border-slate-700/80 shadow-sm flex items-center justify-center transition-all duration-300 group-hover:scale-105 group-hover:border-indigo-300 dark:group-hover:border-indigo-500/50 dark:group-hover:bg-indigo-500/10 hover:shadow-indigo-500/10">
                      <Icon className="text-indigo-600 dark:text-indigo-400" size={28} strokeWidth={2} />
                    </div>
                  </div>

                  <div className="pt-2 md:pt-0 md:text-center flex-1">
                    <h3 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white mb-3 md:mb-4">
                      {step.title}
                    </h3>
                    <p className="text-sm md:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default HowWeWork;