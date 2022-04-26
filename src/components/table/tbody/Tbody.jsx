import React from "react";
import { useSelector } from "react-redux";
import cl from "./Tbody.module.css";

const Tbody = () => {
  const currency = useSelector(state => state.currency.currency)
  console.log(currency)
  return (
    <tbody>
      <tr>
        <td className={cl.th}>1</td>
        <td className={cl.th}>USD</td>
        <td className={cl.th}>{currency}</td>
        <td className={cl.th}>1</td>
        <td className={cl.th}>12</td>
        <td className={cl.th}>12</td>
      </tr>
    </tbody>
  );
};

export default Tbody;
