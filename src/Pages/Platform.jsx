import React from 'react';
import { 
  Database, 
  Workflow, 
  Sparkles, 
  Puzzle, 
  LayoutDashboard, 
  CheckCircle2, 
  Layers 
} from 'lucide-react';
import { Link } from 'react-router-dom';

const modules = [
  {
    id: 1,
    title: 'Core Module 1 - Unified Data Layer',
    icon: Database,
    description: 'The foundation of everything Baesrix does is data unification. Businesses today generate enormous amounts of data across disconnected systems. The Baesrix Unified Data Layer acts as a central repository and synchronization engine - ingesting data from CRMs, spreadsheets, third-party tools, APIs, and manual inputs, and normalizing everything into a single, consistent, queryable data environment.',
    capabilities: [
      'Real-time data ingestion from multiple sources simultaneously',
      'Automatic normalization and deduplication of business records',
      'Structured schema management with support for custom fields and entities',
      'Secure, compliant data storage on cloud infrastructure with role-based access controls',
      'API-first design enabling integration with any existing business system'
    ]
  },
  {
    id: 2,
    title: 'Core Module 2 - Workflow Automation Engine',
    icon: Workflow,
    description: "Manual, repetitive processes are one of the largest hidden costs in any business. The Baesrix Workflow Automation Engine enables businesses to design, deploy, and manage complex multi-step workflows without writing code. From simple task assignments to sophisticated conditional logic chains, the engine handles the operational overhead so teams don't have to.",
    capabilities: [
      'Visual workflow builder with drag-and-drop interface',
      'Trigger-based automation responding to data events, time schedules, or user actions',
      'Conditional branching logic with multi-path routing',
      'Cross-module automation connecting CRM data, internal tools, and AI outputs',
      'Full audit trail and version history for every workflow'
    ]
  },
  {
    id: 3,
    title: 'Core Module 3 - AI Processing Layer',
    icon: Sparkles,
    description: 'Baesrix embeds AI capabilities directly into the operational fabric of the platform - not as an add-on, but as a core functional layer. The AI Processing Layer allows businesses to extract intelligence from their data, automate complex decision-making, and interact with their systems using natural language.',
    capabilities: [
      'Integration with leading LLMs to enable natural language querying of business data',
      'AI-driven data classification, tagging, and enrichment pipelines',
      'Automated summarization and insight generation from operational data',
      'Predictive signals to surface trends, anomalies, and opportunities',
      'Customizable AI agents that can execute multi-step tasks on behalf of users'
    ]
  },
  {
    id: 4,
    title: 'Core Module 4 - Integration Framework',
    icon: Puzzle,
    description: 'No business operates in a vacuum, and Baesrix is designed to connect with the tools teams already rely on. The Integration Framework provides a comprehensive layer for connecting Baesrix to external systems - ensuring a smooth transition and avoiding the need to rip and replace existing investments.',
    capabilities: [
      'Pre-built connectors for popular CRMs, communication tools, and finance platforms',
      'REST API and webhook support for custom integrations with any system',
      'Bidirectional sync to ensure data consistency across all connected tools',
      'Integration health monitoring with automatic error detection and alerting',
      'OAuth-based authentication for secure third-party connections'
    ]
  },
  {
    id: 5,
    title: 'Core Module 5 - Unified Dashboard',
    icon: LayoutDashboard,
    description: 'Business leaders need real-time visibility to make confident decisions. The Baesrix Unified Dashboard consolidates operational data from every module and connected tool into a single, configurable command center. No more switching between tabs or waiting for manual reports - everything that matters is visible, live, in one place.',
    capabilities: [
      'Customizable dashboard widgets for teams, roles, and individual users',
      'Real-time KPI tracking across CRM, operations, and automation modules',
      'Cross-functional reporting that surfaces insights from combined data sources',
      'Drill-down capability from high-level metrics to granular records',
      'Mobile-responsive design for on-the-go visibility'
    ]
  }
];

const PlatformPage = () => {
  return (
    <div className="bg-white dark:bg-slate-950 min-h-screen">
      {/* Hero Section */}
      <section className="py-24 px-6 border-b border-slate-100 dark:border-slate-900">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 rounded-full bg-indigo-50 dark:bg-indigo-900/20 text-indigo-600 dark:text-indigo-400 text-sm font-medium border border-indigo-100 dark:border-indigo-800/30">
            <Layers size={16} />
            Platform Architecture
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white mb-8">
            The Baesrix Platform
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-400 leading-relaxed">
            The Baesrix platform is a modular, cloud-native system composed of five tightly integrated core modules. Each module is independently powerful yet designed to work together as a unified whole - creating a compounding operational advantage for every business that uses the platform.
          </p>
        </div>
      </section>

      {/* Modules Section */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto space-y-20">
          {modules.map((module) => (
            <div key={module.id} className="relative group">
              <div className="flex flex-col lg:flex-row gap-12 items-start">
                
                {/* Icon & Title Area */}
                <div className="lg:w-1/3 sticky top-24">
                  <div className="w-16 h-16 rounded-2xl bg-indigo-600 text-white flex items-center justify-center mb-6 shadow-lg shadow-indigo-200 dark:shadow-none">
                    <module.icon size={32} />
                  </div>
                  <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                    {module.title}
                  </h2>
                  <div className="h-1 w-20 bg-indigo-600 rounded-full"></div>
                </div>

                {/* Content Area */}
                <div className="lg:w-2/3">
                  <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed mb-8">
                    {module.description}
                  </p>

                  <div className="bg-slate-50 dark:bg-slate-900/50 rounded-2xl p-8 border border-slate-100 dark:border-slate-800">
                    <h3 className="text-sm font-bold uppercase tracking-widest text-slate-500 dark:text-slate-500 mb-6">
                      Key Capabilities
                    </h3>
                    <ul className="grid grid-cols-1 gap-4">
                      {module.capabilities.map((cap, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <CheckCircle2 className="text-indigo-600 dark:text-indigo-400 mt-1 flex-shrink-0" size={18} />
                          <span className="text-slate-600 dark:text-slate-400 text-base">
                            {cap}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

              </div>
              
              {/* Divider for all but last item */}
              {module.id !== 5 && (
                <div className="hidden lg:block absolute -bottom-10 left-0 w-full h-px bg-slate-100 dark:bg-slate-900"></div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Final CTA-style Footer for the Page */}
      <section className="py-20 px-6 bg-slate-50 dark:bg-slate-900/30 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
            Ready to unify your operations?
          </h2>
          <p className="text-slate-600 dark:text-slate-400 mb-8">
            Baesrix is being built to handle the complexity so you can focus on growth.
          </p>
          <Link to={"/contact"} className="px-8 py-3 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition-colors">
            Join the Waitlist
          </Link>
        </div>
      </section>
    </div>
  );
};

export default PlatformPage;