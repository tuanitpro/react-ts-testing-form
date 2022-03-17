import React from 'react';

export default function InputText({ data, index, onChange, onDelete }) {
  const handleOnPlus = () => {
    onChange(1, index);
  };
  const handleOnMinus = () => {
    onChange(-1, index);
  };
  const handleOnDelete = () => {
    onDelete(index);
  };
  return (
    <div>
      <button onClick={handleOnMinus}>-</button>
      <input type="text" value={`Item ${data}`} />
      <button onClick={handleOnPlus}>+</button>
      <button onClick={handleOnDelete}>Delete</button>
    </div>
  );
}
