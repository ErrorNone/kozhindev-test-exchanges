import React, { useState } from "react";
import { useSelector } from "react-redux";

import Tr from "./tr/Tr";

const Tbody = () => {
  const currency = useSelector((state) => state.currency)
  
  let Valutes = Object.entries(currency).map(valute => {
    return(valute[1])
  })
  let fiveValutes = Valutes.filter(valute => valute.NumCode < 207)
  
  const [showValutes, setShowValutes] = useState(false)
  const [buttonValue, setButtonValue] = useState('Показать больше валют')

  return (
    <tbody>
      { showValutes === true 
        ? Valutes.map((valute, index) => {
          return (
           <Tr valute={valute} index={index} key={valute.ID}/>
          )
        })
        : fiveValutes.map((valute, index) => {
          return (
           <Tr valute={valute} index={index} key={valute.ID}/>
          )
        })
      }
      <button onClick={() => {
        showValutes === true
        ? setShowValutes(false) || setButtonValue('Показать больше валют')
        : setShowValutes(true) || setButtonValue('Показать меньше валют')
        }
        }
        >
          {buttonValue}</button>
    </tbody>
  );
};

export default Tbody;
