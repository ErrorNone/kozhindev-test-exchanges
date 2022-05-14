import React, { useState } from "react";
import "reset-css";
import Tbody from "./tbody/Tbody";
import Thead from "./thead/Thead";
import "./Table.scss";
import MyButton from "../../UI/button/MyButton";

const Table = () => {
  const [showValutes, setShowValutes] = useState(false)
  const [buttonValue, setButtonValue] = useState('Показать больше валют')
  return (
    <div className="container">
      <h1 className="title">Курсы валют</h1>
      <div className="table">
        <table className="table__content">
          <div>
            <Thead />
          <Tbody showValutes={showValutes}/>
          </div>
          
        </table>
      </div>
      <MyButton
        onClick={() => {
          showValutes === true
            ? setShowValutes(false) || setButtonValue("Показать больше валют")
            : setShowValutes(true) || setButtonValue("Показать меньше валют");
        }}
      >
        {buttonValue}
      </MyButton>
    </div>
  );
};

export default Table;
