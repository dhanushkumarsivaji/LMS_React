import React, { useState } from "react";
import Datas from "../core/db";
import { Redirect } from "react-router-dom";
import { isAuthenticated } from "../auth/index";

const Signin = () => {
  const [values, setValues] = useState({
    email: "dhanushmech1995@gmail.com",
    password: "12345",

    redirectToReferrer: false,
  });

  const { email, password, redirectToReferrer } = values;
  const { user } = isAuthenticated();

  const handleChange = name => e => {
    setValues({ ...values, [name]: e.target.value });
  };

  const Submit = e => {
    e.preventDefault();
    Datas.json.map(i => {
      if (i.email === email && i.password === password) {
        localStorage.setItem("user", JSON.stringify(i));
        setValues({ ...values, redirectToReferrer: true });
      }
    });
  };

  const SignUpForm = () => (
    <form onSubmit={Submit}>
      <div className="form-group">
        <label>Email address</label>
        <input
          onChange={handleChange("email")}
          type="email"
          value={email}
          className="form-control"
          placeholder="Enter email"
        />
      </div>
      <div className="form-group">
        <label>Password</label>
        <input
          onChange={handleChange("password")}
          type="password"
          value={password}
          className="form-control"
          placeholder="Password"
        />
      </div>
      <button type="submit" className="btn btn-dark">
        Submit
      </button>
    </form>
  );

  const redirectUser = () => {
    if (redirectToReferrer) {
      if (isAuthenticated() && isAuthenticated().role === 1) {
        return <Redirect to="/admin" />;
      } else {
        return <Redirect to="/user" />;
      }
    }
  };

  return (
    <div className="col-md-5 container" style={{ marginTop: "100px" }}>
      {SignUpForm()}
      {redirectUser()}
    </div>
  );
};

export default Signin;
