import { getCurrencyAction, updateCurrencyAction } from "../store/currencyReduser"

export const fetchCurrency = () => {
    return dispatch => {
  fetch('http://api.currencylayer.com/live?access_key=4df2a45fb3ab411dad0cd582c2a21cb0')
      .then(response => response.json())
      .then(data => dispatch(updateCurrencyAction(data)))
    }
}

