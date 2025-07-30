import React from 'react';
import { motion } from 'framer-motion';

const Card = ({ 
  children, 
  className = '', 
  hover = true, 
  glassEffect = false,
  ...props 
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={hover ? { 
        y: -5, 
        boxShadow: '0 20px 40px rgba(0,0,0,0.2)' 
      } : {}}
      className={`
        p-6 rounded-xl transition-all duration-300
        ${glassEffect 
          ? 'glass-effect border border-white/10' 
          : 'bg-white/5 backdrop-blur-sm'
        }
        ${className}
      `}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default Card;