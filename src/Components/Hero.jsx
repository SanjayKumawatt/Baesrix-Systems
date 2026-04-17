import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Cloud, 
  Code2, 
  Cpu, 
  Server, 
  FileCode2, 
  Wind, 
  Network, 
  Sparkles, 
  ChevronDown 
} from 'lucide-react';

const floatingTags = [
  { label: 'Salesforce', icon: Cloud, pos: 'top-[15%] left-[5%] lg:left-[10%]', delay: 0 },
  { label: 'React', icon: Code2, pos: 'top-[20%] right-[5%] lg:right-[15%]', delay: 0.8 },
  { label: 'AI Integrations', icon: Cpu, pos: 'top-[60%] left-[2%] lg:left-[8%]', delay: 1.5 },
  { label: 'Node.js', icon: Server, pos: 'top-[65%] right-[5%] lg:right-[12%]', delay: 0.4 },
  { label: 'TypeScript', icon: FileCode2, pos: 'bottom-[20%] left-[10%] lg:left-[20%]', delay: 1.2 },
  { label: 'Tailwind', icon: Wind, pos: 'bottom-[25%] right-[10%] lg:right-[25%]', delay: 0.6 },
  { label: 'REST APIs', icon: Network, pos: 'top-[10%] right-[30%] lg:right-[35%]', delay: 1.8 },
  { label: 'Clean Code', icon: Sparkles, pos: 'top-[40%] left-[2%] lg:left-[5%]', delay: 0.2 },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.6, ease: "easeOut" } 
  },
};

const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-slate-50 dark:bg-slate-950 px-6 pt-20">
      
      {floatingTags.map((tag, index) => {
        const Icon = tag.icon;
        return (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ 
              opacity: 1, 
              scale: 1,
              y: [0, -15, 0] 
            }}
            transition={{
              opacity: { duration: 0.8, delay: 0.5 + tag.delay * 0.2 },
              scale: { duration: 0.8, delay: 0.5 + tag.delay * 0.2 },
              y: {
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: tag.delay,
              }
            }}
            className={`absolute hidden md:flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-100/60 dark:bg-indigo-900/40 text-indigo-700 dark:text-indigo-300 border border-indigo-200/50 dark:border-indigo-800/50 backdrop-blur-sm text-sm font-medium z-0 ${tag.pos}`}
          >
            <Icon size={16} strokeWidth={2.5} />
            <span>{tag.label}</span>
          </motion.div>
        );
      })}

      <div className="w-full max-w-4xl mx-auto text-center relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center"
        >
          <motion.h1 
            variants={itemVariants}
            className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.1]"
          >
            What your business needs, <br className="hidden md:block" />
            built the right way.
          </motion.h1>

          <motion.p 
            variants={itemVariants}
            className="mt-6 text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-2xl leading-relaxed"
          >
            Baesrix builds Salesforce solutions, web applications, and AI tools for businesses that want software done cleanly - not just quickly.
          </motion.p>

          <motion.div 
            variants={itemVariants}
            className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 w-full"
          >
            <Link 
              to="/services" 
              className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-indigo-600 text-white font-medium text-base hover:bg-indigo-700 transition-colors duration-200 text-center"
            >
              See Our Services
            </Link>
            <Link 
              to="/contact" 
              className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-transparent text-slate-700 dark:text-slate-200 font-medium text-base border border-slate-300 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors duration-200 text-center"
            >
              Talk to Us
            </Link>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown size={20} className="text-slate-400 dark:text-slate-500" />
        </motion.div>
      </motion.div>
      
    </section>
  );
};

export default Hero;