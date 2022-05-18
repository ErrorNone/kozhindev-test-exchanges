import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "reset-css";
import { fetchCurrency, timeCurrency } from "../../asyncActions/currency";
import  "./Header.scss";

const Header = () => {
  const dispatch = useDispatch()
  const time = useSelector((state) => state.time.payload)
  let myTime = time !== undefined ? time.replace(/T/, ' ') :  ''
  let dataTime = myTime.slice(0, 16)
    
  return (
    <header className='header'>
      <div className='container__header'>
          <div className='menu'>
            <h1 className='menu__title'>Курсы валют</h1>
            <span>
            <time className='menu__requestTime'>{dataTime}</time>
           
            </span>
            <button className='menu__buttonUpdate' onClick={() => dispatch(fetchCurrency() && timeCurrency())}>Обновить</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
