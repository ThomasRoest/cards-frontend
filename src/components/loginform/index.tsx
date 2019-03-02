import React from "react";
// import auth from "../services/authService";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Form = styled.form`
  max-width: 350px;
  border: 1px solid lightblue;
  margin: 0 auto;
  padding: 1rem;
  box-shadow: 0 2px 1px -1px rgba(0, 0, 0, 0.2), 0 1px 1px 0 rgba(0, 0, 0, 0.14),
    0 1px 3px 0 rgba(0, 0, 0, 0.12);
  border-radius: 4px;
  input {
    width: 100%;
  }
`;

class LoginForm extends React.Component {
  // state = {
  //   data: { email: "", password: "" },
  //   errors: {}
  // };

  // handleSubmit = async event => {
  //   const { data } = this.state;
  //   event.preventDefault();
  //   try {
  //     await auth.login(data.email, data.password);
  //     window.location = "/";
  //   } catch (ex) {
  //     if (ex.response && ex.response.status === 400) {
  //       const errors = { ...this.state.errors };
  //       errors.login = ex.response.data;
  //       this.setState({ errors });
  //     }
  //   }
  // };

  // handleChange = e => {
  //   const data = { ...this.state.data };
  //   data[e.target.name] = e.target.value;
  //   this.setState({ data });
  // };

  public render() {
    return (
      <Form>
        <header>
          <h3>Login</h3>
          {/* {this.state.errors.login} */}
        </header>
        <div className="form-group ">
          <label className="form-label">Email</label>
          <input
            // onChange={this.handleChange}
            name="email"
            type="email"
            placeholder="email"
            className="form-input"
          />
        </div>

        <div className="form-group ">
          <label className="form-label">Password</label>
          <input
            // onChange={this.handleChange}
            name="password"
            type="password"
            placeholder="password"
            className="form-input"
          />
        </div>
        <br />
        <div className="form-group form-group-submit">
          <input type="submit" value="login" className="btn btn-primary" />
        </div>

        <div className="create-account">
          <Link to="/register">Create Account</Link>
        </div>
      </Form>
    );
  }
}

export default LoginForm;
