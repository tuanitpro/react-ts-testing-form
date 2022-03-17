import React, { useState } from 'react';
import InputText from './components/input-text';
import InputAdd from './components/input-add';
import Table from './components/table';

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

  const caculateSumTotal = () => {
    if (orderItems?.length) {
      return orderItems?.reduce((item, a) => item + a);
    }
    return 0;
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
      Total:
      <br /> <input type="text" value={caculateSumTotal()} disabled />
      <br />
      <hr />
      <InputAdd onAdded={handleAddNew} />
      <hr />
      <Table dataSource={orderItems} />
    </div>
  );
}
