import React from "react";
import cl from "./Thead.module.css";

const Thead = () => {
  return (
    <thead>
      <tr>
        <th className={cl.th}>№</th>
        <th className={cl.th}>Код валюты</th>
        <th className={cl.th}>Курс к ₽</th>
        <th className={cl.th}>Курс к $</th>
        <th className={cl.th}>Курс к €</th>
        <th className={cl.th}>Курс к ¥</th>
      </tr>
    </thead>
  );
};

export default Thead;
