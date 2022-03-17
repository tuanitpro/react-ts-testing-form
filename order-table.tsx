import React, { useState } from 'react';
import InputText from './components/input-text';

export default function OrderTable({}) {
  const [orderItems, setOrderItems] = useState([10, 20]);
  const [newValue, setNewValue] = useState(0);
  const handleChangeValue = (ele) => {
    setNewValue(ele.target.value);
  };
  const handleAddNew = () => {
    setOrderItems([...orderItems, Number.parseInt(newValue.toString())]);
  };
  const handleonChangeValue = (value, index) => {
    let newOrderItems = orderItems;
    newOrderItems[index] = newOrderItems[index] + value;
    setOrderItems([...newOrderItems]);
  };
  
  return (
    <div>
      {orderItems.map((orderItem, index) => (
        <div key={index}>
          <InputText data={orderItem} index={index} onChange={handleonChangeValue} />
        </div>
      ))}
      <br />
      Total: {orderItems.reduce((item, a) => item + a)}
      <br />
      <input type="number" value={newValue} onChange={handleChangeValue} />
      <button onClick={handleAddNew}>Add new </button>
    </div>
  );
}
