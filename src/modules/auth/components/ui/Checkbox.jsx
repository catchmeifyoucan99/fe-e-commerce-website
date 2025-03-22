import React from 'react';

const Checkbox = ({ label, checked, onChange }) => {
  return (
    <div className="flex items-center">
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        className="form-checkbox h-5 w-5 "
      />
      {label && <label className="ml-2 text-sm text-gray-700">{label}</label>}
    </div>
  );
};

export default React.memo(Checkbox);