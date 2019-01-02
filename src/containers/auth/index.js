import React from "react";
import { Row, Col } from "reactstrap";
import Login from "./login";
import Register from "./register";

const Auth = props => {
  return (
    <Row>
      <Col>
        <Login />
      </Col>
      <Col>
        <Register />
      </Col>
    </Row>
  );
};

export default Auth;
