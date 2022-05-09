import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "reset-css";
import { fetchCurrency, timeCurrency } from "../../asyncActions/currency";
import { timeCurrencyAction } from "../../store/currencyReduser";
import cl from "./Header.module.css";

const Header = () => {
  const dispatch = useDispatch()
  const time = useSelector((state) => state.time.payload)
  let myTime = time !== undefined ? time.replace(/T/, ' ') :  ''
  let dataTime = myTime.slice(0, 16)



    
  return (
    <header className={cl.header}>
      <div className={cl.container}>
          <div className={cl.menu}>
            <h1 className={cl.menu__title}>Курсы валют на</h1>
            <span>
            <time className={cl.menu__requestTime}>{dataTime}</time>
           
            </span>
            <button className={cl.menu__buttonUpdate} onClick={() => dispatch(fetchCurrency() && timeCurrency())}>Обновить</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
