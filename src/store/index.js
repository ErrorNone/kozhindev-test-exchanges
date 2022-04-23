import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { currencyReduser } from "./currencyReduser";

const rootReduser = combineReducers({currency: currencyReduser})

export const store = createStore(rootReduser, composeWithDevTools(applyMiddleware(thunk)))