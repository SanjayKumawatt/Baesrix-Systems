import React from 'react';
import { Link } from 'react-router-dom';
import { Database, Code2, Zap } from 'lucide-react';

const services = [
  {
    id: '01',
    title: 'Salesforce Infrastructure',
    heading: 'Architecting reliable CRM environments',
    description: 'We are designing implementation frameworks to prevent the common pitfalls of messy CRM orgs. Our engineering focus will be on building clean automations, eliminating technical debt, and structuring data models so that your Salesforce instance will function as a true, reliable single source of truth.',
    capabilities: [
      'CRM architecture planning',
      'Flow and automation structuring',
      'Third-party API integration',
      'Data model optimization',
      'Custom development (Apex/LWC)'
    ],
    tags: 'Apex · LWC · Flow Builder · Sales Cloud',
    icon: Database,
    image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    reversed: false
  },
  {
    id: '02',
    title: 'Application Engineering',
    heading: 'Web systems designed for scale',
    description: 'We are structuring our development process to engineer highly maintainable React and TypeScript applications. Our technical approach prioritizes clean component architecture and robust Node.js backends. Whether planning an internal enterprise portal or a core product interface, our intent is to deliver scalable codebases with full transparency.',
    capabilities: [
      'React + TypeScript frontends',
      'Node.js backend architecture',
      'RESTful API development',
      'PostgreSQL database design',
      'System performance planning'
    ],
    tags: 'React · TypeScript · Node.js · PostgreSQL · Supabase',
    icon: Code2,
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    reversed: true
  },
  {
    id: '03',
    title: 'Applied AI Integrations',
    heading: 'Wiring LLMs into actual workflows',
    description: 'Moving beyond standalone demos, we are building integration protocols to connect AI capabilities directly into existing business logic. We are currently developing frameworks for RAG-based knowledge retrieval and automated data extraction, aiming to make LLMs perform actual, practical heavy lifting for business operations.',
    capabilities: [
      'LLM protocol integration',
      'RAG knowledge base architecture',
      'Automated data pipelines',
      'Salesforce + AI combined logic',
      'Custom AI feature APIs'
    ],
    tags: 'OpenAI API · LangChain · Python',
    icon: Zap,
    image: 'https://images.unsplash.com/photo-1674027444485-cec3da58eef4?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    reversed: false
  }
];

export const ServicesPage = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 pt-32 pb-24 selection:bg-indigo-100 selection:text-indigo-900 dark:selection:bg-indigo-900/50 dark:selection:text-indigo-100">
      
      {/* Services Page Hero Section */}
      <div className="max-w-4xl mx-auto px-6 text-center mb-24">
        <span className="inline-block py-1.5 px-4 rounded-full bg-indigo-50 dark:bg-indigo-500/10 text-indigo-700 dark:text-indigo-300 text-sm font-bold tracking-wide border border-indigo-100 dark:border-indigo-500/20 mb-6">
          PROPOSED ENGINEERING CAPABILITIES
        </span>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 dark:text-white mb-8 tracking-tight leading-[1.1]">
          Building our core pillars. <br className="hidden md:block" />
          No generalist promises.
        </h1>
        <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 leading-relaxed max-w-3xl mx-auto">
          As an early-stage engineering team, we are strictly focusing our technical development around Salesforce infrastructure, full-stack web applications, and practical AI workflows. Every system will be architected directly by our core developers.
        </p>
      </div>

      <div className="flex flex-col">
        {services.map((service, index) => {
          const Icon = service.icon;
          const bgClass = index % 2 === 0 
            ? 'bg-slate-50 dark:bg-slate-900/30' 
            : 'bg-white dark:bg-slate-950';

          return (
            <section 
              key={service.id} 
              className={`py-20 lg:py-32 px-6 border-b border-slate-200 dark:border-slate-800/60 last:border-0 ${bgClass}`}
            >
              <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
                  
                  <div className={`lg:col-span-5 flex flex-col ${service.reversed ? 'lg:order-2' : 'lg:order-1'}`}>
                    <div className="relative mb-8">
                      <span className="absolute -top-12 -left-6 text-[8rem] font-black text-slate-200 dark:text-slate-800/40 -z-10 select-none leading-none tracking-tighter">
                        {service.id}
                      </span>
                      <div className="flex items-center gap-4">
                        <div className="w-14 h-14 rounded-xl bg-indigo-100 dark:bg-indigo-500/20 flex items-center justify-center shrink-0">
                          <Icon className="text-indigo-600 dark:text-indigo-400" size={28} strokeWidth={2} />
                        </div>
                        <span className="text-sm font-bold uppercase tracking-widest text-indigo-600 dark:text-indigo-400">
                          {service.title}
                        </span>
                      </div>
                    </div>

                    <div className="w-full aspect-[4/3] rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-xl shadow-slate-200/50 dark:shadow-none mb-6 lg:mb-0">
                      <img 
                        src={service.image} 
                        alt={service.title} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>

                  <div className={`lg:col-span-7 flex flex-col ${service.reversed ? 'lg:order-1' : 'lg:order-2'}`}>
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-6 leading-[1.15] tracking-tight">
                      {service.heading}
                    </h2>
                    
                    <p className="text-base md:text-lg text-slate-600 dark:text-slate-400 mb-10 leading-relaxed">
                      {service.description}
                    </p>

                    <div className="mb-10">
                      <h3 className="text-xs font-bold text-slate-400 dark:text-slate-500 mb-4 uppercase tracking-wider">
                        Technical Focus Areas
                      </h3>
                      <div className="flex flex-wrap gap-x-3 gap-y-2 items-center">
                        {service.capabilities.map((cap, i) => (
                          <React.Fragment key={i}>
                            <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                              {cap}
                            </span>
                            {i < service.capabilities.length - 1 && (
                              <span className="text-slate-300 dark:text-slate-700 font-black">·</span>
                            )}
                          </React.Fragment>
                        ))}
                      </div>
                    </div>

                    <div className="pt-6 border-t border-slate-200 dark:border-slate-800/80">
                      <span className="inline-block px-4 py-2 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs font-bold rounded-lg tracking-wide">
                        Stack: {service.tags}
                      </span>
                    </div>
                  </div>

                </div>
              </div>
            </section>
          );
        })}
      </div>

      <div className="max-w-3xl mx-auto px-6 text-center mt-24">
        <h3 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-8">
          Discuss your architectural requirements.
        </h3>
        <Link 
          to="/contact"
          className="inline-block px-8 py-4 bg-indigo-600 text-white font-bold text-base rounded-full hover:bg-indigo-700 transition-colors duration-200"
        >
          Start the Conversation
        </Link>
      </div>

    </div>
  );
};

export default ServicesPage;