import React, { Component } from "react";
import { connect } from "react-redux";
import { registerUser, loginUser } from "../../store/actions/authAction";

class Auth extends Component {
  state = {
    userName: "Polina",
    password: "1234567",
    result: ""
  };

  handleInputChange = e =>
    this.setState({
      [e.target.name]: e.target.value
    });

  register = e => {
    e.preventDefault();

    this.props.registerUser(this.state);
  };

  login = e => {
    e.preventDefault();
    this.props.loginUser(this.state);
  };

  render() {
    return (
      <form className="mt-3">
        <div className="form-group">
          <label htmlFor="userNameInput">User name</label>
          <input
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
            name="password"
            type="password"
            className="form-control"
            placeholder="Password"
            value={this.state.password}
            onChange={this.handleInputChange}
          />
          <small id="userName" className="form-text text-muted">
            {this.props.user.result}
          </small>
        </div>
        <button
          type="button"
          className="btn btn-success mr-2"
          onClick={this.register}
        >
          Register
        </button>
        <button type="button" className="btn btn-light" onClick={this.login}>
          Login
        </button>
      </form>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.auth
  };
};

const mapDispatchToProps = {
  loginUser,
  registerUser
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Auth);
