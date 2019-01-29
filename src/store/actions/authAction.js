import axios from "axios";

export const loginUser = user => async (dispatch, getState) => {
  const { userName, password } = user;

  try {
    const result = await axios.post("/api/auth/login", {
      username: userName,
      password: password
    });

    dispatch({
      type: "LOGIN",
      payload: {
        userName: userName,
        password: password,
        result: result.data.message
      }
    });
  } catch (error) {
    console.error(error);
  }
};

export const registerUser = user => async (dispatch, getState) => {
  const { userName, password } = user;

  try {
    const result = await axios.post("/api/auth/register", {
      username: userName,
      password: password
    });

    dispatch({
      type: "REGISTER",
      payload: {
        userName: userName,
        password: password,
        result: result.data.message
      }
    });
  } catch (error) {
    console.error(error);
  }
};
