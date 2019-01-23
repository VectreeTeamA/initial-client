const initialState = {
  userName: "Anya Bell",
  password: "qwerty",
  result: ""
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN":
    case "REGISTER":
      return action.payload;
    default:
      return state;
  }
};

export default authReducer;
