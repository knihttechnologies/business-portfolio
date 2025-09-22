import React from 'react'

import { motion } from 'framer-motion';
import { Code, Shield, Smartphone, Lightbulb } from 'lucide-react';
import { PagesLayout } from '../layouts/Layout';

const Services = () => {
  return (
    <PagesLayout>
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-4">Our Services</h2>
        <p className="text-lg mb-8">Kniht Technologies offers a range of services to help your business thrive in the digital age.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          {/* Service Cards */}
          <div className="bg-white/10 rounded-xl shadow-lg p-6 flex flex-col items-center">
            <Lightbulb size={48} className="text-blue-500 mb-2" />
            <h3 className="text-xl font-semibold mb-2">Consultancy</h3>
            <p className="text-sm text-center">Expert advice for digital transformation and strategy.</p>
          </div>
          <div className="bg-white/10 rounded-xl shadow-lg p-6 flex flex-col items-center">
            <Code size={48} className="text-green-500 mb-2" />
            <h3 className="text-xl font-semibold mb-2">Web & Mobile Dev</h3>
            <p className="text-sm text-center">Custom web and mobile applications tailored to your needs.</p>
          </div>
          <div className="bg-white/10 rounded-xl shadow-lg p-6 flex flex-col items-center">
            <Shield size={48} className="text-red-500 mb-2" />
            <h3 className="text-xl font-semibold mb-2">Cyber Security</h3>
            <p className="text-sm text-center">Protect your business with our security solutions.</p>
          </div>
          <div className="bg-white/10 rounded-xl shadow-lg p-6 flex flex-col items-center">
            <Smartphone size={48} className="text-purple-500 mb-2" />
            <h3 className="text-xl font-semibold mb-2">Blockchain</h3>
            <p className="text-sm text-center">Innovative blockchain solutions for modern enterprises.</p>
          </div>
        </div>
        {/* Demo Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white/10 rounded-xl shadow-lg p-6 flex flex-col items-center">
            <img src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=400&q=80" alt="Demo" className="rounded-lg mb-4 w-full h-40 object-cover" />
            <h4 className="text-lg font-bold mb-2">Demo Project</h4>
            <p className="text-sm text-center">A showcase of our consultancy and development expertise.</p>
          </div>
          <div className="bg-white/10 rounded-xl shadow-lg p-6 flex flex-col items-center">
            <img src="https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80" alt="Demo" className="rounded-lg mb-4 w-full h-40 object-cover" />
            <h4 className="text-lg font-bold mb-2">Security Audit</h4>
            <p className="text-sm text-center">Our cyber security team in action, protecting client assets.</p>
          </div>
        </div>
      </div>
    </PagesLayout>
  );
}

export default Services;
