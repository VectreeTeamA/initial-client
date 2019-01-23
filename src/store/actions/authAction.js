import axios from "axios";

export const loginUser = user => (dispatch, getState) => {
  const { userName, password } = user;

  axios
    .post("/api/auth/login", {
      username: userName,
      password: password
    })
    .then(result => {
      dispatch({
        type: "LOGIN",
        payload: {
          userName: userName,
          password: password,
          result: result.data.message
        }
      });
    })
    .catch(error => console.error(error));
};

export const registerUser = user => (dispatch, getState) => {
  const { userName, password } = user;

  axios
    .post("/api/auth/register", {
      username: userName,
      password: password
    })
    .then(result => {
      dispatch({
        type: "REGISTER",
        payload: {
          userName: userName,
          password: password,
          result: result.data.message
        }
      });
    })
    .catch(error => console.error(error));
};
