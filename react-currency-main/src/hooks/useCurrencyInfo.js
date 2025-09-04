import { useEffect, useState } from "react";

const useCurrencyInfo = (currency) => {
  const [data, setData] = useState({});
  useEffect(() => {
    let apiUrl = `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`;

    fetch(apiUrl)
      .then((res) => res.json())
      .then((data) => setData(data[currency]));
  }, [currency]);

  return data;
};

export default useCurrencyInfo;
