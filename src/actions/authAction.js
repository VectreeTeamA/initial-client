import axios from "axios";

export const loginUser = ({ username, password }) => async (
  dispatch,
  getState
) => {
  try {
    const result = await axios.post("/api/auth/login", {
      username,
      password
    });

    dispatch({
      type: "LOGIN",
      payload: {
        username,
        password,
        result: result.data.message
      }
    });
  } catch (error) {
    dispatch({
      type: "LOGIN_ERROR"
    });
  }
};

export const registerUser = ({ username, password }) => async (
  dispatch,
  getState
) => {
  try {
    const result = await axios.post("/api/auth/register", {
      username,
      password
    });

    dispatch({
      type: "REGISTER",
      payload: {
        username,
        password,
        result: result.data.message
      }
    });
  } catch (error) {
    dispatch({
      type: "REGISTER_ERROR"
    });
  }
};
