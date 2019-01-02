import React from "react";
import { Button, Form, FormGroup, Label, Input, Alert } from "reactstrap";

class AuthTemplate extends React.Component {
  state = {
    name: "",
    password: ""
  };

  handleChange = e => {
    const { id, value } = e.currentTarget;
    this.setState({
      [id]: value
    });
  };

  handleClick = e => {
    e.preventDefault();
    const { name, password } = this.state;
    this.props.authHandler(name, password);
  };

  render() {
    const { name, password } = this.state;
    return (
      <Form>
        <FormGroup>
          <Label>Name</Label>
          <Input
            id="name"
            onChange={this.handleChange}
            placeholder="name"
            value={name}
          />
        </FormGroup>
        <FormGroup>
          <Label>Password</Label>
          <Input
            id="password"
            onChange={this.handleChange}
            placeholder="password"
            value={password}
          />
        </FormGroup>
        {this.props.isFetching && (
          <Alert color="info">
            {this.props.type} in process, please wait...
          </Alert>
        )}
        {this.props.error && <Alert color="danger">{this.props.message}</Alert>}
        {!this.props.error && !this.props.isFetching && this.props.message && (
          <Alert color="success">{this.props.message}</Alert>
        )}
        <Button onClick={this.handleClick}>{this.props.type}</Button>
      </Form>
    );
  }
}

export default AuthTemplate;
