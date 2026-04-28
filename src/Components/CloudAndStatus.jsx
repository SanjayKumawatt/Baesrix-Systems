import React from 'react';
import { Cloud, Scaling, ShieldCheck, Globe, Activity, Terminal, Code,Settings,Target, Users, SearchCheck } from 'lucide-react';

const cloudBenefits = [
  {
    title: 'Elastic Scalability',
    icon: Scaling,
    desc: 'To grow alongside each customer, from early-stage startups to mid-market enterprises.'
  },
  {
    title: 'High Availability',
    icon: Activity,
    desc: 'Fault-tolerant architecture to deliver consistent uptime and reliability.'
  },
  {
    title: 'Global Infrastructure',
    icon: Globe,
    desc: 'To support distributed teams and multi-region deployments seamlessly.'
  },
  {
    title: 'Enterprise Security',
    icon: ShieldCheck,
    desc: 'Compliance and data governance built into the platform from the ground up.'
  }
];

const statusDetails = [
  { label: 'Product Status', value: 'MVP under active development', icon: Terminal },
  { label: 'Current Focus', value: 'Core architecture & integration framework', icon: Settings },
  { label: 'Approach', value: 'Cloud-native, API-first, Modular', icon: Code },
  { label: 'Early Access', value: 'Waitlist open; Design partner onboarding', icon: Users },
  { label: 'Target Customers', value: 'SMBs, SaaS, and Ops-heavy teams', icon: Target }
];

const CloudAndStatus = () => {
  return (
    <section className="py-24 px-6 bg-slate-50 dark:bg-slate-950">
      <div className="max-w-7xl mx-auto">
        
        {/* Why Cloud Section */}
        <div className="mb-24">
          <div className="max-w-3xl mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-6">
              Why Cloud Infrastructure Is Central to Baesrix
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
              The Baesrix platform is designed as a cloud-native system from day one. This is not simply a deployment choice - it is a foundational architectural decision that shapes every component of the product.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {cloudBenefits.map((item, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                <item.icon className="text-indigo-600 dark:text-indigo-400 mb-4" size={28} />
                <h3 className="font-bold text-slate-900 dark:text-white mb-2">{item.title}</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Development Stage Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* Status Info */}
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-8 flex items-center gap-3">
              <Activity className="text-indigo-600" size={24} />
              Current Development Stage
            </h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {statusDetails.map((item, idx) => (
                <div key={idx} className="flex items-center gap-4 p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-slate-900/50">
                  <div className="p-2 rounded-lg bg-indigo-50 dark:bg-indigo-900/20 text-indigo-600 dark:text-indigo-400">
                    <item.icon size={20} />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">{item.label}</p>
                    <p className="text-sm font-medium text-slate-900 dark:text-slate-200">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Traction Box */}
          <div className="bg-indigo-50 dark:bg-indigo-900/10 p-8 rounded-3xl border border-indigo-100 dark:border-indigo-900/30">
            <div className="flex items-center gap-3 mb-6">
              <SearchCheck className="text-indigo-600 dark:text-indigo-400" size={24} />
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">Traction & Validation</h3>
            </div>
            <p className="text-slate-700 dark:text-slate-300 text-sm md:text-base leading-relaxed">
              We are currently onboarding early design partners and have begun active discussions with SMBs and SaaS teams interested in adopting Baesrix during the early access phase. 
            </p>
            <div className="mt-6 pt-6 border-t border-indigo-200 dark:border-indigo-800">
              <p className="text-sm text-slate-600 dark:text-slate-400 italic">
                Conducting structured problem-validation sessions to refine our core modules against real operational pain points.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default CloudAndStatus;