import React from "react";
import "reset-css";
import Tbody from "./tbody/Tbody";
import Thead from "./thead/Thead";
import  "./Table.scss";

const Table = () => {
  return (
    <div className='container'>
      <h1 className='title'>Курсы валют</h1>
      <table className='table'>
        <Thead/>
        <Tbody/>
      </table>
    </div>
    
  );
};

export default Table;
