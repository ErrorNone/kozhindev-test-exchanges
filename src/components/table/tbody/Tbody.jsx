import React from "react";
import { useSelector } from "react-redux";
import TrRUB from "./trRUB/TrRUB";
import TrUSD from "../trCurrency/trUSD/TrUSD";

import cl from "./Tbody.module.css";

const Tbody = () => {
  const currency = useSelector((state) => state.currency);
  console.log(currency);
  return (
    <tbody>
      {/* <TrUSD/>
      <TrRUB/> */}
      {}
    </tbody>
  );
};

export default Tbody;
