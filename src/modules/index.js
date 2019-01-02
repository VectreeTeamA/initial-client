import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";
import counter from "./counter";
import login from "./login";
import register from "./register";

export default combineReducers({
  router: routerReducer,
  counter,
  login,
  register
});
