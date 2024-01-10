import { useEffect, useState } from "react";

function UseCurrencyInfo(currency){
  const [data, setData] = useState({}) 
  const [options, setOptions] = useState([])
  useEffect(() =>{
      fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
    .then((res) => res.json())
    .then((res) => { 
      setData(res[currency])
    setOptions(Object.keys(res[currency]));
      console.log(data);
    });
  }, [currency])
    console.log(data);
    return {data, options};
  }    

export default UseCurrencyInfo;