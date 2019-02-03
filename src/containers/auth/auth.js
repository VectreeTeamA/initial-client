import React, { Component } from "react";
import { connect } from "react-redux";
import { registerUser } from "actions/authAction";
import SimpleForm from "containers/auth/SimpleForm";
import axios from "axios";

class Auth extends Component {
  componentDidMount() {
    this.getUser();
  }

  getUser = async () => {
    const result = await axios.get("api/users");
    console.log(result);
  };

  render() {
    const { result } = this.props.user;

    return <SimpleForm result={result} onSubmit={this.props.registerUser} />;
  }
}

const mapStateToProps = state => {
  return {
    user: state.auth
  };
};

const mapDispatchToProps = {
  registerUser
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Auth);
