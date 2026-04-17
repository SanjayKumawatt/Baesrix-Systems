import React from 'react';
import { motion } from 'framer-motion';

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 pt-32 pb-24 px-6 selection:bg-indigo-100 dark:selection:bg-indigo-900/50">
      <div className="max-w-4xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white mb-8 tracking-tight">
            Terms of Service
          </h1>
          
          <div className="prose prose-slate dark:prose-invert max-w-none space-y-8 text-slate-600 dark:text-slate-300 leading-relaxed">
            <section>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">1. Acceptance of Terms</h2>
              <p>
                By accessing or using the services provided by BAESRIX TECH (OPC) PRIVATE LIMITED, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">2. Services Description</h2>
              <p>
                We provide professional IT services including Salesforce consulting, web application development, and AI integration. All services are subject to a separate engagement agreement or statement of work (SOW) that outlines specific deliverables and costs.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">3. Intellectual Property</h2>
              <p>
                Unless otherwise specified in a written contract, all original source code and deliverables produced for clients upon full payment become the intellectual property of the client. The "Baesrix" name, logo, and website content are the property of BAESRIX TECH (OPC) PRIVATE LIMITED.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">4. Governing Law</h2>
              <p>
                These Terms shall be governed and construed in accordance with the laws of India, without regard to its conflict of law provisions.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">5. Contact Information</h2>
              <p>
                Questions about the Terms of Service should be sent to us at:
              </p>
              <p className="font-bold text-indigo-600 dark:text-indigo-400 mt-2">
                Email: contact@baesrixsystems.in
              </p>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default TermsOfService;