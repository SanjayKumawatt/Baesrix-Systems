import React from 'react';
import { Users, Shield, Layers, Clock } from 'lucide-react';

const differentiators = [
  {
    id: 1,
    icon: Users,
    title: 'Direct technical communication',
    description: 'You communicate directly with the engineers architecting your system. We eliminate account managers and non-technical liaisons, meaning your requirements are understood and implemented without translation gaps.'
  },
  {
    id: 2,
    icon: Shield,
    title: 'Transparent scoping',
    description: 'Scope is defined strictly before engineering begins. We operate on transparent pricing models so you know exactly what is being built and what the tangible deliverables are. No hidden padding.'
  },
  {
    id: 3,
    icon: Layers,
    title: 'Unified tech delivery',
    description: 'Salesforce structures, React/Node applications, and AI tool integrations are handled in a single environment. We manage the tech ecosystem so you do not have to worry about fragile handoffs between different vendors.'
  },
  {
    id: 4,
    icon: Clock,
    title: 'Lean execution pace',
    description: 'We move efficiently by stripping away corporate red tape. Our focus is on lean methodologies-rapid iterations, continuous deployment, and getting functional systems running quickly.'
  }
];

const WhyBaesrix = () => {
  return (
    <section className="py-24 px-6 bg-white dark:bg-slate-950">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">

          {/* Left Column - Editorial Content */}
          <div className="lg:col-span-5 flex flex-col lg:sticky lg:top-32 h-fit">
            <div className="mb-8">
              <span className="text-xs font-extrabold uppercase tracking-widest text-indigo-600 dark:text-indigo-400 mb-3 block">
                Operating Model
              </span>
              <p className="text-lg font-medium text-slate-500 dark:text-slate-400 leading-snug">
                Dedicated engineering. Direct access. No administrative layers between you and the product build.
              </p>
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-6 tracking-tight leading-[1.1]">
              We operate as a focused engineering unit, working directly on system design without unnecessary layers.
            </h2>

            <p className="text-base text-slate-600 dark:text-slate-300 mb-10 leading-relaxed">
              When you partner with Baesrix, you bypass the bloat of traditional agencies. We build bespoke systems tailored to your exact operational needs, maintaining a tight, engineering-first focus to keep development agile and accurate.
            </p>

            <div className="w-full h-64 md:h-80 rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-lg shadow-slate-200/50 dark:shadow-none relative">
              <div className="absolute inset-0 bg-slate-900/10 dark:bg-slate-950/40 z-10 mix-blend-multiply pointer-events-none"></div>
              <img
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                alt="Clean code workspace"
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105 relative z-0"
              />
            </div>
          </div>

          {/* Right Column - Differentiators List */}
          <div className="lg:col-span-7 flex flex-col">
            <div className="flex flex-col border-t border-slate-200 dark:border-slate-800">
              {differentiators.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.id}
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
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhyBaesrix;