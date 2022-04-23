import React from "react";
import "reset-css";
import Tbody from "./tbody/Tbody";
import Thead from "./thead/Thead";
import cl from "./Table.module.css";

const Table = () => {
  return (
    <table className={cl.table}>
        <Thead/>
        <Tbody/>
    </table>
  );
};

export default Table;
