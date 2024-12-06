import { useEffect, useState } from "react";

function UseCurrInfo(baseCurrency) {
  const [data, setData] = useState({});

  useEffect(() => {
    const fetchCurrencyData = async () => {
      try {
        const response = await fetch(
          `https://api.exchangerate.host/latest?base=${baseCurrency}`
        );
        const result = await response.json();
        setData(result.conversion_rates || {});
      } catch (error) {
        console.error("Error fetching currency data:", error);
      }
    };

    fetchCurrencyData();
  }, [baseCurrency]);

  return data;
}

export default UseCurrInfo;
