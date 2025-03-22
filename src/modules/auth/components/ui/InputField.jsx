import React from 'react';

const InputField = ({ label, type, placeholder }) => (
  <div className="mb-4">
    <label className="flex text-xs font-normal text-gray-400 mb-2">{label}</label>
    <input
      type={type}
      placeholder={placeholder}
      className="w-full px-4 py-2 border-b-[1px] border-gray-300 focus:outline-none focus:border-black placeholder-black/15 transition-all"
    />
  </div>
);

export default React.memo(InputField);