import React, {useEffect} from 'react'
import { useDispatch } from 'react-redux';
import { fetchCurrency, timeCurrency } from './asyncActions/currency';
import Conversion from './components/conversion/Conversion';
import Header from './components/header/Header';
import Table from './components/table/Table';

function App() {
  
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchCurrency())
    dispatch(timeCurrency())
  }, [])
  
  
  

  return (
    <div className="App">
      <Header/>
      <Table/>
      <Conversion/>
    </div>
  );
}

export default App;
