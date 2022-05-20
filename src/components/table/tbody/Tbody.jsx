import React from "react";
import Tr from "./tr/Tr";

const Tbody = ({showValutes, valutesFilter}) => {

  let fiveValutes = valutesFilter.filter(valute => valute.NumCode < 207)
  
  return (
    <tbody>
      
      { showValutes === true 
        ? valutesFilter.map((valute, index) => {
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
