import React, { useState } from "react";
import "./salestable.css"; // Import CSS file for styling

const Table = ({
  data,
  handleOptionChange,
  handleQuantityChange,
  handleDiscountChange,
}) => {
  return (
    <table className="sales-table">
      <thead>
        <tr>
          <th>Product Name</th>
          <th>Batch, Barcode, Expiry</th>
          <th>Available Stock</th>
          <th>Unit Type</th>
          <th>Quantity</th>
          <th>Discount (%)</th>
          <th>Total (AED)</th>
        </tr>
      </thead>
      <tbody>
        {data.map((row, index) => (
          <tr key={index}>
            <td>{row.productName}</td>
            <td>
              <BatchBarcodeExpirySelect
                value={row.selectedOption}
                onChange={(newOption) => handleOptionChange(index, newOption)}
              />
            </td>
            <td>
              {row.availableStock} ({row.unitPerStock})
            </td>
            <td>{row.unitType}</td>
            <td>
              <QuantityControl
                value={row.quantity}
                onChange={(newQuantity) =>
                  handleQuantityChange(index, newQuantity)
                }
              />
            </td>
            <td>
              <input
                className="discount"
                type="number"
                value={row.discount}
                onChange={(e) =>
                  handleDiscountChange(index, parseInt(e.target.value, 10))
                }
              />
            </td>
            <td>{calculateTotal(row)}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

const BatchBarcodeExpirySelect = ({ value, onChange }) => {
  const options = [
    "032458, Barcode 1, 2025-12-15",
    "225641, Barcode 2, 2026-03-06",
    "158796, Barcode 3, 2024-11-23",
    "225585, Barcode 4, 2025-05-09",
  ];

  return (
    <select value={value} onChange={(e) => onChange(e.target.value)}>
      {options.map((option, index) => (
        <option key={index} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
};

const QuantityControl = ({ value, onChange }) => {
  const handleIncrement = () => {
    if (value < 99) onChange(value + 1);
  };

  const handleDecrement = () => {
    if (value > 0) onChange(value - 1);
  };

  return (
    <div className="quantity-control">
      <button onClick={handleDecrement}>-</button>
      <input type="number" value={value} readOnly />
      <button onClick={handleIncrement}>+</button>
    </div>
  );
};

const calculateTotal = (row) => {
  const total = row.quantity * row.unitPrice * (1 - row.discount / 100);
  return total.toFixed(2); 
};

const SalesTable = () => {
  const [tableData, setTableData] = useState([
    {
      productName: "Medicine ",
      selectedOption: "",
      availableStock: 100,
      unitPerStock: 10,
      unitType: "Box",
      quantity: 2,
      discount: 10,
      unitPrice: 10,
    },
    {
      productName: "Medicine 2",
      selectedOption: "",
      availableStock: 50,
      unitPerStock: 5,
      unitType: "Bottle",
      quantity: 3,
      discount: 5,
      unitPrice: 15,
    },
    {
      productName: "Medicine 3",
      selectedOption: "",
      availableStock: 15,
      unitPerStock: 5,
      unitType: "Bottle",
      quantity: 1,
      discount: 6,
      unitPrice: 25,
    },
  ]);

  const handleOptionChange = (index, newOption) => {
    const newData = [...tableData];
    newData[index].selectedOption = newOption;
    setTableData(newData);
  };

  const handleQuantityChange = (index, newQuantity) => {
    const newData = [...tableData];
    newData[index].quantity = newQuantity;
    setTableData(newData);
  };

  const handleDiscountChange = (index, newDiscount) => {
    const newData = [...tableData];
    newData[index].discount = newDiscount;
    setTableData(newData);
  };

  return (
    <Table
      data={tableData}
      handleOptionChange={handleOptionChange}
      handleQuantityChange={handleQuantityChange}
      handleDiscountChange={handleDiscountChange}
    />
  );
};

export default SalesTable;
