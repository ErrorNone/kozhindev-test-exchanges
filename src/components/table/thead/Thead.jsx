import React from "react";
import cl from "./Thead.module.css";

const Thead = () => {
  return (
    <thead className={cl.thead}>
      <tr className={cl}>
        <th className={cl.thead}>№</th>
        <th>Код валюты</th>
        <th>Курс к ₽</th>
        <th>Курс к $</th>
        <th>Курс к €</th>
        <th>Курс к ¥</th>
      </tr>
    </thead>
  );
};

export default Thead;
