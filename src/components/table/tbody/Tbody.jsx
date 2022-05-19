import React, { useState } from "react";
import { useSelector } from "react-redux";
import Tr from "./tr/Tr";

const Tbody = ({showValutes, searchValue}) => {
  const currency = useSelector((state) => state.currency)
  let Valutes = Object.entries(currency).map(valute => {
    return(valute[1])
  })
  let fiveValutes = Valutes.filter(valute => valute.NumCode < 207)
  let valutesFilter = Valutes.filter(valute => valute.Name === searchValue)

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
  
    </tbody>
  );
};

export default Tbody;
