const defaultState = {
    currency: []
}

export const currencyReduser = (state = defaultState, action) => {
    switch (action.type) {
        case "GET_CURRENCY":
            return {...state, currency: state.currency + action.payload}
        case "UPDATE_CURRENCY":
            return {...state, currency: state.currency.splice(0, 10, action.payload)}
        default:
            return state
    }
}