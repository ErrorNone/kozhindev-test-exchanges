import React, {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchCurrency, timeCurrency } from './asyncActions/currency';
import Header from './components/header/Header';
import Main from './components/main/Main';
import Loader from './UI/loader/Loader';
import './style.scss';

function App() {
  const currency = useSelector((state) => state.currency)
  const currencyNull = Object.keys(currency).length === 0
  const dispatch = useDispatch()
 

  useEffect(() => {
    dispatch(fetchCurrency())
    dispatch(timeCurrency())
  }, [])
  

  return (
    <div className="app">
      <Header/>
   
      { !currencyNull
       ? (<Main/>)
       : <Loader/> 
       }

    </div>
  );
}

export default App;
