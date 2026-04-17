import React from 'react';
import { motion } from 'framer-motion';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 pt-32 pb-24 px-6 selection:bg-indigo-100 dark:selection:bg-indigo-900/50">
      <div className="max-w-4xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white mb-8 tracking-tight">
            Privacy Policy
          </h1>
          
          <div className="prose prose-slate dark:prose-invert max-w-none space-y-8 text-slate-600 dark:text-slate-300 leading-relaxed">
            <section>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">1. Introduction</h2>
              <p>
                BAESRIX TECH (OPC) PRIVATE LIMITED ("we", "us", or "our") operates the website baesrixsystems.in. This policy informs you of our policies regarding the collection, use, and disclosure of personal data when you use our Service and the choices you have associated with that data.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">2. Information Collection and Use</h2>
              <p>
                We collect several different types of information for various purposes to provide and improve our service to you. This may include:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Email address</li>
                <li>First name and last name</li>
                <li>Company or Organisation name</li>
                <li>Usage Data (IP address, browser type, etc.)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">3. Use of Data</h2>
              <p>We use the collected data for various purposes:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>To provide and maintain our Service</li>
                <li>To notify you about changes to our Service</li>
                <li>To provide customer support</li>
                <li>To gather analysis or valuable information so that we can improve our Service</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">4. Contact Us</h2>
              <p>
                If you have any questions about this Privacy Policy, please contact us:
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

export default PrivacyPolicy;