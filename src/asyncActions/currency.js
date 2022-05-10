import {
  updateCurrencyAction,
} from "../store/currencyReduser";
import { timeCurrencyAction } from "../store/timeReduser";

export const fetchCurrency = () => {
  return (dispatch) => {
    fetch("https://www.cbr-xml-daily.ru/daily_json.js")
      .then((response) => response.json())
      .then((data) => dispatch(updateCurrencyAction(data.Valute)))
  };
};

export const timeCurrency = () => {
  return (dispatch) => {
    fetch("https://www.cbr-xml-daily.ru/daily_json.js")
      .then((response) => response.json())
      .then((data) => dispatch(timeCurrencyAction(data.Date))) ;
      
  };
};
