import axios from "axios";

export const REGISTER_REQUESTED = "auth/REGISTER_REQUESTED";
export const REGISTER_SUCCESS = "auth/REGISTER_SUCCESS";
export const REGISTER_FAIL = "auth/REGISTER_FAIL";

const initialState = {
  isFetching: false,
  error: false,
  message: ""
};

export default (state = initialState, action) => {
  switch (action.type) {
    case REGISTER_REQUESTED:
      return {
        ...state,
        isFetching: true
      };

    case REGISTER_SUCCESS:
      return {
        ...state,
        message: action.payload,
        error: false,
        isFetching: false
      };

    case REGISTER_FAIL:
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

export const registerHandler = (username, password) => {
  return dispatch => {
    dispatch({
      type: REGISTER_REQUESTED
    });
    try {
      axios
        .post("/api/auth/register", { username, password })
        .then((req, res) => {
          if (!req.data.success) {
            dispatch({
              type: REGISTER_FAIL,
              payload: req.data.message,
              error: true
            });
          } else {
            dispatch({
              type: REGISTER_SUCCESS,
              payload: req.data.message
            });
          }
        })
        .catch(function(error) {
          dispatch({
            type: REGISTER_FAIL,
            payload: error.message,
            error: true
          });
        });
    } catch (e) {
      dispatch({
        type: REGISTER_FAIL,
        payload: new Error(e).message,
        error: true
      });
    }
  };
};
