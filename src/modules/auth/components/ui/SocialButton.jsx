import React from 'react';

const SocialButton = ({ label, icon, onClick }) => {
  return (
    <div
      className="flex items-center justify-center h-12 w-full max-w-xs border border-gray-300 rounded-md cursor-pointer hover:bg-gray-200 transition-colors duration-200"
      onClick={onClick}
    >
      <img alt={label} src={icon} className="w-6 h-6" />
      <div className="ml-2 text-sm text-gray-700 truncate">{label}</div>
    </div>
  );
};

export default React.memo(SocialButton);