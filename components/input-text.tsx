import React from 'react';

export default function InputText({ data, index, onChange }) {
  const handleOnPlus = () => {
    onChange(1, index);
  };
  const handleOnMinus = () => {
    onChange(-1, index);
  };
  return (
    <div>
      <button onClick={handleOnMinus}>-</button>
      <input type="text" value={`Item ${data}`} />
      <button onClick={handleOnPlus}>+</button>
    </div>
  );
}
