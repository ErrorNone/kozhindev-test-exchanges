import React, { useState } from "react";
import "reset-css";
import Tbody from "./tbody/Tbody";
import Thead from "./thead/Thead";
import "./Table.scss";
import MyButton from "../../UI/button/MyButton";
import MyInput from '../../UI/input/MyInput'


const Table = () => {
  const [showValutes, setShowValutes] = useState(false);
  const [buttonValue, setButtonValue] = useState("Показать больше валют");
  const [searchValue, setSearchValue] = useState('')

  return (
    <div className="container">
      <h1 className="title">Курсы валют</h1>
      <MyInput 
      className='input input--search'
      placeholder='Поиск валюты'
      />
      <div className="table">
        <div className="table__content">
          <table>
            <Thead />
            <Tbody showValutes={showValutes} searchValue={searchValue} />
          </table>
        </div>
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
