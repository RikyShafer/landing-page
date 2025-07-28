import React from 'react';

const PlaceholderPage = ({ title, description }) => {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12 text-center">
      <div className="bg-white rounded-2xl p-12 shadow-lg">
        <div className="w-24 h-24 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mx-auto mb-6 flex items-center justify-center">
          <span className="text-3xl">🚧</span>
        </div>
        <h1 className="text-4xl font-bold text-gray-900 mb-4">{title}</h1>
        <p className="text-xl text-gray-600 mb-8">{description}</p>
        <div className="text-gray-500">
          <p>העמוד בבנייה ויהיה זמין בקרוב</p>
        </div>
      </div>
    </div>
  );
};

export default PlaceholderPage;