import axios from 'axios';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
function App() {
  const dispatch = useDispatch()
  const currency = useSelector(state => state.currency.currency)

  useEffect(() => {
    fetchCurrency()
  }, [])

  async function fetchCurrency() {
      const response = await axios.get('http://api.currencylayer.com/live?access_key=0f14cd502c274457b410f5020ce68d55')
      getCurrency(response.data);
    }

  const getCurrency = (quotes) => {
   const curr = {
     quotes
   }
   dispatch({type: "GET_CURRENCY", payload: curr})
  }
  

  return (
    <div className="App">
      <div>{currency}</div>
    </div>

  );
}

export default App;
