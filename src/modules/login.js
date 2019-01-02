import axios from "axios";

export const LOGIN_REQUESTED = "auth/LOGIN_REQUESTED";
export const LOGIN_SUCCESS = "auth/LOGIN_SUCCESS";
export const LOGIN_FAIL = "auth/LOGIN_FAIL";

const initialState = {
  isFetching: false,
  error: false,
  message: ""
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_REQUESTED:
      return {
        ...state,
        isFetching: true
      };

    case LOGIN_SUCCESS:
      return {
        ...state,
        message: action.payload,
        error: false,
        isFetching: false
      };

    case LOGIN_FAIL:
      return {
        ...state,
        isFetching: false,
        error: true,
        message: action.payload
      };

    default:
      return state;
  }
};

export const loginHandler = (username, password) => {
  return dispatch => {
    dispatch({
      type: LOGIN_REQUESTED
    });
    try {
      axios
        .post("/api/auth/login", { username, password })
        .then((req, res) => {
          if (!req.data.success) {
            dispatch({
              type: LOGIN_FAIL,
              payload: req.data.message,
              error: true
            });
          } else {
            dispatch({
              type: LOGIN_SUCCESS,
              payload: req.data.message
            });
          }
        })
        .catch(function(error) {
          dispatch({
            type: LOGIN_FAIL,
            payload: error.message,
            error: true
          });
        });
    } catch (e) {
      dispatch({
        type: LOGIN_FAIL,
        payload: new Error(e).message,
        error: true
      });
    }
  };
};
