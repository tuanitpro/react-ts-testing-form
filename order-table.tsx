import React, { useState } from 'react';
import InputText from './components/input-text';
import InputAdd from './components/input-add';

export default function OrderTable({}) {
  const [orderItems, setOrderItems] = useState([10, 20]);
  const handleAddNew = (newValue) => {
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
      <InputAdd onAdded={handleAddNew} />
    </div>
  );
}
