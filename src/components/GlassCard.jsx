import React from 'react';

const GlassCard = ({ children, className = '', hover = false }) => {
  return (
    <div 
      className={`glass rounded-xl p-6 ${hover ? 'hover:scale-105 hover:shadow-glow transition-all duration-300' : ''} ${className}`}
    >
      {children}
    </div>
  );
};

export default GlassCard;