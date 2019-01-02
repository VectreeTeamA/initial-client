import React from "react";
import { loginHandler } from "../../../modules/login";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import AuthTemplate from "../AuthTemplate";

const Login = props => {
  const { loginHandler, message, isFetching, error } = props;
  return (
    <AuthTemplate
      type="login"
      authHandler={loginHandler}
      message={message}
      isFetching={isFetching}
      error={error}
    />
  );
};

const mapStateToProps = state => ({
  isFetching: state.login.isFetching,
  error: state.login.error,
  message: state.login.message
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      loginHandler
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
