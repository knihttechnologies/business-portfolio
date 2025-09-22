import React from 'react';
import { motion } from 'framer-motion';
import { Sparkle, ArrowDownCircle } from 'lucide-react';

const HomeHero = () => {
  return (
    <div className="relative flex flex-col items-center justify-center py-10 px-2 sm:px-4 md:px-8 mt-20 min-h-[calc(100vh-5rem)]">
      <motion.div
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="flex flex-col md:flex-row gap-4 mb-8 w-full"
      >
        <Sparkle size={48} className="text-sky-800 text-center animate-pulse" />
        <h1 className="text-2xl sm:text-3xl md:text-5xl font-extrabold tracking-tight text-white drop-shadow-lg text-center w-full">Welcome to Kniht Technologies</h1>
      </motion.div>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="max-w-2xl text-sm sm:text-base md:text-lg text-center text-white mb-8"
      >
        We are a forward-thinking tech company delivering consultancy, web & mobile development, cyber security, and blockchain solutions. Scroll down to explore more!
      </motion.p>
      <motion.div
        initial={{ y: 0, opacity: 0 }}
        animate={{ y: 20, opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        <ArrowDownCircle size={40} className="text-black animate-bounce" />
      </motion.div>
    </div>
  );
};

export default HomeHero;