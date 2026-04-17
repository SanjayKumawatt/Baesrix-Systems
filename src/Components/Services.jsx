import React from 'react';
import { motion } from 'framer-motion';
import { Cloud, Code2, Sparkles, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
  {
    id: 1,
    icon: Cloud,
    title: 'Salesforce Services',
    subtitle: 'Admin, Development & Automation',
    description: 'Stop fighting your CRM. We optimize Salesforce to match your actual business processes, ensuring clean data, automated workflows, and dashboards that leadership can actually trust.',
    features: [
      'Salesforce Administration & User Mgmt',
      'Custom Development (Apex, LWC)',
      'Flow Automation & Process Optimization',
      'Reports, Dashboards & Data Clean-up',
      'Third-party Integrations (API)'
    ],
    pricing: [
      { label: 'Admin Rate', value: '₹1,500 / hour' },
      { label: 'Dev Rate', value: 'Starting ₹2,500 / hour' },
      { label: 'Engagement', value: 'Min. 5 hours' }
    ],
    buttonText: 'Request Support',
    footerText: 'Direct access to certified experts.'
  },
  {
    id: 2,
    icon: Code2,
    title: 'Web App Development',
    subtitle: 'Modern React & TypeScript Systems',
    description: 'We build fast, maintainable web applications designed for scale. Whether it\'s an internal tool to replace spreadsheets or a customer-facing portal, you get clean code and complete documentation.',
    features: [
      'Custom React + TypeScript Applications',
      'Internal Business Tools & Dashboards',
      'API Development & Integration',
      'Performance Optimization & SEO',
      'Legacy Code Refactoring'
    ],
    pricing: [
      { label: 'Hourly Rate', value: 'Starting ₹1,300 / hour' },
      { label: 'Engagement', value: 'Min. 10 hours or Fixed Scope' }
    ],
    buttonText: 'Discuss Your Build',
    footerText: 'Full source code ownership included.'
  },
  {
    id: 3,
    icon: Sparkles,
    title: 'AI App Services',
    subtitle: 'Practical Automation & Assistants',
    description: 'Move beyond hype with AI tools that actually save time. We integrate LLMs into your existing workflows to automate support, summarize data, and unlock knowledge from your internal docs.',
    features: [
      'Custom AI Chatbots (Internal/External)',
      'Knowledge Base Q&A Systems',
      'Document Summarization & Extraction',
      'Workflow Automation with AI Agents',
      'Integration into existing Web/SaaS apps'
    ],
    pricing: [
      { label: 'Hourly Rate', value: 'Starting ₹2,500 / hour' },
      { label: 'Engagement', value: 'Min. 10 hours or Fixed Scope' }
    ],
    buttonText: 'Explore AI Solutions',
    footerText: 'Your private data stays private.'
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
  show: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.6, ease: 'easeOut' } 
  }
};

const ServicesOverview = () => {
  return (
    <section className="py-24 px-6 bg-slate-50 dark:bg-slate-950">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-5 tracking-tight">
            What we build
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400">
            Three focused areas. No bloat, no generalist promises.
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8"
        >
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.id}
                variants={cardVariants}
                className="flex flex-col bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-700/60 rounded-2xl p-8 transition-all duration-300 hover:shadow-xl hover:shadow-indigo-500/5 dark:hover:shadow-indigo-500/20"
              >
                {/* Header Icon */}
                <div className="w-14 h-14 rounded-xl bg-indigo-50 dark:bg-indigo-500/20 flex items-center justify-center mb-6">
                  <Icon className="text-indigo-600 dark:text-indigo-400" size={28} strokeWidth={2} />
                </div>
                
                {/* Titles */}
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-1">
                  {service.title}
                </h3>
                <p className="text-sm font-semibold text-indigo-600 dark:text-indigo-400 mb-4">
                  {service.subtitle}
                </p>
                
                {/* Description - Made slightly brighter in dark mode */}
                <p className="text-sm text-slate-600 dark:text-slate-300 mb-8 leading-relaxed">
                  {service.description}
                </p>

                {/* Features List */}
                <div className="mb-8">
                  <h4 className="text-[11px] font-bold text-slate-400 dark:text-slate-400 mb-4 uppercase tracking-wider">
                    WHAT WE OFFER:
                  </h4>
                  <ul className="space-y-3">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 dark:text-emerald-400 shrink-0 mt-0.5" strokeWidth={2.5} />
                        <span className="text-sm text-slate-600 dark:text-slate-300">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                {/* Spacer to push pricing to bottom */}
                <div className="flex-grow"></div>

                {/* Pricing Section */}
                <div className="pt-6 border-t border-slate-100 dark:border-slate-700/50">
                  <h4 className="text-[11px] font-bold text-slate-400 dark:text-slate-400 mb-4 uppercase tracking-wider">
                    PRICING:
                  </h4>
                  <div className="space-y-2 mb-6">
                    {service.pricing.map((price, idx) => (
                      <div key={idx} className="flex justify-between items-center text-sm">
                        <span className="text-slate-500 dark:text-slate-300">{price.label}</span>
                        <span className="font-bold text-slate-900 dark:text-white">{price.value}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA Button - Flat Matte Finish (No shiny effects) */}
                  <Link to={"/contact"}>
                  <button className="w-full py-3 px-4 bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600 text-white text-sm font-bold rounded-lg transition-colors duration-200 mb-3">
                    {service.buttonText}
                  </button>
                  </Link>
                  {/* Footer Text */}
                  <p className="text-center text-[11px] text-slate-400 dark:text-slate-500">
                    {service.footerText}
                  </p>
                </div>

              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesOverview;