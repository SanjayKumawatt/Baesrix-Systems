import React from 'react';
import { MessageSquare, FileText, Rocket } from 'lucide-react';

const steps = [
  {
    id: 1,
    num: '01',
    icon: MessageSquare,
    title: 'Defining the Architecture',
    description: 'Tell us what you are trying to build. We will set up a direct technical sync with the developers who will write your code. Our first step will be to understand your root problem, business constraints, and data movement before suggesting any technical stack.'
  },
  {
    id: 2,
    num: '02',
    icon: FileText,
    title: 'Transparent Scoping',
    description: 'We will outline exactly what it takes-time, approach, and cost. You will receive a technical blueprint detailing the exact stack, milestones, and deliverables. No vague retainers. You will know exactly what the build entails before any commitment.'
  },
  {
    id: 3,
    num: '03',
    icon: Rocket,
    title: 'Iterative Engineering',
    description: 'Once the scope is agreed upon, development will begin in fast, iterative cycles. You will be given access to staging environments along the way to test real-time progress. Feedback will be integrated directly, ensuring the system aligns with your operational needs.'
  }
];

const HowWeWork = () => {
  return (
    <section className="py-24 px-6 bg-slate-50 dark:bg-slate-950 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        <div className="text-center max-w-2xl mx-auto mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-5 tracking-tight">
            Our Engineering Process
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300">
            How we will map your requirements, define integration points, and implement the system in structured phases.
          </p>
        </div>

        <div className="relative max-w-6xl mx-auto">
          {/* Connector Lines */}
          <div className="absolute inset-0 pointer-events-none">
            {/* Desktop Line */}
            <div className="hidden md:block absolute top-[5.25rem] left-[16.66%] right-[16.66%] border-t-[3px] border-dashed border-slate-300 dark:border-slate-700/60" />
            
            {/* Mobile Line */}
            <div className="md:hidden absolute top-[6rem] bottom-[6rem] left-[2.4rem] border-l-[3px] border-dashed border-slate-300 dark:border-slate-700/60" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-14 md:gap-8 relative z-10">
            {steps.map((step) => {
              const Icon = step.icon;
              return (
                <div 
                  key={step.id} 
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
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};

export default HowWeWork;