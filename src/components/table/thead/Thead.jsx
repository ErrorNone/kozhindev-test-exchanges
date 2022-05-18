import React from "react";
import  "./Thead.scss";

const Thead = () => {
  return (
    <thead>
      <tr>
        <th>№</th>
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
