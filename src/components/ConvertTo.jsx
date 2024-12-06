import React from "react";

function ConvertTo({
  label,
  onCurrencyChange,
  currencyOptions = [],
  selectCurrency,
}) {
  return (
    <div className="flex flex-col items-center justify-center font-semibold">
      <label className="mb-2 text-xl text-center text-black">{label}</label>
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
  );
}

export default ConvertTo;
