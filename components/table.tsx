import React from 'react';

export default function Table({ dataSource }) {
  const caculateSumTotal = () => {
    if (dataSource?.length) {
      return dataSource?.reduce((item, a) => item + a);
    }
    return 0;
  };
  return (
    <div>
      <table border={1} width="100%">
        <thead>
          <tr>
            <th>#</th>
            <th>Item</th>
            <th>Quantity</th>
          </tr>
        </thead>
        <tbody>
          {dataSource?.map((orderItem, index) => (
            <tr key={index}>
              <th>{index}</th>
              <th>Item {index}</th>
              <th>{orderItem}</th>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <th>Total</th>
            <th colSpan={2}>{caculateSumTotal()}</th>
          </tr>
        </tfoot>
      </table>
    </div>
  );
}
