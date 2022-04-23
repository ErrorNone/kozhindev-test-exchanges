const defaultState = {
    currency: []
}

const GET_CURRENCY = "GET_CURRENCY"
const UPDATE_CURRENCY = "UPDATE_CURRENCY"

export const currencyReduser = (state = defaultState, action) => {
    switch (action.type) {
        case GET_CURRENCY:
            return {...state, currency:[...state.currency, ...action.payload]}
        case UPDATE_CURRENCY:
            return {...state, currency: state.currency.splice(0, 10, action.payload)}
        default:
            return state
    }
}

export const getCurrencyAction = (payload) => ({type: GET_CURRENCY, payload})
export const updateCurrencyAction = (payload) => ({type: UPDATE_CURRENCY, payload})