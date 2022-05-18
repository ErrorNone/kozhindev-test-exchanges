import React from "react";
import { useSelector } from "react-redux";
import "./Tr.scss";

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
      <td>{index + 1}</td>
      <td>{valute.CharCode}</td>
      <td>{valute.Value}</td>
      <td>{(valute.Value / USD).toFixed(4)}</td>
      <td>{(valute.Value / EUR).toFixed(4)}</td>
      <td>{(valute.Value / CNY).toFixed(4)}</td>
    </tr>
  );
};

export default Tr;
