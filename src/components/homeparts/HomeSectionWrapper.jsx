import React from 'react';

const HomeSectionWrapper = ({ id, children, className = '' }) => {
  return (
    <section 
      id={id} 
      className={`py-5 px-2 sm:px-4 rounded-2xl shadow-lg shadow-cyan-600 mx-auto max-w-5xl mb-8 ${className}`}
    >
      {children}
    </section>
  );
};

export default HomeSectionWrapper;