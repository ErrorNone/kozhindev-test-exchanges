import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchCurrency } from './asyncActions/currency';
import Header from './components/header/Header';
import Table from './components/table/Table';
import { getCurrencyAction } from './store/currencyReduser';
function App() {
  const dispatch = useDispatch()
  const currency = useSelector(state => state.currency.currency)

  

  const getCurrency = (quotes) => {
   const curr = {
     quotes
   }
   dispatch(getCurrencyAction(curr))
  }
  

  return (
    <div className="App">
     
      <Header/>
      <Table/>
       <button onClick={() => getCurrency()}>getCurrency</button>
       <button onClick={() => dispatch(fetchCurrency())}>fetchCurrency</button>
      <div>{currency}</div>
    </div>

  );
}

export default App;
