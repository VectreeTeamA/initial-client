import axios from "axios";

export const loginUser = user => {
  return (dispatch, getState) => {
    axios
      .post("/api/auth/login", {
        username: user.userName,
        password: user.password
      })
      .then(result => {
        dispatch({
          type: "LOGIN",
          payload: {
            userName: user.userName,
            password: user.password,
            result: result.data.message
          }
        });
      })
      .catch(error => console.error(error));
  };
};

export const registerUser = user => {
  return (dispatch, getState) => {
    axios
      .post("/api/auth/register", {
        username: user.userName,
        password: user.password
      })
      .then(result => {
        dispatch({
          type: "REGISTER",
          payload: {
            userName: user.userName,
            password: user.password,
            result: result.data.message
          }
        });
      })
      .catch(error => console.error(error));
  };
};
