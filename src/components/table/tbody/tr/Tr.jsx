import React from "react";
import { useSelector } from "react-redux";
import cl from "./Tr.module.css";

const Tr = ({valute, index}) => {
    const currency = useSelector((state) => state.currency);

  let USD =
    Object.keys(currency).length === 0 ? 1 : (currency.USD.Value)
  let EUR =
    Object.keys(currency).length === 0 ? 1 : (currency.EUR.Value)
  let CNY =
    Object.keys(currency).length === 0 ? 1 : (currency.CNY.Value)
  return (
    <tr>
      <td className={cl.th}>{index + 1}</td>
      <td className={cl.th}>{valute.CharCode}</td>
      <td className={cl.th}>{valute.Value}</td>
      <td className={cl.th}>{(valute.Value / USD).toFixed(4)}</td>
      <td className={cl.th}>{(valute.Value / EUR).toFixed(4)}</td>
      <td className={cl.th}>{(valute.Value / CNY).toFixed(4)}</td>
    </tr>
  );
};

export default Tr;
