import React from 'react';

const SectionHeader = ({ title, subtitle }) => {
  return (
    <div className="text-center mb-16">
      <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
        {title}
      </h2>
      <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto rounded"></div>
      {subtitle && (
        <p className="text-xl text-gray-300 mt-6 max-w-3xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionHeader;