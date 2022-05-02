import React from "react";
import { useSelector } from "react-redux";
import cl from "./TrRUB.module.css";

const TrRUB = () => {
  const currency = useSelector((state) => state.currency);
  console.log(currency);
  let RUBUSD =
    Object.keys(currency).length === 0 ? "Обновите" : (1 / currency.USD.Value ).toFixed(4);
  let RUBEUR =
    Object.keys(currency).length === 0
      ? "Обновите"
      : (currency.EUR.Value).toFixed(4);
  let RUBCNY =
    Object.keys(currency).length === 0
      ? "Обновите"
      : (currency.CNY.Value).toFixed(4);
  return (
    <tr>
      <td className={cl.th}>2</td>
      <td className={cl.th}>RUB</td>
      <td className={cl.th}>1</td>
      <td className={cl.th}>{RUBUSD}</td>
      <td className={cl.th}>{RUBEUR}</td>
      <td className={cl.th}>{RUBCNY}</td>
    </tr>
  );
};

export default TrRUB;
