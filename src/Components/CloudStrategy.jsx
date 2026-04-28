import React from 'react';
import { 
  Cloud, 
  Cpu, 
  Database, 
  HardDrive, 
  Sparkles, 
  Zap, 
  Activity, 
  ShieldCheck, 
  TrendingUp,
  Award
} from 'lucide-react';

const workloads = [
  { icon: Cpu, text: "Compute infrastructure (EC2 / Lambda) - Core services and serverless automation." },
  { icon: Database, text: "Managed PostgreSQL - Infrastructure for our Unified Data Layer." },
  { icon: HardDrive, text: "Scalable Object Storage - For documents, data exports, and assets." },
  { icon: Sparkles, text: "Foundation Models / LLMs - For AI Processing Layer and natural language querying." },
  { icon: Zap, text: "Event-driven Messaging - Infrastructure for the Workflow Automation Engine." },
  { icon: Cloud, text: "CDN / Content Delivery - Global low-latency access for our frontend." },
  { icon: Activity, text: "Cloud Monitoring (CloudWatch) - Full observability across all services." },
  { icon: ShieldCheck, text: "VPC & IAM - Fine-grained networking and security infrastructure." }
];

const impacts = [
  "Complete MVP development and conduct rigorous performance testing at scale.",
  "Onboard early access customers without infrastructure cost constraints.",
  "Iterate rapidly on AI features in a production cloud environment.",
  "Maintain high availability and reliability standards from day one.",
  "Direct capital toward product development and early growth."
];

const CloudStrategy = () => {
  return (
    <section className="py-24 px-6 bg-white dark:bg-slate-950 border-t border-slate-100 dark:border-slate-900">
      <div className="max-w-7xl mx-auto">
        
        {/* Intro Header */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20 items-start">
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white mb-6 tracking-tight">
              Baesrix Cloud Infrastructure Strategy
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
              Baesrix Tech (OPC) Private Limited is an early-stage startup building a cloud-native, AI-powered business operating platform. Cloud infrastructure is central to every layer of our technical architecture.
            </p>
          </div>
          <div className="p-8 rounded-3xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">Why Cloud-Native?</h3>
            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
              We chose this architecture for its unmatched breadth of managed services, global availability, and enterprise-grade security. Startup credit programs allow us to validate our product using the same world-class infrastructure that powers the most successful software companies globally.
            </p>
          </div>
        </div>

        {/* Workload Grid */}
        <div className="mb-24">
          <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-10 flex items-center gap-3">
            <div className="w-2 h-8 bg-indigo-600 rounded-full"></div>
            How Cloud Credits Will Be Used
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {workloads.map((item, idx) => (
              <div key={idx} className="p-6 rounded-2xl border border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm">
                <item.icon className="text-indigo-600 dark:text-indigo-400 mb-4" size={24} />
                <p className="text-sm font-medium text-slate-700 dark:text-slate-300 leading-snug">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Impact Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-8">Expected Impact</h3>
            <div className="space-y-4">
              {impacts.map((text, i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center">
                    <TrendingUp className="text-emerald-600 dark:text-emerald-400" size={14} />
                  </div>
                  <p className="text-slate-600 dark:text-slate-400 font-medium">{text}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Commitment Card */}
          <div className="relative p-8 rounded-[2rem] bg-indigo-600 text-white overflow-hidden shadow-xl shadow-indigo-200 dark:shadow-none">
            <Award className="absolute -bottom-10 -right-10 opacity-10" size={200} />
            <h3 className="text-xl font-bold mb-4 relative z-10">Our Commitment</h3>
            <p className="text-indigo-100 text-sm leading-relaxed relative z-10">
              Baesrix is committed to building its future on cloud-native infrastructure. The Startup Credit Program is a foundational enabler for us to move from early-stage development to a production-ready platform trusted by businesses.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default CloudStrategy;