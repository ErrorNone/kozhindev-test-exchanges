import React, {useEffect, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchCurrency, timeCurrency } from './asyncActions/currency';
import Conversion from './components/conversion/Conversion';
import Header from './components/header/Header';
import Main from './components/main/Main';
import Table from './components/table/Table';
import Loader from './UI/loader/Loader';

function App() {
  const currency = useSelector((state) => state.currency)
  const currencyNull = Object.keys(currency).length === 0
  const dispatch = useDispatch()
 

  useEffect(() => {
    dispatch(fetchCurrency())
    dispatch(timeCurrency())
  }, [])
  
  
  
  

  return (
    <div className="App">
      <Header/>
   
      { !currencyNull
       ? (<Main/>)
       : <Loader/> 
       }

    </div>
  );
}

export default App;
