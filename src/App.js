import React, {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchCurrency } from './asyncActions/currency';
import Header from './components/header/Header';
import Table from './components/table/Table';
import { getCurrencyAction } from './store/currencyReduser';
function App() {
  const dispatch = useDispatch()
  const currency = useSelector(state => state.currency.currency)

  // useEffect(() => {
  //   dispatch(fetchCurrency())
  // }, [])
  

  const getCurrency = (quotes) => {
    // fetchCurrency()
   const curr = [quotes]
   dispatch(getCurrencyAction(curr))
  }
  

  return (
    <div className="App">
      <Header/>
      <Table/>
       <button onClick={() => getCurrency()}>getCurrency</button>
       <button onClick={() => dispatch(fetchCurrency())}>fetchCurrency</button>
    </div>
  );
}

export default App;
