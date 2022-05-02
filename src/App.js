import React, {useEffect, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchCurrency } from './asyncActions/currency';
import Header from './components/header/Header';
import Table from './components/table/Table';
import { getCurrencyAction, USDAEDAction } from './store/currencyReduser';
function App() {
  
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchCurrency())
  }, [])
  
  
  

  return (
    <div className="App">
      <Header/>
      <Table/>
    </div>
  );
}

export default App;
