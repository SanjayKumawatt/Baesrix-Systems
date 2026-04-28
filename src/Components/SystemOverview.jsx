import React from 'react';
import { Database, Workflow, Sparkles, Layout, BarChart3 } from 'lucide-react';

const features = [
  {
    id: 1,
    icon: Database,
    text: 'Connect CRM, operations, and internal tools into a single data environment, eliminating silos and ensuring every team works from the same source of truth.'
  },
  {
    id: 2,
    icon: Workflow,
    text: 'Automate workflows end-to-end without manual intervention - from lead qualification to task assignment to reporting - freeing teams to focus on high-value work.'
  },
  {
    id: 3,
    icon: Sparkles,
    text: 'Process and structure unstructured business data using embedded AI, transforming raw inputs into actionable intelligence.'
  },
  {
    id: 4,
    icon: Layout,
    text: 'Deploy and manage custom internal tools tailored to the specific needs of each business without requiring heavy engineering resources.'
  },
  {
    id: 5,
    icon: BarChart3,
    text: 'Monitor complete operations from a unified dashboard, providing real-time visibility across every department and function.'
  }
];

const SystemOverview = () => {
  return (
    <section className="py-24 px-6 bg-slate-50 dark:bg-slate-950">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-6">
            One Platform. Complete Operational Control.
          </h2>

          <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
            The Baesrix platform is designed around the belief that a business should not have to maintain a patchwork of tools to run efficiently. Instead, everything - from customer relationship management to workflow automation to data intelligence - should live in one cohesive environment.
          </p>
          
          <p className="mt-8 text-xl font-semibold text-indigo-600 dark:text-indigo-400">
            With Baesrix, businesses will be able to:
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                className="flex flex-col items-start gap-4 p-8 rounded-2xl border border-slate-200 dark:border-slate-700/80 bg-white dark:bg-slate-900 shadow-sm transition-all hover:shadow-md hover:border-indigo-200 dark:hover:border-indigo-800/50"
              >
                <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center rounded-xl bg-indigo-100 dark:bg-indigo-500/10">
                  <Icon className="text-indigo-600 dark:text-indigo-400" size={24} />
                </div>

                <p className="text-slate-700 dark:text-slate-300 leading-relaxed text-sm md:text-base">
                  {item.text}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default SystemOverview;