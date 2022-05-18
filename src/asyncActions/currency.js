import axios from "axios";
import {
  updateCurrencyAction,
} from "../store/currencyReduser";
import { timeCurrencyAction } from "../store/timeReduser";

export  const fetchCurrency = () => {
  return (dispatch) => {
    axios.get("https://www.cbr-xml-daily.ru/daily_json.js")
      .then((response) => dispatch(updateCurrencyAction(response.data.Valute)))
  };
};

export const timeCurrency = () => {
  return  (dispatch) => {
    axios.get("https://www.cbr-xml-daily.ru/daily_json.js")
      .then( (response) => dispatch(timeCurrencyAction(response.data.Date))) ;
  };
};

