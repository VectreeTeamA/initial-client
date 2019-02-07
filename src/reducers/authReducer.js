const initialState = {
  username: "",
  password: "",
  result: ""
};

const authReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case "LOGIN":
    case "REGISTER":
      return payload;
    case "LOGIN_ERROR":
    case "REGISTER_ERROR":
    default:
      return state;
  }
};

export default authReducer;
