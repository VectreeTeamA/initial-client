import React, { Component } from "react";
import { connect } from "react-redux";
import { registerUser } from "actions/authAction";
import SimpleForm from "containers/auth/SimpleForm";

class Auth extends Component {
  render() {
    const { result } = this.props.user;

    return <SimpleForm result={result} onSubmit={this.props.registerUser} />;
  }
}

const mapStateToProps = state => ({
  user: state.auth
});

const mapDispatchToProps = {
  registerUser
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Auth);
