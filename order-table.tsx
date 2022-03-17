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
  const handleOnChangeValue = (value, index) => {
    let newOrderItems = orderItems;
    newOrderItems[index] = newOrderItems[index] + value;
    setOrderItems([...newOrderItems]);
  };

  const handleOnDelete = (index) => {
    let newOrderItems = orderItems.filter(
      (item, newIndex) => index !== newIndex
    );

    setOrderItems([...newOrderItems]);
  };

  return (
    <div>
      {orderItems?.map((orderItem, index) => (
        <div key={index}>
          <InputText
            data={orderItem}
            index={index}
            onChange={handleOnChangeValue}
            onDelete={handleOnDelete}
          />
        </div>
      ))}
      <br />
      Total: {orderItems.length ? orderItems?.reduce((item, a) => item + a) : 0}
      <br />
      <input type="number" value={newValue} onChange={handleChangeValue} />
      <button onClick={handleAddNew}>Add new </button>
    </div>
  );
}
