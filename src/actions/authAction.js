import axios from "axios";

export const loginUser = ({ userName, password }) => async (
  dispatch,
  getState
) => {
  try {
    const result = await axios.post("/api/auth/login", {
      username: userName,
      password
    });

    dispatch({
      type: "LOGIN",
      payload: {
        userName: userName,
        password,
        result: result.data.message
      }
    });
  } catch (error) {
    dispatch({
      type: "LOGIN",
      payload: {
        userName: userName,
        password,
        result: error.message
      }
    });
  }
};

export const registerUser = ({ userName, password }) => async (
  dispatch,
  getState
) => {
  try {
    const result = await axios.post("/api/auth/register", {
      username: userName,
      password
    });

    dispatch({
      type: "REGISTER",
      payload: {
        userName: userName,
        password,
        result: result.data.message
      }
    });
  } catch (error) {
    dispatch({
      type: "REGISTER",
      payload: {
        userName: userName,
        password,
        result: error.message
      }
    });
  }
};
