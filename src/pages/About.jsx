import React from 'react';
import { motion } from 'framer-motion';
// import { Layout } from '../layouts/Layout';
import { Content} from '../assets/constants/companycontent';

const About = ({ isSummary = false }) => {
  return (
    <motion.section
      className={`pt-20 px-2 sm:px-4 min-h-[calc(100vh-5rem)]`}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="container mx-auto px-2 sm:px-4">{<Content isSummary={isSummary} />}</div>
    </motion.section>
  );
}

export default About;