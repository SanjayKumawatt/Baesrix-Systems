import React from 'react';
import { 
  Cpu, 
  Cloud, 
  Zap, 
  Boxes, 
  Lock, 
  Server, 
  Database, 
  ShieldCheck, 
  BarChart3, 
  Workflow, 
  Globe, 
  Code2 
} from 'lucide-react';

const principles = [
  {
    title: 'Cloud-native first',
    icon: Cloud,
    desc: 'Services designed to run natively on cloud infrastructure, maximizing reliability and reducing overhead.'
  },
  {
    title: 'API-first design',
    icon: Zap,
    desc: 'Clean, versioned APIs for seamless integration, third-party extensibility, and future mobile support.'
  },
  {
    title: 'Modular microservices',
    icon: Boxes,
    desc: 'Independently deployable services for rapid iteration, fault isolation, and targeted scaling.'
  },
  {
    title: 'Event-driven processing',
    icon: Workflow,
    desc: 'Asynchronous event streams powering real-time data sync, workflow triggers, and AI pipelines.'
  },
  {
    title: 'Security by design',
    icon: Lock,
    desc: 'Authentication, encryption, and audit logging are foundational architectural components.'
  }
];

const stack = [
  { layer: 'Frontend', tech: 'React + TypeScript', purpose: 'Component-based UI with type safety and fast rendering' },
  { layer: 'Backend', tech: 'Node.js', purpose: 'High-performance, non-blocking server-side runtime' },
  { layer: 'Database', tech: 'PostgreSQL', purpose: 'Reliable, scalable relational data store with JSON support' },
  { layer: 'AI Layer', tech: 'LLM APIs + custom pipelines', purpose: 'NLP, data enrichment, and predictive intelligence' },
  { layer: 'Cloud', tech: 'Leading cloud infrastructure', purpose: 'Primary provider for all managed services' },
  { layer: 'Real-time', tech: 'Cloud Messaging (EventBridge / SQS)', purpose: 'Event-driven messaging for triggers and async processing' },
  { layer: 'Storage', tech: 'Cloud Object Storage (S3)', purpose: 'Scalable storage for documents, exports, and assets' },
  { layer: 'Auth', tech: 'JWT + OAuth 2.0', purpose: 'Secure, standards-based user and third-party access' },
  { layer: 'CI/CD', tech: 'GitHub Actions / Cloud CI/CD', purpose: 'Automated build, test, and deployment workflows' },
  { layer: 'Monitoring', tech: 'Cloud Monitoring (CloudWatch)', purpose: 'Infrastructure and app performance monitoring' }
];

const cloudServices = [
  'Compute infrastructure (EC2 / Lambda equivalent)',
  'Managed relational database (PostgreSQL)',
  'Cloud object storage',
  'CDN / content delivery network',
  'Event-driven messaging (SQS / EventBridge)',
  'Foundation model access (LLMs)',
  'Identity and access management (IAM)',
  'Cloud Monitoring (CloudWatch)',
  'CI/CD pipeline automation',
  'Virtual private cloud (VPC)'
];

const TechArchitecture = () => {
  return (
    <div className="bg-slate-50 dark:bg-slate-950 min-h-screen py-24 px-6">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="mb-20 text-center lg:text-left">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
            Technology & Architecture
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl leading-relaxed">
            Baesrix is built on a modern, cloud-native technology stack selected for performance, scalability, developer productivity, and long-term maintainability.
          </p>
        </div>

        {/* Principles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-24">
          {principles.map((p, i) => (
            <div key={i} className="p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-indigo-500 transition-colors group">
              <p.icon className="text-indigo-600 mb-4 group-hover:scale-110 transition-transform" size={32} />
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">{p.title}</h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>

        {/* Tech Stack Table */}
        <div className="mb-24 overflow-hidden rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm">
          <div className="p-8 border-b border-slate-200 dark:border-slate-800 flex items-center gap-3">
            <Code2 className="text-indigo-600" />
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Technology Stack</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-50 dark:bg-slate-800/50">
                  <th className="px-8 py-4 text-xs font-bold uppercase tracking-wider text-slate-500">Layer</th>
                  <th className="px-8 py-4 text-xs font-bold uppercase tracking-wider text-slate-500">Technology / Tool</th>
                  <th className="px-8 py-4 text-xs font-bold uppercase tracking-wider text-slate-500">Purpose</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                {stack.map((item, idx) => (
                  <tr key={idx} className="hover:bg-slate-50/50 dark:hover:bg-slate-800/30 transition-colors">
                    <td className="px-8 py-5 text-sm font-bold text-slate-900 dark:text-white">{item.layer}</td>
                    <td className="px-8 py-5 text-sm font-medium text-indigo-600 dark:text-indigo-400">{item.tech}</td>
                    <td className="px-8 py-5 text-sm text-slate-600 dark:text-slate-400">{item.purpose}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Cloud Services Section */}
        <div className="bg-indigo-600 rounded-3xl p-8 md:p-12 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 p-12 opacity-10 pointer-events-none">
            <Server size={240} />
          </div>
          
          <div className="relative z-10">
            <h2 className="text-3xl font-bold mb-8">Cloud Services Planned for Use</h2>
            <p className="text-indigo-100 text-lg mb-10 max-w-2xl leading-relaxed">
              The following services are central to our architecture. Access to startup cloud credits would directly accelerate the deployment of these capabilities.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-12">
              {cloudServices.map((service, idx) => (
                <div key={idx} className="flex items-center gap-3 border-b border-white/10 pb-3">
                  <ShieldCheck size={18} className="text-indigo-300" />
                  <span className="text-sm md:text-base font-medium">{service}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default TechArchitecture;