import React from 'react'

import { motion } from 'framer-motion';
import { Code, Shield, Smartphone, Lightbulb } from 'lucide-react';
import { Layout } from '../layouts/Layout';
import { services } from '../assets/constants/companycontent';

const Services = ({ isSummary }) => {
  return (
    <div className="container mx-auto px-4 min-h-[calc(100vh-5rem)]">
      <h2 className="text-3xl font-bold mb-4">Our Services</h2>
      <p className="text-lg mb-8">Kniht Technologies offers a range of services to help your business thrive in the digital age.</p>
      <div className="grid grid-cols-4 gap-6 mb-12">
        {/* Service Cards */}
        {services.map((service, idx) => (
          <motion.div
            key={service.title}
            className="bg-gray-100 dark:bg-gray-800 rounded-xl shadow-lg p-6 flex flex-col items-center border border-sky-200 dark:border-sky-700"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
          >
            <service.icon size={48} className="text-sky-500 mb-2" />
            <h3 className="text-lg font-semibold mb-2 text-black dark:text-white">{service.title}</h3>
            <p className="text-sm text-center text-gray-700 dark:text-gray-300">{service.description}</p>
          </motion.div>
        ))}
      </div>
      {/* Demo Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
        <div className="bg-white/10 rounded-xl shadow-lg p-4 sm:p-6 flex flex-col items-center">
          <img src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=400&q=80" alt="Demo" className="rounded-lg mb-4 w-full h-32 sm:h-40 object-cover" />
          <h4 className="text-base sm:text-lg font-bold mb-2">Demo Project</h4>
          <p className="text-xs sm:text-sm text-center">A showcase of our consultancy and development expertise.</p>
        </div>
        <div className="bg-white/10 rounded-xl shadow-lg p-4 sm:p-6 flex flex-col items-center">
          <img src="https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80" alt="Demo" className="rounded-lg mb-4 w-full h-32 sm:h-40 object-cover" />
          <h4 className="text-base sm:text-lg font-bold mb-2">Security Audit</h4>
          <p className="text-xs sm:text-sm text-center">Our cyber security team in action, protecting client assets.</p>
        </div>
      </div>
    </div>
  );
}

export default Services;