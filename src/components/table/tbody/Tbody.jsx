import React from "react";
import cl from "./Tbody.module.css";

const Tbody = () => {
  return (
    <tbody>
      <tr>
        <td className={cl.th}>1</td>
        <td className={cl.th}>RUB</td>
        <td className={cl.th}>12</td>
        <td className={cl.th}>12</td>
        <td className={cl.th}>12</td>
        <td className={cl.th}>12</td>
      </tr>
    </tbody>
  );
};

export default Tbody;
