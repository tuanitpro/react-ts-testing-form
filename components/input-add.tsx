import React, { useState } from 'react';

export default function InputAdd({ onAdded }) {
  const [newValue, setNewValue] = useState(0);
  const handleAdd = () => {
    onAdded(newValue);
  };
  const handleChangeValue = (ele) => {
    setNewValue(ele.target.value);
  };

  return (
    <div>
      <input type="number" value={newValue} onChange={handleChangeValue} />
      <button onClick={handleAdd}>Add new</button>
    </div>
  );
}
