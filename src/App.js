import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCurrency, timeCurrency } from "./asyncActions/currency";
import Header from "./components/header/Header";
import Main from "./components/main/Main";
import Loader from "./UI/loader/Loader";
import "./App.scss";

function App() {
  const currency = useSelector((state) => state.currency);
  const currencyArr = Object.keys(currency);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    dispatch(fetchCurrency());
    dispatch(timeCurrency());
    setTimeout(() => {
      setLoading(false);
    }, 1000);
    
  }, []);

  return (
    <div className="app">
      <Header />
      {loading && <Loader />}
      {currencyArr.length ? (
        <Main />
      ) : loading ? null : (
        <p className="text-error">
          К сожалению, нам не удалось загрузить данные курсов валют, попробуйте
          обновить страницу, либо вы можете обратиться в службу поддрежки по
          номеру: <a href="tel: 88005553535">8 (800) 555-35-35</a>
        </p>
      )}
    </div>
  );
}

export default App;
