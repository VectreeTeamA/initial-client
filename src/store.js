import { createStore } from "redux";
import createHistory from "history/createBrowserHistory";

export const history = createHistory();

const initialState = {
  userName: "",
  password: "",
  result: ""
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN":
      console.log("LOGIN:", action.payload);
      break;
    case "REGISTER":
      console.log("REGISTER:", action.payload);
      break;
    default:
      break;
  }
  return state;
};

const store = createStore(reducer);

export default store;
