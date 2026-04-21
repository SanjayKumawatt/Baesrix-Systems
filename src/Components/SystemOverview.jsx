import React from 'react';
import { motion } from 'framer-motion';
import { Database, Workflow, FileText, BarChart3 } from 'lucide-react';

const features = [
  {
    id: 1,
    icon: Workflow,
    text: 'Continuous data flow between platforms'
  },
  {
    id: 2,
    icon: Database,
    text: 'Reduction of repetitive manual work'
  },
  {
    id: 3,
    icon: FileText,
    text: 'Structured handling of business documents and records'
  },
  {
    id: 4,
    icon: BarChart3,
    text: 'Better visibility into operations through unified reporting'
  }
];

const SystemOverview = () => {
  return (
    <section className="py-24 px-6 bg-slate-50 dark:bg-slate-950">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-6">
            System Overview
          </h2>

          <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
            Baesrix is developing an internal system that connects different business functions-CRM, operations, and data processing-into a single coordinated environment.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {features.map((item) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="flex items-start gap-4 p-6 rounded-2xl border border-slate-200 dark:border-slate-700/80 bg-white dark:bg-slate-900 shadow-sm"
              >
                <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-indigo-100 dark:bg-indigo-500/10">
                  <Icon className="text-indigo-600 dark:text-indigo-400" size={24} />
                </div>

                <p className="text-slate-700 dark:text-slate-300">
                  {item.text}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Paragraph */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto text-slate-600 dark:text-slate-300 text-lg leading-relaxed"
        >
          The system is designed to handle increasing data, users, and integrations without requiring constant restructuring.
        </motion.p>

      </div>
    </section>
  );
};

export default SystemOverview;