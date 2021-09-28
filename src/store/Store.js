import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { createLogger } from "redux-logger";
import multi from "redux-multi";
import thunkMiddleware from "redux-thunk";

import CategoriesReducer from './categories/CategoriesReducer';

const Reducer = combineReducers({
    categoriesState: CategoriesReducer
});

const loggerMiddleware = createLogger();

export default createStore(Reducer, composeWithDevTools(applyMiddleware(thunkMiddleware, loggerMiddleware, multi)));