import React, { Component } from "react";
import { connect } from "react-redux";
import { registerUser } from "../../store/actions/authAction";
import SimpleForm from "./SimpleForm";

class Auth extends Component {
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
