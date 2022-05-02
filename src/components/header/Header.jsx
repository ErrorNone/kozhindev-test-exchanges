import React from "react";
import { useDispatch } from "react-redux";
import "reset-css";
import { fetchCurrency } from "../../asyncActions/currency";
import cl from "./Header.module.css";

const Header = () => {
  const dispatch = useDispatch()

    
  return (
    <header className={cl.header}>
      <div className={cl.container}>
          <div className={cl.menu}>
            <h1 className={cl.menu__title}>Курсы валют на</h1>
            <span>
            <time className={cl.menu__requestTime}>13:49 22.04.2022</time>
            </span>
            <button className={cl.menu__buttonUpdate} onClick={() => dispatch(fetchCurrency())}>Обновить</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
