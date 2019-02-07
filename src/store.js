import { createStore, applyMiddleware, combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import authReducer from "reducers/authReducer";
import thunk from "redux-thunk";

import createHistory from "history/createBrowserHistory";
export const history = createHistory();

const rootReducer = combineReducers({
  auth: authReducer,
  form: formReducer
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
