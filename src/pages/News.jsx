import React from 'react'

import { motion } from 'framer-motion';
import { Newspaper, CalendarDays, Megaphone } from 'lucide-react';
import { PagesLayout }from '../layouts/Layout';

const News = () => {
  return (
    <PagesLayout>
      <div className="container mx-auto px-4 min-h-[calc(100vh-5rem)]">
        <h2 className="text-3xl font-bold mb-4">Latest News</h2>
        <p className="text-lg mb-8">Stay updated with our latest announcements and events.</p>
        {/* Blog Section with Dummy Data */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-12">
          {[1,2,3,4,5,6].map((id) => (
            <div key={id} className="bg-white/10 rounded-xl shadow-lg p-4 sm:p-6 flex flex-col">
              <img src={`https://source.unsplash.com/random/400x200?sig=${id}`} alt="Blog" className="rounded-lg mb-4 w-full h-32 sm:h-40 object-cover" />
              <h4 className="text-base sm:text-lg font-bold mb-2">Blog Post Title {id}</h4>
              <p className="text-xs sm:text-sm text-white/80 mb-2">This is a summary of the blog post. It covers news, events, or announcements relevant to Kniht Technologies.</p>
              <span className="text-xs text-yellow-400 mb-2">Published: 2025-09-21</span>
              <a href="#" className="text-blue-400 hover:underline mt-auto">Read More</a>
            </div>
          ))}
        </div>
        {/* Google Analytics & Adsense Ready */}
        <div className="bg-white/10 rounded-xl shadow-lg p-6 flex flex-col items-center">
          <span className="text-lg font-bold mb-2">Analytics & Ads</span>
          <p className="text-sm text-center mb-2">This section is ready for Google Analytics and Adsense integration. Add your tracking and ad code here.</p>
          <div className="w-full h-24 shadow-md shadow-cyan-800 flex items-center justify-center rounded-lg">Ad Placeholder</div>
        </div>
      </div>
    </PagesLayout>
  );
}

export default News;
