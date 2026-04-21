import React from 'react';
import { Link } from 'react-router-dom';
import { Zap } from 'lucide-react';
import logo from "../assets/logo.png"

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800 pt-16 pb-8 px-6">
      <div className="max-w-7xl mx-auto">
        
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-16">
          
          <div className="max-w-sm lg:max-w-md">
            <div className="flex items-center  mb-4">
                          <img src={logo} className='h-8' alt="" />
              
              <span className="text-xl font-bold tracking-tight text-slate-900 dark:text-white">
                Baesrix
              </span>
            </div>
            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-6">
              Our work focuses on creating structured systems that remain stable, understandable, and adaptable over time.
            </p>
            <div
              className="inline-flex text-indigo-600 dark:text-indigo-400 font-medium text-sm hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors"
            >
              baesrixsystems.in
            </div>
          </div>

          <div className="md:text-right max-w-xs lg:max-w-sm">
            <h4 className="text-sm font-bold text-slate-900 dark:text-white mb-4 uppercase tracking-wider">
              Headquarters
            </h4>
            <address className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-4 not-italic">
              <p>2-250-f-14 Reddys Colony,</p>
              <p>Behind Bhashyam School,</p>
              <p>Madanapalle, Chittoor,</p>
              <p>Andhra Pradesh, India, 517325</p>
            </address>
            <div 
              rel="noopener noreferrer"
              className="inline-block  dark:text-slate-400 font-medium text-sm text-indigo-600 dark:hover:text-indigo-400 transition-colors"
            >
              contact@baesrixsystems.in
            </div>
          </div>

        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-8 border-t border-slate-200 dark:border-slate-800 text-xs md:text-sm text-slate-500 dark:text-slate-400">
          <p>
            &copy; {currentYear} BAESRIX TECH (OPC) PRIVATE LIMITED. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link to="/privacy-policy" className="hover:text-slate-900 dark:hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms-of-service" className="hover:text-slate-900 dark:hover:text-white transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
        
      </div>
    </footer>
  );
};

export default Footer;