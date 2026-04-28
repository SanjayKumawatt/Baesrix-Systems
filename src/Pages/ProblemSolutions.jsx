import React from 'react';
import { 
  AlertTriangle, 
  ArrowRight, 
  CheckCircle2, 
  Zap, 
  Clock, 
  TrendingUp, 
  DollarSign, 
  Users,
  Lightbulb
} from 'lucide-react';

const hiddenCosts = [
  { title: 'Data Silos', desc: 'Customer, financial, and support data live in separate worlds. No single source of truth.', icon: AlertTriangle },
  { title: 'Manual Work', desc: 'Teams waste hours copy-pasting data between tools and manual reporting.', icon: Clock },
  { title: 'Broken Decisions', desc: 'Critical decisions are made on stale, partial, or inconsistent data.', icon: TrendingUp },
  { title: 'Engineering Debt', desc: 'Internal tools and integrations create a permanent, slow-moving backlog.', icon: Zap },
  { title: 'Rising SaaS Costs', desc: 'Paying for 10-20 overlapping subscriptions with unused features.', icon: DollarSign },
];

const comparisonTable = [
  { problem: 'Data scattered across tools', solution: 'Unified Data Layer - one source of truth for all business data' },
  { problem: 'Manual, repetitive processes', solution: 'Workflow Automation Engine - event-driven, no-code automation' },
  { problem: 'Decisions made on incomplete data', solution: 'Unified Dashboard - real-time visibility across all operations' },
  { problem: 'AI inaccessible to non-technical teams', solution: 'AI Processing Layer - embedded, natural-language intelligence' },
  { problem: 'High integration cost and complexity', solution: 'Integration Framework - pre-built connectors + open API' },
  { problem: 'Expensive and redundant SaaS stack', solution: 'One platform replacing multiple point solutions' },
];

const ProblemSolutionPage = () => {
  return (
    <div className="bg-white dark:bg-slate-950 min-h-screen py-24 px-6 selection:bg-indigo-100 dark:selection:bg-indigo-900/30">
      <div className="max-w-6xl mx-auto">
        
        {/* Hero Section */}
        <div className="max-w-4xl mb-24">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 dark:text-white mb-8 tracking-tight">
            The Problem We Are Solving
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-400 leading-relaxed">
            Modern businesses run on software. But the software they run on was never designed to work together. As companies grow, they accumulate tools - creating a structural problem that compounds over time: <span className="text-indigo-600 dark:text-indigo-400 font-semibold">fragmentation.</span>
          </p>
        </div>

        {/* Hidden Costs Grid */}
        <section className="mb-32">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-12 flex items-center gap-3">
            <div className="w-8 h-1 bg-indigo-600 rounded-full"></div>
            The Hidden Cost of Fragmentation
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {hiddenCosts.map((cost, idx) => (
              <div key={idx} className="p-8 rounded-3xl bg-slate-50 dark:bg-slate-900/50 border border-slate-100 dark:border-slate-800">
                <cost.icon className="text-red-500 mb-6" size={28} />
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">{cost.title}</h3>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm">{cost.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* The Baesrix Solution Banner */}
        <section className="mb-32 bg-indigo-600 rounded-[2.5rem] p-8 md:p-16 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 p-12 opacity-10 pointer-events-none">
            <Lightbulb size={300} />
          </div>
          <div className="relative z-10 max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">The Baesrix Solution</h2>
            <p className="text-indigo-100 text-lg md:text-xl leading-relaxed mb-10">
              Baesrix replaces the patchwork with a single, unified platform. Rather than adding another tool to the stack, Baesrix acts as the connective layer that brings everything together.
            </p>
            <div className="flex flex-wrap gap-4 items-center">
              {['Connect', 'Automate', 'Understand', 'Scale'].map((step, i) => (
                <React.Fragment key={step}>
                  <span className="text-xl md:text-2xl font-bold">{step}</span>
                  {i < 3 && <ArrowRight className="text-indigo-300 hidden sm:block" />}
                </React.Fragment>
              ))}
            </div>
            <p className="mt-8 text-indigo-200 italic">
              "Baesrix unifies your systems and embeds AI intelligence - so your team can focus on building the business, not managing the tools."
            </p>
          </div>
        </section>

        {/* Real World Example - Comparison View */}
        <section className="mb-32">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-12">Real-World Example</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="p-8 rounded-3xl border border-slate-200 dark:border-slate-800">
              <span className="text-xs font-bold uppercase tracking-widest text-red-500 mb-4 block">The Status Quo</span>
              <h3 className="text-xl font-bold mb-6 text-slate-900 dark:text-white">Growing B2B Services Co.</h3>
              <ul className="space-y-4 text-slate-600 dark:text-slate-400 text-sm">
                <li className="flex gap-3"><span className="text-red-500">•</span> Manual lead entry in CRM</li>
                <li className="flex gap-3"><span className="text-red-500">•</span> Client details copied to spreadsheets</li>
                <li className="flex gap-3"><span className="text-red-500">•</span> Emailing project managers for coordination</li>
                <li className="flex gap-3"><span className="text-red-500">•</span> 2-day delay for simple internal syncs</li>
              </ul>
              <div className="mt-8 p-4 bg-red-50 dark:bg-red-900/10 rounded-xl text-red-600 text-xs font-medium uppercase">
                Result: 3 Tools. 4 Manual Steps. 1 Hour Lost per inquiry.
              </div>
            </div>

            <div className="p-8 rounded-3xl bg-indigo-50 dark:bg-indigo-900/20 border border-indigo-100 dark:border-indigo-800">
              <span className="text-xs font-bold uppercase tracking-widest text-indigo-600 dark:text-indigo-400 mb-4 block">With Baesrix</span>
              <h3 className="text-xl font-bold mb-6 text-slate-900 dark:text-white">Optimized Architecture</h3>
              <ul className="space-y-4 text-slate-700 dark:text-slate-300 text-sm font-medium">
                <li className="flex gap-3"><CheckCircle2 size={18} className="text-indigo-600" /> Inquiry arrives, Data Layer structures lead</li>
                <li className="flex gap-3"><CheckCircle2 size={18} className="text-indigo-600" /> Automation Engine assigns sales rep & notifies team</li>
                <li className="flex gap-3"><CheckCircle2 size={18} className="text-indigo-600" /> Dashboard gives live view of pipeline status</li>
                <li className="flex gap-3"><CheckCircle2 size={18} className="text-indigo-600" /> AI highlights trends & anomalies automatically</li>
              </ul>
              <div className="mt-8 p-4 bg-indigo-600 rounded-xl text-white text-xs font-bold uppercase text-center tracking-widest">
                Result: Seconds. Zero Manual Steps.
              </div>
            </div>
          </div>
        </section>

        {/* Why Now Section */}
        <section className="mb-32 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">Why Now</h2>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
              SaaS fragmentation has reached a tipping point - the average SMB now manages over a dozen software subscriptions, and the overhead is growing faster than the value created.
            </p>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              Second, AI has matured into a production-ready capability. Businesses are actively looking for consolidation, and the technology to deliver it now exists.
            </p>
          </div>
          <div className="p-8 bg-slate-900 rounded-3xl text-white">
            <h3 className="text-indigo-400 font-bold mb-4">Immediate Need</h3>
            <p className="text-2xl font-medium leading-snug">
              Unified, AI-native platforms are not a future possibility - they are an immediate requirement for growth.
            </p>
          </div>
        </section>

        {/* Final Comparison Table */}
        <section className="overflow-hidden rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm">
          <div className="p-8 border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/50">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">How Baesrix Addresses Each Challenge</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-white dark:bg-slate-900">
                  <th className="px-8 py-4 text-xs font-bold uppercase tracking-wider text-slate-500 border-b dark:border-slate-800">Problem</th>
                  <th className="px-8 py-4 text-xs font-bold uppercase tracking-wider text-indigo-500 border-b dark:border-slate-800">Baesrix Solution</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                {comparisonTable.map((item, idx) => (
                  <tr key={idx} className="hover:bg-slate-50/50 dark:hover:bg-slate-800/30 transition-colors">
                    <td className="px-8 py-6 text-sm font-medium text-slate-700 dark:text-slate-300">{item.problem}</td>
                    <td className="px-8 py-6 text-sm font-bold text-indigo-600 dark:text-indigo-400">{item.solution}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

      </div>
    </div>
  );
};

export default ProblemSolutionPage;