import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, Clock, ShieldCheck, Mail, MapPin, CheckCircle2, Loader2, Send } from 'lucide-react';

const preNotes = [
  {
    icon: MessageSquare,
    text: "No brief required. A plain description of your problem is enough to start."
  },
  {
    icon: Clock,
    text: "We respond within one working day. Usually faster."
  },
  {
    icon: ShieldCheck,
    text: "No sales calls unless you ask for one. We reply by email first."
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
      setFormData({ name: '', email: '', company: '', message: '' }); // Clear form

      // Reset button state and hide toast after 5 seconds
      setTimeout(() => {
        setIsSuccess(false);
        setShowToast(false);
      }, 5000);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 pt-32 pb-24 selection:bg-indigo-100 selection:text-indigo-900 dark:selection:bg-indigo-900/50 dark:selection:text-indigo-100 relative">
      
      {/* Floating Toast Notification (Unique Feedback) */}
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
              Thanks - we will be in touch within one working day.
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
        <span className="inline-block py-1.5 px-4 rounded-full bg-indigo-100 dark:bg-indigo-500/10 text-indigo-700 dark:text-indigo-300 text-sm font-bold tracking-wide border border-indigo-200 dark:border-indigo-500/20 mb-6">
          GET IN TOUCH
        </span>
        <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold text-slate-900 dark:text-white mb-6 tracking-tight leading-[1.05]">
          Let's talk about the work.
        </h1>
        <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 leading-relaxed max-w-2xl">
          We do not require formal RFPs or extensive documentation to start a conversation. Tell us what you are trying to solve in plain language, and we will tell you honestly if we are the right team to build it.
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
            <div className="mb-12">
              <h3 className="text-sm font-extrabold uppercase tracking-widest text-slate-400 dark:text-slate-500 mb-6">
                3 things to know before you write
              </h3>
              <div className="space-y-4">
                {preNotes.map((note, index) => {
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

            <div className="pt-10 border-t border-slate-200 dark:border-slate-800">
              <h3 className="text-sm font-extrabold uppercase tracking-widest text-slate-400 dark:text-slate-500 mb-6">
                Direct Contact Details
              </h3>
              
              <div className="flex flex-col gap-8">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-slate-100 dark:bg-slate-800 flex items-center justify-center shrink-0 mt-0.5">
                    <Mail className="text-slate-600 dark:text-slate-400" size={20} />
                  </div>
                  <div>
                    <span className="block text-xs font-bold text-slate-400 dark:text-slate-500 mb-1 uppercase tracking-wide">
                      Email
                    </span>
                    <div
                      className="text-base font-bold text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 hover:underline transition-all"
                    >
                      contact@baesrixsystems.in
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-slate-100 dark:bg-slate-800 flex items-center justify-center shrink-0 mt-0.5">
                    <MapPin className="text-slate-600 dark:text-slate-400" size={20} />
                  </div>
                  <div>
                    <span className="block text-xs font-bold text-slate-400 dark:text-slate-500 mb-1 uppercase tracking-wide">
                      Headquarters
                    </span>
                    <address className="text-sm md:text-base font-medium text-slate-700 dark:text-slate-300 not-italic leading-relaxed max-w-xs">
                      2-250-f-14 Reddys Colony,<br />
                      Behind Bhashyam School,<br />
                      Madanapalle, Chittoor,<br />
                      Andhra Pradesh, India - 517325
                    </address>
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
                  <label className="text-sm font-bold text-slate-900 dark:text-white">Your Name <span className="text-red-500">*</span></label>
                  <input 
                    type="text" 
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="What should we call you?"
                    disabled={isSubmitting || isSuccess}
                    className="w-full px-5 py-3.5 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl text-slate-900 dark:text-white text-base focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400 focus:border-transparent transition-all placeholder:text-slate-400 dark:placeholder:text-slate-600 disabled:opacity-60"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-sm font-bold text-slate-900 dark:text-white">Email Address <span className="text-red-500">*</span></label>
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
                  <label className="text-sm font-bold text-slate-900 dark:text-white">Company or Organisation</label>
                  <input 
                    type="text" 
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    placeholder="Optional - leave blank if not applicable"
                    disabled={isSubmitting || isSuccess}
                    className="w-full px-5 py-3.5 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl text-slate-900 dark:text-white text-base focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400 focus:border-transparent transition-all placeholder:text-slate-400 dark:placeholder:text-slate-600 disabled:opacity-60"
                  />
                </div>

                <div className="flex flex-col gap-2 mb-2">
                  <label className="text-sm font-bold text-slate-900 dark:text-white">What are you trying to build or fix? <span className="text-red-500">*</span></label>
                  <textarea 
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={5}
                    placeholder="Describe the problem or project in plain terms. No brief format needed."
                    disabled={isSubmitting || isSuccess}
                    className="w-full px-5 py-4 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl text-slate-900 dark:text-white text-base focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400 focus:border-transparent transition-all resize-y placeholder:text-slate-400 dark:placeholder:text-slate-600 disabled:opacity-60"
                  ></textarea>
                </div>

                {/* Transforming Submit Button */}
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
                      <motion.div
                        key="loading"
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.5 }}
                        className="flex items-center gap-2"
                      >
                        <Loader2 className="animate-spin" size={24} />
                      </motion.div>
                    ) : isSuccess ? (
                      <motion.div
                        key="success"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="flex items-center gap-2"
                      >
                        <CheckCircle2 size={22} strokeWidth={2.5} />
                        <span>Message Sent</span>
                      </motion.div>
                    ) : (
                      <motion.div
                        key="default"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="flex items-center gap-2"
                      >
                        <span>Start the Conversation</span>
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
    </div>
  );
};

export default ContactPage;