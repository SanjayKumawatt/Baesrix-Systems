import React from 'react';
import { Target, Cloud, Cpu, ShieldCheck } from 'lucide-react';

const VisionMission = () => {
  return (
    <section className="py-24 px-6 bg-white dark:bg-slate-950 border-t border-slate-100 dark:border-slate-900">
      <div className="max-w-7xl mx-auto">
        
        {/* Top Description */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-6">
              The Future of Business Infrastructure
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
              We are developing a cloud-native platform that acts as a unified operating layer for modern businesses - bringing together CRM systems, internal tools, and AI-driven workflows into a single intelligent system.
            </p>
            <p className="mt-4 text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
              Baesrix eliminates the need for businesses to juggle multiple platforms by providing one coherent environment from which all operations, data, and automation can be managed, monitored, and scaled.
            </p>
          </div>
          
          <div className="bg-slate-50 dark:bg-slate-900/50 p-8 rounded-3xl border border-slate-200 dark:border-slate-800">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 rounded-xl bg-indigo-600 text-white">
                <Target size={28} />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Our Mission</h3>
            </div>
            <p className="text-xl text-slate-700 dark:text-slate-300 italic leading-relaxed">
              "To eliminate operational fragmentation in modern businesses by delivering a unified, intelligent platform that connects people, processes, and data - all built on scalable cloud infrastructure."
            </p>
          </div>
        </div>

        {/* Development Status Card */}
        <div className="relative overflow-hidden rounded-3xl bg-indigo-600 p-8 md:p-12 text-white">
          {/* Background Decoration */}
          <div className="absolute top-0 right-0 -mt-10 -mr-10 opacity-10">
            <Cloud size={300} />
          </div>
          
          <div className="relative z-10 max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 text-white text-xs font-bold uppercase tracking-wider mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
              </span>
              Development Status
            </div>
            
            <h3 className="text-2xl md:text-3xl font-bold mb-6">
              Baesrix is currently in active development.
            </h3>
            
            <p className="text-indigo-100 text-lg leading-relaxed mb-8">
              Our platform is being architected from the ground up to support real-time data processing, seamless third-party integrations, and AI-driven automation - all deployed on scalable cloud infrastructure to ensure enterprise-grade reliability, security, and global scalability.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8 border-t border-white/20">
              <div className="flex items-center gap-3">
                <Cpu size={20} className="text-indigo-200" />
                <span className="text-sm font-medium">AI-Driven Logic</span>
              </div>
              <div className="flex items-center gap-3">
                <Cloud size={20} className="text-indigo-200" />
                <span className="text-sm font-medium">Cloud-Native Scale</span>
              </div>
              <div className="flex items-center gap-3">
                <ShieldCheck size={20} className="text-indigo-200" />
                <span className="text-sm font-medium">Enterprise Security</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default VisionMission;