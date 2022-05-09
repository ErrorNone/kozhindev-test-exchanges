import React from "react";
import { useSelector } from "react-redux";

import cl from "./Tbody.module.css";
import Tr from "./tr/Tr";

const Tbody = () => {
  const currency = useSelector((state) => state.currency);
  let Valutes = Object.entries(currency).map(valute => {
    return(valute[1])
  })
  console.log(Valutes)


  return (
    <tbody>
      {Valutes.map((valute, index) => {
        return (
         <Tr valute={valute} index={index} key={valute.ID}/>
        )
      })
      }
    </tbody>
  );
};

export default Tbody;
