import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
// import auth from "../services/authService";

const Form = styled.form`
  max-width: 350px;
  margin: 0 auto;
  padding: 1rem;
  box-shadow: 0 2px 1px -1px rgba(0, 0, 0, 0.2), 0 1px 1px 0 rgba(0, 0, 0, 0.14),
    0 1px 3px 0 rgba(0, 0, 0, 0.12);
  border-radius: 4px;
  input {
    width: 100%;
  }
`;

interface State {
  email: string;
  password: string;
  name: string;
}

class RegisterForm extends React.Component<State> {
  public state = {
    email: "",
    password: "",
    name: ""
  };

  public handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const { name, email, password } = this.state;

    const data = {
      name,
      email,
      password
    };

    try {
      // const response = await userService.register(data);
      // auth.loginWithJwt(response.headers["x-auth-token"]);
      // window.location = "/";
    } catch (ex) {
      // if (ex.response && ex.response.status === 400) {
      //   const errors = { ...this.state.errors };
      //   errors.register = ex.response.data;
      //   this.setState({ errors });
    }
  };

  // handleSubmit = async event => {
  //   event.preventDefault();
  //   try {
  //     const response = await userService.register(this.state.data);
  //     auth.loginWithJwt(response.headers["x-auth-token"]);
  //     window.location = "/";
  //   } catch (ex) {
  //     if (ex.response && ex.response.status === 400) {
  //       const errors = { ...this.state.errors };
  //       errors.register = ex.response.data;
  //       this.setState({ errors });
  //     }
  //   }
  // };

  // private handleSubmit = async (
  //   e: React.FormEvent<HTMLFormElement>
  // ): Promise<void> => {
  //   e.preventDefault();

  //   if (this.validateForm()) {
  //     const submitSuccess: boolean = await this.submitForm();
  //     this.setState({ submitSuccess });
  //   }
  // };

  public handleChange = (event: React.FormEvent<HTMLInputElement>) => {
    const { name, value }: any = event.target;
    this.setState({
      [name]: value
    });
  };

  public render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <header>
          <h3>Register</h3>
          {/* {this.state.errors.register} */}
        </header>
        <div className="form-group ">
          <label className="form-label">name</label>
          <input
            onChange={this.handleChange}
            name="name"
            type="text"
            placeholder="name"
            className="form-input"
            value={this.state.name}
          />
        </div>

        <div className="form-group ">
          <label className="form-label">email</label>
          <input
            onChange={this.handleChange}
            name="email"
            type="email"
            placeholder="email"
            className="form-input"
          />
        </div>

        <div className="form-group ">
          <label className="form-label">password</label>
          <input
            onChange={this.handleChange}
            name="password"
            type="password"
            placeholder="password"
            className="form-input"
          />
        </div>

        <br />

        <div className="form-group form-group-submit">
          <input type="submit" value="register" className="btn btn-primary" />
        </div>

        <div className="create-account">
          <Link to="/login">Login</Link>
        </div>
      </Form>
    );
  }
}

export default RegisterForm;
