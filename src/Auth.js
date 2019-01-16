import React from "react";
import axios from "axios";
import connect from "react-redux/es/connect/connect";

export class Auth extends React.Component {
  state = {
    userName: "",
    password: "",
    result: ""
  };

  handleInputChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    return (
      <form className="mt-3">
        <div className="form-group">
          <label htmlFor="userNameInput">User name</label>
          <input
            id="userNameInput"
            name="userName"
            type="text"
            className="form-control"
            placeholder="Enter username"
            value={this.state.userName}
            onChange={this.handleInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="passwordInput">Password</label>
          <input
            id="passwordInput"
            name="password"
            type="password"
            className="form-control"
            placeholder="Password"
            value={this.state.password}
            onChange={this.handleInputChange}
          />
          <small id="userName" className="form-text text-muted">
            {this.state.result}
          </small>
        </div>
        <button
          type="button"
          className="btn btn-success mr-2"
          onClick={e => {
            this.props.register(e, this.state.userName, this.state.password);
          }}
        >
          Register
        </button>
        <button
          type="button"
          className="btn btn-light"
          onClick={e => {
            this.props.login(e, this.state.userName, this.state.password);
          }}
        >
          Login
        </button>
      </form>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    register: (event, user, password) => {
      event.preventDefault();
      axios
        .post("/api/auth/register", {
          username: user,
          password: password
        })
        .then(result => {
          dispatch({
            type: "REGISTER",
            payload: result.data.message
          });
        })
        .catch(error => console.error(error));
    },

    login: (event, user, password) => {
      event.preventDefault();
      axios
        .post("/api/auth/login", {
          username: user,
          password: password
        })
        .then(result => {
          dispatch({
            type: "LOGIN",
            payload: result.data.message
          });
        })
        .catch(error => console.error(error));
    }
  };
};

export default connect(
  null,
  mapDispatchToProps
)(Auth);
