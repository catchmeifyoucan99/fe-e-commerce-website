import React from 'react';

const Button = ({ children, onClick, className }) => (
  <button
    onClick={onClick}
    className={`w-full bg-black text-white py-2 px-4 rounded-lg transition-all ${className}`}
  >
    {children}
  </button>
);

export default React.memo(Button);