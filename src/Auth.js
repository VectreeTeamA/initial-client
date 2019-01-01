import React from "react";
import axios from "axios";

export default class Auth extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userName: "",
      password: "",
      result: ""
    };
  }

  register(e) {
    e.preventDefault();
    axios
      .post("/api/auth/register", {
        username: this.state.userName,
        password: this.state.password
      })
      .then(result => {
        this.setState({ result: result.data.message });
      })
      .catch(error => console.error(error));
  }

  login(e) {
    e.preventDefault();
    axios
      .post("/api/auth/login", {
        username: this.state.userName,
        password: this.state.password
      })
      .then(result => {
        this.setState({ result: result.data.message });
      })
      .catch(error => console.error(error));
  }

  userNameChanged = e => {
    this.setState({ userName: e.target.value });
  };

  passwordChanged = e => {
    this.setState({ password: e.target.value });
  };

  render() {
    return (
      <form className="mt-3">
        <div className="form-group">
          <label htmlFor="userNameInput">User name</label>
          <input
            id="userNameInput"
            type="text"
            className="form-control"
            placeholder="Enter username"
            value={this.state.userName}
            onChange={event => this.userNameChanged(event)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="passwordInput">Password</label>
          <input
            id="passwordInput"
            type="password"
            className="form-control"
            placeholder="Password"
            value={this.state.password}
            onChange={event => this.passwordChanged(event)}
          />
          <small id="userName" className="form-text text-muted">
            {this.state.result}
          </small>
        </div>
        <button
          type="button"
          className="btn btn-success mr-2"
          onClick={this.register.bind(this)}
        >
          Register
        </button>
        <button
          type="button"
          className="btn btn-light"
          onClick={this.login.bind(this)}
        >
          Login
        </button>
      </form>
    );
  }
}
