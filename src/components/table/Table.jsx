import React, { useEffect, useMemo, useState } from "react";
import "reset-css";
import Tbody from "./tbody/Tbody";
import Thead from "./thead/Thead";
import "./Table.scss";
import MyButton from "../../UI/button/MyButton";
import MyInput from '../../UI/input/MyInput'
import { useSelector } from "react-redux";


const Table = () => {
  const currency = useSelector((state) => state.currency)
  let Valutes = Object.entries(currency).map(valute => {
    return(valute[1])
  })
 

  const [showValutes, setShowValutes] = useState(false);
  const [buttonValue, setButtonValue] = useState("Показать больше валют");
  const [buttonShow, setButtonShow] = useState(true);
  const [searchValue, setSearchValue] = useState('');

  const valutesFilter = useMemo (() => {
    return Valutes.filter(valute => valute.CharCode.includes(searchValue.toUpperCase()))
   }, [Valutes] )

   const showAllValutes = () => {
     if (searchValue.length) {
      setShowValutes(true)
      setButtonShow(false)
     } else {
       setShowValutes(false)
       setButtonShow(true)
     }
   }

   useEffect(() => {
    showAllValutes()
   }, [searchValue])
   
   console.log(valutesFilter.length)
  return (
    <div className="container">
      <MyInput 
      className='input input--search'
      placeholder='Поиск по коду валюты...'
      value={searchValue}
      onChange={e => setSearchValue(e.target.value)}
      />
      <div className="table">
        <div className="table__content">
          { valutesFilter.length !== 0
            ? <table className="table__inner">
                  <Thead />
                  <Tbody showValutes={showValutes} searchValue={searchValue} valutesFilter={valutesFilter}/>
              </table>
            : <p className="table__text-error">По вашему запросу ничего не найдено...</p>  
            }
        </div>
      </div>
      { buttonShow 
        ? <MyButton
          onClick={() => {
            showValutes === true
              ? setShowValutes(false) || setButtonValue("Показать больше валют")
              : setShowValutes(true) || setButtonValue("Показать меньше валют");
          }}
        >
          {buttonValue}
      </MyButton>
        : null
      }
    </div>
  );
};

export default Table;
