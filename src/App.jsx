import { useState, useEffect } from "react";
import { InputBox } from "./components";
import "./App.css";
import ConvertTo from "./components/ConvertTo";


const exchangeRates = {
  rates: {
    USD: 1,
    INR: 83.22,
    EUR: 0.92,
    GBP: 0.78,
    JPY: 149.5,
    AUD: 1.45,
    CAD: 1.37,
    CHF: 0.93,
    CNY: 7.25,
    MXN: 18.57,
    SGD: 1.35,
    NZD: 1.6,
    ZAR: 18.4,
    BRL: 5.18,
    AED: 3.67,
  }
};

function App() {
  const [amount, setAmount] = useState(""); // Amount in the "from" currency
  const [from, setFrom] = useState("USD"); // Source currency
  const [to, setTo] = useState("INR"); // Target currency
  const [convertedAmount, setConvertedAmount] = useState(null);
  const [currencyOptions, setCurrencyOptions] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    try {
      setCurrencyOptions(Object.keys(exchangeRates.rates)); // Populating available currencies
    } catch (error) {
      setError("Error loading currency rates");
    }
  }, []);

  // Handle currency conversion
  const handleConvert = () => {
    setError(null); // Clear previous errors

    if (amount <= 0) {
      setError("Please enter a valid amount.");
      return;
    }

    // If you're using a mock or local conversion function:
    const fromRate = exchangeRates.rates[from];
    const toRate = exchangeRates.rates[to];
    
    if (fromRate && toRate) {
      const result = (amount / fromRate) * toRate;
      setConvertedAmount(result.toFixed(2)); // Update the converted amount
    } else {
      setError("Conversion rates not available.");
    }
  };

  return (
    <div className="container flex flex-col gap-4 text-black bg-white rounded-2xl">
      <h1 className="p-4 font-serif text-center -tracking-tighter">Currency Converter</h1>

      {/* Error Display */}
      <div className="h-6 text-center">
        {error ? <p className="text-red-500">{error}</p> : <span>&nbsp;</span>}
      </div>

      {/* From Currency Input */}
      <InputBox
        label="Amount"
        amount={amount}
        onAmountChange={setAmount}
        onCurrencyChange={setFrom} // Handles 'from' currency
        currencyOptions={currencyOptions}
        selectCurrency={from}
      />

      {/* To Currency Input */}
      <ConvertTo
        label="Convert To"
        onCurrencyChange={setTo} // Handles 'to' currency
        currencyOptions={currencyOptions}
        selectCurrency={to}
      />

      {/* Submit Button */}
      <div className="flex justify-center">
        <button
          onClick={handleConvert}
          className="w-1/2 px-4 py-2 mt-2 text-white bg-blue-500 rounded hover:bg-blue-600"
        >
          Convert
        </button>
      </div>

      {/* Display Conversion Result */}
      {convertedAmount !== null ? (
        <p className="m-4 text-center">
          {amount} {from} = <strong>{convertedAmount}</strong> {to}
        </p>
      ) : (
        <p className="m-5 text-center text-gray-900">Enter values and click "Convert" to see the result.</p>
      )}
    </div>
  );
}

export default App;
