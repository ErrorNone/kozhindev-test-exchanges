import { combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { currencyReduser } from "./currencyReduser";

const rootReduser = combineReducers({currency: currencyReduser})

export const store = createStore(rootReduser, composeWithDevTools())