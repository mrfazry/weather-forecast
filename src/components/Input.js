import React from 'react';

const Input = ({ name, value, onChange, placeholder, type }) => {
  return (
    <div className="form-group">
      <input
        type={type}
        placeholder={placeholder}
        className="form-control form-control-lg"
        name={name}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default Input;
