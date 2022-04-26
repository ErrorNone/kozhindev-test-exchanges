import { getCurrencyAction, updateCurrencyAction } from "../store/currencyReduser"

export const fetchCurrency = () => {
    return dispatch => {
  fetch('http://api.currencylayer.com/live?access_key=0f14cd502c274457b410f5020ce68d55')
      .then(response => response.json())
      // .then(data => console.log(data))
      .then(data => dispatch(updateCurrencyAction(data)))
    }
}

