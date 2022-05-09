import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { currencyReduser } from "./currencyReduser";
import { timeReduser } from "./timeReduser";

const rootReduser = combineReducers({currency: currencyReduser, time: timeReduser})

export const store = createStore(rootReduser, composeWithDevTools(applyMiddleware(thunk)))