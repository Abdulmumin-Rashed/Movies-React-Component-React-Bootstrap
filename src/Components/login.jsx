import React, { Component } from "react";
import { Container, Form, Button } from "react-bootstrap";

class LoginForm extends Component {
  handleSubmit = (e) => {
    e.preventDefault();
    console.log("login");
  };

  render() {
    return (
      <Container
        className="d-flex justify-content-center align-items-center p-4"
        style={{ width: "600px", minHeight: "40vh" }}
      >
        <Form
          onSubmit={this.handleSubmit}
          className="p-5 bg-dark rounded shadow"
        >
          <h2 style={{ color: "orange" }} className="mb-4">
            Login
          </h2>
          <Form.Group className="form-control-lg">
            <Form.Label
              className="form-control-lg float-left"
              style={{ color: "white" }}
              htmlFor="username"
            >
              Username
            </Form.Label>
            <Form.Control
              type="text"
              id="username"
              placeholder="Enter your username"
            />
          </Form.Group>

          <Form.Group className="form-control-lg">
            <Form.Label
              className="form-control-lg float-left"
              style={{ color: "white" }}
              htmlFor="password"
            >
              Password
            </Form.Label>
            <Form.Control
              type="password"
              id="password"
              placeholder="Enter your password"
            />
          </Form.Group>

          <Button className="m-4" variant="primary" type="submit">
            Login
          </Button>
        </Form>
      </Container>
    );
  }
}

export default LoginForm;
