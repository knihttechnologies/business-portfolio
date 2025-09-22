import React from 'react'

import { motion } from 'framer-motion';
import { Globe, MonitorSmartphone, Server, Users } from 'lucide-react';
import { PagesLayout } from '../layouts/Layout';

const Portfolio = () => {
  return (
    <PagesLayout>
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-4">Our Portfolio</h2>
        <p className="text-lg mb-8">Explore some of our recent projects and collaborations.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          {/* Portfolio Cards */}
          <div className="bg-white/10 rounded-xl shadow-lg p-6 flex flex-col items-center">
            <Globe size={48} className="text-blue-500 mb-2" />
            <h3 className="text-xl font-semibold mb-2">Global Reach</h3>
            <p className="text-sm text-center">Projects delivered worldwide.</p>
          </div>
          <div className="bg-white/10 rounded-xl shadow-lg p-6 flex flex-col items-center">
            <MonitorSmartphone size={48} className="text-green-500 mb-2" />
            <h3 className="text-xl font-semibold mb-2">Mobile Solutions</h3>
            <p className="text-sm text-center">Innovative mobile apps for various industries.</p>
          </div>
          <div className="bg-white/10 rounded-xl shadow-lg p-6 flex flex-col items-center">
            <Server size={48} className="text-red-500 mb-2" />
            <h3 className="text-xl font-semibold mb-2">Cloud Services</h3>
            <p className="text-sm text-center">Robust cloud infrastructure and hosting.</p>
          </div>
          <div className="bg-white/10 rounded-xl shadow-lg p-6 flex flex-col items-center">
            <Users size={48} className="text-purple-500 mb-2" />
            <h3 className="text-xl font-semibold mb-2">Team Collaboration</h3>
            <p className="text-sm text-center">Working with talented teams and partners.</p>
          </div>
        </div>
        {/* Demo Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white/10 rounded-xl shadow-lg p-6 flex flex-col items-center">
            <img src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80" alt="Demo" className="rounded-lg mb-4 w-full h-40 object-cover" />
            <h4 className="text-lg font-bold mb-2">Mobile App Demo</h4>
            <p className="text-sm text-center">A showcase of our mobile app development capabilities.</p>
          </div>
          <div className="bg-white/10 rounded-xl shadow-lg p-6 flex flex-col items-center">
            <img src="https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80" alt="Demo" className="rounded-lg mb-4 w-full h-40 object-cover" />
            <h4 className="text-lg font-bold mb-2">Cloud Project</h4>
            <p className="text-sm text-center">Our cloud infrastructure powering client solutions.</p>
          </div>
        </div>
      </div>
    </PagesLayout>
  );
}

export default Portfolio;
