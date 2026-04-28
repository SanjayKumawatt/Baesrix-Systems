import React from 'react';
import { Link } from 'react-router-dom';
import { Eye, Minimize2, Handshake } from 'lucide-react';

export const AboutUsPage = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 pt-32 pb-24 selection:bg-indigo-100 selection:text-indigo-900 dark:selection:bg-indigo-900/50 dark:selection:text-indigo-100">
      
      {/* Hero Section - Editorial Style */}
      <div className="max-w-4xl mx-auto px-6 text-center mb-16">
        <span className="inline-block py-1.5 px-4 rounded-full bg-indigo-50 dark:bg-indigo-500/10 text-indigo-700 dark:text-indigo-300 text-sm font-bold tracking-wide border border-indigo-100 dark:border-indigo-500/20 mb-8">
          THE FOUNDATIONAL PROBLEM
        </span>
        <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold text-slate-900 dark:text-white mb-8 tracking-tight leading-[1.05]">
          Engineering without translation.
        </h1>
        <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 leading-relaxed max-w-3xl mx-auto">
          Most software drift happens because developers never speak directly to the person with the actual problem. Baesrix is being built to establish an alternative model: direct technical communication, transparent scoping, and engineering rigor from day one.
        </p>
      </div>

      {/* Hero Image */}
      <div className="max-w-7xl mx-auto px-6 mb-24 lg:mb-32">
        <div className="w-full aspect-[21/9] md:aspect-[21/8] rounded-2xl md:rounded-[2rem] overflow-hidden border border-slate-200 dark:border-slate-800 shadow-2xl shadow-slate-200/50 dark:shadow-none">
          <img 
            src="https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
            alt="Clean, minimal workspace representing focused engineering" 
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Section 2: What Baesrix is */}
      <section className="py-20 bg-slate-50 dark:bg-slate-900/30 border-y border-slate-200 dark:border-slate-800/60">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
            
            <div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white leading-tight tracking-tight">
                A focused unit. <br className="hidden lg:block" />
                <span className="text-indigo-600 dark:text-indigo-400">On purpose.</span>
              </h2>
            </div>
            
            <div className="flex flex-col gap-6 text-base md:text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
              <p>
                BAESRIX TECH (OPC) PRIVATE LIMITED is a dedicated engineering company incorporated in Andhra Pradesh. Our architectural focus is centered around integrating CRM systems, application layers, and AI-driven processes into a unified operational structure.
              </p>
              <p>
                A compact team structure means every client engagement receives direct, senior-level attention. You will not be handed off to an account manager who does not understand the codebase. We are deliberately structuring our operations to avoid the bloated hierarchies of traditional tech agencies.
              </p>
              <p>
                We partner with businesses that recognize the value of robust, maintainable software infrastructure built correctly from the ground up.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Section 3: Beliefs */}
      <section className="py-24 md:py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white tracking-tight">
              Our operating principles
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Belief 1 */}
            <div className="p-8 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl transition-all hover:border-indigo-500/50">
              <div className="w-12 h-12 rounded-lg bg-indigo-50 dark:bg-indigo-500/10 flex items-center justify-center mb-6">
                <Eye className="text-indigo-600 dark:text-indigo-400" size={24} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                Clarity before code
              </h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm md:text-base">
                A project scoped badly will be built badly. We focus on defining the problem architecture before writing a single line. There is no substitute for understanding the business process before attempting to automate it.
              </p>
            </div>

            {/* Belief 2 */}
            <div className="p-8 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl transition-all hover:border-indigo-500/50">
              <div className="w-12 h-12 rounded-lg bg-indigo-50 dark:bg-indigo-500/10 flex items-center justify-center mb-6">
                <Minimize2 className="text-indigo-600 dark:text-indigo-400" size={24} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                Lean execution
              </h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm md:text-base">
                We do not scale our team just to seem bigger. You work directly with the engineers building your system. This eliminates the technical debt caused by miscommunication through non-technical liaisons.
              </p>
            </div>

            {/* Belief 3 */}
            <div className="p-8 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl transition-all hover:border-indigo-500/50">
              <div className="w-12 h-12 rounded-lg bg-indigo-50 dark:bg-indigo-500/10 flex items-center justify-center mb-6">
                <Handshake className="text-indigo-600 dark:text-indigo-400" size={24} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                Honest over impressive
              </h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm md:text-base">
                We will explicitly state if a technical requirement cannot be executed within your constraints, rather than overpromising. Trust is built on realistic expectations and transparent capabilities, not sales pitches.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Corporate Details Card */}
      <section className="py-20 bg-slate-50 dark:bg-slate-900/30 border-y border-slate-200 dark:border-slate-800/60 px-6">
        <div className="max-w-4xl mx-auto">
          <div>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
              Corporate Entity
            </h2>
            
            <div className="bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-2xl p-8 md:p-10 shadow-sm">
              <p className="text-base md:text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
                Baesrix operates legally as <strong className="font-semibold text-slate-900 dark:text-white">BAESRIX TECH (OPC) PRIVATE LIMITED</strong>. 
                We are a registered entity based in Andhra Pradesh, India, dedicated entirely to providing IT-related engineering services. 
                Our primary digital infrastructure is hosted at <a href="https://baesrixsystems.in" target="_blank" rel="noopener noreferrer" className="text-indigo-600 dark:text-indigo-400 hover:underline font-medium">baesrixsystems.in</a>. 
                For all official correspondence, inquiries, or technical discussions, you can reach our team directly at <a href="mailto:contact@baesrixsystems.in" className="text-indigo-600 dark:text-indigo-400 hover:underline font-medium">contact@baesrixsystems.in</a>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <div className="max-w-3xl mx-auto px-6 text-center mt-32">
        <h3 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-8">
          If this approach aligns with your needs, let us talk.
        </h3>
        <Link 
          to="/contact"
          className="inline-block px-8 py-4 bg-indigo-600 text-white font-bold text-base rounded-full hover:bg-indigo-700 transition-colors duration-200 shadow-lg shadow-indigo-600/20"
        >
          Start the Conversation
        </Link>
      </div>

    </div>
  );
};

export default AboutUsPage;