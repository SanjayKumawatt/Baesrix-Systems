import React from 'react';
import { Cloud, Code2, Sparkles, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
  {
    id: 1,
    icon: Cloud,
    title: 'Salesforce Services',
    subtitle: 'Admin, Development & Automation',
    description: 'We structure Salesforce environments where data flows cleanly, processes run automatically, and reporting reflects actual business activity.',
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
    buttonText: 'Discuss Requirements',
    footerText: 'Direct access to the development team.'
  },
  {
    id: 2,
    icon: Code2,
    title: 'Web App Development',
    subtitle: 'Modern React & TypeScript Systems',
    description: 'We engineer application layers that support internal operations and customer-facing systems, built to remain stable as complexity increases.',
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
    description: 'We integrate AI into operational workflows where it reduces manual effort-such as processing documents and structuring unorganized data.',
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

const ServicesOverview = () => {
  return (
    <section className="py-24 px-6 bg-slate-50 dark:bg-slate-950">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-5 tracking-tight">
            Core Capabilities
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400">
            The fundamental engineering services we provide to build and scale your technical infrastructure.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.id}
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
                
                {/* Description */}
                <p className="text-sm text-slate-600 dark:text-slate-300 mb-8 leading-relaxed">
                  {service.description}
                </p>

                {/* Features List */}
                <div className="mb-8">
                  <h4 className="text-[11px] font-bold text-slate-400 dark:text-slate-400 mb-4 uppercase tracking-wider">
                    TECHNICAL FOCUS:
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
                    ENGAGEMENT MODEL:
                  </h4>
                  <div className="space-y-2 mb-6">
                    {service.pricing.map((price, idx) => (
                      <div key={idx} className="flex justify-between items-center text-sm">
                        <span className="text-slate-500 dark:text-slate-300">{price.label}</span>
                        <span className="font-bold text-slate-900 dark:text-white">{price.value}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA Button */}
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

              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;