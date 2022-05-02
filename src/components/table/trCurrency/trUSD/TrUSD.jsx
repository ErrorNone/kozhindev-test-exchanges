import React from "react";
import { useSelector } from "react-redux";
import cl from "./TrUSD.module.css";

const TrUSD = () => {
  const currency = useSelector((state) => state.currency);
  let USDRUB =
    Object.keys(currency).length === 0 ? "Обновите" : currency.USD.Value;
  let USDEUR =
    Object.keys(currency).length === 0 ? "Обновите" : (currency.USD.Value / currency.EUR.Value).toFixed(4);
  let USDCNY =
    Object.keys(currency).length === 0 ? "Обновите" : (currency.USD.Value / currency.CNY.Value).toFixed(4);
  return (
    <tr>
      <td className={cl.th}>1</td>
      <td className={cl.th}>USD</td>
      <td className={cl.th}>{USDRUB}</td>
      <td className={cl.th}>1</td>
      <td className={cl.th}>{USDEUR}</td>
      <td className={cl.th}>{USDCNY}</td>
    </tr>
  );
};

export default TrUSD;
