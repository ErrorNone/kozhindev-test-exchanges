const defaultState = {}

const TIME_CURRENCY = "TIME_CURRENCY"

export const timeReduser = (state = defaultState, action) => {
    switch (action.type) {
       
        case TIME_CURRENCY:
            return {...state, ...action}
        default:
            return state
    }
}


export const timeCurrencyAction = (payload) => ({type: TIME_CURRENCY, payload})

