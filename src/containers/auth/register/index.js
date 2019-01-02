import React from "react";
import { registerHandler } from "../../../modules/register";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import AuthTemplate from "../AuthTemplate";

const Register = props => {
  const { registerHandler, message, isFetching, error } = props;
  return (
    <AuthTemplate
      type="register"
      authHandler={registerHandler}
      message={message}
      isFetching={isFetching}
      error={error}
    />
  );
};

const mapStateToProps = state => ({
  isFetching: state.register.isFetching,
  error: state.register.error,
  message: state.register.message
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      registerHandler
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Register);
