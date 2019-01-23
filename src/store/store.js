import { createStore, applyMiddleware } from "redux";
import { combineReducers } from "redux";
import authReducer from "./reducers/authReducer";
import thunk from "redux-thunk";

import createHistory from "history/createBrowserHistory";
export const history = createHistory();

const rootReducer = combineReducers({
  auth: authReducer
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
