import React from 'react';

const SectionHeader = ({ title, subtitle, className = '' }) => {
  return (
    <div className={`text-center mb-16 ${className}`}>
      <h2 className="text-4xl font-bold text-white glow-text mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-white/80 text-lg max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionHeader;