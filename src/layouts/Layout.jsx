import React from 'react'
import { motion } from 'framer-motion'

export const HomeLayout = ({ children }) => {
  return (
    
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1 }}
      className="min-h-screen mt-[50px] bg-gradient-to-br from-indigo-900 via-purple-900 to-fuchsia-700 text-white"
    >
      {children}
    </motion.div>
  )
}
export const PagesLayout = ({ children }) => {
  return (
    
    <motion.section
      className="py-12 w-full mt-[50px]"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      {children}
    </motion.section>
  )
}

// export default Layout
