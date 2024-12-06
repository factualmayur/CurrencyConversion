import React from "react";

function InputBox({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOptions = [],
  selectCurrency,
}) {
  return (
    <div className="flex flex-col items-center justify-center p-2 text-sm font-semibold text-black bg-white rounded-lg">
      <div>
        <label className="flex justify-center mb-2 text-xl text-black">{label}</label>
        <input
          className="w-full p-3 text-gray-800 transition duration-200 border border-gray-300 rounded-lg shadow-sm bg-neutral-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          type="number"
          placeholder="Enter Amount"
          value={amount}
          onChange={(e) => onAmountChange(Number(e.target.value))}
        />
      </div>
      <div className="flex flex-wrap justify-center text-center">
        <p className="w-full m-2 text-xl text-black">Currency Type</p>
        <select
          className="p-3 bg-gray-300 rounded-lg cursor-pointer"
          value={selectCurrency}
          onChange={(e) => onCurrencyChange(e.target.value)}
        >
          {currencyOptions.map((currency) => (
            <option key={currency} value={currency}>
              {currency}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default InputBox;
