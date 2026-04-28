import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  MessageSquare, 
  Clock, 
  ShieldCheck, 
  Mail, 
  MapPin, 
  CheckCircle2, 
  Loader2, 
  Send, 
  Target, 
  Users, 
  Rocket 
} from 'lucide-react';

const whyJoinNotes = [
  {
    icon: Target,
    text: "Direct product influence - your feedback shapes features and priorities."
  },
  {
    icon: ShieldCheck,
    text: "Priority onboarding and dedicated support from the founding team."
  },
  {
    icon: Rocket,
    text: "Early adopter pricing locked in for life and first access to new modules."
  }
];

export const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [showToast, setShowToast] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = () => {
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      return;
    }

    setIsSubmitting(true);

    // Simulate network request
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setShowToast(true);
      setFormData({ name: '', email: '', company: '', message: '' }); 

      setTimeout(() => {
        setIsSuccess(false);
        setShowToast(false);
      }, 5000);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 pt-32 pb-24 selection:bg-indigo-100 selection:text-indigo-900 dark:selection:bg-indigo-900/50 dark:selection:text-indigo-100 relative">
      
      {/* Floating Toast Notification */}
      <AnimatePresence>
        {showToast && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="fixed bottom-10 left-1/2 -translate-x-1/2 z-50 flex items-center gap-3 px-6 py-4 bg-slate-900 dark:bg-white rounded-xl shadow-2xl shadow-slate-900/20 dark:shadow-white/10"
          >
            <div className="w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center shrink-0">
              <CheckCircle2 className="text-emerald-500 dark:text-emerald-600" size={18} strokeWidth={3} />
            </div>
            <p className="text-sm font-bold text-white dark:text-slate-900 whitespace-nowrap">
              Application received - we will be in touch within 48 hours.
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Header */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        className="max-w-7xl mx-auto px-6 mb-16 md:mb-24"
      >
        <span className="inline-block py-1.5 px-4 rounded-full bg-indigo-100 dark:bg-indigo-500/10 text-indigo-700 dark:text-indigo-300 text-sm font-bold tracking-wide border border-indigo-200 dark:border-indigo-500/20 mb-6 uppercase">
          Early Access Program
        </span>
        <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold text-slate-900 dark:text-white mb-6 tracking-tight leading-[1.05]">
          Join the Baesrix Early Access.
        </h1>
        <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 leading-relaxed max-w-3xl">
          Baesrix is opening early access to a select group of businesses who want to be among the first to experience a truly unified operational platform. Shape the product, influence the roadmap, and gain a significant advantage.
        </p>
      </motion.div>

      {/* Main Content Grid */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20">
          
          {/* Left Column: Context & Details */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
            className="lg:col-span-5 flex flex-col"
          >
            {/* Why Join Section */}
            <div className="mb-12">
              <h3 className="text-sm font-extrabold uppercase tracking-widest text-slate-400 dark:text-slate-500 mb-6">
                Why Join Early Access?
              </h3>
              <div className="space-y-4">
                {whyJoinNotes.map((note, index) => {
                  const Icon = note.icon;
                  return (
                    <div key={index} className="flex items-start gap-4 p-5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800/80 rounded-xl">
                      <div className="w-10 h-10 rounded-lg bg-indigo-50 dark:bg-indigo-500/10 flex items-center justify-center shrink-0 mt-0.5">
                        <Icon className="text-indigo-600 dark:text-indigo-400" size={20} strokeWidth={2.5} />
                      </div>
                      <p className="text-sm md:text-base font-medium text-slate-700 dark:text-slate-300 leading-snug">
                        {note.text}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Who Should Apply Section */}
            <div className="mb-12 p-6 bg-indigo-50 dark:bg-indigo-900/10 rounded-2xl border border-indigo-100 dark:border-indigo-900/20">
              <h3 className="text-sm font-extrabold uppercase tracking-widest text-indigo-600 dark:text-indigo-400 mb-4">
                Who Should Apply?
              </h3>
              <ul className="space-y-3">
                {[
                  "Growing SMBs frustrated by SaaS complexity",
                  "Founders building scalable processes from start",
                  "Teams relying on manual data entry or silos",
                  "SaaS companies seeking unified internal tooling"
                ].map((item, i) => (
                  <li key={i} className="flex gap-2 text-sm text-slate-600 dark:text-slate-300 items-center">
                    <div className="w-1.5 h-1.5 rounded-full bg-indigo-400" /> {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Direct Contact Details */}
            <div className="pt-10 border-t border-slate-200 dark:border-slate-800">
              <h3 className="text-sm font-extrabold uppercase tracking-widest text-slate-400 dark:text-slate-500 mb-6">
                Application Details
              </h3>
              
              <div className="flex flex-col gap-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-slate-100 dark:bg-slate-800 flex items-center justify-center shrink-0 mt-0.5">
                    <Mail className="text-slate-600 dark:text-slate-400" size={20} />
                  </div>
                  <div>
                    <span className="block text-xs font-bold text-slate-400 dark:text-slate-500 mb-1 uppercase tracking-wide">Official Email</span>
                    <div className="text-base font-bold text-indigo-600 dark:text-indigo-400">contact@baesrixsystems.in</div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-slate-100 dark:bg-slate-800 flex items-center justify-center shrink-0 mt-0.5">
                    <Clock className="text-slate-600 dark:text-slate-400" size={20} />
                  </div>
                  <div>
                    <span className="block text-xs font-bold text-slate-400 dark:text-slate-500 mb-1 uppercase tracking-wide">Response Time</span>
                    <div className="text-sm md:text-base font-medium text-slate-700 dark:text-slate-300">Within 48 business hours</div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-slate-100 dark:bg-slate-800 flex items-center justify-center shrink-0 mt-0.5">
                    <MapPin className="text-slate-600 dark:text-slate-400" size={20} />
                  </div>
                  <div>
                    <span className="block text-xs font-bold text-slate-400 dark:text-slate-500 mb-1 uppercase tracking-wide">Location</span>
                    <div className="text-sm md:text-base font-medium text-slate-700 dark:text-slate-300">Andhra Pradesh, India</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Form Area */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: 'easeOut' }}
            className="lg:col-span-7"
          >
            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl md:rounded-[2rem] p-8 md:p-12 shadow-sm">
              <div className="flex flex-col gap-6">
                
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-bold text-slate-900 dark:text-white">Your Name & Role <span className="text-red-500">*</span></label>
                  <input 
                    type="text" 
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="e.g. Rahul, Operations Lead"
                    disabled={isSubmitting || isSuccess}
                    className="w-full px-5 py-3.5 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl text-slate-900 dark:text-white text-base focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400 focus:border-transparent transition-all placeholder:text-slate-400 dark:placeholder:text-slate-600 disabled:opacity-60"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-sm font-bold text-slate-900 dark:text-white">Work Email <span className="text-red-500">*</span></label>
                  <input 
                    type="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Where should we reply?"
                    disabled={isSubmitting || isSuccess}
                    className="w-full px-5 py-3.5 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl text-slate-900 dark:text-white text-base focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400 focus:border-transparent transition-all placeholder:text-slate-400 dark:placeholder:text-slate-600 disabled:opacity-60"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-sm font-bold text-slate-900 dark:text-white">Company Name & Size</label>
                  <input 
                    type="text" 
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    placeholder="e.g. Acme SaaS, 25 members"
                    disabled={isSubmitting || isSuccess}
                    className="w-full px-5 py-3.5 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl text-slate-900 dark:text-white text-base focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400 focus:border-transparent transition-all placeholder:text-slate-400 dark:placeholder:text-slate-600 disabled:opacity-60"
                  />
                </div>

                <div className="flex flex-col gap-2 mb-2">
                  <label className="text-sm font-bold text-slate-900 dark:text-white">Project Detail & Stack <span className="text-red-500">*</span></label>
                  <textarea 
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={5}
                    placeholder="Tell us about:
1. Primary operational challenge
2. Current tools (CRM, Workflow, etc.)"
                    disabled={isSubmitting || isSuccess}
                    className="w-full px-5 py-4 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl text-slate-900 dark:text-white text-base focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400 focus:border-transparent transition-all resize-y placeholder:text-slate-400 dark:placeholder:text-slate-600 disabled:opacity-60"
                  ></textarea>
                </div>

                <button 
                  onClick={handleSubmit}
                  disabled={isSubmitting || isSuccess || !formData.name.trim() || !formData.email.trim() || !formData.message.trim()}
                  className={`relative w-full h-[60px] flex items-center justify-center font-bold text-base md:text-lg rounded-xl transition-all duration-300 disabled:cursor-not-allowed ${
                    isSuccess 
                      ? 'bg-emerald-600 text-white disabled:opacity-100' 
                      : 'bg-indigo-600 hover:bg-indigo-700 text-white disabled:opacity-60'
                  }`}
                >
                  <AnimatePresence mode="wait">
                    {isSubmitting ? (
                      <motion.div key="loading" initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.5 }}>
                        <Loader2 className="animate-spin" size={24} />
                      </motion.div>
                    ) : isSuccess ? (
                      <motion.div key="success" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="flex items-center gap-2">
                        <CheckCircle2 size={22} strokeWidth={2.5} />
                        <span>Application Sent</span>
                      </motion.div>
                    ) : (
                      <motion.div key="default" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex items-center gap-2">
                        <span>Apply for Early Access</span>
                        <Send size={18} className="ml-1" />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </button>

              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* GTM Strategy Section */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="max-w-7xl mx-auto px-6 mt-32"
      >
        <div className="p-8 md:p-12 bg-white dark:bg-slate-900 rounded-[2.5rem] border border-slate-200 dark:border-slate-800">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-8">Go-to-Market Strategy</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-slate-600 dark:text-slate-400 leading-relaxed text-sm md:text-base">
            <p>
              Our initial go-to-market strategy is focused on a deliberate, high-touch approach designed to acquire the right early customers rather than the most. We are targeting SMBs and SaaS companies through direct outreach to operations leaders and partnerships with design partners.
            </p>
            <p>
              This allows us to gather rich, structured feedback from real users during the MVP phase - which we then feed directly into product development. Once core modules are stable and validated, we will layer in content-led inbound growth and referral-driven expansion.
            </p>
          </div>
        </div>
      </motion.div>

    </div>
  );
};

export default ContactPage;