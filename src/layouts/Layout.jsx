import React from 'react'
import { motion } from 'framer-motion'
import { usePageContext } from '../context/PageContext';

export const HomeLayout = ({ children}) => {
  
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1 }}
      className={`min-h-screen mt-[70px] text-white`}
    >
      {children}
    </motion.div>
  )
}
export const PagesLayout = ({ children }) => {
  const { isHome, setIsHome } = usePageContext()
  
  return (
    <motion.section
      className={`w-full ${isHome ? 'mt-[5px] py-6' : 'mt-[50px] py-12'}`}
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
