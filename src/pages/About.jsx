import React from 'react';
import { motion } from 'framer-motion';
import { Code, Shield, Smartphone, Lightbulb } from 'lucide-react';
import { PagesLayout } from '../layouts/Layout';

const About = ({ isSummary = false }) => {

  const content = (
    <div className={``}>
      <h2 className={`text-3xl font-bold mb-4 ${isSummary ? '' : '' }`}>About Kniht Technologies</h2>
      <motion.p
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="text-lg mb-6"
      >
        Founded in 2023, Kniht Technologies is a forward-thinking tech company committed to delivering cutting-edge solutions. We specialize in consultancy, web and mobile app development, cyber security, and blockchain technology. Our mission is to empower businesses with innovative digital solutions and expert guidance.
      </motion.p>
      {!isSummary && (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 mb-8">
          <div className="bg-gray-100 dark:bg-gray-800 rounded-xl shadow-lg p-6 flex flex-col items-center border border-sky-200 dark:border-sky-700">
            <Lightbulb size={48} className="text-sky-500 mb-2" />
            <h3 className="text-xl font-semibold mb-2 text-black dark:text-white">Consultancy</h3>
            <p className="text-sm text-center text-gray-700 dark:text-gray-300">Expert advice for digital transformation, strategy, and business growth.</p>
          </div>
          <div className="bg-gray-100 dark:bg-gray-800 rounded-xl shadow-lg p-6 flex flex-col items-center border border-sky-200 dark:border-sky-700">
            <Code size={48} className="text-sky-500 mb-2" />
            <h3 className="text-xl font-semibold mb-2 text-black dark:text-white">Web & Mobile Dev</h3>
            <p className="text-sm text-center text-gray-700 dark:text-gray-300">Custom web and mobile applications tailored to your needs.</p>
          </div>
          <div className="bg-gray-100 dark:bg-gray-800 rounded-xl shadow-lg p-6 flex flex-col items-center border border-sky-200 dark:border-sky-700">
            <Shield size={48} className="text-sky-500 mb-2" />
            <h3 className="text-xl font-semibold mb-2 text-black dark:text-white">Cyber Security</h3>
            <p className="text-sm text-center text-gray-700 dark:text-gray-300">Protect your business with our security solutions and audits.</p>
          </div>
          <div className="bg-gray-100 dark:bg-gray-800 rounded-xl shadow-lg p-6 flex flex-col items-center border border-sky-200 dark:border-sky-700">
            <Smartphone size={48} className="text-sky-500 mb-2" />
            <h3 className="text-xl font-semibold mb-2 text-black dark:text-white">Blockchain</h3>
            <p className="text-sm text-center text-gray-700 dark:text-gray-300">Innovative blockchain solutions for modern enterprises.</p>
          </div>
        </div>
      )}
      {!isSummary && (
        <div className="flex flex-col md:flex-row gap-6 sm:gap-8 items-center justify-center">
          <img src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=600&q=80" alt="Team" className="rounded-xl shadow-lg w-full h-48 sm:h-64 md:w-1/2 object-cover" />
          <div className="bg-white/10 rounded-xl shadow-lg p-4 sm:p-6 w-full md:w-1/2">
            <h3 className="text-lg sm:text-2xl font-bold mb-2">Our Team</h3>
            <p className="text-sm sm:text-base">We are a diverse group of passionate technologists, designers, and strategists dedicated to delivering excellence. Our collaborative approach ensures every project is a success.</p>
          </div>
        </div>
      )}
    </div>
  );

  return (
    <PagesLayout>
      <motion.section
        className={`mt-20 px-2 sm:px-4 min-h-[calc(100vh-5rem)]`}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="container mx-auto px-2 sm:px-4">{content}</div>
      </motion.section>
    </PagesLayout>
  );
}

export default About;